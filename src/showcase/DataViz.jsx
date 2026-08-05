import { Section, Sub, Gauge, Ring, Spark, useTokens } from './bits.jsx'
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import {
  Search, Filter, ChevronDown, ChevronUp, ChevronRight, MoreHorizontal, Download, Columns3, Inbox,
  CheckCircle2, XCircle, AlertTriangle, Info, X, Loader2, Trash2,
  ChevronsUp, ChevronUp as PrioHigh, Minus, ChevronDown as PrioLow, Undo2,
} from 'lucide-react'
import { fuelTrend, etsMonthly } from '../data.js'

/* ---------------- 9. Tables ---------------- */
const ROWS = [
  { sel: false, name: 'MV Nordwind', imo: '9483671', type: 'Bulk Carrier', dwt: '81,600', report: '04 Aug 06:00', cii: 'A', tone: 'success', status: 'At Sea' },
  { sel: true, name: 'MV Coral Trader', imo: '9512348', type: 'Container', dwt: '52,300', report: '04 Aug 05:40', cii: 'B', tone: 'success', status: 'In Port' },
  { sel: false, name: 'MT Aegean Star', imo: '9376921', type: 'Product Tanker', dwt: '47,900', report: '03 Aug 18:00', cii: 'C', tone: 'warning', status: 'At Sea', expand: true },
  { sel: false, name: 'MV Baltic Rose', imo: '9445102', type: 'Bulk Carrier', dwt: '63,200', report: '04 Aug 06:10', cii: 'B', tone: 'success', status: 'Anchorage' },
  { sel: false, name: 'MV Monsoon Glory', imo: '9528114', type: 'General Cargo', dwt: '28,400', report: '02 Aug 06:00', cii: 'D', tone: 'error', status: 'Dry Dock' },
]
const STATUS_TONE = { 'At Sea': 'success', 'In Port': 'info', Anchorage: 'warning', 'Dry Dock': 'error' }

export function TablesSection() {
  return (
    <Section id="s9" num="09" title="Tables" note="The workhorse of the ERP. Sticky header inside a scroll container, sortable columns, row selection, one expanded row, and pagination. Text left, numbers right, dates tabular.">
      <div className="ds-tablewrap">
        <div className="ds-table-toolbar">
          <div className="ds-input-wrap" style={{ width: 220 }}><Search size={13} /><input className="ds-input" style={{ padding: '5px 8px 5px 28px', fontSize: 12.5 }} placeholder="Search vessels…" /></div>
          <span className="ds-chip selected">Type: Bulk <X size={12} className="x" /></span>
          <span className="ds-chip">CII ≤ C <ChevronDown size={12} /></span>
          <button className="ds-btn ghost sm"><Filter size={13} />Filters</button>
          <div style={{ flex: 1 }} />
          <div className="ds-seg"><button className="active">Comfort</button><button>Dense</button></div>
          <button className="ds-btn outline sm"><Columns3 size={13} />Columns</button>
          <button className="ds-btn outline sm"><Download size={13} />Export</button>
        </div>
        <div className="ds-table-scroll">
          <table className="ds-table">
            <thead>
              <tr>
                <th style={{ width: 34 }}><label className="ds-check"><input type="checkbox" /></label></th>
                <th className="sorted"><span className="sort">Vessel <ChevronUp size={12} /></span></th>
                <th><span className="sort">IMO</span></th>
                <th><span className="sort">Type</span></th>
                <th className="num"><span className="sort">DWT</span></th>
                <th><span className="sort">Last Report</span></th>
                <th>CII</th>
                <th>Status</th>
                <th style={{ width: 40 }} />
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <RowPair key={r.imo} r={r} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="ds-pagination">
          <span>1–5 of 18 vessels · 1 selected</span>
          <div style={{ flex: 1 }} />
          <button className="ds-page-btn">‹</button>
          <button className="ds-page-btn active">1</button>
          <button className="ds-page-btn">2</button>
          <button className="ds-page-btn">3</button>
          <button className="ds-page-btn">4</button>
          <button className="ds-page-btn">›</button>
          <select className="ds-select" style={{ width: 'auto', padding: '3px 6px', fontSize: 12 }}><option>5 / page</option><option>25 / page</option></select>
        </div>
      </div>

      <div className="sc-grid2" style={{ marginTop: 16 }}>
        <div className="ds-tablewrap">
          <div className="ds-empty">
            <div className="ic"><Inbox size={19} /></div>
            <b>No vessels match these filters</b>
            <p>Try removing a filter, or add your first vessel to the registry.</p>
            <button className="ds-btn outline sm"><Undo2 size={13} />Clear filters</button>
          </div>
          <div className="sc-caption" style={{ padding: '0 12px 10px' }}>Empty state</div>
        </div>
        <div className="ds-tablewrap" style={{ padding: 12 }}>
          {[220, 320, 260, 300].map((w, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '7px 0' }}>
              <div className="ds-skeleton" style={{ width: 15, height: 15 }} />
              <div className="ds-skeleton" style={{ width: w, height: 11 }} />
              <div className="ds-skeleton" style={{ width: 60, height: 11, marginLeft: 'auto' }} />
            </div>
          ))}
          <div className="sc-caption">Loading state — skeleton rows, no spinners over data</div>
        </div>
      </div>
    </Section>
  )
}

