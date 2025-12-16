import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/styles/index.css'
import { MyRouter } from './router/MyRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyRouter />
  </StrictMode>
)
