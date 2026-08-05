import { Section, Sub, Spark, useTokens } from './bits.jsx'
import {
  Plus, Trash2, Loader2, Search, Eye, ChevronDown, ChevronRight, Calendar, Clock, UploadCloud, Check, X,
  LayoutDashboard, Ship, Users, ShoppingCart, Package, Wrench, Landmark, BarChart3, Shield, Settings, Bell,
  Anchor, Fuel, TrendingUp, TrendingDown, ArrowRight, Info, Download,
} from 'lucide-react'

/* ---------------- 5. Buttons ---------------- */
const VARIANTS = ['primary', 'secondary', 'outline', 'ghost', 'text', 'destructive']
const STATES = ['normal', 'hover', 'focus', 'pressed', 'disabled', 'loading']

export function ButtonsSection() {
  return (
    <Section id="s5" num="05" title="Buttons" note="Six variants × six states. Hover, focus and pressed are frozen here with state classes; focus is always a visible 3px ring for keyboard users.">
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
          <thead>
            <tr>
              <th style={{ width: 100 }} />
              {STATES.map((s) => <th key={s} className="t-overline" style={{ padding: '0 10px', textAlign: 'left' }}>{s}</th>)}
            </tr>
          </thead>
          <tbody>
            {VARIANTS.map((v) => (
              <tr key={v}>
                <td className="t-small" style={{ fontWeight: 600, paddingRight: 10, textTransform: 'capitalize' }}>{v}</td>
                {STATES.map((s) => (
                  <td key={s} style={{ padding: '0 10px' }}>
                    {s === 'loading' ? (
                      <button className={`ds-btn ${v} disabled`}><Loader2 size={14} className="ds-spin" />Saving…</button>
                    ) : (
                      <button className={`ds-btn ${v} ${s !== 'normal' ? s : ''}`} disabled={s === 'disabled'}>
                        {v === 'destructive' ? <><Trash2 size={14} />Delete</> : 'Button'}
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Sub>Sizes &amp; icon buttons</Sub>
      <div className="sc-row" style={{ gap: 14 }}>
        <button className="ds-btn primary sm">Small</button>
        <button className="ds-btn primary">Medium</button>
        <button className="ds-btn primary lg">Large</button>
        <button className="ds-btn primary"><Plus size={15} />With icon</button>
        <button className="ds-btn outline icon sm" aria-label="Add"><Plus size={14} /></button>
        <button className="ds-btn outline icon" aria-label="Add"><Plus size={16} /></button>
        <button className="ds-btn outline icon lg" aria-label="Add"><Plus size={18} /></button>
        <button className="ds-btn ghost icon" aria-label="Notifications"><Bell size={16} /></button>
      </div>
    </Section>
  )
}

/* ---------------- 6. Inputs ---------------- */
export function InputsSection() {
  return (
    <Section id="s6" num="06" title="Inputs" note="Every field type in the system. All inputs share one height, radius and focus treatment; helper and error text always sits below the field.">
      <div className="sc-grid3">
        <div className="ds-field"><label className="ds-label">Text Field</label><input className="ds-input" placeholder="Vessel name" /></div>
        <div className="ds-field"><label className="ds-label">Number Input</label><input className="ds-input" type="number" defaultValue="850.0" step="0.1" /></div>
        <div className="ds-field"><label className="ds-label">Search</label>
          <div className="ds-input-wrap"><Search size={14} /><input className="ds-input" placeholder="Search vessels, ports, reports…" /></div>
        </div>
        <div className="ds-field"><label className="ds-label">Password</label>
          <div className="ds-input-wrap"><Eye size={14} className="trail" /><input className="ds-input trail-pad" style={{ paddingLeft: 10 }} type="password" defaultValue="password" /></div>
        </div>
        <div className="ds-field"><label className="ds-label">Email</label><input className="ds-input" type="email" placeholder="master@vessel.ecosail.io" /></div>
        <div className="ds-field"><label className="ds-label">Select</label>
          <select className="ds-select"><option>Bulk Carrier</option><option>Container</option><option>Product Tanker</option></select>
        </div>
        <div className="ds-field"><label className="ds-label">Date Picker</label><input className="ds-input" type="date" defaultValue="2026-08-04" /></div>
        <div className="ds-field"><label className="ds-label">Time Picker</label><input className="ds-input" type="time" defaultValue="06:00" /></div>
        <div className="ds-field"><label className="ds-label">Date Range</label>
          <div className="sc-row" style={{ flexWrap: 'nowrap', gap: 6 }}>
            <input className="ds-input" type="date" defaultValue="2026-08-01" />
            <span style={{ color: 'var(--ds-text-3)' }}>–</span>
            <input className="ds-input" type="date" defaultValue="2026-08-31" />
          </div>
        </div>
      </div>

      <div className="sc-grid3" style={{ marginTop: 14 }}>
        <div className="ds-field"><label className="ds-label">Multi Select</label>
          <div className="ds-input" style={{ display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center', minHeight: 32 }}>
            <span className="ds-chip selected" style={{ padding: '1px 8px' }}>VLSFO <X size={11} className="x" /></span>
            <span className="ds-chip selected" style={{ padding: '1px 8px' }}>MGO <X size={11} className="x" /></span>
            <span style={{ color: 'var(--ds-text-3)', fontSize: 12.5 }}>Add fuel…</span>
            <ChevronDown size={14} style={{ marginLeft: 'auto', color: 'var(--ds-text-3)' }} />
          </div>
        </div>
        <div className="ds-field"><label className="ds-label">Combobox</label>
          <div className="ds-menu-demo">
            <div className="ds-input focus" style={{ display: 'flex', alignItems: 'center' }}>Rotter<span style={{ opacity: 0.4 }}>|</span><ChevronDown size={14} style={{ marginLeft: 'auto', color: 'var(--ds-text-3)' }} /></div>
            <div className="ds-menu" style={{ position: 'absolute', zIndex: 5, marginTop: 4, width: '100%' }}>
              <div className="ds-menu-item selected"><Check size={13} />Rotterdam (NLRTM)</div>
              <div className="ds-menu-item">Rotterdam Botlek (NLBOT)</div>
              <div className="ds-menu-item">Rottnest Is. (AURTS)</div>
            </div>
          </div>
        </div>
        <div className="ds-field"><label className="ds-label">Autocomplete</label>
          <div className="ds-input-wrap"><Search size={14} /><input className="ds-input" defaultValue="MV Nor" /></div>
          <div className="ds-help">Suggests: MV Nordwind · MV Northern Light</div>
        </div>
      </div>

      <div className="sc-grid2" style={{ marginTop: 14 }}>
        <div className="ds-field"><label className="ds-label">Text Area</label>
          <textarea className="ds-textarea" placeholder="Remarks — weather, deviations, consumption anomalies…" />
        </div>
        <div className="ds-field"><label className="ds-label">File Upload</label>
          <div className="ds-upload"><UploadCloud size={20} /><span><b>Click to upload</b> or drag &amp; drop</span><span style={{ fontSize: 11 }}>BDN scan · PDF or image, max 10 MB</span></div>
        </div>
      </div>

      <Sub>Choice controls</Sub>
      <div className="sc-row" style={{ gap: 26 }}>
        <label className="ds-check"><input type="checkbox" defaultChecked /> Include EU ports</label>
        <label className="ds-check"><input type="checkbox" /> ECA zones only</label>
        <label className="ds-check"><input type="checkbox" disabled /> Disabled</label>
        <label className="ds-radio"><input type="radio" name="cond" defaultChecked /> Laden</label>
        <label className="ds-radio"><input type="radio" name="cond" /> Ballast</label>
        <label className="ds-switch"><input type="checkbox" defaultChecked /> Auto-sync</label>
        <div style={{ width: 170 }}><input type="range" className="ds-slider" defaultValue="65" /></div>
      </div>

      <Sub>Field states</Sub>
      <div className="sc-grid3">
        <div className="ds-field"><label className="ds-label">Placeholder</label><input className="ds-input" placeholder="IMO number" /></div>
        <div className="ds-field"><label className="ds-label">Filled</label><input className="ds-input" defaultValue="9483671" /></div>
        <div className="ds-field"><label className="ds-label">Focus</label><input className="ds-input focus" defaultValue="9483671" /></div>
        <div className="ds-field"><label className="ds-label">Error</label><input className="ds-input error" defaultValue="94836" /><div className="ds-help error">IMO number must be 7 digits</div></div>
        <div className="ds-field"><label className="ds-label">Disabled</label><input className="ds-input" disabled value="Managed by class society" readOnly /></div>
        <div className="ds-field"><label className="ds-label">Success</label><input className="ds-input success" defaultValue="9483671" /><div className="ds-help success">Verified against IMO registry</div></div>
      </div>
    </Section>
  )
}

/* ---------------- 7. Navigation ---------------- */
const NAV_MAIN = [
  [LayoutDashboard, 'Dashboard'], [Ship, 'Fleet', '18'], [Anchor, 'Vessels'], [Users, 'Crew'],
]
const NAV_OPS = [
  [ShoppingCart, 'Purchasing', '4'], [Package, 'Inventory'], [Wrench, 'Maintenance', '7'], [Landmark, 'Finance'],
]
const NAV_SYS = [[BarChart3, 'Reports'], [Shield, 'Administration'], [Settings, 'Settings']]

function SideNav({ collapsed }) {
  return (
    <div className={`ds-sidebar ${collapsed ? 'collapsed' : ''}`}>
      {!collapsed && <div className="ds-nav-group-label">Overview</div>}
      {NAV_MAIN.map(([Icon, label, badge], i) => (
        <div key={label} className={`ds-nav-item ${i === 1 ? 'active' : ''}`}>
          <Icon size={16} strokeWidth={1.75} />{!collapsed && label}
          {!collapsed && badge && <span className="ds-badge accent badge">{badge}</span>}
        </div>
      ))}
      {!collapsed && <div className="ds-nav-group-label">Operations</div>}
      {NAV_OPS.map(([Icon, label, badge]) => (
        <div key={label} className="ds-nav-item">
          <Icon size={16} strokeWidth={1.75} />{!collapsed && label}
          {!collapsed && badge && <span className="ds-badge error badge">{badge}</span>}
        </div>
      ))}
      {!collapsed && (
        <>
          <div className="ds-nav-item ds-nav-sub" style={{ fontSize: 12.5 }}>Requisitions</div>
          <div className="ds-nav-item ds-nav-sub" style={{ fontSize: 12.5 }}>Purchase Orders</div>
        </>
      )}
      {!collapsed && <div className="ds-nav-group-label">System</div>}
      {NAV_SYS.map(([Icon, label]) => (
        <div key={label} className="ds-nav-item">
          <Icon size={16} strokeWidth={1.75} />{!collapsed && label}
          {!collapsed && label === 'Reports' && <ChevronRight size={14} className="chev" />}
        </div>
      ))}
    </div>
  )
}

export function NavigationSection() {
  return (
    <Section id="s7" num="07" title="Navigation" note="Top bar for global concerns (search, notifications, identity); sidebar for module navigation with groups, badges and a collapsed rail variant.">
      <div className="ds-topnav" style={{ borderRadius: 'var(--ds-radius-lg)' }}>
        <span className="brand"><span className="ds-logo-mark"><Anchor size={13} /></span> Ecosail</span>
        <div className="grow" />
        <div className="ds-searchbox"><Search size={13} /><input placeholder="Search…" readOnly /><span className="kbd-hint">⌘K</span></div>
        <button className="ds-iconbtn" aria-label="Notifications"><Bell size={16} /><span className="ds-notif-dot" /></button>
        <div className="ds-avatar sm">SN</div>
      </div>
      <div className="sc-caption" style={{ marginBottom: 14 }}>Top navigation — logo, global search, notification indicator, user menu</div>

      <div className="sc-row" style={{ alignItems: 'flex-start', gap: 20 }}>
        <div>
          <SideNav />
          <div className="sc-caption">Expanded — groups, active item, badges</div>
        </div>
        <div>
          <SideNav collapsed />
          <div className="sc-caption">Collapsed rail</div>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <Sub>Breadcrumbs</Sub>
          <div className="ds-crumbs">
            <a href="#s7">Fleet</a><ChevronRight size={13} /><a href="#s7">MV Nordwind</a><ChevronRight size={13} /><span className="cur">Voyage 26-041</span>
          </div>
          <Sub>Item states</Sub>
          <div style={{ maxWidth: 220 }}>
            <div className="ds-nav-item"><Ship size={16} />Default</div>
            <div className="ds-nav-item hover"><Ship size={16} />Hover</div>
            <div className="ds-nav-item active"><Ship size={16} />Active</div>
            <div className="ds-nav-item"><Bell size={16} />With indicator<span className="ds-badge error badge">3</span></div>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ---------------- 8. Cards ---------------- */
export function CardsSection() {
  const t = useTokens(['--ds-chart-1', '--ds-chart-3'])
  const c1 = t['--ds-chart-1'] || '#2a78d6'
  const c3 = t['--ds-chart-3'] || '#1baf7a'
  return (
    <Section id="s8" num="08" title="Cards" note="One panel primitive, six compositions. Cards never exceed one shadow step at rest.">
      <div className="sc-grid3">
        <div className="ds-panel ds-kpi">
          <div className="lbl">Vessels in Operation</div>
          <div className="val">18</div>
          <div className="sub"><span className="ds-trend up"><TrendingUp size={13} />+2</span> vs last quarter</div>
        </div>
        <div className="ds-panel ds-kpi">
          <div className="lbl">Fleet Fuel Efficiency</div>
          <div className="sc-row" style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
            <div className="val">4.82 <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ds-text-3)' }}>gCO₂/t·nm</span></div>
            <Spark data={[5.4, 5.2, 5.3, 5.0, 4.9, 5.0, 4.8, 4.82]} color={c3} fill />
          </div>
          <div className="sub"><span className="ds-trend up"><TrendingDown size={13} />-3.6%</span> month over month — statistic card</div>
        </div>
        <div className="ds-panel ds-kpi">
          <div className="lbl">EU ETS Exposure YTD</div>
          <div className="val">€412k</div>
          <div className="sub"><span className="ds-trend down"><TrendingUp size={13} />+€38k</span> vs July</div>
        </div>
      </div>
      <div className="sc-grid3" style={{ marginTop: 14 }}>
        <div className="ds-panel">
          <div className="ds-panel-head"><h4>Voyage 26-041 — Summary</h4><span className="ds-badge success"><span className="dot" />At Sea</span></div>
          <div className="ds-panel-body" style={{ fontSize: 12.5, display: 'grid', gap: 7 }}>
            {[['Route', 'Santos → Qingdao'], ['ETA', '12 Aug 2026, 14:00 LT'], ['Cargo', 'Soybeans, 78,400 MT'], ['CP Speed', '12.5 kn (about)']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--ds-text-3)' }}>{k}</span><span style={{ fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ds-panel">
          <div className="ds-panel-body" style={{ display: 'flex', gap: 12 }}>
            <div style={{ color: 'var(--ds-info)' }}><Info size={18} /></div>
            <div style={{ fontSize: 12.5, color: 'var(--ds-text-2)', lineHeight: 1.5 }}>
              <b style={{ color: 'var(--ds-text)', display: 'block', marginBottom: 2 }}>MRV reporting period closes soon</b>
              EU MRV emissions reports for H1 2026 must be verified before 31 August. 3 vessels have unsubmitted data.
              <div style={{ marginTop: 8 }}><button className="ds-btn text sm" style={{ padding: 0 }}>Review submissions <ArrowRight size={13} /></button></div>
            </div>
          </div>
        </div>
        <div className="ds-panel">
          <div className="ds-panel-head"><h4>Bunker Prices — Singapore</h4><button className="ds-btn ghost icon sm" aria-label="Download"><Download size={14} /></button></div>
          <div className="ds-panel-body" style={{ fontSize: 12.5, display: 'grid', gap: 8 }}>
            {[['VLSFO', '$612/MT', [598, 604, 610, 607, 612], c1], ['MGO', '$741/MT', [755, 749, 744, 747, 741], c3]].map(([k, v, d, c]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ color: 'var(--ds-text-3)', width: 48 }}>{k}</span>
                <Spark data={d} color={c} w={110} h={22} />
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{v}</span>
              </div>
            ))}
            <div className="sc-row" style={{ marginTop: 4, gap: 8 }}>
              <button className="ds-btn outline sm" style={{ flex: 1 }}>Request quote</button>
              <button className="ds-btn primary sm" style={{ flex: 1 }}><Fuel size={13} />Plan stem</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
