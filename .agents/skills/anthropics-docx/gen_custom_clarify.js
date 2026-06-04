const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber
} = require('docx');
const fs = require('fs');

// Colours
const BLUE_DARK  = "1F3864";
const BLUE_MID   = "2E5DA8";
const BLUE_LIGHT = "D5E8F0";
const GREY_LIGHT = "F2F2F2";
const GREEN_BG   = "E8F4EA";
const GREEN_BD   = "3C8C4E";
const YELLOW_BG  = "FFF9E6";
const WHITE      = "FFFFFF";
const TEXT_DARK  = "1A1A1A";
const TEXT_MID   = "444444";

const CONTENT_W = 9638; // A4, ~2cm margins

const cellBorder = (color = "CCCCCC") => {
  const b = { style: BorderStyle.SINGLE, size: 1, color };
  return { top: b, bottom: b, left: b, right: b };
};

function spacer(pts = 120) {
  return new Paragraph({ spacing: { before: 0, after: pts }, children: [] });
}

function normal(text) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 20, color: TEXT_DARK })]
  });
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

// Generic boxed callout
function box(lines, bgColor, borderColor) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: CONTENT_W, type: WidthType.DXA },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 4, color: borderColor },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: borderColor },
          left: { style: BorderStyle.THICK, size: 14, color: borderColor },
          right: { style: BorderStyle.SINGLE, size: 4, color: borderColor },
        },
        shading: { fill: bgColor, type: ShadingType.CLEAR },
        margins: { top: 120, bottom: 120, left: 200, right: 160 },
        children: lines.map(l => new Paragraph({
          spacing: { before: 30, after: 30 },
          bullet: l.bullet ? { level: 0 } : undefined,
          children: [new TextRun({ text: l.text, font: "Arial", size: l.size || 18, bold: l.bold || false, italics: l.italic || false, color: l.color || TEXT_DARK })]
        }))
      })]
    })]
  });
}

function intentBox(buildText, constraintText) {
  const lines = [
    { text: "WHAT WE'RE BUILDING", bold: true, size: 17, color: "1A4F72" },
    { text: buildText, size: 18 },
  ];
  if (constraintText) {
    lines.push({ text: "" });
    lines.push({ text: "CONSTRAINT / PRODUCT RULE", bold: true, size: 17, color: "7A4900" });
    lines.push({ text: constraintText, size: 18, italic: true });
  }
  return box(lines, BLUE_LIGHT, BLUE_MID);
}

function questionRow(num, text, isKey = false) {
  const bg = isKey ? "EEF4FF" : WHITE;
  const numColor = isKey ? BLUE_MID : "888888";
  return new TableRow({
    children: [
      new TableCell({
        width: { size: 700, type: WidthType.DXA },
        borders: cellBorder("E0E0E0"),
        shading: { fill: bg, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 80 },
        verticalAlign: VerticalAlign.TOP,
        children: [new Paragraph({ children: [new TextRun({ text: `${num}.`, font: "Arial", size: 18, bold: true, color: numColor })] })]
      }),
      new TableCell({
        width: { size: CONTENT_W - 700, type: WidthType.DXA },
        borders: cellBorder("E0E0E0"),
        shading: { fill: bg, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 100, right: 120 },
        verticalAlign: VerticalAlign.TOP,
        children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: "Arial", size: 18, color: TEXT_DARK })] })]
      })
    ]
  });
}

function sectionTable(questions) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [700, CONTENT_W - 700],
    rows: questions.map(q => questionRow(q.num, q.text, q.key || false))
  });
}

// ──────────────────────────────────────────
// DATA
// ──────────────────────────────────────────

