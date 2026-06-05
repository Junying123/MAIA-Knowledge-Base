const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, LevelFormat
} = require('docx');
const fs = require('fs');

// Colours
const BLUE_DARK  = "1F3864";
const BLUE_MID   = "2E5DA8";
const BLUE_LIGHT = "D5E8F0";
const GREY_LIGHT = "F2F2F2";
const YELLOW_BG  = "FFF9E6";
const WHITE      = "FFFFFF";
const TEXT_DARK  = "1A1A1A";
const TEXT_MID   = "444444";

// Content width (A4, 2cm margins each side)
// A4 = 11906 DXA wide; 2cm = ~1134 DXA; content = 11906 - 2268 = 9638
const CONTENT_W = 9638;

// Borders helper
const cellBorder = (color = "CCCCCC") => {
  const b = { style: BorderStyle.SINGLE, size: 1, color };
  return { top: b, bottom: b, left: b, right: b };
};

// Thin top-only separator
const topBorder = { top: { style: BorderStyle.SINGLE, size: 4, color: BLUE_MID }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };

function normal(text, opts = {}) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 20, color: opts.color || TEXT_DARK, bold: opts.bold || false, italics: opts.italic || false })]
  });
}

function spacer(pts = 120) {
  return new Paragraph({ spacing: { before: 0, after: pts }, children: [] });
}

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 320, after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE_MID } },
    children: [new TextRun({ text, font: "Arial", size: 28, bold: true, color: BLUE_DARK })]
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 100 },
    children: [new TextRun({ text, font: "Arial", size: 24, bold: true, color: BLUE_MID })]
  });
}

function italicNote(text) {
  return new Paragraph({
    spacing: { before: 40, after: 120 },
    children: [new TextRun({ text, font: "Arial", size: 18, italics: true, color: "666666" })]
  });
}

function questionRow(num, text, hasMaiaFit = false) {
  const bg = hasMaiaFit ? "EEF4FF" : WHITE;
  const numColor = hasMaiaFit ? BLUE_MID : "888888";

  return new TableRow({
    children: [
      new TableCell({
        width: { size: 700, type: WidthType.DXA },
        borders: cellBorder("E0E0E0"),
        shading: { fill: bg, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 80 },
        verticalAlign: VerticalAlign.TOP,
        children: [new Paragraph({
          children: [new TextRun({ text: `${num}.`, font: "Arial", size: 18, bold: true, color: numColor })]
        })]
      }),
      new TableCell({
        width: { size: CONTENT_W - 700, type: WidthType.DXA },
        borders: cellBorder("E0E0E0"),
        shading: { fill: bg, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 100, right: 120 },
        verticalAlign: VerticalAlign.TOP,
        children: [new Paragraph({
          spacing: { before: 0, after: 0 },
          children: [new TextRun({ text, font: "Arial", size: 18, color: TEXT_DARK })]
        })]
      })
    ]
  });
}

function answerRow() {
  return new TableRow({
    height: { value: 700, rule: "atLeast" },
    children: [
      new TableCell({
        width: { size: 700, type: WidthType.DXA },
        borders: cellBorder("E0E0E0"),
        shading: { fill: GREY_LIGHT, type: ShadingType.CLEAR },
        margins: { top: 60, bottom: 60, left: 120, right: 80 },
        children: [new Paragraph({
          children: [new TextRun({ text: "Ans:", font: "Arial", size: 16, color: "999999", italics: true })]
        })]
      }),
      new TableCell({
        width: { size: CONTENT_W - 700, type: WidthType.DXA },
        borders: cellBorder("E0E0E0"),
        shading: { fill: GREY_LIGHT, type: ShadingType.CLEAR },
        margins: { top: 60, bottom: 60, left: 100, right: 120 },
        children: [new Paragraph({ children: [] })]
      })
    ]
  });
}

function sectionTable(questions) {
  // questions: array of { num, text, isMaia }
  const rows = [];
  for (const q of questions) {
    rows.push(questionRow(q.num, q.text, q.isMaia || false));
  }
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [700, CONTENT_W - 700],
    rows
  });
}

