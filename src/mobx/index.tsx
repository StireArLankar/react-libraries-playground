import React, { useRef, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStores } from './context'
import { Counter1, Counter1View, Control1 } from './Counter1'
import { Counter2, Counter2View, Control2 } from './Counter2'

// src/components/ThemeToggler.tsx
export const ThemeToggler = observer(() => {
  const { themeStore } = useStores()

  const ref = useRef(0)

  useEffect(() => void ref.current++)

  return (
    <>
      <div>{themeStore.theme}</div>
      <button onClick={() => themeStore.setTheme('light')}>set theme: light</button>
      <button onClick={() => themeStore.setTheme('dark')}>set theme: dark</button>
      <p>Component renders: {ref.current}</p>
    </>
  )
})

// src/App.tsx
const App = () => (
  <main>
    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'pre', margin: 10 }}>
      <Counter1 />
      <div style={{ width: 50 }} />
      <Counter1View />
      <div style={{ width: 50 }} />
      <Control1 />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'pre', margin: 10 }}>
      <Counter2 />
      <div style={{ width: 50 }} />
      <Counter2View />
      <div style={{ width: 50 }} />
      <Control2 />
    </div>
    <ThemeToggler />
  </main>
)

export default App