function RowPair({ r }) {
  return (
    <>
      <tr className={r.sel ? 'selected' : ''}>
        <td><label className="ds-check"><input type="checkbox" defaultChecked={r.sel} /></label></td>
        <td className="strong"><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>{r.expand ? <ChevronDown size={13} /> : <ChevronRight size={13} style={{ opacity: 0.4 }} />}{r.name}</span></td>
        <td style={{ fontFamily: 'var(--ds-font-mono)', fontSize: 12 }}>{r.imo}</td>
        <td>{r.type}</td>
        <td className="num">{r.dwt}</td>
        <td>{r.report}</td>
        <td><span className={`ds-badge ${r.tone}`}>{r.cii}</span></td>
        <td><span className={`ds-badge ${STATUS_TONE[r.status]}`}><span className="dot" />{r.status}</span></td>
        <td><button className="ds-btn ghost icon sm" aria-label="Row actions"><MoreHorizontal size={15} /></button></td>
      </tr>
      {r.expand && (
        <tr className="expand-row">
          <td />
          <td colSpan={8}>
            <div style={{ display: 'flex', gap: 28, padding: '4px 0' }}>
              <span><b style={{ color: 'var(--ds-text)' }}>Voyage:</b> Rotterdam → Houston · ETA 18 Aug</span>
              <span><b style={{ color: 'var(--ds-text)' }}>ROB:</b> VLSFO 412 MT · MGO 88 MT</span>
              <span><b style={{ color: 'var(--ds-text)' }}>Sync:</b> lagging 4h</span>
              <button className="ds-btn text sm" style={{ padding: 0 }}>Open vessel →</button>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

/* ---------------- 10. Charts ---------------- */
const ciiTrend = [
  { m: 'Jan', att: 4.1, req: 4.6 }, { m: 'Feb', att: 4.3, req: 4.6 }, { m: 'Mar', att: 4.5, req: 4.6 },
  { m: 'Apr', att: 4.4, req: 4.6 }, { m: 'May', att: 4.7, req: 4.6 }, { m: 'Jun', att: 4.5, req: 4.6 },
  { m: 'Jul', att: 4.4, req: 4.6 }, { m: 'Aug', att: 4.3, req: 4.6 },
]
const fleetMix = [
  { name: 'Bulk Carrier', value: 8 }, { name: 'Tanker', value: 5 }, { name: 'Container', value: 5 },
]
const fuelMix = [
  { name: 'VLSFO', value: 68 }, { name: 'MGO', value: 22 }, { name: 'LNG', value: 10 },
]

function ChartTip({ active, payload, label, unit }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: 'var(--ds-surface)', border: '1px solid var(--ds-border)', borderRadius: 'var(--ds-radius-md)', boxShadow: 'var(--ds-shadow-floating)', padding: '8px 12px', fontSize: 12, fontFamily: 'var(--ds-font-ui)' }}>
      <div style={{ fontWeight: 600, color: 'var(--ds-text)', marginBottom: 4 }}>{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ds-text-2)', marginTop: 2 }}>
          <i style={{ width: 8, height: 8, borderRadius: 2, background: p.color || p.payload?.fill, display: 'inline-block' }} />
          {p.name}: <b style={{ color: 'var(--ds-text)' }}>{p.value}{unit}</b>
        </div>
      ))}
    </div>
  )
}

