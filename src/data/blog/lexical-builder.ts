// Minimaler Lexical-Builder fuer Payload richText-Seeds
// Wir erzeugen nur die Node-Types die wir fuer Artikel brauchen:
// - paragraph, heading (h2/h3), list (ul/ol), listitem, link (extern), text (mit bold)

type LexNode = Record<string, unknown>

export function text(str: string, format: number = 0): LexNode {
  return {
    type: "text",
    detail: 0,
    format, // 0 = normal, 1 = bold, 2 = italic
    mode: "normal",
    style: "",
    text: str,
    version: 1,
  }
}

export function bold(str: string): LexNode {
  return text(str, 1)
}

export function link(url: string, str: string, newTab = true): LexNode {
  return {
    type: "link",
    format: "",
    indent: 0,
    version: 3,
    direction: "ltr",
    fields: { url, newTab, linkType: "custom" },
    children: [text(str)],
  }
}

export function paragraph(...children: (LexNode | string)[]): LexNode {
  return {
    type: "paragraph",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    textFormat: 0,
    textStyle: "",
    children: children.map((c) => (typeof c === "string" ? text(c) : c)),
  }
}

export function heading(tag: "h2" | "h3", str: string): LexNode {
  return {
    type: "heading",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    tag,
    children: [text(str)],
  }
}

function listitem(children: (LexNode | string)[], value: number): LexNode {
  return {
    type: "listitem",
    format: "",
    indent: 0,
    version: 1,
    value,
    direction: "ltr",
    children: children.map((c) => (typeof c === "string" ? text(c) : c)),
  }
}

export function ul(items: (string | (LexNode | string)[])[]): LexNode {
  return {
    type: "list",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    listType: "bullet",
    start: 1,
    tag: "ul",
    children: items.map((it, i) =>
      listitem(Array.isArray(it) ? it : [text(it)], i + 1)
    ),
  }
}

export function ol(items: (string | (LexNode | string)[])[]): LexNode {
  return {
    type: "list",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    listType: "number",
    start: 1,
    tag: "ol",
    children: items.map((it, i) =>
      listitem(Array.isArray(it) ? it : [text(it)], i + 1)
    ),
  }
}

// Tabelle: rows ist Array von Cell-Arrays. Erste Row wird als Kopfzeile gerendert.
export function table(rows: (LexNode | string)[][]): LexNode {
  return {
    type: "table",
    format: "",
    indent: 0,
    version: 1,
    direction: null,
    children: rows.map((cells, rowIdx) => ({
      type: "tablerow",
      format: "",
      indent: 0,
      version: 1,
      direction: null,
      height: 0,
      children: cells.map((cell) => ({
        type: "tablecell",
        format: "",
        indent: 0,
        version: 1,
        direction: null,
        headerState: rowIdx === 0 ? 1 : 0,
        colSpan: 1,
        rowSpan: 1,
        backgroundColor: null,
        children: [
          {
            type: "paragraph",
            format: "",
            indent: 0,
            version: 1,
            direction: "ltr",
            textFormat: 0,
            textStyle: "",
            children: [typeof cell === "string" ? text(cell) : cell],
          },
        ],
      })),
    })),
  }
}

// Bild-Node: wird via Platzhalter "[[IMG:filename|alt|caption]]" ausgegeben
// und in lexicalToHtml nach der Konvertierung durch <figure>-HTML ersetzt.
export function image(filename: string, alt: string, caption?: string): LexNode {
  const marker = `[[IMG:${filename}|${alt}|${caption || ""}]]`
  return {
    type: "paragraph",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    textFormat: 0,
    textStyle: "",
    children: [text(marker)],
  }
}

// Bloc-Quote fuer Testimonials oder wissenschaftliche Zitate
export function quote(str: string, source?: string): LexNode {
  return {
    type: "quote",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: [
      text(str),
      ...(source ? [text(` — ${source}`, 2)] : []),
    ],
  }
}

// Horizontal Rule als Sektions-Trenner
export function hr(): LexNode {
  return {
    type: "horizontalrule",
    version: 1,
  }
}

export function root(children: LexNode[]): LexNode {
  return {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,
      direction: "ltr",
      children,
    },
  }
}
