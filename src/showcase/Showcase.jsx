import './themes.css'
import './showcase.css'
import { ShowcaseCtx } from './bits.jsx'
import { ThemeSection, ColorSection, TypographySection, IconsSection } from './Foundations.jsx'
import { ButtonsSection, InputsSection, NavigationSection, CardsSection } from './Controls.jsx'
import { TablesSection, ChartsSection, StatusSection, AlertsSection, FormsSection } from './DataViz.jsx'
import { ModalsSection, TabsSection, EmptyStatesSection, AvatarsSection, ChipsSection, ProgressSection, MenusSection, CalendarSection } from './Patterns.jsx'
import { SpacingSection, ShadowsSection, RadiusSection, AnimationsSection, DashboardSection } from './System.jsx'

const TOC = [
  'Theme Preview', 'Color Palette', 'Typography', 'Icons', 'Buttons', 'Inputs', 'Navigation', 'Cards',
  'Tables', 'Charts', 'Status Indicators', 'Alerts & Feedback', 'Forms', 'Modals & Drawers', 'Tabs',
  'Empty States', 'Avatars', 'Chips & Tags', 'Progress', 'Menus', 'Calendar', 'Spacing & Layout',
  'Shadows', 'Border Radius', 'Animations', 'Dashboard Preview',
]

const THEME_TAGLINE = {
  ensign: 'Ensign — shipping-line livery with ocean accents. Cream decks, deep navy hulls, azure-ocean and sea-green worked in. Signage type, uppercase controls, a livery stripe. Heritage worn proudly.',
}

export default function Showcase({ theme, mode, setMode }) {
  return (
    <ShowcaseCtx.Provider value={{ theme, mode, setMode }}>
      <div className={`ds theme-${theme} ${mode}`}>
        <div className="sc-shell">
          <nav className="sc-toc" aria-label="Sections">
            {TOC.map((t, i) => (
              <a key={t} href={`#s${i + 1}`}><span className="n">{String(i + 1).padStart(2, '0')}</span>{t}</a>
            ))}
          </nav>
          <main className="sc-content">
            <div className="sc-hero">
              <div className="eyebrow">Maritime ERP · Design System</div>
              <h1>{theme[0].toUpperCase() + theme.slice(1)} Design System</h1>
              <p>{THEME_TAGLINE[theme]} One token contract, twenty-six sections, light and dark. Every screen in the application is built from what is on this page.</p>
            </div>
            <ThemeSection />
            <ColorSection />
            <TypographySection />
            <IconsSection />
            <ButtonsSection />
            <InputsSection />
            <NavigationSection />
            <CardsSection />
            <TablesSection />
            <ChartsSection />
            <StatusSection />
            <AlertsSection />
            <FormsSection />
            <ModalsSection />
            <TabsSection />
            <EmptyStatesSection />
            <AvatarsSection />
            <ChipsSection />
            <ProgressSection />
            <MenusSection />
            <CalendarSection />
            <SpacingSection />
            <ShadowsSection />
            <RadiusSection />
            <AnimationsSection />
            <DashboardSection />
          </main>
        </div>
      </div>
    </ShowcaseCtx.Provider>
  )
}