// Info box (brand reminder / purpose)
function infoBox(lines, bgColor = YELLOW_BG, borderColor = "E0A800") {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: CONTENT_W, type: WidthType.DXA },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 4, color: borderColor },
              bottom: { style: BorderStyle.SINGLE, size: 4, color: borderColor },
              left: { style: BorderStyle.THICK, size: 12, color: borderColor },
              right: { style: BorderStyle.SINGLE, size: 4, color: borderColor },
            },
            shading: { fill: bgColor, type: ShadingType.CLEAR },
            margins: { top: 120, bottom: 120, left: 200, right: 160 },
            children: lines.map(l => new Paragraph({
              spacing: { before: 40, after: 40 },
              children: [new TextRun({ text: l.text, font: "Arial", size: l.size || 18, bold: l.bold || false, color: l.color || TEXT_DARK })]
            }))
          })
        ]
      })
    ]
  });
}

// Header row for meta table
function metaTable() {
  const cell = (label, value) => [
    new TableCell({
      width: { size: 1400, type: WidthType.DXA },
      borders: { style: BorderStyle.NONE, top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
      shading: { fill: WHITE, type: ShadingType.CLEAR },
      margins: { top: 60, bottom: 60, left: 0, right: 80 },
      children: [new Paragraph({ children: [new TextRun({ text: label, font: "Arial", size: 18, bold: true, color: BLUE_MID })] })]
    }),
    new TableCell({
      width: { size: CONTENT_W / 2 - 1400, type: WidthType.DXA },
      borders: { style: BorderStyle.NONE, top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
      shading: { fill: WHITE, type: ShadingType.CLEAR },
      margins: { top: 60, bottom: 60, left: 80, right: 120 },
      children: [new Paragraph({ children: [new TextRun({ text: value, font: "Arial", size: 18, color: TEXT_DARK })] })]
    })
  ];

  const halfW = Math.floor(CONTENT_W / 2);

  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [1400, halfW - 1400, 1400, CONTENT_W - halfW - 1400],
    rows: [
      new TableRow({
        children: [
          ...cell("Client:", "Macro Frozen Sdn. Bhd. (Macrofood)"),
          ...cell("Meeting:", "4 June 2026, 3pm, Face-to-Face"),
        ]
      }),
      new TableRow({
        children: [
          ...cell("PIC:", "Choy Kien Yang (David), MD"),
          ...cell("Prepared by:", "Gareth"),
        ]
      }),
    ]
  });
}

// ──────────────────────────────────────────
// SECTIONS DATA
// ──────────────────────────────────────────

