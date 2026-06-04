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
    rows.push(answerRow());
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
    goal: "Understand the end-to-end daily operational rhythm so MAIA can be configured to match it exactly.",
    questions: [
      { num: 1, text: "Walk us through a typical working day — from when the first order arrives to when the last document is issued. What happens, in what order, and who does each step?" },
      { num: 2, text: "When orders come in via WhatsApp, how does the admin know which message is an order versus a general inquiry? Is there a pattern, a dedicated group, or does it require judgement every time?" },
      { num: 3, text: "How does the warehouse team find out what to prepare each day — does admin send a list to them via WhatsApp, a printed sheet, or something else? What time does this happen?" },
      { num: 4, text: "When a customer sends a voice message to order, who listens to it and how is the order captured from it?" },
      { num: 5, text: "What happens when an order comes in after working hours — is it processed first thing the next morning, or does someone handle it the same night?" },
      { num: 6, text: "If a customer modifies their order after it has already been keyed into SQL (e.g., changes quantity or adds an item), who can make that change? What is the process and is there a cutoff time?" },
      { num: 7, text: "Are there ever urgent or skip-the-queue orders — e.g., a loyal customer requests something last minute? How is that handled without disrupting the normal flow?" },
      { num: 8, text: "[MAIA] When MAIA processes an incoming WhatsApp order and prepares a draft Sales Order, who should review and confirm it before it goes into SQL — the same admin, or can a salesperson also confirm?", isMaia: true },
    ]
  },
  {
    title: "Section 2: Fresh Weight Workflow",
    goal: "Map the exact sequence and timing so MAIA can support the workflow without creating duplicate steps.",
    questions: [
      { num: 9, text: "Give us the exact day and time flow for a typical fresh weight order: what time does the customer place the order, when does warehouse prep begin, when is the weight confirmed, and when is the final invoice issued?" },
      { num: 10, text: "After the warehouse weighs and confirms the final weight, how is that weight communicated to admin today — WhatsApp message, a printed slip, verbal, or something else?" },
      { num: 11, text: "Can the price per kg shift between when the order is placed and when the weight is finalized? (e.g., if supplier pricing changes overnight, does it affect this order?)" },
      { num: 12, text: "Who has authority to confirm the final weight as correct before the invoice is issued — warehouse staff self-confirm, or does admin or management sign off?" },
      { num: 13, text: "What is the acceptable rounding unit for weight? (e.g., per 0.1 kg, per 100 g, to the nearest gram?)" },
      { num: 14, text: "Which products are always sold by fixed quantity and never by weight — list them. Which are always weight-based?" },
      { num: 15, text: "What happens if the actual weight is significantly different from what the customer ordered — e.g., customer ordered 10 kg but warehouse can only provide 7 kg? Who decides whether to proceed, substitute, or cancel?" },
      { num: 16, text: "[MAIA] Once the final weight is confirmed and keyed into MAIA, should MAIA automatically generate the Delivery Order and Invoice for review, or wait for an explicit confirm command from admin?", isMaia: true },
    ]
  },
  {
    title: "Section 3: Pricing & Customer Groups",
    goal: "Understand the exact pricing logic so MAIA can apply the right price to the right customer without manual checks.",
    questions: [
      { num: 17, text: "Walk us through how you price an order for a specific customer. What do you check — their customer group, their individual price list, the current market rate, or all three?" },
      { num: 18, text: "Is the group markup applied as a fixed RM amount over the base price, or as a percentage? Is it the same for all product categories or different per category?" },
      { num: 19, text: "For customers with individual special pricing, where is that price stored today — SQL, Excel, or in someone's head? Who maintains it?" },
      { num: 20, text: "When a price changes (e.g., pork belly goes up today), what is the exact process — who decides the new price, who updates it in SQL, and how long does the update take?" },
      { num: 21, text: "For a bulk price change (e.g., all imported beef up 5% this week), how is this done today — manual entry per item in SQL, an Excel upload, or something else?" },
      { num: 22, text: "Which customers are on consignment? For each: what is the settlement cycle (weekly, monthly end?), how is the consignment stock tracked today, and who reconciles it?" },
      { num: 23, text: "What credit terms apply to each customer segment? (e.g., Wholesale = 30 days, Retail = COD, Consignment = end of month — confirm and fill in.)" },
      { num: 24, text: "At what outstanding balance level does Macrofood flag or block a customer — is there a formal RM threshold, or is it a judgment call by the boss or manager?" },
      { num: 25, text: "Does Macrofood ever give ad hoc discounts or markdowns to customers? Who approves the discount, and how is it applied in SQL?" },
      { num: 26, text: "When a new customer is onboarded, how is their pricing decided — assigned to a group, individually negotiated, or starts at standard and adjusted later? Who enters it into SQL?" },
      { num: 27, text: "[MAIA] When MAIA prepares a draft Sales Order, it will reference the customer's assigned price list. Should MAIA flag an alert if the price it is about to use is older than X days? If yes, what is the acceptable age?", isMaia: true },
    ]
  },
  {
    title: "Section 4: Payment & AR",
    goal: "Understand how payments arrive, how they are matched, and what exceptions MAIA needs to handle.",
    questions: [
      { num: 28, text: "Walk us through what happens from the moment a customer sends a payment slip to the moment it is updated in SQL. Who does what, and how long does it typically take?" },
      { num: 29, text: "Payment slips arrive via WhatsApp — what formats do they come in? (Bank app screenshot, photo of physical receipt, PDF, handwritten slip, other?)" },
      { num: 30, text: "How often does the name on the bank transfer differ from the customer name in SQL? (e.g., restaurant owner pays under personal name.) Give examples of the types of mismatches you see." },
      { num: 31, text: "When there is a payer name mismatch, how does admin currently decide which customer the payment belongs to? Is there a reference number, a matching amount, or is it purely by familiarity?" },
      { num: 32, text: "How are partial payments handled — if a customer owes RM5,000 and pays RM2,000, how is this tracked in SQL? Which invoice does it go against?" },
      { num: 33, text: "When a customer's outstanding balance grows beyond the acceptable level, who contacts them — admin, the salesperson, or the MD directly? What is the sequence of escalation steps?" },
      { num: 34, text: "Walk us through how you currently prepare and send a Statement of Account to a customer — is it generated from SQL, exported to Excel, or built manually? How long does it take?" },
      { num: 35, text: "[MAIA] When MAIA finds a payment slip it cannot match with high confidence, it will flag it for manual review instead of auto-posting. Should the flag go to admin only, or also notify the relevant salesperson?", isMaia: true },
    ]
  },
  {
    title: "Section 5: Documents & Delivery",
    goal: "Confirm document formats and delivery confirmation so MAIA generates the right documents first time.",
    questions: [
      { num: 36, text: "What documents does Macrofood currently issue for each order, and in what sequence? (e.g., DO first, then Invoice after delivery?)" },
      { num: 37, text: "Does the driver carry a physical DO for the customer to sign on delivery? Where is the signed copy kept, and how is it filed?" },
      { num: 38, text: "What is your current document numbering format? Does it reset yearly? Is there a prefix per document type? (e.g., INV-2026-0001, DO-2026-0001)" },
      { num: 39, text: "Are documents sent to customers digitally (WhatsApp/email) or printed? Do customers ever request both?" },
      { num: 40, text: "Are there any specific fields or layout requirements on the Invoice or DO that differ from what a standard SQL printout provides?" },
      { num: 41, text: "When a return or rejection happens, who initiates the Credit Note — admin, salesperson, or management? What triggers it (customer complaint, driver report, weight discrepancy)?" },
      { num: 42, text: "[MAIA] When MAIA generates a document, should it be sent directly to the customer via WhatsApp, or should admin review and send manually every time?", isMaia: true },
    ]
  },
  {
    title: "Section 6: Outdoor Sales",
    goal: "Scope the outdoor sales assistant so it solves the right problems without overcomplicating the flow.",
    questions: [
      { num: 43, text: "What does an outdoor salesperson typically ask admin for during the day — prices, availability, customer outstanding, document generation, or something else? Rank by frequency." },
      { num: 44, text: "Do outdoor salespeople ever take new orders on behalf of customers in the field? If yes, how is this communicated back to admin currently?" },
      { num: 45, text: "Are outdoor salespeople using the company WhatsApp Business number or their own personal numbers when dealing with customers?" },
      { num: 46, text: "What is the single biggest time-waster for an outdoor salesperson today that MAIA could fix?" },
      { num: 47, text: "[MAIA] For outdoor salespeople, should MAIA respond directly on their personal WhatsApp, or should they always go through a dedicated company line?", isMaia: true },
    ]
  },
  {
    title: "Section 7: Approval Flows",
    goal: "Define exactly which scenarios need approval so MAIA routes them correctly without over-triggering.",
    questions: [
      { num: 48, text: "What business scenarios feel like they should require a second pair of eyes before proceeding? Think about orders, pricing, credit, and payment exceptions." },
      { num: 49, text: "Is there an RM threshold above which an order automatically requires management sign-off? What is that number?" },
      { num: 50, text: "Who is the approver in each scenario — the MD only, or are there department-level approvers for different types of exceptions?" },
      { num: 51, text: "How quickly does an approval normally need to happen before it starts holding up the order? Minutes? Hours? End of day?" },
      { num: 52, text: "[MAIA] Should MAIA send the approval request to the approver via WhatsApp notification, via the backend dashboard, or both?", isMaia: true },
    ]
  },
  {
    title: "Section 8: Users, Roles & Access",
    goal: "Confirm who uses MAIA and what level of access each role needs.",
    questions: [
      { num: 53, text: "List every staff member who will interact with MAIA, their role (admin / sales / finance / management), and whether they need read-only or full edit access." },
      { num: 54, text: "Who is the main implementation PIC from Macrofood's side — the person who will answer our configuration questions quickly and coordinate internal testing?" },
      { num: 55, text: "Who will do UAT — the same person as the PIC, or a different staff member who represents the day-to-day user?" },
      { num: 56, text: "Is there an internal IT person, or will all SQL vendor coordination go directly through the MAIA team?" },
      { num: 57, text: "[MAIA] Should management have a view-only dashboard showing daily order and payment status, or do they also need to take actions (approve, confirm, flag) from the dashboard?", isMaia: true },
    ]
  },
  {
    title: "Section 9: SQL & Data",
    goal: "Confirm SQL access details and data readiness so integration can start immediately after kickoff.",
    questions: [
      { num: 58, text: "What is the SQL version and edition (SQL PE, SE, EE)? Which modules are active — Sales, AR, Inventory, others?" },
      { num: 59, text: "What is the name and contact of the SQL vendor or reseller? Are they aware we will be integrating?" },
      { num: 60, text: "Can Macrofood export the customer master list from SQL with customer codes, names, contacts, and group assignments? By when?" },
      { num: 61, text: "Can Macrofood export the product/SKU master list from SQL with codes, descriptions, unit of measure, and current pricing? By when?" },
      { num: 62, text: "Do customer nicknames or WhatsApp aliases exist that differ from the SQL customer name? (e.g., WhatsApp says 'Ah Kow' but SQL says 'Restoran XYZ') — can you list the common ones?" },
      { num: 63, text: "[MAIA] For SQL submission, should MAIA write confirmed records directly into SQL in real time, or batch-submit at the end of each day as a file upload?", isMaia: true },
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
