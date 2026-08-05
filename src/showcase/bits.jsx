import { createContext, useContext, useEffect, useState } from 'react'

export const ShowcaseCtx = createContext({ theme: 'fathom', mode: 'light', setMode: () => {} })
export const useShowcase = () => useContext(ShowcaseCtx)

export function Section({ id, num, title, note, children }) {
  return (
    <section className="sc-section" id={id}>
      <header>
        <span className="num">{num}</span>
        <h2>{title}</h2>
      </header>
      {note && <p className="note">{note}</p>}
      {children}
    </section>
  )
}

export const Sub = ({ children }) => <div className="sc-sub">{children}</div>

/* Reads resolved CSS custom properties off the themed root, re-reading
   on theme/mode change — the CSS token files stay the single source of truth. */
export function useTokens(names) {
  const { theme, mode } = useShowcase()
  const [vals, setVals] = useState({})
  useEffect(() => {
    const el = document.querySelector('.ds')
    if (!el) return
    const cs = getComputedStyle(el)
    const o = {}
    for (const n of names) o[n] = cs.getPropertyValue(n).trim()
    setVals(o)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, mode])
  return vals
}

export function Swatch({ name, varName, value }) {
  return (
    <div className="sc-swatch">
      <div className="chip" style={{ background: `var(${varName})` }} />
      <div className="nm">{name}</div>
      <div className="hx">{value || varName}</div>
    </div>
  )
}

/* --- tiny SVG viz primitives (gauge / ring / sparkline) --- */
export function Gauge({ value, color, track, text }) {
  const r = 54
  const circ = Math.PI * r
  const arc = 'M 16 70 A 54 54 0 0 1 124 70'
  return (
    <svg width="140" height="86" viewBox="0 0 140 86" role="img" aria-label={`Gauge ${value}%`}>
      <path d={arc} fill="none" stroke={track} strokeWidth="12" strokeLinecap="round" />
      <path d={arc} fill="none" stroke={color} strokeWidth="12" strokeLinecap="round"
        strokeDasharray={`${(circ * value) / 100} ${circ}`} />
      <text x="70" y="64" textAnchor="middle" fontSize="21" fontWeight="700" fill={text}>{value}%</text>
      <text x="70" y="80" textAnchor="middle" fontSize="10" fill={text} opacity="0.55">of target</text>
    </svg>
  )
}

export function Ring({ value, size = 74, stroke = 8, color, track, text, label }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <svg width={size} height={size} role="img" aria-label={`Progress ${value}%`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={`${(c * value) / 100} ${c}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x="50%" y="50%" dy="5" textAnchor="middle" fontSize="15" fontWeight="700" fill={text}>
        {label ?? `${value}%`}
      </text>
    </svg>
  )
}

export function Spark({ data, color, w = 96, h = 26, fill = false }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const pts = data.map((v, i) =>
    `${(i * (w - 4)) / (data.length - 1) + 2},${h - 3 - ((v - min) / (max - min || 1)) * (h - 6)}`,
  )
  return (
    <svg width={w} height={h} className="ds-sparkline" aria-hidden="true">
      {fill && <polygon points={`2,${h - 1} ${pts.join(' ')} ${w - 2},${h - 1}`} fill={color} opacity="0.12" />}
      <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}
