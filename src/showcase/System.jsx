import { Section, Sub, Spark, useTokens } from './bits.jsx'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import {
  Loader2, LayoutDashboard, Ship, Users, ShoppingCart, Wrench, BarChart3, Settings, Search, Bell, Plus,
  Anchor, ChevronDown, MoreHorizontal, CheckCircle2, AlertTriangle, FileText, Fuel, TrendingUp, TrendingDown, Filter, Download,
} from 'lucide-react'
import { fuelTrend } from '../data.js'

/* ---------------- 22. Spacing & Layout ---------------- */
export function SpacingSection() {
  return (
    <Section id="s22" num="22" title="Spacing & Layout" note="Everything sits on a 4px grid. Cards pad 16, forms gap 14, pages pad 24–36. Density is a feature: compact by default, never cramped.">
      <Sub>4px scale</Sub>
      <div style={{ display: 'grid', gap: 6, maxWidth: 460 }}>
        {[4, 8, 12, 16, 24, 32, 48].map((s) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="t-caption" style={{ width: 66, fontFamily: 'var(--ds-font-mono)' }}>space-{s}</span>
            <div className="sc-space-bar" style={{ width: s * 4 }} />
            <span className="t-caption">{s}px</span>
          </div>
        ))}
      </div>
      <Sub>12-column grid</Sub>
      <div className="sc-grid-demo" style={{ marginBottom: 8 }}>
        {Array.from({ length: 12 }, (_, i) => <div key={i}>{i + 1}</div>)}
      </div>
      <div className="sc-grid-demo">
        <div style={{ gridColumn: 'span 3' }}>span 3 — KPI</div>
        <div style={{ gridColumn: 'span 3' }}>span 3 — KPI</div>
        <div style={{ gridColumn: 'span 6' }}>span 6 — chart</div>
        <div style={{ gridColumn: 'span 8' }}>span 8 — table</div>
        <div style={{ gridColumn: 'span 4' }}>span 4 — activity</div>
      </div>
      <Sub>Breakpoints</Sub>
      <div className="sc-row" style={{ gap: 8 }}>
        {[['sm', '640', 'phone — single column, drawers become sheets'], ['md', '768', 'tablet — sidebar collapses to rail'], ['lg', '1024', 'laptop — full sidebar, 2-col forms'], ['xl', '1280', 'desktop — dashboard grid'], ['2xl', '1536', 'ops room — denser tables, more columns']].map(([n, px, d]) => (
          <div key={n} className="ds-panel" style={{ padding: '10px 14px', flex: 1, minWidth: 150 }}>
            <div style={{ fontWeight: 700, fontFamily: 'var(--ds-font-mono)', fontSize: 12.5 }}>{n} · ≥{px}px</div>
            <div className="t-caption" style={{ marginTop: 3 }}>{d}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- 23. Shadows ---------------- */
export function ShadowsSection() {
  return (
    <Section id="s23" num="23" title="Shadows & Elevation" note="Five steps. Resting cards use small; overlays escalate. Dark themes lean on borders and lighter surfaces more than shadow.">
      <div className="sc-grid3">
        {[['None — flat, inline panels', 'none'], ['Small — resting cards', 'var(--ds-shadow-sm)'], ['Medium — raised cards, popovers', 'var(--ds-shadow-md)'], ['Large — dropdown menus', 'var(--ds-shadow-lg)'], ['Floating — toasts, palettes', 'var(--ds-shadow-floating)'], ['Modal — dialogs, drawers', 'var(--ds-shadow-modal)']].map(([n, s]) => (
          <div key={n} className="sc-shadow-tile" style={{ boxShadow: s === 'none' ? 'none' : s }}>{n}</div>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- 24. Border Radius ---------------- */
export function RadiusSection() {
  const t = useTokens(['--ds-radius-sm', '--ds-radius-md', '--ds-radius-lg'])
  return (
    <Section id="s24" num="24" title="Border Radius" note="Radius is themed — this theme's tokens are shown below. Pill is reserved for chips, badges and avatars.">
      <div className="sc-row" style={{ gap: 16 }}>
        {[['Sharp', '0px'], ['Small', t['--ds-radius-sm'] || '6px'], ['Medium', t['--ds-radius-md'] || '8px'], ['Large', t['--ds-radius-lg'] || '12px'], ['Pill', '999px']].map(([n, r]) => (
          <div key={n} style={{ width: 130 }}>
            <div className="sc-radius-tile" style={{ borderRadius: r === '999px' ? 999 : r }}>{r}</div>
            <div className="t-caption" style={{ textAlign: 'center', marginTop: 5 }}>{n}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- 25. Animations ---------------- */
export function AnimationsSection() {
  return (
    <Section id="s25" num="25" title="Animations" note="Fast and physical: 120–150ms for hover/press, 200–250ms ease-out for drawers and modals. Motion is reduced to opacity-only under prefers-reduced-motion.">
      <div className="sc-grid3">
        <div className="ds-panel sc-anim-tile">
          <div className="ds-panel sc-hover-demo" style={{ padding: '14px 22px', cursor: 'pointer' }}>Hover me</div>
          <p>Hover — 150ms lift + shadow step</p>
        </div>
        <div className="ds-panel sc-anim-tile">
          <button className="ds-btn primary">Press &amp; hold</button>
          <p>Press — scale 0.97, 80ms</p>
        </div>
        <div className="ds-panel sc-anim-tile">
          <div className="sc-drawer-demo"><div /></div>
          <p>Drawer — slide-in, 250ms ease-out</p>
        </div>
        <div className="ds-panel sc-anim-tile">
          <div className="sc-modal-demo"><div /></div>
          <p>Modal — fade + scale from 0.94</p>
        </div>
        <div className="ds-panel sc-anim-tile">
          <Loader2 size={22} className="ds-spin" style={{ color: 'var(--ds-accent)' }} />
          <p>Loading — 900ms linear spin</p>
        </div>
        <div className="ds-panel sc-anim-tile">
          <div style={{ width: '100%', display: 'grid', gap: 7 }}>
            <div className="ds-skeleton" style={{ height: 11, width: '70%' }} />
            <div className="ds-skeleton" style={{ height: 11 }} />
            <div className="ds-skeleton" style={{ height: 11, width: '45%' }} />
          </div>
          <p>Skeleton — 1.4s shimmer sweep</p>
        </div>
      </div>
    </Section>
  )
}

/* ---------------- 26. Dashboard Preview ---------------- */
const DASH_NAV = [
  [LayoutDashboard, 'Dashboard', true], [Ship, 'Fleet'], [Anchor, 'Voyages'], [Users, 'Crew'],
  [ShoppingCart, 'Purchasing', false, '4'], [Wrench, 'Maintenance', false, '7'], [BarChart3, 'Reports'], [Settings, 'Settings'],
]
const DASH_ROWS = [
  ['MV Nordwind', 'Santos → Qingdao', '12 Aug', 'A', 'success', 'At Sea', 'success'],
  ['MV Coral Trader', 'Singapore, berth 12', '—', 'B', 'success', 'In Port', 'info'],
  ['MT Aegean Star', 'Rotterdam → Houston', '18 Aug', 'C', 'warning', 'At Sea', 'success'],
  ['MV Baltic Rose', 'Off Paradip', '06 Aug', 'B', 'success', 'Anchorage', 'warning'],
  ['MV Monsoon Glory', 'Dry dock — Zhoushan', '24 Aug', 'D', 'error', 'Dry Dock', 'error'],
]
const ACTIVITY = [
  [CheckCircle2, 'var(--ds-success)', 'NR-1284 approved', 'MV Nordwind · 9:12'],
  [AlertTriangle, 'var(--ds-warning)', 'FuelRob variance flagged', 'MT Aegean Star · 6:04'],
  [FileText, 'var(--ds-info)', 'BDN uploaded', 'MV Baltic Rose · 5:48'],
  [Fuel, 'var(--ds-text-3)', 'Bunkering completed, 850 MT', 'MV Baltic Rose · 5:30'],
]

function DashTip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: 'var(--ds-surface)', border: '1px solid var(--ds-border)', borderRadius: 'var(--ds-radius-md)', boxShadow: 'var(--ds-shadow-floating)', padding: '7px 11px', fontSize: 11.5 }}>
      <div style={{ fontWeight: 600, marginBottom: 3 }}>{label}</div>
      {payload.map((p) => <div key={p.dataKey} style={{ color: 'var(--ds-text-2)' }}>{p.name}: <b style={{ color: 'var(--ds-text)' }}>{p.value} MT</b></div>)}
    </div>
  )
}

export function DashboardSection() {
  const t = useTokens(['--ds-chart-1', '--ds-chart-3', '--ds-chart-grid', '--ds-text-3'])
  const c1 = t['--ds-chart-1'] || '#2a78d6'
  const c3 = t['--ds-chart-3'] || '#1baf7a'
  const grid = t['--ds-chart-grid'] || '#e9eef2'
  const tick = { fill: t['--ds-text-3'] || '#8093a7', fontSize: 10, fontFamily: 'inherit' }
  return (
    <Section id="s26" num="26" title="Dashboard Preview" note="Everything above, assembled: the fleet dashboard a superintendent opens every morning. Built exclusively from the components and tokens in this document.">
      <div className="sc-dash">
        <aside className="sc-dash-side">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 13.5, padding: '2px 8px 12px' }}>
            <span className="ds-logo-mark"><Anchor size={13} /></span> Ecosail
          </div>
          {DASH_NAV.map(([Icon, label, active, badge]) => (
            <div key={label} className={`ds-nav-item ${active ? 'active' : ''}`} style={{ fontSize: 12.5, padding: '6px 10px' }}>
              <Icon size={15} strokeWidth={1.75} />{label}
              {badge && <span className="ds-badge error badge" style={{ fontSize: 10.5, padding: '1px 7px' }}>{badge}</span>}
            </div>
          ))}
          <div style={{ marginTop: 'auto', padding: 8 }}>
            <div className="ds-conn syncing" style={{ fontSize: 11 }}><span className="dot" />Hub sync · 148 behind</div>
          </div>
        </aside>
        <div className="sc-dash-main">
          <header className="sc-dash-header">
            <span style={{ fontWeight: 700, fontSize: 14 }}>Fleet Dashboard</span>
            <div className="ds-crumbs" style={{ fontSize: 11.5 }}><span>04 Aug 2026 · 09:32 UTC</span></div>
            <div style={{ flex: 1 }} />
            <div className="ds-searchbox" style={{ width: 210 }}><Search size={13} /><input placeholder="Search…" readOnly /><span className="kbd-hint">⌘K</span></div>
            <button className="ds-btn primary sm"><Plus size={13} />New Report</button>
            <button className="ds-iconbtn" aria-label="Notifications"><Bell size={15} /><span className="ds-notif-dot" /></button>
            <button className="ds-iconbtn" style={{ width: 'auto', gap: 6, padding: '0 6px' }}>
              <span className="ds-avatar sm">SN</span><ChevronDown size={13} />
            </button>
          </header>
          <div className="sc-dash-body">
            <div className="sc-dash-kpis">
              {[
                ['Vessels Reporting', '18', ['up', '+2', 'vs Q2'], [15, 16, 16, 17, 18, 18], c3],
                ['Noon Reports Today', '16', ['flat', '2', 'pending approval'], [14, 16, 15, 16, 17, 16], c1],
                ['Fleet CII', 'B', ['up', 'A−', 'trajectory'], [4.8, 4.7, 4.5, 4.5, 4.4, 4.3], c3],
                ['ETS Exposure YTD', '€412k', ['down', '+€38k', 'vs July'], [38, 42, 51, 47, 55, 60], c1],
              ].map(([lbl, val, [dir, d, rest], spark, sc]) => (
                <div key={lbl} className="ds-panel ds-kpi">
                  <div className="lbl">{lbl}</div>
                  <div className="sc-row" style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                    <div className="val">{val}</div>
                    <Spark data={spark} color={sc} w={72} h={24} fill />
                  </div>
                  <div className="sub">
                    <span className={`ds-trend ${dir}`}>{dir === 'up' ? <TrendingUp size={12} /> : dir === 'down' ? <TrendingDown size={12} /> : null}{d}</span> {rest}
                  </div>
                </div>
              ))}
            </div>
            <div className="sc-dash-mid">
              <div className="ds-panel sc-chart-card">
                <div className="ds-panel-head">
                  <h4>Fuel Consumption — 12 weeks</h4>
                  <div className="sc-row" style={{ gap: 10 }}>
                    <div className="ds-legend"><span><i style={{ background: c1 }} />VLSFO</span><span><i style={{ background: c3 }} />MGO</span></div>
                    <div className="ds-seg"><button>W</button><button className="active">M</button><button>Q</button></div>
                  </div>
                </div>
                <div className="ds-panel-body">
                  <ResponsiveContainer width="100%" height={168}>
                    <AreaChart data={fuelTrend} margin={{ top: 10, right: 12, left: -10, bottom: 0 }}>
                      <CartesianGrid stroke={grid} vertical={false} />
                      <XAxis dataKey="week" tick={tick} tickLine={false} axisLine={{ stroke: grid }} />
                      <YAxis tick={tick} tickLine={false} axisLine={false} width={38} />
                      <Tooltip content={<DashTip />} cursor={{ stroke: tick.fill, strokeWidth: 1 }} />
                      <Area type="monotone" dataKey="vlsfo" name="VLSFO" stroke={c1} strokeWidth={2} fill={c1} fillOpacity={0.1} />
                      <Area type="monotone" dataKey="mgo" name="MGO" stroke={c3} strokeWidth={2} fill={c3} fillOpacity={0.1} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="ds-panel">
                <div className="ds-panel-head"><h4>Recent Activity</h4><button className="ds-btn text sm" style={{ padding: 0 }}>All</button></div>
                <div style={{ padding: '6px 14px 10px' }}>
                  {ACTIVITY.map(([Icon, color, title, meta]) => (
                    <div key={title} style={{ display: 'flex', gap: 10, padding: '7px 0', borderBottom: '1px solid var(--ds-divider)', alignItems: 'flex-start' }}>
                      <Icon size={15} style={{ color, marginTop: 1, flexShrink: 0 }} />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 12.5, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
                        <div className="t-caption">{meta}</div>
                      </div>
                    </div>
                  ))}
                  <div className="sc-row" style={{ marginTop: 10, gap: 6 }}>
                    <button className="ds-btn outline sm" style={{ flex: 1 }}><Fuel size={12} />Log bunkers</button>
                    <button className="ds-btn outline sm" style={{ flex: 1 }}><FileText size={12} />New report</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="ds-tablewrap">
              <div className="ds-table-toolbar">
                <div className="ds-input-wrap" style={{ width: 190 }}><Search size={12} /><input className="ds-input" style={{ padding: '4px 8px 4px 26px', fontSize: 12 }} placeholder="Filter fleet…" /></div>
                <span className="ds-chip">Status: all <ChevronDown size={11} /></span>
                <button className="ds-btn ghost sm"><Filter size={12} />Filters</button>
                <div style={{ flex: 1 }} />
                <button className="ds-btn outline sm"><Download size={12} />Export</button>
              </div>
              <table className="ds-table dense">
                <thead>
                  <tr><th>Vessel</th><th>Position / Route</th><th>ETA</th><th>CII</th><th>Status</th><th style={{ width: 36 }} /></tr>
                </thead>
                <tbody>
                  {DASH_ROWS.map(([name, route, eta, cii, ciiTone, status, tone]) => (
                    <tr key={name}>
                      <td className="strong">{name}</td>
                      <td>{route}</td>
                      <td>{eta}</td>
                      <td><span className={`ds-badge ${ciiTone}`}>{cii}</span></td>
                      <td><span className={`ds-badge ${tone}`}><span className="dot" />{status}</span></td>
                      <td><button className="ds-btn ghost icon sm" aria-label="Actions"><MoreHorizontal size={14} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
