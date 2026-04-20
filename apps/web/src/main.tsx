import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import posthog from "posthog-js"

import "./styles.css"
import { analytics } from "./lib/analytics"

import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import NewProjectPage from "./pages/NewProjectPage"
import WizardPage from "./pages/WizardPage"
import SettingsPage from "./pages/SettingsPage"
import HotelsPage from "./pages/HotelsPage"
import HotelDetailPage from "./pages/HotelDetailPage"
import BrandsPage from "./pages/BrandsPage"
import BrandDetailPage from "./pages/BrandDetailPage"

// Initialise PostHog
const posthogKey = import.meta.env.VITE_POSTHOG_KEY as string | undefined
if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: (import.meta.env.VITE_POSTHOG_HOST as string | undefined) ?? "https://eu.posthog.com",
    loaded: (ph) => {
      if (import.meta.env.DEV) {
        // Ensure any stale opt-out state from previous sessions is cleared in dev
        if (ph.has_opted_out_capturing()) ph.opt_in_capturing()
      }
    },
  })
}

function PageTracker() {
  const location = useLocation()
  useEffect(() => {
    analytics.page(location.pathname)
  }, [location.pathname])
  return null
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageTracker />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/:hotelCode" element={<HotelDetailPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/brands/:id" element={<BrandDetailPage />} />
        <Route path="/projects/new" element={<NewProjectPage />} />
        <Route path="/projects/:id/wizard/:step" element={<WizardPage />} />
        <Route path="/projects/:id/wizard" element={<Navigate to="1" replace />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
