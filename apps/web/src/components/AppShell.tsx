import type { ReactNode } from "react"
import {
  HomeOutlined,
  NotificationOutlined,
  ProjectOutlined,
  CalendarOutlined,
  PictureOutlined,
  BarChartOutlined,
  AppstoreOutlined,
  BellOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

type NavKey = "home" | "campaign" | "projects" | "calendar" | "media" | "analytics"

interface Props {
  children: ReactNode
  activeNav?: NavKey
}

const NAV_ITEMS: { icon: ReactNode; key: NavKey; path?: string }[] = [
  { icon: <HomeOutlined />, key: "home", path: "/dashboard" },
  { icon: <NotificationOutlined />, key: "campaign" },
  { icon: <ProjectOutlined />, key: "projects" },
  { icon: <CalendarOutlined />, key: "calendar" },
  { icon: <PictureOutlined />, key: "media" },
  { icon: <BarChartOutlined />, key: "analytics" },
]

export default function AppShell({ children, activeNav = "home" }: Props) {
  const navigate = useNavigate()

  return (
    <div className="app-shell">
      <nav className="app-sidebar">
        <div className="app-sidebar-logo">DS</div>
        {NAV_ITEMS.map((item) => (
          <div
            key={item.key}
            className={`app-sidebar-icon${item.key === activeNav ? " active" : ""}`}
            onClick={() => item.path && navigate(item.path)}
          >
            {item.icon}
          </div>
        ))}
      </nav>

      <div className="app-main">
        <header className="app-header">
          <div className="app-header-brand">
            <div className="app-header-logo-mark">DS</div>
            <span className="app-header-brand-name">DerbySoft</span>
          </div>

          <div className="app-header-actions">
            <div className="app-header-icon-btn"><AppstoreOutlined /></div>
            <div className="app-header-icon-btn"><BellOutlined /></div>
            <div className="app-header-icon-btn"><QuestionCircleOutlined /></div>
            <div
              className="app-header-avatar"
              onClick={() => navigate("/settings")}
              title="Settings"
            >
              DW
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  )
}
