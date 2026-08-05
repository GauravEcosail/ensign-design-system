import { Section, Sub, useTokens } from './bits.jsx'
import {
  X, Search, Inbox, SearchX, WifiOff, Lock, Loader2, AlertTriangle, RefreshCw,
  Copy, Pencil, Trash2, Download, ChevronRight, ChevronLeft, MoreHorizontal, Ship, FileText, Anchor,
  CheckCircle2, ArrowRight, Plus, Filter,
} from 'lucide-react'

/* ---------------- 14. Modals & Drawers ---------------- */
export function ModalsSection() {
  return (
    <Section id="s14" num="14" title="Modals & Drawers" note="Modals for decisions and short forms; drawers for context you keep working beside — filters, record details. Both trap focus and close on Esc.">
      <div className="sc-grid2">
        <div>
          <div className="sc-viewport">
            <div className="veil" />
            <div className="ds-modal">
              <div className="ds-modal-head"><h4>Close voyage 26-041?</h4><X size={15} style={{ color: 'var(--ds-text-3)' }} /></div>
              <div className="ds-modal-body">All reports are approved and bunker surveys reconciled. Closing locks the voyage for editing.</div>
              <div className="ds-modal-foot"><button className="ds-btn outline sm">Keep open</button><button className="ds-btn primary sm">Close voyage</button></div>
            </div>
          </div>
          <div className="sc-caption">Confirmation modal</div>
        </div>
        <div>
          <div className="sc-viewport">
            <div className="veil" />
            <div className="ds-modal wide">
              <div className="ds-modal-head"><h4>New bunkering entry</h4><X size={15} style={{ color: 'var(--ds-text-3)' }} /></div>
              <div className="ds-modal-body">
                <div className="ds-form-grid">
                  <div className="ds-field"><label className="ds-label">Vessel<span className="req">*</span></label><select className="ds-select"><option>MV Nordwind</option></select></div>
                  <div className="ds-field"><label className="ds-label">Port<span className="req">*</span></label><input className="ds-input" defaultValue="Singapore (SGSIN)" /></div>
                  <div className="ds-field"><label className="ds-label">Fuel type</label><select className="ds-select"><option>VLSFO</option></select></div>
                  <div className="ds-field"><label className="ds-label">Quantity (MT)</label><input className="ds-input" placeholder="850.0" /></div>
                </div>
              </div>
              <div className="ds-modal-foot"><button className="ds-btn ghost sm">Cancel</button><button className="ds-btn primary sm">Save entry</button></div>
            </div>
          </div>
          <div className="sc-caption">Large form modal</div>
        </div>
        <div>
          <div className="sc-viewport">
            <div className="veil" style={{ background: 'transparent' }} />
            <div className="ds-drawer">
              <div className="ds-drawer-head">Filters<X size={15} style={{ color: 'var(--ds-text-3)' }} /></div>
              <div className="ds-drawer-body" style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
                <div className="ds-field"><label className="ds-label">Vessel type</label><select className="ds-select"><option>All types</option></select></div>
                <div className="ds-field"><label className="ds-label">CII rating</label>
                  <div className="sc-row" style={{ gap: 6 }}>{['A', 'B', 'C', 'D', 'E'].map((r) => <span key={r} className={`ds-chip ${r === 'C' || r === 'D' ? 'selected' : ''}`} style={{ padding: '2px 10px' }}>{r}</span>)}</div>
                </div>
                <label className="ds-check"><input type="checkbox" defaultChecked /> Only vessels with overdue reports</label>
                <div className="sc-row" style={{ marginTop: 6 }}><button className="ds-btn primary sm" style={{ flex: 1 }}>Apply</button><button className="ds-btn ghost sm">Reset</button></div>
              </div>
            </div>
          </div>
          <div className="sc-caption">Filter drawer — page stays interactive beneath</div>
        </div>
        <div>
          <div className="sc-viewport">
            <div className="veil" />
            <div className="ds-drawer">
              <div className="ds-drawer-head"><span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Ship size={15} />MV Nordwind</span><X size={15} style={{ color: 'var(--ds-text-3)' }} /></div>
              <div className="ds-drawer-body">
                <span className="ds-badge success" style={{ marginBottom: 10 }}><span className="dot" />At Sea</span>
                {[['IMO', '9483671'], ['Voyage', '26-041 · Santos → Qingdao'], ['ETA', '12 Aug, 14:00 LT'], ['CII YTD', 'A (4.1 attained / 4.6 required)'], ['Last noon', '04 Aug 06:00 UTC']].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--ds-divider)' }}>
                    <span style={{ color: 'var(--ds-text-3)' }}>{k}</span><span style={{ fontWeight: 600, color: 'var(--ds-text)', textAlign: 'right' }}>{v}</span>
                  </div>
                ))}
                <button className="ds-btn outline sm" style={{ marginTop: 12, width: '100%' }}>Open full record <ArrowRight size={13} /></button>
              </div>
            </div>
          </div>
          <div className="sc-caption">Details drawer</div>
        </div>
      </div>
    </Section>
  )
}

