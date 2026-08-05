import { Section, Sub, Swatch, useTokens, useShowcase } from './bits.jsx'
import {
  LayoutDashboard, Ship, Users, ShoppingCart, Package, Wrench, Landmark, BarChart3, Shield, Settings,
  Plus, Pencil, Trash2, Copy, Download, Upload, RefreshCw, Filter, Search, Save,
  CheckCircle2, AlertTriangle, XCircle, Info, Clock, HelpCircle,
  Anchor, Compass, Waves, Navigation, LifeBuoy, Container, Fuel, Wind, MapPin,
  Bell, BellRing, Mail, MessageSquare, Inbox,
  FileText, FileSpreadsheet, FileImage, FileArchive, FileCode, Paperclip,
  Sun, Moon,
} from 'lucide-react'

/* ---------------- 1. Theme Preview ---------------- */
function MiniTheme({ mode }) {
  const { theme } = useShowcase()
  return (
    <div className={`ds theme-${theme} ${mode}`} style={{ minHeight: 0, borderRadius: 'var(--ds-radius-lg)', border: '1px solid var(--ds-border)', overflow: 'hidden' }}>
      <div style={{ padding: 16, background: 'var(--ds-bg)' }}>
        <div className="t-overline" style={{ marginBottom: 10 }}>{mode} theme</div>
        <div className="ds-panel" style={{ padding: 14, marginBottom: 10 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>MV Nordwind</div>
          <div className="t-caption" style={{ marginBottom: 10 }}>Noon report NR-1284 · 04 Aug, 06:00 UTC</div>
          <div className="sc-row">
            <button className="ds-btn primary sm">Approve</button>
            <button className="ds-btn outline sm">Review</button>
            <span className="ds-badge warning"><span className="dot" />Pending</span>
          </div>
        </div>
        <div className="sc-row">
          {['--ds-bg', '--ds-surface', '--ds-surface-2', '--ds-surface-3'].map((v) => (
            <div key={v} style={{ flex: 1 }}>
              <div style={{ height: 26, borderRadius: 'var(--ds-radius-sm)', background: `var(${v})`, border: '1px solid var(--ds-border)' }} />
              <div className="t-caption" style={{ marginTop: 3, fontSize: 10 }}>{v.replace('--ds-', '')}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ThemeSection() {
  const { mode, setMode } = useShowcase()
  return (
    <Section id="s1" num="01" title="Theme Preview" note="Every token has a light and a dark value. The switch below drives the whole page; each surface tier sits one step off the background.">
      <div className="sc-row" style={{ marginBottom: 16 }}>
        <div className="ds-seg" role="tablist" aria-label="Theme">
          <button className={mode === 'light' ? 'active' : ''} onClick={() => setMode('light')}><Sun size={13} style={{ verticalAlign: '-2px', marginRight: 5 }} />Light</button>
          <button className={mode === 'dark' ? 'active' : ''} onClick={() => setMode('dark')}><Moon size={13} style={{ verticalAlign: '-2px', marginRight: 5 }} />Dark</button>
        </div>
        <label className="ds-switch"><input type="checkbox" checked={mode === 'dark'} onChange={(e) => setMode(e.target.checked ? 'dark' : 'light')} /> Dark mode</label>
      </div>
      <div className="sc-grid2">
        <MiniTheme mode="light" />
        <MiniTheme mode="dark" />
      </div>
      <Sub>Elevation</Sub>
      <div className="sc-grid4">
        {[['No shadow', 'none'], ['Small', 'var(--ds-shadow-sm)'], ['Medium', 'var(--ds-shadow-md)'], ['Large', 'var(--ds-shadow-lg)']].map(([n, s]) => (
          <div key={n} className="sc-elev-tile" style={{ boxShadow: s === 'none' ? 'none' : s }}>{n}</div>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- 2. Color Palette ---------------- */
const SEMANTIC = [
  ['Primary', '--ds-primary'], ['Secondary', '--ds-secondary'], ['Accent', '--ds-accent'],
  ['Success', '--ds-success'], ['Warning', '--ds-warning'], ['Error', '--ds-error'], ['Info', '--ds-info'],
]
const EXTRA = [
  ['Border', '--ds-border'], ['Divider', '--ds-divider'], ['Disabled', '--ds-disabled-bg'],
  ['Hover', '--ds-hover'], ['Selected', '--ds-selected'], ['Focus', '--ds-focus'], ['Overlay', '--ds-overlay'],
]
const GRAYS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']

export function ColorSection() {
  const tokens = useTokens([
    ...SEMANTIC.map(([, v]) => v), ...EXTRA.map(([, v]) => v),
    ...GRAYS.map((g) => `--ds-gray-${g}`),
  ])
  return (
    <Section id="s2" num="02" title="Color Palette" note="All values resolve live from the active theme's token set — switch theme or mode and this section re-reads them.">
      <Sub>Semantic</Sub>
      <div className="sc-row">
        {SEMANTIC.map(([n, v]) => <Swatch key={v} name={n} varName={v} value={tokens[v]?.toUpperCase()} />)}
      </div>
      <Sub>Neutral scale — Gray 50–900</Sub>
      <div className="sc-ramp">
        {GRAYS.map((g, i) => (
          <div key={g} style={{ background: `var(--ds-gray-${g})` }}>
            <span style={{ color: i < 5 ? 'var(--ds-gray-900)' : 'var(--ds-gray-50)' }}>{g}</span>
          </div>
        ))}
      </div>
      <div className="sc-caption">{GRAYS.map((g) => tokens[`--ds-gray-${g}`]?.toUpperCase()).join(' · ')}</div>
      <Sub>Interaction &amp; structure</Sub>
      <div className="sc-row">
        {EXTRA.map(([n, v]) => <Swatch key={v} name={n} varName={v} value={tokens[v]?.toUpperCase()} />)}
      </div>
      <Sub>Usage</Sub>
      <div className="sc-stage sc-row" style={{ gap: 18 }}>
        <button className="ds-btn primary">Primary action</button>
        <a href="#s2" style={{ color: 'var(--ds-accent)', fontWeight: 600, fontSize: 13 }}>Accent link</a>
        <span className="ds-badge success"><span className="dot" />Success</span>
        <span className="ds-badge warning"><span className="dot" />Warning</span>
        <span className="ds-badge error"><span className="dot" />Error</span>
        <span className="ds-badge info"><span className="dot" />Info</span>
        <input className="ds-input focus" style={{ width: 150 }} defaultValue="Focus ring" readOnly />
        <span style={{ background: 'var(--ds-selected)', padding: '5px 10px', borderRadius: 'var(--ds-radius-sm)', fontSize: 12.5 }}>Selected row</span>
      </div>

      <Sub>Gradients</Sub>
      <div className="sc-row" style={{ gap: 14, alignItems: 'stretch' }}>
        {[
          ['Brand', '--ds-grad-brand', 'hero banners, login, empty-state headers'],
          ['Accent', '--ds-grad-accent', 'CTAs, meters, avatar fallbacks, highlights'],
          ['Wash', '--ds-grad-wash', 'page atmosphere — fog, glow, paper light'],
        ].map(([n, v, use]) => (
          <div key={v} className="sc-grad-tile">
            <div className="chip" style={{ background: `var(${v})` }} />
            <div className="nm">{n} · <code style={{ fontFamily: 'var(--ds-font-mono)', fontSize: 10.5, color: 'var(--ds-text-3)' }}>{v}</code></div>
            <div className="use">{use}</div>
          </div>
        ))}
      </div>
      <Sub>Gradient usage</Sub>
      <div className="ds-hero-banner" style={{ marginBottom: 14 }}>
        <div>
          <h3>Welcome back, Superintendent</h3>
          <p>2 noon reports await approval · MT Aegean Star sync is lagging 4h</p>
        </div>
        <button className="ds-btn">Review queue</button>
      </div>
      <div className="sc-wash-demo sc-row" style={{ gap: 18 }}>
        <button className="ds-btn grad">Gradient CTA</button>
        <div className="ds-avatar md grad">AS</div>
        <div style={{ width: 180 }}>
          <div className="t-caption" style={{ marginBottom: 4 }}>Voyage progress — 62%</div>
          <div className="ds-progress"><div className="grad" style={{ width: '62%' }} /></div>
        </div>
        <span className="ds-grad-text" style={{ fontSize: 20 }}>18 vessels at sea</span>
        <span className="t-caption">— section washed with --ds-grad-wash</span>
      </div>
    </Section>
  )
}

/* ---------------- 3. Typography ---------------- */
const TYPE_STYLES = [
  ['Display', 't-display', 'display · 40px / 1.1 · 700 · -0.02em'],
  ['Heading 1', 't-h1', 'display · 28px / 1.2 · 700 · -0.02em'],
  ['Heading 2', 't-h2', 'display · 22px / 1.25 · 700 · -0.01em'],
  ['Heading 3', 't-h3', 'ui · 18px / 1.3 · 600 · -0.01em'],
  ['Heading 4', 't-h4', 'ui · 16px / 1.35 · 600 · 0'],
  ['Heading 5', 't-h5', 'ui · 14px / 1.4 · 600 · 0'],
  ['Body Large', 't-body-lg', 'ui · 15px / 1.55 · 400 · 0'],
  ['Body', 't-body', 'ui · 13.5px / 1.5 · 400 · 0'],
  ['Small', 't-small', 'ui · 12.5px / 1.45 · 400 · 0'],
  ['Caption', 't-caption', 'ui · 11.5px / 1.4 · 400 · 0'],
  ['Overline', 't-overline', 'ui · 11px / 1.4 · 600 · +0.09em · uppercase'],
]

export function TypographySection() {
  return (
    <Section id="s3" num="03" title="Typography" note="Two families per theme: a display face for page and section titles, the UI face for everything else, plus a mono face for figures and code.">
      {TYPE_STYLES.map(([name, cls, meta]) => (
        <div key={cls} className="sc-type-row">
          <div className={cls}>{name} — Fleet performance at a glance</div>
          <div className="sc-type-meta">{meta}</div>
        </div>
      ))}
    </Section>
  )
}

/* ---------------- 4. Icons ---------------- */
const ICON_GROUPS = [
  ['Navigation', [[LayoutDashboard, 'dashboard'], [Ship, 'fleet'], [Users, 'crew'], [ShoppingCart, 'purchasing'], [Package, 'inventory'], [Wrench, 'maintenance'], [Landmark, 'finance'], [BarChart3, 'reports'], [Shield, 'admin'], [Settings, 'settings']]],
  ['Actions', [[Plus, 'create'], [Pencil, 'edit'], [Trash2, 'delete'], [Copy, 'copy'], [Download, 'download'], [Upload, 'upload'], [RefreshCw, 'sync'], [Filter, 'filter'], [Search, 'search'], [Save, 'save']]],
  ['Status', [[CheckCircle2, 'success'], [AlertTriangle, 'warning'], [XCircle, 'error'], [Info, 'info'], [Clock, 'pending'], [HelpCircle, 'help']]],
  ['Maritime', [[Ship, 'vessel'], [Anchor, 'anchorage'], [Compass, 'heading'], [Waves, 'sea state'], [Navigation, 'course'], [LifeBuoy, 'safety'], [Container, 'cargo'], [Fuel, 'bunkers'], [Wind, 'weather'], [MapPin, 'port']]],
  ['Notifications', [[Bell, 'alert'], [BellRing, 'urgent'], [Mail, 'message'], [MessageSquare, 'comment'], [Inbox, 'inbox']]],
  ['Files', [[FileText, 'document'], [FileSpreadsheet, 'sheet'], [FileImage, 'image'], [FileArchive, 'archive'], [FileCode, 'export'], [Paperclip, 'attachment']]],
]

export function IconsSection() {
  return (
    <Section id="s4" num="04" title="Icons" note="One library — Lucide — used consistently at 1.75px stroke. Default size 16px inline, 20px in navigation, 24px+ for empty states.">
      {ICON_GROUPS.map(([group, icons]) => (
        <div key={group}>
          <Sub>{group}</Sub>
          <div className="sc-icon-grid">
            {icons.map(([Icon, name]) => (
              <div key={name} className="sc-icon-tile"><Icon size={18} strokeWidth={1.75} /><em>{name}</em></div>
            ))}
          </div>
        </div>
      ))}
      <Sub>Sizes</Sub>
      <div className="sc-row" style={{ alignItems: 'flex-end', gap: 22 }}>
        {[14, 16, 20, 24, 32].map((s) => (
          <div key={s} style={{ textAlign: 'center', color: 'var(--ds-text-2)' }}>
            <Anchor size={s} strokeWidth={1.75} />
            <div className="t-caption">{s}px</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