export function ChartsSection() {
  const t = useTokens(['--ds-chart-1', '--ds-chart-2', '--ds-chart-3', '--ds-chart-grid', '--ds-text-3', '--ds-text', '--ds-surface-3', '--ds-success', '--ds-warning', '--ds-border'])
  const c1 = t['--ds-chart-1'] || '#2a78d6'
  const c2 = t['--ds-chart-2'] || '#eb6834'
  const c3 = t['--ds-chart-3'] || '#1baf7a'
  const grid = t['--ds-chart-grid'] || '#e9eef2'
  const muted = t['--ds-text-3'] || '#8093a7'
  const ink = t['--ds-text'] || '#0b1f33'
  const track = t['--ds-surface-3'] || '#f0f4f8'
  const tick = { fill: muted, fontSize: 11, fontFamily: 'inherit' }
  const pieColors = [c1, c2, c3]
  return (
    <Section id="s10" num="10" title="Charts" note="Series colors are the CVD-validated data palette, distinct from status colors. 2px lines, 10% area washes, hairline grids, legends for 2+ series, tooltips everywhere.">
      <div className="sc-grid2">
        <div className="ds-panel sc-chart-card">
          <div className="ds-panel-head"><h4>Attained vs Required CII</h4>
            <div className="ds-legend"><span><i style={{ background: c1 }} />Attained</span><span><i style={{ background: c2 }} />Required</span></div>
          </div>
          <div className="ds-panel-body">
            <ResponsiveContainer width="100%" height={190}>
              <LineChart data={ciiTrend} margin={{ top: 12, right: 14, left: -6, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="m" tick={tick} tickLine={false} axisLine={{ stroke: grid }} />
                <YAxis domain={[3.8, 5]} tick={tick} tickLine={false} axisLine={false} width={40} />
                <Tooltip content={<ChartTip unit=" gCO₂/t·nm" />} cursor={{ stroke: muted, strokeWidth: 1 }} />
                <Line type="monotone" dataKey="att" name="Attained" stroke={c1} strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 2, stroke: 'var(--ds-surface)' }} />
                <Line type="monotone" dataKey="req" name="Required" stroke={c2} strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 2, stroke: 'var(--ds-surface)' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="ds-panel sc-chart-card">
          <div className="ds-panel-head"><h4>EU ETS Exposure by Month</h4></div>
          <div className="ds-panel-body">
            <ResponsiveContainer width="100%" height={190}>
              <BarChart data={etsMonthly} margin={{ top: 12, right: 14, left: -6, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="month" tick={tick} tickLine={false} axisLine={{ stroke: grid }} />
                <YAxis tick={tick} tickLine={false} axisLine={false} width={40} />
                <Tooltip content={<ChartTip unit="k €" />} cursor={{ fill: 'transparent' }} />
                <Bar dataKey="eur" name="Exposure" fill={c1} barSize={18} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="sc-grid2" style={{ marginTop: 14 }}>
        <div className="ds-panel sc-chart-card">
          <div className="ds-panel-head"><h4>Fuel Consumption — Fleet</h4>
            <div className="ds-legend"><span><i style={{ background: c1 }} />VLSFO</span><span><i style={{ background: c3 }} />MGO</span></div>
          </div>
          <div className="ds-panel-body">
            <ResponsiveContainer width="100%" height={190}>
              <AreaChart data={fuelTrend} margin={{ top: 12, right: 14, left: -6, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="week" tick={tick} tickLine={false} axisLine={{ stroke: grid }} />
                <YAxis tick={tick} tickLine={false} axisLine={false} width={40} />
                <Tooltip content={<ChartTip unit=" MT" />} cursor={{ stroke: muted, strokeWidth: 1 }} />
                <Area type="monotone" dataKey="vlsfo" name="VLSFO" stroke={c1} strokeWidth={2} fill={c1} fillOpacity={0.1} />
                <Area type="monotone" dataKey="mgo" name="MGO" stroke={c3} strokeWidth={2} fill={c3} fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="sc-grid2">
          <div className="ds-panel sc-chart-card pad">
            <div className="ds-panel-head"><h4>Fleet Mix</h4></div>
            <div className="ds-panel-body" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <ResponsiveContainer width={120} height={120}>
                <PieChart>
                  <Pie data={fleetMix} dataKey="value" outerRadius={54} stroke="var(--ds-surface)" strokeWidth={2}>
                    {fleetMix.map((e, i) => <Cell key={e.name} fill={pieColors[i]} />)}
                  </Pie>
                  <Tooltip content={<ChartTip unit=" vessels" />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="ds-legend" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
                {fleetMix.map((e, i) => <span key={e.name}><i style={{ background: pieColors[i] }} />{e.name} · {e.value}</span>)}
              </div>
            </div>
          </div>
          <div className="ds-panel sc-chart-card pad">
            <div className="ds-panel-head"><h4>Fuel Mix</h4></div>
            <div className="ds-panel-body" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <ResponsiveContainer width={120} height={120}>
                <PieChart>
                  <Pie data={fuelMix} dataKey="value" innerRadius={34} outerRadius={54} stroke="var(--ds-surface)" strokeWidth={2}>
                    {fuelMix.map((e, i) => <Cell key={e.name} fill={pieColors[i]} />)}
                  </Pie>
                  <Tooltip content={<ChartTip unit="%" />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="ds-legend" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
                {fuelMix.map((e, i) => <span key={e.name}><i style={{ background: pieColors[i] }} />{e.name} · {e.value}%</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sub>Gauges, rings, sparklines &amp; trends</Sub>
      <div className="sc-row" style={{ gap: 28, alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Gauge value={78} color={c1} track={track} text={ink} />
          <div className="t-caption">Voyage plan progress</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Ring value={64} color={c3} track={track} text={ink} />
          <div className="t-caption">DCS data coverage</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Ring value={92} color={t['--ds-success'] || c3} track={track} text={ink} />
          <div className="t-caption">Manning level</div>
        </div>
        <div>
          {[['Speed', [11.8, 12.1, 12.4, 12.2, 12.6, 12.5], c1], ['Consumption', [28, 27, 29, 26, 27, 25], c3], ['Slip', [4.2, 4.6, 4.1, 4.8, 4.4, 4.3], c2]].map(([k, d, c]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span className="t-caption" style={{ width: 82 }}>{k}</span><Spark data={d} color={c} />
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          <span className="ds-trend up">▲ 3.2% speed made good</span>
          <span className="ds-trend down">▼ 1.8% over CP consumption</span>
          <span className="ds-trend flat">— slip within warranty</span>
        </div>
      </div>
    </Section>
  )
}

/* ---------------- 11. Status Indicators ---------------- */
export function StatusSection() {
  return (
    <Section id="s11" num="11" title="Status Indicators" note="Lifecycle badges use soft fills; priority pairs an icon with color so it never relies on hue alone; connection state matters on vessels with degraded links.">
      <Sub>Lifecycle</Sub>
      <div className="sc-row">
        <span className="ds-badge neutral">Draft</span>
        <span className="ds-badge success"><span className="dot" />Active</span>
        <span className="ds-badge warning"><span className="dot" />Pending</span>
        <span className="ds-badge info"><span className="dot" />Completed</span>
        <span className="ds-badge error"><span className="dot" />Cancelled</span>
        <span className="ds-badge neutral" style={{ opacity: 0.65 }}>Archived</span>
      </div>
      <Sub>Priority</Sub>
      <div className="sc-row" style={{ gap: 20 }}>
        <span className="ds-prio" style={{ color: 'var(--ds-error)' }}><ChevronsUp size={15} />Critical</span>
        <span className="ds-prio" style={{ color: 'var(--ds-warning)' }}><PrioHigh size={15} />High</span>
        <span className="ds-prio" style={{ color: 'var(--ds-info)' }}><Minus size={15} />Medium</span>
        <span className="ds-prio" style={{ color: 'var(--ds-text-3)' }}><PrioLow size={15} />Low</span>
      </div>
      <Sub>Connection</Sub>
      <div className="sc-row" style={{ gap: 20 }}>
        <span className="ds-conn online"><span className="dot" />Online — synced 2 min ago</span>
        <span className="ds-conn offline"><span className="dot" />Offline — last seen 04 Aug 02:14</span>
        <span className="ds-conn syncing"><span className="dot" />Syncing — 148 changes behind</span>
      </div>
    </Section>
  )
}

/* ---------------- 12. Alerts & Feedback ---------------- */
export function AlertsSection() {
  return (
    <Section id="s12" num="12" title="Alerts & Feedback" note="Inline alerts for context, toasts for transient confirmation, dialogs for decisions, skeletons for anything slower than 300ms. Errors always carry a correlation ID the crew can read to shore IT.">
      <div className="sc-grid2">
        <div className="ds-alert success"><CheckCircle2 size={16} /><div><b>Noon report approved</b><p>NR-1284 posted to voyage 26-041. IMO DCS totals updated.</p></div></div>
        <div className="ds-alert info"><Info size={16} /><div><b>Sync in progress</b><p>Vessel database is 148 changes behind the office. Attachments queue separately.</p></div></div>
        <div className="ds-alert warning"><AlertTriangle size={16} /><div><b>FuelRob variance detected</b><p>Reported ROB differs from calculated by 6.2 MT. Chief engineer review required.</p></div></div>
        <div className="ds-alert error"><XCircle size={16} /><div><b>Report submission failed</b><p>pms.report.validation-failed · correlation <code style={{ fontFamily: 'var(--ds-font-mono)', fontSize: 11 }}>c7f2-9a41</code> — quote this ID to support.</p></div></div>
      </div>
      <Sub>Toasts</Sub>
      <div className="sc-row" style={{ gap: 12 }}>
        <div className="ds-toast"><CheckCircle2 size={15} style={{ color: 'var(--ds-success)' }} />Bunkering entry BN-0412 saved<button className="ds-btn text sm" style={{ padding: '0 2px' }}>View</button><X size={13} style={{ color: 'var(--ds-text-3)', cursor: 'pointer' }} /></div>
        <div className="ds-toast dark-toast"><Loader2 size={15} className="ds-spin" />Generating EU MRV report…</div>
      </div>
      <Sub>Dialogs</Sub>
      <div className="sc-grid2">
        <div className="sc-viewport" style={{ height: 210 }}>
          <div className="veil" />
          <div className="ds-modal">
            <div className="ds-modal-head"><h4>Submit noon report?</h4><X size={15} style={{ color: 'var(--ds-text-3)' }} /></div>
            <div className="ds-modal-body">Once submitted, NR-1285 is queued for shore sync and locked for editing aboard.</div>
            <div className="ds-modal-foot"><button className="ds-btn outline sm">Cancel</button><button className="ds-btn primary sm">Submit report</button></div>
          </div>
        </div>
        <div className="sc-viewport" style={{ height: 210 }}>
          <div className="veil" />
          <div className="ds-modal">
            <div className="ds-modal-head"><h4>Archive vessel?</h4><X size={15} style={{ color: 'var(--ds-text-3)' }} /></div>
            <div className="ds-modal-body">MV Monsoon Glory will be archived, never deleted — history and emissions data stay intact. Type the vessel name to confirm.</div>
            <div style={{ padding: '0 16px' }}><input className="ds-input" placeholder="MV Monsoon Glory" /></div>
            <div className="ds-modal-foot"><button className="ds-btn outline sm">Cancel</button><button className="ds-btn destructive sm"><Trash2 size={13} />Archive</button></div>
          </div>
        </div>
      </div>
      <Sub>Loading &amp; progress</Sub>
      <div className="sc-grid3">
        <div className="ds-panel ds-loading-overlay" style={{ height: 120 }}>
          <div className="ds-panel-body t-small">Voyage table content…</div>
          <div className="veil"><span style={{ display: 'flex', gap: 9, alignItems: 'center', fontSize: 13 }}><Loader2 size={16} className="ds-spin" />Loading voyages…</span></div>
        </div>
        <div className="ds-panel ds-panel-body" style={{ display: 'grid', gap: 12, alignContent: 'center' }}>
          <div className="t-caption">Uploading BDN scan — 68%</div>
          <div className="ds-progress"><div style={{ width: '68%' }} /></div>
          <div className="t-caption">Report validation — 3 of 5 checks</div>
          <div className="ds-progress"><div style={{ width: '60%', background: 'var(--ds-success)' }} /></div>
        </div>
        <div className="ds-panel ds-panel-body" style={{ display: 'grid', gap: 9 }}>
          <div className="ds-skeleton" style={{ height: 13, width: '55%' }} />
          <div className="ds-skeleton" style={{ height: 11 }} />
          <div className="ds-skeleton" style={{ height: 11, width: '85%' }} />
          <div className="ds-skeleton" style={{ height: 42, borderRadius: 'var(--ds-radius-md)' }} />
        </div>
      </div>
    </Section>
  )
}

/* ---------------- 13. Forms ---------------- */
export function FormsSection() {
  return (
    <Section id="s13" num="13" title="Forms" note="Sectioned, two columns max, labels above fields. Required fields are marked, validation is inline and specific, and the action bar is pinned to the section footer.">
      <div className="ds-panel" style={{ maxWidth: 720 }}>
        <div className="ds-form-section">
          <h5>Vessel particulars</h5>
          <div className="desc">Master data synced fleet-wide. Changes require shore approval.</div>
          <div className="ds-form-grid">
            <div className="ds-field"><label className="ds-label">Vessel name<span className="req">*</span></label><input className="ds-input" defaultValue="MV Nordwind" /></div>
            <div className="ds-field"><label className="ds-label">IMO number<span className="req">*</span></label><input className="ds-input error" defaultValue="94836" /><div className="ds-help error">IMO number must be 7 digits with a valid check digit</div></div>
            <div className="ds-field"><label className="ds-label">Vessel type<span className="req">*</span></label><select className="ds-select"><option>Bulk Carrier</option><option>Container</option><option>Tanker</option></select></div>
            <div className="ds-field"><label className="ds-label">Flag state</label><select className="ds-select"><option>Panama</option><option>Liberia</option><option>Marshall Islands</option></select><div className="ds-help">Determines applicable MRV / DCS regimes</div></div>
          </div>
        </div>
        <div className="ds-form-section">
          <h5>Voyage defaults</h5>
          <div className="desc">Used to pre-fill the reporting wizard for this vessel.</div>
          <div className="ds-form-grid">
            <div className="ds-field"><label className="ds-label">Default load port</label><input className="ds-input" placeholder="Search UN/LOCODE…" /></div>
            <div className="ds-field"><label className="ds-label">CP speed (knots)</label><input className="ds-input" type="number" defaultValue="12.5" step="0.1" /><div className="ds-help">Charter party warranted speed, about</div></div>
          </div>
          <div className="sc-row" style={{ marginTop: 12, gap: 22 }}>
            <label className="ds-check"><input type="checkbox" defaultChecked /> Trades into EU/EEA ports</label>
            <label className="ds-check"><input type="checkbox" /> UK MRV applies</label>
          </div>
        </div>
        <div className="ds-form-actions">
          <button className="ds-btn ghost">Cancel</button>
          <button className="ds-btn outline">Save draft</button>
          <button className="ds-btn primary">Save vessel</button>
        </div>
      </div>
    </Section>
  )
}
