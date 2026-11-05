// MatStudio kodu için CodeMirror editörü. Hatalı satır kırmızı zeminle
// işaretlenir; Ctrl+Enter (ya da F5) kodu çalıştırır.

import { useEffect, useRef } from "react";
import { EditorView, keymap, lineNumbers, highlightActiveLine, drawSelection, Decoration, type DecorationSet } from "@codemirror/view";
import { EditorState, Prec, StateEffect, StateField, RangeSet } from "@codemirror/state";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { StreamLanguage, indentUnit, syntaxHighlighting, bracketMatching } from "@codemirror/language";
import { classHighlighter } from "@lezer/highlight";
import { octave } from "@codemirror/legacy-modes/mode/octave";

export interface EditorMark {
  line: number;
  severity: "error" | "warning";
}

const setMarks = StateEffect.define<EditorMark[]>();

const marksField = StateField.define<DecorationSet>({
  create: () => Decoration.none,
  update(deco, tr) {
    deco = deco.map(tr.changes);
    for (const e of tr.effects) {
      if (!e.is(setMarks)) continue;
      const ranges = e.value
        .filter((m) => m.line >= 1 && m.line <= tr.state.doc.lines)
        .sort((a, b) => a.line - b.line)
        .map((m) => Decoration.line({ class: `cm-mark-${m.severity}` }).range(tr.state.doc.line(m.line).from));
      deco = RangeSet.of(ranges, true);
    }
    return deco;
  },
  provide: (f) => EditorView.decorations.from(f),
});

interface Props {
  value: string;
  onChange?: (text: string) => void;
  marks?: EditorMark[];
  gotoLine?: { line: number; nonce: number };
  readOnly?: boolean;
  onRun?: () => void;
  etiket?: string;
}

export function MatlabEditor({ value, onChange, marks = [], gotoLine, readOnly = false, onRun, etiket = "MatStudio kodu" }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const view = useRef<EditorView | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const onRunRef = useRef(onRun);
  onRunRef.current = onRun;

  useEffect(() => {
    const calistir = () => {
      if (!onRunRef.current) return false;
      onRunRef.current();
      return true;
    };
    view.current = new EditorView({
      parent: host.current!,
      state: EditorState.create({
        doc: value,
        extensions: [
          lineNumbers(),
          history(),
          drawSelection(),
          highlightActiveLine(),
          bracketMatching(),
          indentUnit.of("    "),
          StreamLanguage.define(octave),
          syntaxHighlighting(classHighlighter),
          Prec.highest(keymap.of([{ key: "Mod-Enter", run: calistir }, { key: "F5", run: calistir }])),
          keymap.of([indentWithTab, ...defaultKeymap, ...historyKeymap]),
          marksField,
          EditorState.readOnly.of(readOnly),
          EditorView.contentAttributes.of({ "aria-label": etiket }),
          EditorView.updateListener.of((u) => {
            if (u.docChanged) onChangeRef.current?.(u.state.doc.toString());
          }),
        ],
      }),
    });
    return () => view.current?.destroy();
    // Editör bir kez kurulur; dışarıdan gelen değer aşağıda eşitlenir
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readOnly]);

  useEffect(() => {
    const v = view.current;
    if (v && v.state.doc.toString() !== value) v.dispatch({ changes: { from: 0, to: v.state.doc.length, insert: value } });
  }, [value]);

  useEffect(() => {
    view.current?.dispatch({ effects: setMarks.of(marks) });
  }, [marks]);

  useEffect(() => {
    const v = view.current;
    if (!v || !gotoLine || gotoLine.line < 1 || gotoLine.line > v.state.doc.lines) return;
    const pos = v.state.doc.line(gotoLine.line).from;
    v.dispatch({ selection: { anchor: pos }, effects: EditorView.scrollIntoView(pos, { y: "center" }) });
    v.focus();
  }, [gotoLine]);

  return <div className="matlab-editor" ref={host} />;
}