const sections_data = [
  {
    title: "Section 1: Order Intake & Daily Flow",
    goal: "Pinpoint where orders get lost, delayed, or keyed in wrong — and what each slip costs.",
    questions: [
      { num: 1, text: "What time of day do incoming orders pile up faster than admin can process them? At the peak, how many orders sit waiting, and how long does a customer wait for confirmation?" },
      { num: 2, text: "Tell us about the last order that was missed or processed wrong because it got buried in a WhatsApp group. What happened, and what did it cost — lost sale, angry customer, wrong delivery?" },
      { num: 3, text: "Of every 10 WhatsApp messages admin reads, roughly how many are real orders, how many are inquiries, how many are chatter? How many minutes a day go just to sorting which is which?" },
      { num: 4, text: "When a customer orders by voice message, how often does admin mishear the item or quantity? Give the most recent example where a voice order led to the wrong goods being prepared." },
      { num: 5, text: "What is the latest an order has arrived at night or on a weekend that you still had to deliver the next morning? Who catches those after hours, and what happens on the days nobody does?" },
      { num: 6, text: "When a customer changes an order after it is already keyed in, how often does the original version still get prepared or delivered by mistake? Who ends up taking the blame?" },
      { num: 7, text: "[MAIA] If your main order-processing admin is absent for a day (sick, leave), what breaks? Who covers, and how many orders slip? This tells us the single-person dependency MAIA must reduce.", isMaia: true },
    ]
  },
  {
    title: "Section 2: Fresh Weight Workflow",
    goal: "Nail the exact timing and find where weight or price disputes cost money.",
    questions: [
      { num: 8, text: "From customer order to final invoice on a fresh-weight item, where in that chain do you most often lose time waiting — waiting for the weight, waiting for the price, or waiting for admin to be free?" },
      { num: 9, text: "How often does a customer dispute the final weight or final price after delivery? Tell us about the last dispute and how it was settled — did you eat the loss or did the customer?" },
      { num: 10, text: "Between the time an order is placed and the time goods are weighed, how often does the per-kg price change? When it does, who decides whether the customer pays the old price or the new one?" },
      { num: 11, text: "When the warehouse cannot fulfill the ordered weight (ordered 10 kg, only 7 kg available), how often does this happen? Who calls the customer, and how long does that back-and-forth take before the order moves?" },
      { num: 12, text: "What is the rounding rule on weight today (0.1 kg, 100 g, nearest gram)? Has loose or inconsistent rounding ever caused a margin leak or a customer complaint?" },
      { num: 13, text: "Which items are always fixed-quantity and never weighed, and which are always weight-based? Are there items where staff regularly get this wrong?" },
      { num: 14, text: "How does the warehouse send the confirmed weight to admin today? How often does a weight get transcribed wrong somewhere between the warehouse floor and the final invoice?" },
      { num: 15, text: "[MAIA] Once final weight is confirmed, do you want MAIA to auto-draft the DO and Invoice for one-tap review, or hold until admin explicitly says go? What is the risk if a document is generated too early?", isMaia: true },
    ]
  },
  {
    title: "Section 3: Pricing & Customer Groups",
    goal: "Expose pricing chaos, margin leak, and reliance on staff memory.",
    questions: [
      { num: 16, text: "When admin prices an order, how much of the correct price lives only in someone's head versus written down in SQL or Excel? Whose head holds the most of it?" },
      { num: 17, text: "What is the last time the wrong price was charged to a customer? Was it too low (margin lost) or too high (customer complaint), and how was it eventually caught?" },
      { num: 18, text: "Is the group markup a fixed RM amount or a percentage? Is it the same across pork, beef, lamb, etc., or different per category? Who set these rules, and are they written anywhere?" },
      { num: 19, text: "When a market price moves (e.g., pork belly up today), how long is the lag before the new price actually reaches the invoice? Roughly how many orders go out at the stale price during that lag?" },
      { num: 20, text: "For a bulk price change across many items, how long does it take in SQL today, and how often do errors slip in during the bulk entry?" },
      { num: 21, text: "For consignment customers: which ones, what settlement cycle, and how do you currently know how much unsold stock is sitting with each? How often does the reconciliation not match?" },
      { num: 22, text: "Confirm credit terms per segment (Wholesale, Retail, Consignment). Which specific customers consistently pay later than their agreed terms?" },
      { num: 23, text: "At what outstanding RM do you flag or hold a customer? Is that a written rule or the boss's gut call? When did a customer last blow past it before anyone noticed?" },
      { num: 24, text: "Who is allowed to give ad hoc discounts, and has an unapproved discount ever eaten into your margin? Walk us through the last time it happened." },
      { num: 25, text: "[MAIA] Should MAIA flag or block an order when the price it is about to use is older than X days? What is the acceptable staleness window before a price should be treated as unreliable?", isMaia: true },
    ]
  },
  {
    title: "Section 4: Payment & AR",
    goal: "Go deep on the No.1 stated pain — collecting money. Get the real numbers.",
    questions: [
      { num: 26, text: "Over the last 3 months, how much has gone to bad debt or had to be handed to an outside collector? How many customers did that involve?" },
      { num: 27, text: "Take us to the last payment that was lost or matched to the wrong customer. What caused it — name mismatch, no reference, partial payment, something else?" },
      { num: 28, text: "How often does the payer name on a transfer differ from the customer name in SQL? Give us the 3 most common types of mismatch you see (owner's personal name, related company, etc.)." },
      { num: 29, text: "When the names don't match, how does admin figure out whose payment it is — a reference number, the amount, or pure familiarity? How long does that take per slip?" },
      { num: 30, text: "How are partial payments handled — when a customer owes RM5,000 and pays RM2,000, how is it tracked and against which invoice? Have partials ever been double-counted or lost?" },
      { num: 31, text: "On average, how many days pass between a customer paying and that payment showing as cleared in SQL? Has that lag ever caused a salesperson to chase a customer who had already paid?" },
      { num: 32, text: "How do you build and send a Statement of Account today, and how long does one take? How often do customers dispute what's on it?" },
      { num: 33, text: "Your overdue escalation ladder (WhatsApp, call, letter, collector) — at which step do most bad debts actually get recovered, and roughly how much do you write off in a year?" },
      { num: 34, text: "[MAIA] When MAIA can't match a payment slip with high confidence it will flag it for review. Should that flag go to admin only, or also ping the salesperson who owns that customer?", isMaia: true },
    ]
  },
  {
    title: "Section 5: Documents & Delivery",
    goal: "Find which document causes the most rework and where delivery proof breaks down.",
    questions: [
      { num: 35, text: "Which document in your flow (SO, DO, Invoice, Credit Note) causes the most rework or errors today, and why that one specifically?" },
      { num: 36, text: "For the signed DO on delivery — how often does a signed copy go missing, and has a missing DO ever cost you a payment dispute with a customer?" },
      { num: 37, text: "What is your document numbering format and does it reset yearly? Is there a prefix per document type? Has a numbering gap or duplicate ever caused an audit or SST issue?" },
      { num: 38, text: "Do customers ever claim they never received an invoice or DO? How often, and how do you currently prove that you sent it?" },
      { num: 39, text: "For Credit Notes — what triggers one (return, rejection, weight adjustment, overbilling), who initiates it, and how long from trigger to issued CN? (Note: MAIA cannot issue multiple CNs against one invoice — flag now if you need that.)" },
      { num: 40, text: "[MAIA] When MAIA generates a document, should it auto-send to the customer via WhatsApp, or should admin review and send it manually every time? Where is the risk if it auto-sends?", isMaia: true },
    ]
  },
  {
    title: "Section 6: Outdoor Sales",
    goal: "Scope the field assistant around the salesperson's real daily friction.",
    questions: [
      { num: 41, text: "What does an outdoor salesperson interrupt admin for most during the day — price, stock, customer outstanding, or document generation? Roughly how many calls or messages per salesperson per day?" },
      { num: 42, text: "When a salesperson takes an order in the field, how does it reach admin, and how often does a field order get lost or delayed before it is keyed in?" },
      { num: 43, text: "Are salespeople using the company WhatsApp Business number or their own personal numbers? If a salesperson leaves, do they walk away with the customer chat history and relationship?" },
      { num: 44, text: "What is the single biggest time-waster for an outdoor salesperson today that MAIA could eliminate?" },
      { num: 45, text: "[MAIA] For outdoor sales, should MAIA respond on the salesperson's personal WhatsApp, or only through a dedicated company line? What does each option mean for who owns the customer?", isMaia: true },
    ]
  },
  {
    title: "Section 7: Approval Flows",
    goal: "Define exactly which decisions need a second pair of eyes so MAIA routes them without over-triggering.",
    questions: [
      { num: 46, text: "What is the last decision an admin or salesperson made that you wish had come to you first — a price override, a big credit, a deep discount?" },
      { num: 47, text: "Is there an order value above which you want mandatory sign-off? What RM number, and what has slipped through before without it?" },
      { num: 48, text: "Who is the approver for each type of exception — you only, or department heads? What happens to approvals when you are traveling or unreachable?" },
      { num: 49, text: "How fast does an approval normally need to happen before it starts holding up the order — minutes, hours, or end of day?" },
      { num: 50, text: "[MAIA] Should an approval request reach the approver via WhatsApp notification, via the backend dashboard, or both?", isMaia: true },
    ]
  },
  {
    title: "Section 8: Users, Roles & Access",
    goal: "Confirm who uses MAIA and the access each role needs.",
    questions: [
      { num: 51, text: "List every staff member who will touch MAIA, their role (admin / sales / finance / management), and whether each needs read-only or full edit access." },
      { num: 52, text: "Who is your implementation PIC — the person who will answer our configuration questions quickly and run internal testing?" },
      { num: 53, text: "Who will do UAT — the same person as the PIC, or a real day-to-day user? (A real user surfaces far more issues.)" },
      { num: 54, text: "Is there an internal IT person, or will all SQL vendor coordination run directly through the MAIA team?" },
      { num: 55, text: "[MAIA] Should management get a view-only dashboard of daily order and payment status, or do they also need to approve, confirm, and flag from it?", isMaia: true },
    ]
  },
  {
    title: "Section 9: SQL & Data",
    goal: "Confirm SQL access and data readiness so integration starts the moment kickoff ends.",
    questions: [
      { num: 56, text: "What is the SQL version and edition, and which modules are active (Sales, AR, Inventory)? Any customizations or plugins that could affect integration?" },
      { num: 57, text: "Who is the SQL vendor or reseller (name and contact)? Are they aware we will integrate, and will they cooperate or charge for access?" },
      { num: 58, text: "Can you export the customer master from SQL (codes, names, contacts, group assignments), and by when?" },
      { num: 59, text: "Can you export the product / SKU master from SQL (codes, descriptions, unit of measure, current pricing), and by when?" },
      { num: 60, text: "List the common WhatsApp nicknames or aliases that differ from the SQL customer name (e.g., WhatsApp 'Ah Kow' = SQL 'Restoran XYZ') that admin currently matches from memory." },
      { num: 61, text: "[MAIA] For SQL submission, should MAIA write confirmed records into SQL in real time, or batch-submit at end of day as a file upload? Which does your SQL setup actually allow?", isMaia: true },
    ]
  },
];

