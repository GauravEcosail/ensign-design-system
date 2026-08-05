import { useState } from 'react'
import Showcase from './showcase/Showcase.jsx'

export default function App() {
  const [mode, setMode] = useState('light')

  return (
    <>
      <nav className="switcher">
        <span className="switcher-brand">Ecosail · Ensign Design System</span>
        <span style={{ flex: 1 }} />
        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          {mode === 'light' ? '◐ Dark' : '◑ Light'}
        </button>
      </nav>
      <Showcase theme="ensign" mode={mode} setMode={setMode} />
    </>
  )
}