const sections = [
  {
    title: "5.3  AR — Payment Slip & Bank Statement Processing",
    build: "An AR Support Workflow that reads payment slips and bank statement records, extracts payer name / amount / date / reference, suggests invoice and customer matches, flags unclear payer-customer mismatches, and lets the user choose the correct customer/company before the payment is posted.",
    constraint: "Macrofood follows MAIA's existing AR / payment workflow as far as possible. We do NOT heavily customize AR around their current manual process unless separately approved. This is a support workflow, not a fully autonomous finance system.",
    questions: [
      { num: 1, text: "What formats do payment slips arrive in — bank app screenshot, photo of a physical receipt, PDF, handwritten slip? Please share 5–10 real samples (sensitive data redacted)." },
      { num: 2, text: "Bank statements — which bank(s), and in what format do you receive them (PDF download, CSV export, printed scan)? Please share one sample." },
      { num: 3, text: "How many bank accounts receive customer payments? Should MAIA handle all of them, or start with one main account?" },
      { num: 4, text: "Today, who reconciles bank statements against invoices, and how long does it take per day or per week?" },
      { num: 5, text: "When MAIA suggests an invoice/customer match, who confirms it — admin or finance? Should finance always be the final approver before posting?" },
      { num: 6, text: "After a payer-name mismatch is resolved and the user picks the right customer, should MAIA remember that alias for next time, or ask every time? (Note: automatic alias mapping without user confirmation is excluded — please confirm that is acceptable.)", key: true },
      { num: 7, text: "Do you want MAIA to post the confirmed payment directly into SQL, or only produce a matched list for finance to key in?", key: true },
      { num: 8, text: "Partial payments and overpayments — should MAIA attempt allocation across multiple invoices, or simply flag these for manual handling?" },
      { num: 9, text: "What counts as done for this workflow — payment matched and flagged, or fully posted with a receipt issued?" },
      { num: 10, text: "Confirm: you accept MAIA's standard AR matching flow rather than a custom rebuild of your current manual reconciliation process.", key: true },
    ]
  },
  {
    title: "5.4  Warehouse Stock Entry (GRN-based)",
    build: "A fast, guided, confirmation-based stock entry flow. Preferred: the warehouse user photographs the GRN and MAIA reads it to create/update the stock entry. Fallback: a simple WhatsApp guided key-in. Goal — keep inventory current so order entry is never blocked by stale stock.",
    constraint: "The warehouse user is non-technical and works fast/rough. This flow must be extremely simple, heavily guided, and confirmation-based. Minimal typing, big clear confirm steps.",
    questions: [
      { num: 11, text: "Do you have a standard GRN document? Please share 3–5 samples. Is it printed, handwritten, or supplier-issued (and does the format vary per supplier)?" },
      { num: 12, text: "What fields on the GRN must MAIA read — item, quantity, weight, batch, supplier, date? Which are essential vs nice-to-have?" },
      { num: 13, text: "Are GRN items already matched to your SQL item codes, or does the warehouse have to map supplier item names to your SKUs each time?", key: true },
      { num: 14, text: "How does stock get into SQL today, who does it, and where does the process usually get stuck or delayed?" },
      { num: 15, text: "Does insufficient stock actually block order entry in SQL today (a hard block), or is it just a warning? Confirm the exact behavior.", key: true },
      { num: 16, text: "Should MAIA update stock directly in SQL, or maintain a separate stock count that admin references?", key: true },
      { num: 17, text: "How often does stock need updating — on every incoming delivery, a daily count, or real-time throughout the day?" },
      { num: 18, text: "Confirm the design: photo-first with a simple confirm step, fallback to guided WhatsApp prompts. Any literacy or language constraints for the warehouse user (BM / Mandarin / English)?", key: true },
      { num: 19, text: "Do you weigh incoming stock as well (fresh weight in), or is the GRN quantity enough for stock entry?" },
      { num: 20, text: "When a stock entry is wrong, who corrects it, and how should MAIA let them make that correction?" },
    ]
  },
  {
    title: "5.5  Price Update Assistant (Bulk Price Changes)",
    build: "A structured price-update flow. Macrofood bulk-updates item prices using a MAIA-provided template, removing reliance on memory and scattered WhatsApp messages. The latest uploaded prices then feed Sales Orders, invoices, outdoor sales queries, and the catalogue.",
    constraint: null,
    questions: [
      { num: 21, text: "How many items are in your price list, and how do they break down by category (pork, beef, lamb, etc.)?" },
      { num: 22, text: "How are prices structured — a single base price per item, a per-customer-group price, or both?", key: true },
      { num: 23, text: "What does your current price reference look like (Excel / SQL export)? Please share a sample so we can shape the template around it." },
      { num: 24, text: "When you update prices, is it usually a few items or the whole list? How often — daily, weekly, irregular?" },
      { num: 25, text: "Should the MAIA template be the master input for prices, or does SQL stay the master and the template just feeds into it?", key: true },
      { num: 26, text: "After a bulk update, where must the new price flow — Sales Order drafts, invoices, outdoor sales queries, the catalogue image? Confirm every target." },
      { num: 27, text: "Do you want an effective-date on price changes (e.g., price valid from a future date), or should prices apply immediately on upload?" },
      { num: 28, text: "Who is allowed to upload a price update — admin only, or does it need boss approval first?" },
      { num: 29, text: "Should MAIA keep a price history (what changed, when, and by whom)?" },
    ]
  },
  {
    title: "5.6  Product Update Assistant (Catalogue Image Generation)",
    build: "A catalogue-style image output the team can forward to customers. MAIA uses a fixed template and only updates text fields, item names, prices, stock status, and product details each time, reusing supplied product images. It does NOT redesign a new image each time. The team reviews each image before sending.",
    constraint: "This was committed during the sales conversation to close the deal. Keep it as standardized as possible — fixed template, consistent layout, no full redesign per run, manual review before send (no auto-blast). The clarifications below are mandatory before we can scope this.",
    questions: [
      { num: 30, text: "Will you provide the catalogue/image template design, or do you want us to propose a standard one? (We strongly prefer one fixed template.)", key: true },
      { num: 31, text: "What product fields must appear per item — name, price, unit, stock status, packing (carton/box), promo tag, others? List the required ones.", key: true },
      { num: 32, text: "Do you have product photos? For how many SKUs? Who supplies and maintains them, and what should appear for items with no photo?", key: true },
      { num: 33, text: "One image per send, multiple images, or a multi-page PDF catalogue? Roughly how many items per image?", key: true },
      { num: 34, text: "Is the output purely for WhatsApp forwarding to customer groups? Any size/dimension preference (square, portrait)?", key: true },
      { num: 35, text: "Brand/layout requirements — logo, colors, fonts, contact footer, company branding? Please share any brand assets. (Reminder: present as AutorunBiz PLT, not Mindhive.)", key: true },
      { num: 36, text: "Should the catalogue pull live stock status and the latest price automatically (from the stock and price modules), or are these specified manually each time?" },
      { num: 37, text: "Confirm the flow: MAIA generates the image, your team reviews it, then your team manually forwards it. No automatic sending into customer groups. Acceptable?", key: true },
      { num: 38, text: "How often will you generate these — a daily price/stock update, or ad hoc for promotions?" },
      { num: 39, text: "Do different customer groups need different catalogues (showing different prices), or one catalogue for everyone?", key: true },
    ]
  },
];