// ──────────────────────────────────────────
// SAMPLE DATA CHECKLIST TABLE
// ──────────────────────────────────────────
function checklistTable() {
  const items = [
    "5–10 sample WhatsApp order messages (real or representative text)",
    "Description of a typical voice message order scenario",
    "Sample payment slips from customers (bank transfer screenshots — redact sensitive data)",
    "Sample bank statement format (can redact sensitive info)",
    "Sample Delivery Order (current format used)",
    "Sample Invoice (current format used)",
    "Customer master list export from SQL",
    "Product / SKU master list export from SQL",
    "Existing pricing reference (Excel or SQL export)",
    "Customer group definitions and markup rules (even informal notes are fine)",
    "Approval threshold and approver name list",
  ];

  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [500, CONTENT_W - 500],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 500, type: WidthType.DXA },
            borders: cellBorder(BLUE_MID),
            shading: { fill: BLUE_DARK, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 120, right: 80 },
            children: [new Paragraph({ children: [new TextRun({ text: "#", font: "Arial", size: 18, bold: true, color: WHITE })] })]
          }),
          new TableCell({
            width: { size: CONTENT_W - 500, type: WidthType.DXA },
            borders: cellBorder(BLUE_MID),
            shading: { fill: BLUE_DARK, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 100, right: 120 },
            children: [new Paragraph({ children: [new TextRun({ text: "Item to collect", font: "Arial", size: 18, bold: true, color: WHITE })] })]
          }),
        ]
      }),
      ...items.map((item, i) => new TableRow({
        children: [
          new TableCell({
            width: { size: 500, type: WidthType.DXA },
            borders: cellBorder("E0E0E0"),
            shading: { fill: i % 2 === 0 ? WHITE : GREY_LIGHT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 120, right: 80 },
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ children: [new TextRun({ text: `${i + 1}`, font: "Arial", size: 18, color: "888888" })] })]
          }),
          new TableCell({
            width: { size: CONTENT_W - 500, type: WidthType.DXA },
            borders: cellBorder("E0E0E0"),
            shading: { fill: i % 2 === 0 ? WHITE : GREY_LIGHT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 100, right: 120 },
            children: [new Paragraph({ children: [new TextRun({ text: item, font: "Arial", size: 18, color: TEXT_DARK })] })]
          }),
        ]
      }))
    ]
  });
}

