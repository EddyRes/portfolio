import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

function RoutedApp() {
  const [, setRoute] = useState(window.location.hash)
  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])
  return <App />
}

createRoot(document.getElementById('root')!).render(<StrictMode><RoutedApp /></StrictMode>)