/* ---------------- 15. Tabs ---------------- */
export function TabsSection() {
  return (
    <Section id="s15" num="15" title="Tabs" note="Standard tabs for page sections, pills for filter-like switching, segmented control for tight binary/ternary toggles.">
      <Sub>Standard</Sub>
      <div className="ds-tabs">
        {['Overview', 'Voyages', 'Reports', 'Emissions', 'Documents'].map((t, i) => (
          <button key={t} className={`ds-tab ${i === 1 ? 'active' : ''}`}>{t}{t === 'Reports' && <span className="ds-badge warning" style={{ marginLeft: 6 }}>2</span>}</button>
        ))}
      </div>
      <Sub>Pills</Sub>
      <div className="ds-pills">
        {['All vessels', 'At sea', 'In port', 'Dry dock'].map((t, i) => <button key={t} className={`ds-pill ${i === 0 ? 'active' : ''}`}>{t}</button>)}
      </div>
      <Sub>Segmented control</Sub>
      <div className="sc-row" style={{ gap: 18 }}>
        <div className="ds-seg">{['Day', 'Week', 'Month'].map((t, i) => <button key={t} className={i === 1 ? 'active' : ''}>{t}</button>)}</div>
        <div className="ds-seg">{['Table', 'Map'].map((t, i) => <button key={t} className={i === 0 ? 'active' : ''}>{t}</button>)}</div>
      </div>
    </Section>
  )
}

/* ---------------- 16. Empty States ---------------- */
const EMPTIES = [
  [Inbox, 'No voyages yet', 'Create the first voyage for this vessel to start reporting.', 'New voyage', 'primary'],
  [SearchX, 'No results for “MV Atlantis”', 'Check the spelling or search by IMO number instead.', 'Clear search', 'outline'],
  [WifiOff, 'You’re offline', 'Showing data as of 04 Aug 02:14. Entries save locally and sync when the link returns.', 'Retry connection', 'outline'],
  [Lock, 'Permission required', 'Your role can’t view crew payroll. Ask an administrator for access.', 'Request access', 'outline'],
  [Loader2, 'Loading fleet…', 'Fetching the latest positions from the sync hub.', null, null],
  [AlertTriangle, 'Something went wrong', 'pms.fleet.load-failed · correlation 9d2e-4b17. Try again or contact support.', 'Retry', 'primary'],
]

