import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { CmsProvider } from './lib/CmsContext'
import './index.css'
import App from './App.jsx'
import PaintingsPage from './pages/PaintingsPage'
import PaintingDetail from './pages/PaintingDetail'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
      <CmsProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/paintings" element={<PaintingsPage />} />
          <Route path="/paintings/:slug" element={<PaintingDetail />} />
        </Routes>
      </CmsProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
