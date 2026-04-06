"use client";
import { useState } from "react";
import { MODULES, Slide, SlideContent } from "./data";

const NAVY = "#0A1628";
const BLUE = "#0023DC";

export default function Home() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const mod = MODULES[activeModule];
  const slide = mod.slides[activeSlide];

  function goSlide(idx: number) {
    setActiveSlide(Math.max(0, Math.min(mod.slides.length - 1, idx)));
  }
  function goModule(idx: number) {
    setActiveModule(idx);
    setActiveSlide(0);
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#F1F5F9" }}>
      {/* Sidebar */}
      <aside style={{ width: 260, background: NAVY, display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, background: BLUE, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 18 }}>R</div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, lineHeight: 1.2 }}>RIVIA</div>
              <div style={{ color: "#64748B", fontSize: 10, lineHeight: 1.2 }}>Formation ADS</div>
            </div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: "8px 0" }}>
          {MODULES.map((m, mi) => (
            <div key={m.id}>
              <button
                onClick={() => goModule(mi)}
                style={{
                  width: "100%", textAlign: "left", padding: "10px 16px",
                  background: activeModule === mi ? "rgba(0,35,220,0.25)" : "transparent",
                  border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
                  borderLeft: activeModule === mi ? `3px solid ${BLUE}` : "3px solid transparent",
                  transition: "all 0.15s",
                }}
              >
                <span style={{ width: 24, height: 24, borderRadius: 4, background: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#fff", flexShrink: 0 }}>
                  {String(m.num).padStart(2, "0")}
                </span>
                <div>
                  <div style={{ color: activeModule === mi ? "#fff" : "#94A3B8", fontSize: 11, fontWeight: 600, lineHeight: 1.3 }}>{m.title}</div>
                  <div style={{ color: "#475569", fontSize: 9, lineHeight: 1.2 }}>{m.slides.length} slides</div>
                </div>
              </button>

              {activeModule === mi && (
                <div style={{ paddingLeft: 16, paddingBottom: 4 }}>
                  {m.slides.map((s, si) => (
                    <button
                      key={s.id}
                      onClick={() => goSlide(si)}
                      style={{
                        width: "100%", textAlign: "left", padding: "6px 8px 6px 12px",
                        background: activeSlide === si ? "rgba(255,255,255,0.06)" : "transparent",
                        border: "none", cursor: "pointer", borderRadius: 4, display: "flex", alignItems: "center", gap: 8,
                      }}
                    >
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: activeSlide === si ? BLUE : "#1E3A5F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                        {si + 1}
                      </span>
                      <span style={{ color: activeSlide === si ? "#E2E8F0" : "#64748B", fontSize: 10, lineHeight: 1.3 }}>{s.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", padding: "0 24px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ background: mod.color, color: "#fff", fontSize: 9, fontWeight: 800, padding: "3px 8px", borderRadius: 4 }}>MODULE {String(mod.num).padStart(2, "0")}</span>
            <span style={{ color: "#1E293B", fontWeight: 600, fontSize: 13 }}>{mod.title}</span>
            <span style={{ color: "#94A3B8", fontSize: 12 }}>— {slide.title}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => goSlide(activeSlide - 1)} disabled={activeSlide === 0}
              style={{ padding: "6px 14px", background: activeSlide === 0 ? "#F1F5F9" : NAVY, color: activeSlide === 0 ? "#94A3B8" : "#fff", border: "none", borderRadius: 6, cursor: activeSlide === 0 ? "default" : "pointer", fontSize: 12, fontWeight: 600 }}>
              ← Préc
            </button>
            <span style={{ fontSize: 11, color: "#64748B", minWidth: 48, textAlign: "center" }}>{activeSlide + 1} / {mod.slides.length}</span>
            <button onClick={() => goSlide(activeSlide + 1)} disabled={activeSlide === mod.slides.length - 1}
              style={{ padding: "6px 14px", background: activeSlide === mod.slides.length - 1 ? "#F1F5F9" : BLUE, color: activeSlide === mod.slides.length - 1 ? "#94A3B8" : "#fff", border: "none", borderRadius: 6, cursor: activeSlide === mod.slides.length - 1 ? "default" : "pointer", fontSize: 12, fontWeight: 600 }}>
              Suiv →
            </button>
          </div>
        </div>

        {/* Slide content */}
        <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
          <SlideView slide={slide} modColor={mod.color} modNum={mod.num} />
        </div>
      </main>
    </div>
  );
}

function SlideView({ slide, modColor, modNum }: { slide: Slide; modColor: string; modNum: number }) {
  const c = slide.content;
  switch (slide.type) {
    case "title": return <TitleSlide title={slide.title} content={c} color={modColor} modNum={modNum} />;
    case "hooks": return <HooksSlide title={slide.title} content={c} />;
    case "comparison": return <ComparisonSlide title={slide.title} content={c} />;
    case "errors": return <ErrorsSlide title={slide.title} content={c} />;
    case "content": return <ContentSlide title={slide.title} content={c} />;
    case "checklist": return <ChecklistSlide title={slide.title} content={c} modColor={modColor} />;
    case "prompt": return <PromptSlide title={slide.title} content={c} />;
    case "before-after": return <BeforeAfterSlide title={slide.title} content={c} />;
    default: return null;
  }
}

function TitleSlide({ title, content: c, color, modNum }: { title: string; content: SlideContent; color: string; modNum: number }) {
  return (
    <div>
      <div style={{ background: NAVY, borderRadius: 12, padding: "32px 32px 24px", marginBottom: 16 }}>
        <div style={{ background: color, display: "inline-block", padding: "4px 12px", borderRadius: 6, fontSize: 10, fontWeight: 800, color: "#fff", marginBottom: 16 }}>MODULE {String(modNum).padStart(2, "0")}</div>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 800, margin: "0 0 8px", lineHeight: 1.2 }}>{title}</h1>
        <p style={{ color: "#93C5FD", fontSize: 14, margin: "0 0 20px" }}>{c.subtitle}</p>
        <div style={{ background: "rgba(0,35,220,0.25)", border: "1px solid rgba(0,35,220,0.4)", borderRadius: 8, padding: "14px 18px" }}>
          <span style={{ color: BLUE, fontSize: 20, marginRight: 8 }}>"</span>
          <span style={{ color: "#CBD5E1", fontSize: 13, fontStyle: "italic" }}>{c.quote}</span>
        </div>
      </div>

      {c.stats && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 16 }}>
          {c.stats.map((s, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "16px 14px", textAlign: "center", border: "1px solid #E2E8F0" }}>
              <div style={{ color: BLUE, fontSize: 22, fontWeight: 800, lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ color: "#64748B", fontSize: 10, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {c.items && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {c.items.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "14px 16px", border: "1px solid #E2E8F0", display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ background: BLUE, color: "#fff", fontSize: 10, fontWeight: 800, padding: "4px 8px", borderRadius: 6, flexShrink: 0 }}>{item.num}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#1E293B", marginBottom: 3 }}>{item.title}</div>
                <div style={{ color: "#64748B", fontSize: 11 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function HooksSlide({ title, content: c }: { title: string; content: SlideContent }) {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1E293B", marginBottom: 16, marginTop: 0 }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {c.hooks?.map((h, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden" }}>
            <div style={{ borderLeft: `4px solid ${h.accentColor}`, padding: "16px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ background: NAVY, color: "#fff", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 4 }}>{h.num}</span>
                <span style={{ background: h.typeBg, color: h.typeColor, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 4 }}>{h.type}</span>
                <span style={{ color: "#94A3B8", fontSize: 10, marginLeft: "auto" }}>{h.src}</span>
              </div>
              <p style={{ color: "#1E293B", fontSize: 14, fontWeight: 600, margin: "0 0 10px", lineHeight: 1.5, fontStyle: "italic" }}>{h.text}</p>
              <p style={{ color: "#475569", fontSize: 12, margin: "0 0 8px", lineHeight: 1.5 }}>{h.mechanism}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <span style={{ background: "#F1F5F9", color: "#475569", fontSize: 10, padding: "3px 8px", borderRadius: 4 }}>{h.target}</span>
                <span style={{ background: `${h.accentColor}18`, color: h.accentColor, fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>→ {h.rule}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonSlide({ title, content: c }: { title: string; content: SlideContent }) {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1E293B", marginBottom: 16, marginTop: 0 }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div style={{ background: "#FEF2F2", borderRadius: 8, padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: 12, color: "#DC2626" }}>{c.badLabel}</div>
        <div style={{ background: "#ECFDF5", borderRadius: 8, padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: 12, color: "#059669" }}>{c.goodLabel}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {c.comparison?.map((row, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            <div style={{ background: i % 2 === 0 ? "#fff" : "#FFF8F8", borderRadius: 8, padding: "12px 14px", borderLeft: "3px solid #DC2626" }}>
              <span style={{ color: "#991B1B", fontSize: 12, fontStyle: "italic" }}>{row.bad}</span>
            </div>
            <div style={{ background: i % 2 === 0 ? "#fff" : "#F0FDF4", borderRadius: 8, padding: "12px 14px", borderLeft: "3px solid #059669" }}>
              <span style={{ color: "#065F46", fontSize: 12, fontWeight: 600 }}>{row.good}</span>
            </div>
          </div>
        ))}
      </div>
      {(c.summaryBad || c.summaryGood) && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
          {c.summaryBad && <div style={{ background: "#FEF2F2", borderRadius: 8, padding: "10px 14px", fontSize: 11, color: "#991B1B" }}>{c.summaryBad}</div>}
          {c.summaryGood && <div style={{ background: "#ECFDF5", borderRadius: 8, padding: "10px 14px", fontSize: 11, color: "#065F46", fontWeight: 600 }}>{c.summaryGood}</div>}
        </div>
      )}
    </div>
  );
}

function ErrorsSlide({ title, content: c }: { title: string; content: SlideContent }) {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1E293B", marginBottom: 16, marginTop: 0 }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 14 }}>
        {c.errors?.map((err, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px 18px", borderLeft: `4px solid ${err.labelColor}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ background: err.labelColor + "18", color: err.labelColor, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4 }}>{err.label}</span>
              {err.title && <span style={{ color: "#1E293B", fontSize: 12, fontWeight: 600 }}>{err.title}</span>}
            </div>
            {err.pills && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                {err.pills.map((p, j) => (
                  <span key={j} style={{ background: "#FEF2F2", color: "#DC2626", fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 20 }}>{p}</span>
                ))}
              </div>
            )}
            {err.text && <p style={{ color: "#475569", fontSize: 12, margin: "0 0 6px", lineHeight: 1.5 }}>{err.text}</p>}
            {err.alt && <p style={{ color: "#059669", fontSize: 11, margin: 0, fontWeight: 500 }}>{err.alt}</p>}
            {err.scripts && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ color: "#64748B", fontSize: 11 }}>{err.scripts}</span>
                {err.scriptBadge && <span style={{ background: err.scriptBadgeBg, color: "#fff", fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 4 }}>{err.scriptBadge}</span>}
              </div>
            )}
            {err.scriptHook && (
              <div style={{ background: NAVY, borderRadius: 8, padding: "10px 14px", marginBottom: err.scriptBody || err.scriptNote ? 6 : 0 }}>
                <code style={{ color: "#93C5FD", fontSize: 12, fontStyle: "italic" }}>{err.scriptHook}</code>
              </div>
            )}
            {err.scriptBody && <p style={{ color: "#DC2626", fontSize: 12, margin: "6px 0 0", fontWeight: 600 }}>{err.scriptBody}</p>}
            {err.scriptNote && <p style={{ color: "#059669", fontSize: 11, margin: "6px 0 0", fontWeight: 500 }}>{err.scriptNote}</p>}
          </div>
        ))}
      </div>
      {c.rulesTitle && (
        <div style={{ background: NAVY, borderRadius: 12, padding: "16px 18px" }}>
          <div style={{ color: "#93C5FD", fontSize: 12, fontWeight: 700, marginBottom: 10 }}>{c.rulesTitle}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {c.rules?.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ color: BLUE, fontWeight: 800, fontSize: 14, lineHeight: 1, flexShrink: 0 }}>→</span>
                <span style={{ color: "#CBD5E1", fontSize: 11, lineHeight: 1.4 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ContentSlide({ title, content: c }: { title: string; content: SlideContent }) {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1E293B", marginBottom: 4, marginTop: 0 }}>{title}</h2>
      {c.intro && <p style={{ color: "#64748B", fontSize: 13, marginBottom: 16, fontStyle: "italic" }}>{c.intro}</p>}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {c.sections?.map((sec, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden" }}>
            <div style={{ background: sec.color, padding: "10px 16px" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>{sec.title}</span>
            </div>
            {sec.cards.map((card, j) => (
              <div key={j} style={{ padding: "14px 18px" }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#1E293B", marginBottom: 8 }}>{card.title}</div>
                <div style={{ color: "#475569", fontSize: 12, lineHeight: 1.6, whiteSpace: "pre-line" }}>{card.body}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChecklistSlide({ title, content: c, modColor }: { title: string; content: SlideContent; modColor: string }) {
  const [checked, setChecked] = useState<boolean[]>((c.checklist || []).map(() => false));

  function toggle(i: number) {
    setChecked(prev => prev.map((v, idx) => idx === i ? !v : v));
  }

  const done = checked.filter(Boolean).length;
  const total = c.checklist?.length || 0;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1E293B", margin: 0 }}>{title}</h2>
        <div style={{ background: done === total ? "#ECFDF5" : "#F1F5F9", borderRadius: 20, padding: "4px 14px" }}>
          <span style={{ color: done === total ? "#059669" : "#64748B", fontSize: 12, fontWeight: 700 }}>{done}/{total} {done === total ? "✓" : ""}</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {c.checklist?.map((item, i) => (
          <button key={i} onClick={() => toggle(i)} style={{
            background: checked[i] ? "#ECFDF5" : "#fff",
            border: `1px solid ${checked[i] ? "#059669" : "#E2E8F0"}`,
            borderRadius: 10, padding: "12px 14px",
            display: "flex", alignItems: "flex-start", gap: 10,
            cursor: "pointer", textAlign: "left", transition: "all 0.15s",
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: 5, flexShrink: 0, marginTop: 1,
              background: checked[i] ? "#059669" : "#F1F5F9",
              border: `2px solid ${checked[i] ? "#059669" : "#CBD5E1"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {checked[i] && <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            </div>
            <span style={{ color: checked[i] ? "#065F46" : "#1E293B", fontSize: 12, fontWeight: checked[i] ? 600 : 400, lineHeight: 1.4 }}>{item}</span>
          </button>
        ))}
      </div>
      {done === total && total > 0 && (
        <div style={{ marginTop: 14, background: "#ECFDF5", border: "1px solid #059669", borderRadius: 10, padding: "12px 18px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20 }}>✓</span>
          <span style={{ color: "#065F46", fontWeight: 700, fontSize: 13 }}>Checklist complète — tu peux passer à la suite.</span>
        </div>
      )}
    </div>
  );
}

function BeforeAfterSlide({ title, content: c }: { title: string; content: SlideContent }) {
  const ba = c.beforeAfter;
  if (!ba) return null;
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1E293B", marginBottom: 16, marginTop: 0 }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {/* BAD */}
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #FECACA" }}>
          <div style={{ background: "#DC2626", padding: "10px 16px" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>{ba.beforeLabel}</span>
          </div>
          <div style={{ background: "#FFF5F5", padding: "14px 16px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
              {ba.beforeErrors.map((e, i) => (
                <span key={i} style={{ background: "#FEE2E2", color: "#991B1B", fontSize: 10, padding: "3px 8px", borderRadius: 4, display: "block", width: "100%", lineHeight: 1.4 }}>✗ {e}</span>
              ))}
            </div>
            <div style={{ background: NAVY, borderRadius: 8, padding: "14px 16px" }}>
              <pre style={{ color: "#94A3B8", fontSize: 12, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{ba.beforeScript}</pre>
            </div>
          </div>
        </div>
        {/* GOOD */}
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #A7F3D0" }}>
          <div style={{ background: "#059669", padding: "10px 16px" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>{ba.afterLabel}</span>
          </div>
          <div style={{ background: "#F0FDF4", padding: "14px 16px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
              {ba.afterWins.map((w, i) => (
                <span key={i} style={{ background: "#D1FAE5", color: "#065F46", fontSize: 10, padding: "3px 8px", borderRadius: 4, display: "block", width: "100%", lineHeight: 1.4 }}>✓ {w}</span>
              ))}
            </div>
            <div style={{ background: NAVY, borderRadius: 8, padding: "14px 16px" }}>
              <pre style={{ color: "#E2E8F0", fontSize: 12, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap", fontFamily: "monospace", fontWeight: 500 }}>{ba.afterScript}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromptSlide({ title, content: c }: { title: string; content: SlideContent }) {
  const [copied, setCopied] = useState(false);

  function copyPrompt() {
    const text = c.prompt?.lines.map(l => l.text).join("\n") || "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1E293B", margin: 0 }}>{title}</h2>
        <button onClick={copyPrompt} style={{
          background: copied ? "#059669" : BLUE, color: "#fff", border: "none",
          borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer",
        }}>
          {copied ? "✓ Copié !" : "Copier le prompt"}
        </button>
      </div>
      {c.prompt?.target && (
        <div style={{ background: BLUE + "18", border: `1px solid ${BLUE}40`, borderRadius: 8, padding: "8px 14px", marginBottom: 12, display: "inline-block" }}>
          <span style={{ color: BLUE, fontSize: 11, fontWeight: 700 }}>CIBLE : {c.prompt.target}</span>
        </div>
      )}
      <div style={{ background: NAVY, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ background: "#0F1F3A", padding: "8px 16px", display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#DC2626", display: "block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#EA580C", display: "block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#059669", display: "block" }} />
          <span style={{ color: "#64748B", fontSize: 11, marginLeft: 8 }}>prompt.txt</span>
        </div>
        <div style={{ padding: "20px 22px" }}>
          {c.prompt?.lines.map((line, i) => (
            line.text
              ? <div key={i} style={{ color: line.color || "#CBD5E1", fontSize: 13, lineHeight: 1.7, fontFamily: "monospace" }}>{line.text}</div>
              : <div key={i} style={{ height: 8 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