// ──────────────────────────────────────────
// BUILD DOCUMENT
// ──────────────────────────────────────────

const children = [];

// Cover header band (via table)
children.push(new Table({
  width: { size: CONTENT_W, type: WidthType.DXA },
  columnWidths: [CONTENT_W],
  rows: [new TableRow({
    children: [new TableCell({
      width: { size: CONTENT_W, type: WidthType.DXA },
      borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
      shading: { fill: BLUE_DARK, type: ShadingType.CLEAR },
      margins: { top: 240, bottom: 200, left: 280, right: 280 },
      children: [
        new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: "REQUIREMENT GATHERING QUESTIONNAIRE", font: "Arial", size: 26, bold: true, color: WHITE })] }),
        new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: "Macrofood (Macro Frozen Sdn. Bhd.)  |  AutorunBiz PLT", font: "Arial", size: 20, color: "AACCEE" })] }),
      ]
    })]
  })]
}));

children.push(spacer(160));
children.push(metaTable());
children.push(spacer(160));

// Brand reminder box
children.push(infoBox([
  { text: "BRAND REMINDER", bold: true, size: 18, color: "7A4900" },
  { text: "Present as AutorunBiz PLT at all times. Do not mention Mindhive. No Mindhive clothing.", size: 18 },
], YELLOW_BG, "E0A800"));

