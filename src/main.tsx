import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import i18n from './i18n/i18n'
import { useLangStore } from './store/useLangStore'

// "?lang=ar" / "?lang=en" opens the site in that language (used by the hreflang links for Google)
const urlLang = new URLSearchParams(window.location.search).get('lang')
if (urlLang === 'ar' || urlLang === 'en') {
  useLangStore.getState().setLanguage(urlLang)
  i18n.changeLanguage(urlLang)
}

createRoot(document.getElementById('root')!).render(
  <App />
)