// ──────────────────────────────────────────
// BUILD
// ──────────────────────────────────────────

const children = [];

// Cover band
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
        new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: "CUSTOMIZATION CLARIFICATION QUESTIONNAIRE", font: "Arial", size: 24, bold: true, color: WHITE })] }),
        new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: "Macrofood (Macro Frozen Sdn. Bhd.)  |  AutorunBiz PLT  |  4 June 2026", font: "Arial", size: 19, color: "AACCEE" })] }),
      ]
    })]
  })]
}));

children.push(spacer(160));

// Purpose
children.push(box([
  { text: "PURPOSE", bold: true, size: 18, color: "1A4F72" },
  { text: "This questionnaire scopes the four customization modules quoted for Macrofood: AR / Payment Processing, Warehouse Stock Entry, Price Update Assistant, and Product Update (Catalogue). Each section states what we intend to build and the product constraints, then asks the questions needed to lock the scope.", size: 18 },
  { text: "" },
  { text: "Questions highlighted in blue are scope-defining or commitment confirmations — get a clear answer on these before implementation.", size: 18, bold: true, color: BLUE_MID },
], BLUE_LIGHT, BLUE_MID));

children.push(spacer(120));

children.push(box([
  { text: "BRAND REMINDER", bold: true, size: 18, color: "7A4900" },
  { text: "Present as AutorunBiz PLT at all times. Do not mention Mindhive. No Mindhive clothing.", size: 18 },
], YELLOW_BG, "E0A800"));

children.push(spacer(160));

for (const sec of sections) {
  children.push(heading1(sec.title));
  children.push(intentBox(sec.build, sec.constraint));
  children.push(spacer(120));
  children.push(heading2("Questions to Clarify"));
  children.push(sectionTable(sec.questions));
  children.push(spacer(160));
}

// Notes
children.push(heading1("Session Notes"));
children.push(new Table({
  width: { size: CONTENT_W, type: WidthType.DXA },
  columnWidths: [CONTENT_W],
  rows: Array(10).fill(null).map(() => new TableRow({
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
children.push(heading2("See Also"));
children.push(normal("Macrofood RG Questionnaire 2026-06-04 — workflow deep-dive questionnaire"));
children.push(normal("Ordermaia x Macrofood Proposal — signed proposal (15 May 2026)"));

// ──────────────────────────────────────────
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 20, color: TEXT_DARK } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: BLUE_DARK },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial", color: BLUE_MID },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } },
    ]
  },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC" } },
        spacing: { before: 0, after: 120 },
        children: [
          new TextRun({ text: "Macrofood — Customization Clarification", font: "Arial", size: 16, color: "888888" }),
          new TextRun({ text: "   |   AutorunBiz PLT   |   4 June 2026", font: "Arial", size: 16, color: "AAAAAA" }),
        ]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        border: { top: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC" } },
        spacing: { before: 120, after: 0 },
        children: [
          new TextRun({ text: "Page ", font: "Arial", size: 16, color: "888888" }),
          new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "888888" }),
          new TextRun({ text: " / ", font: "Arial", size: 16, color: "AAAAAA" }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "Arial", size: 16, color: "AAAAAA" }),
        ]
      })] })
    },
    children
  }]
});

const outPath = "/Users/garethng/Documents/MAIA Knowledge Base/03 - Clients/Active Cooking Clients/Macrofood/Meetings/Macrofood Customization Clarification Questionnaire 2026-06-04.docx";
Packer.toBuffer(doc).then(buf => { fs.writeFileSync(outPath, buf); console.log("Written:", outPath); });