children.push(spacer(120));

// Purpose box
children.push(infoBox([
  { text: "PURPOSE", bold: true, size: 18, color: "1A4F72" },
  { text: "This is a workflow deep-dive guide for the face-to-face session. Basic facts (SQL version, headcount, order volume, payment methods, go-live date) were collected in the pre-onboarding survey — do not repeat them. Every question here surfaces workflow steps, edge cases, MAIA configuration decisions, or information only obtainable through conversation.", size: 18 },
  { text: "" },
  { text: "PRE-MEETING: Check whether the pre-onboarding survey was returned before walking in. Confirm NDA status at the start of the session.", size: 18, bold: true },
], BLUE_LIGHT, BLUE_MID));

children.push(spacer(200));

// Legend
children.push(new Paragraph({
  spacing: { before: 0, after: 80 },
  children: [
    new TextRun({ text: "Legend:  ", font: "Arial", size: 17, bold: true, color: TEXT_MID }),
    new TextRun({ text: "  ", font: "Arial", size: 17 }),
    new TextRun({ text: "Questions highlighted in blue", font: "Arial", size: 17, color: BLUE_MID, bold: true }),
    new TextRun({ text: " are MAIA configuration decision points — the answer directly affects how MAIA will be configured.", font: "Arial", size: 17, color: TEXT_MID }),
  ]
}));

children.push(spacer(120));

// Sections
for (const sec of sections_data) {
  children.push(heading1(sec.title));
  children.push(italicNote(`Goal: ${sec.goal}`));
  children.push(spacer(80));
  children.push(sectionTable(sec.questions));
  children.push(spacer(160));
}

// Sample data to collect
children.push(heading1("Section 10: Sample Data & Documents to Collect"));
children.push(italicNote("Collect these before or during the meeting. They unblock Weeks 1–2 of implementation."));
children.push(spacer(80));
children.push(checklistTable());
children.push(spacer(200));

// Notes section
children.push(heading1("Session Notes"));
children.push(new Table({
  width: { size: CONTENT_W, type: WidthType.DXA },
  columnWidths: [CONTENT_W],
  rows: Array(12).fill(null).map(() => new TableRow({
    height: { value: 520, rule: "atLeast" },
    children: [new TableCell({
      width: { size: CONTENT_W, type: WidthType.DXA },
      borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
      shading: { fill: WHITE, type: ShadingType.CLEAR },
      margins: { top: 60, bottom: 0, left: 0, right: 0 },
      children: [new Paragraph({ children: [] })]
    })]
  }))
}));

children.push(spacer(200));

// See Also
children.push(heading2("See Also"));
children.push(normal("Ordermaia x Macrofood — signed proposal (15 May 2026, RM40,000)"));
children.push(normal("MacroFood sales proposal and rough requirement gathering — sales transcript"));

// ──────────────────────────────────────────
// DOCUMENT ASSEMBLY
// ──────────────────────────────────────────

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 20, color: TEXT_DARK } }
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: BLUE_DARK },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial", color: BLUE_MID },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 }
      },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },  // A4
        margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 }  // ~2cm
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC" } },
          spacing: { before: 0, after: 120 },
          children: [
            new TextRun({ text: "Macrofood — Requirement Gathering", font: "Arial", size: 16, color: "888888" }),
            new TextRun({ text: "   |   AutorunBiz PLT   |   4 June 2026", font: "Arial", size: 16, color: "AAAAAA" }),
          ]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC" } },
          spacing: { before: 120, after: 0 },
          children: [
            new TextRun({ text: "Page ", font: "Arial", size: 16, color: "888888" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "888888" }),
            new TextRun({ text: " / ", font: "Arial", size: 16, color: "AAAAAA" }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "Arial", size: 16, color: "AAAAAA" }),
          ]
        })]
      })
    },
    children
  }]
});

const outPath = "/Users/garethng/Documents/MAIA Knowledge Base/03 - Clients/Active Cooking Clients/Macrofood/Meetings/Macrofood RG Questionnaire 2026-06-04.docx";
Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(outPath, buf);
  console.log("Written:", outPath);
});