export function EmptyStatesSection() {
  return (
    <Section id="s16" num="16" title="Empty States" note="Every empty state explains why it's empty and what to do next. Offline states show data age — an honesty requirement on vessels.">
      <div className="sc-grid3">
        {EMPTIES.map(([Icon, title, desc, action, variant]) => (
          <div key={title} className="ds-panel ds-empty">
            <div className="ic"><Icon size={19} className={Icon === Loader2 ? 'ds-spin' : ''} /></div>
            <b>{title}</b>
            <p>{desc}</p>
            {action && <button className={`ds-btn ${variant} sm`}>{Icon === AlertTriangle && <RefreshCw size={13} />}{action}</button>}
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- 17. Avatars ---------------- */
export function AvatarsSection() {
  return (
    <Section id="s17" num="17" title="Avatars" note="Initials by default — crew photos are rarely available at sea. Presence maps to the sync/connection palette.">
      <Sub>Sizes</Sub>
      <div className="sc-row" style={{ gap: 14, alignItems: 'center' }}>
        <div className="ds-avatar xs">JK</div>
        <div className="ds-avatar sm">JK</div>
        <div className="ds-avatar md">JK</div>
        <div className="ds-avatar lg">JK</div>
        <div className="ds-avatar md img">AS</div>
        <span className="t-caption">image fallback gradient</span>
      </div>
      <Sub>Presence</Sub>
      <div className="sc-row" style={{ gap: 18 }}>
        <div className="ds-avatar md">CO<span className="ds-presence on" /></div>
        <div className="ds-avatar md">CE<span className="ds-presence busy" /></div>
        <div className="ds-avatar md">2O<span className="ds-presence off" /></div>
      </div>
      <Sub>Group</Sub>
      <div className="sc-row" style={{ gap: 14, alignItems: 'center' }}>
        <div className="ds-avatar-group">
          <div className="ds-avatar sm">JK</div>
          <div className="ds-avatar sm img">AS</div>
          <div className="ds-avatar sm">MR</div>
          <div className="ds-avatar sm" style={{ background: 'var(--ds-surface-3)', color: 'var(--ds-text-2)' }}>+4</div>
        </div>
        <span className="t-caption">Approval chain — master, chief, superintendent</span>
      </div>
    </Section>
  )
}

/* ---------------- 18. Chips & Tags ---------------- */
export function ChipsSection() {
  return (
    <Section id="s18" num="18" title="Chips & Tags" note="Chips are interactive (filter, select, remove); tags are passive labels. Category tags use the soft status fills, never the raw series palette.">
      <Sub>Filter chips</Sub>
      <div className="sc-row">
        <span className="ds-chip selected">Type: Bulk Carrier <X size={12} className="x" /></span>
        <span className="ds-chip selected">Flag: Panama <X size={12} className="x" /></span>
        <span className="ds-chip">Port: any</span>
        <span className="ds-chip"><Plus size={12} />Add filter</span>
      </div>
      <Sub>Selection chips</Sub>
      <div className="sc-row">
        {['VLSFO', 'MGO', 'LNG', 'Methanol'].map((f, i) => <span key={f} className={`ds-chip ${i < 2 ? 'selected' : ''}`}>{i < 2 && <CheckCircle2 size={12} />}{f}</span>)}
      </div>
      <Sub>Labels &amp; category tags</Sub>
      <div className="sc-row">
        <span className="ds-tag" style={{ background: 'var(--ds-info-soft)', color: 'var(--ds-info)' }}>Deck</span>
        <span className="ds-tag" style={{ background: 'var(--ds-success-soft)', color: 'var(--ds-success)' }}>Engine</span>
        <span className="ds-tag" style={{ background: 'var(--ds-warning-soft)', color: 'var(--ds-warning)' }}>Safety</span>
        <span className="ds-tag" style={{ background: 'var(--ds-primary-soft)', color: 'var(--ds-accent)' }}>Emissions</span>
        <span className="ds-tag" style={{ background: 'var(--ds-surface-3)', color: 'var(--ds-text-2)' }}><Anchor size={11} />Port call</span>
        <span className="ds-tag" style={{ background: 'var(--ds-surface-3)', color: 'var(--ds-text-2)' }}><FileText size={11} />BDN attached</span>
      </div>
    </Section>
  )
}

/* ---------------- 19. Progress Components ---------------- */
export function ProgressSection() {
  return (
    <Section id="s19" num="19" title="Progress Components" note="Steppers for wizards (the reporting wizard is the highest-volume screen aboard), timelines for audit trails, trackers for voyage state.">
      <div className="sc-grid2">
        <div>
          <Sub>Progress bars</Sub>
          <div style={{ display: 'grid', gap: 12, maxWidth: 380 }}>
            <div><div className="t-caption" style={{ marginBottom: 4 }}>Voyage distance — 62%</div><div className="ds-progress"><div style={{ width: '62%' }} /></div></div>
            <div><div className="t-caption" style={{ marginBottom: 4 }}>Bunker ROB vs plan — 88%</div><div className="ds-progress"><div style={{ width: '88%', background: 'var(--ds-success)' }} /></div></div>
            <div><div className="t-caption" style={{ marginBottom: 4 }}>CII budget consumed — 91%</div><div className="ds-progress"><div style={{ width: '91%', background: 'var(--ds-warning)' }} /></div></div>
          </div>
          <Sub>Timeline</Sub>
          <div className="ds-timeline">
            <div className="ds-tl-item hot"><b>Noon report NR-1284 approved</b><span>Superintendent J. Koh · 04 Aug 09:12</span></div>
            <div className="ds-tl-item"><b>FuelRob variance flagged</b><span>System validation · 04 Aug 06:04</span></div>
            <div className="ds-tl-item"><b>Report submitted from vessel</b><span>Ch. Officer A. Silva · 04 Aug 06:00</span></div>
            <div className="ds-tl-item"><b>Draft created</b><span>Autofilled from previous report · 04 Aug 05:41</span></div>
          </div>
        </div>
        <div>
          <Sub>Stepper — reporting wizard</Sub>
          <div className="ds-stepper" style={{ maxWidth: 460 }}>
            {[['Position', 'done'], ['Weather', 'done'], ['Consumption', 'current'], ['Remarks', ''], ['Review', '']].map(([label, state], i) => (
              <div key={label} className={`ds-step ${state}`}>
                <div className="bubble">{state === 'done' ? <CheckCircle2 size={14} /> : i + 1}</div>
                {label}
              </div>
            ))}
          </div>
          <Sub>Status tracker — voyage lifecycle</Sub>
          <div className="ds-stepper" style={{ maxWidth: 460 }}>
            {[['Fixed', 'done'], ['Loading', 'done'], ['At Sea', 'current'], ['Discharge', ''], ['Closed', '']].map(([label, state], i) => (
              <div key={label} className={`ds-step ${state}`}>
                <div className="bubble">{state === 'done' ? <CheckCircle2 size={14} /> : i + 1}</div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ---------------- 20. Menus ---------------- */
export function MenusSection() {
  return (
    <Section id="s20" num="20" title="Menus" note="One menu primitive everywhere — dropdowns, context menus, overflow. The command palette (⌘K) reaches any module or record without the mouse.">
      <div className="sc-row" style={{ alignItems: 'flex-start', gap: 26 }}>
        <div>
          <Sub>Dropdown</Sub>
          <button className="ds-btn outline sm" style={{ marginBottom: 6 }}>Voyage actions <ChevronRight size={13} style={{ transform: 'rotate(90deg)' }} /></button>
          <div className="ds-menu">
            <div className="ds-menu-item"><Pencil size={14} />Edit voyage</div>
            <div className="ds-menu-item"><Copy size={14} />Duplicate<span className="kbd-hint">⌘D</span></div>
            <div className="ds-menu-item"><Download size={14} />Export report</div>
            <div className="ds-menu-sep" />
            <div className="ds-menu-item danger"><Trash2 size={14} />Archive voyage</div>
          </div>
        </div>
        <div>
          <Sub>Context menu</Sub>
          <div className="ds-menu">
            <div className="ds-menu-label">NR-1284</div>
            <div className="ds-menu-item hover"><CheckCircle2 size={14} />Approve</div>
            <div className="ds-menu-item"><X size={14} />Reject with note</div>
            <div className="ds-menu-item"><FileText size={14} />View raw payload</div>
          </div>
        </div>
        <div>
          <Sub>Overflow menu</Sub>
          <button className="ds-btn ghost icon sm" style={{ marginBottom: 6 }} aria-label="More"><MoreHorizontal size={15} /></button>
          <div className="ds-menu" style={{ minWidth: 150 }}>
            <div className="ds-menu-item">Pin column</div>
            <div className="ds-menu-item">Hide column</div>
            <div className="ds-menu-item">Reset layout</div>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 300 }}>
          <Sub>Command palette</Sub>
          <div className="ds-palette">
            <div className="ds-palette-search"><Search size={15} /><input placeholder="Go to vessel, voyage, report…" defaultValue="nord" readOnly /><span className="kbd-hint">esc</span></div>
            <div style={{ padding: 4 }}>
              <div className="ds-menu-label">Vessels</div>
              <div className="ds-menu-item selected"><Ship size={14} />MV Nordwind<span className="kbd-hint">↵</span></div>
              <div className="ds-menu-item"><Ship size={14} />MV Northern Light</div>
              <div className="ds-menu-label">Actions</div>
              <div className="ds-menu-item"><Plus size={14} />New noon report for “nord…”</div>
              <div className="ds-menu-item"><Filter size={14} />Filter fleet by “nord…”</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ---------------- 21. Calendar Components ---------------- */
const AUG_CELLS = (() => {
  const cells = []
  for (let d = 27; d <= 31; d++) cells.push({ d, mute: true })
  for (let d = 1; d <= 31; d++) cells.push({ d })
  for (let d = 1; d <= 6; d++) cells.push({ d, mute: true })
  return cells
})()
const EVENTS = { 4: ['today'], 6: [['ETA Paradip', 'info']], 12: [['ETA Qingdao', 'success']], 18: [['ETA Houston', 'info']], 24: [['Dock complete', 'warning']], 31: [['MRV deadline', 'error']] }

export function CalendarSection() {
  const t = useTokens(['--ds-chart-1', '--ds-chart-3'])
  const c1 = t['--ds-chart-1'] || '#2a78d6'
  const c3 = t['--ds-chart-3'] || '#1baf7a'
  return (
    <Section id="s21" num="21" title="Calendar Components" note="Month view for deadlines and ETAs, a compact picker for forms, and a scheduler for fleet employment — the chartering view of who is where, when.">
      <div className="sc-grid2" style={{ gridTemplateColumns: '1.5fr 1fr', alignItems: 'start' }}>
        <div className="ds-cal">
          <div className="ds-cal-head">
            <span>August 2026</span>
            <span className="sc-row" style={{ gap: 4 }}>
              <button className="ds-btn ghost icon sm" aria-label="Previous"><ChevronLeft size={14} /></button>
              <button className="ds-btn outline sm">Today</button>
              <button className="ds-btn ghost icon sm" aria-label="Next"><ChevronRight size={14} /></button>
            </span>
          </div>
          <div className="ds-cal-grid">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => <div key={d} className="dow">{d}</div>)}
            {AUG_CELLS.map((c, i) => {
              const ev = !c.mute ? EVENTS[c.d] : null
              const today = ev?.[0] === 'today'
              return (
                <div key={i} className={`ds-cal-cell ${c.mute ? 'mute' : ''} ${today ? 'today' : ''}`}>
                  <span className="d">{c.d}</span>
                  {ev && ev.filter((e) => e !== 'today').map(([label, tone]) => (
                    <div key={label} className="ds-cal-ev" style={{ background: `var(--ds-${tone}-soft)`, color: `var(--ds-${tone})` }}>{label}</div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ display: 'grid', gap: 14 }}>
          <div className="ds-cal" style={{ maxWidth: 280 }}>
            <div className="ds-cal-head" style={{ padding: '8px 10px', fontSize: 12.5 }}><ChevronLeft size={13} /><span>Aug 2026</span><ChevronRight size={13} /></div>
            <div className="ds-cal-grid" style={{ fontSize: 11 }}>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <div key={i} className="dow" style={{ padding: 4 }}>{d}</div>)}
              {AUG_CELLS.map((c, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '5px 0', color: c.mute ? 'var(--ds-text-disabled)' : 'var(--ds-text-2)' }}>
                  {!c.mute && c.d === 4
                    ? <span style={{ display: 'inline-grid', placeItems: 'center', width: 20, height: 20, borderRadius: '50%', background: 'var(--ds-primary)', color: 'var(--ds-on-primary)', fontWeight: 700 }}>{c.d}</span>
                    : !c.mute && c.d === 12
                      ? <span style={{ display: 'inline-grid', placeItems: 'center', width: 20, height: 20, borderRadius: '50%', background: 'var(--ds-primary-soft)', color: 'var(--ds-accent)', fontWeight: 600 }}>{c.d}</span>
                      : c.d}
                </div>
              ))}
            </div>
          </div>
          <div className="sc-caption" style={{ marginTop: -8 }}>Date picker — selected 4 Aug, range end 12 Aug</div>
        </div>
      </div>
      <Sub>Scheduler — fleet employment, weeks 32–33</Sub>
      <div className="ds-cal">
        {[
          ['MV Nordwind', [[0, 64, 'Santos → Qingdao', c1]]],
          ['MT Aegean Star', [[7, 43, 'Rotterdam → Houston', c1], [57, 21, 'Ballast', c3]]],
          ['MV Baltic Rose', [[0, 21, 'Anchorage', c3], [21, 57, 'Paradip → Chittagong', c1]]],
          ['MV Monsoon Glory', [[0, 50, 'Dry dock — Zhoushan', '#8a8a8a']]],
        ].map(([who, bars]) => (
          <div key={who} className="ds-sched-row">
            <div className="who">{who}</div>
            <div className="ds-sched-track">
              {bars.map(([left, width, label, color]) => (
                <div key={label} className="ds-sched-bar" style={{ left: `${left}%`, width: `${width}%`, background: color }}>{label}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
