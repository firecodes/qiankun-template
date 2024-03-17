

import { BrowserRouter, HashRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { ENV, VITE_ENV, APP_COLOR_PRIMARY, ENABLEd_HASH_ROUTER, ROUTER_BASE } from '@/config'
import { RouteKey, rc } from '@/routes/utils'

import { DashboardPage } from '@/pages/Dashboard'
import { HelloPage } from '@/pages/Hello'
import { NotFoundPage } from '@/pages/NotFound'

export const getBasePath = (path: string) => {
  return `${ROUTER_BASE}${path}`
}

// Router: WORKAROUND for outside
const RouterComponent: React.FC<React.PropsWithChildren> = (props) => {
  return ENABLEd_HASH_ROUTER ? (
    <HashRouter>{props.children}</HashRouter>
  ) : (
    <BrowserRouter>{props.children}</BrowserRouter>
  )
}
const routeMap = {
  Dashboard: getBasePath(rc(RouteKey.Dashboard).path),
  Hello: getBasePath(rc(RouteKey.Hello).path),
}

console.log("all router path", routeMap)
const RouterPage: React.FC = () => {
  return (
    <RouterComponent>
      <Routes>
        <Route path="/">
          <Route index={true} element={<Navigate to={getBasePath(`/`)} replace />} />
          <Route path={getBasePath(`/*`)}
            element={
              <Routes> <Route index={true} element={<Navigate to={routeMap.Dashboard} replace />} /> </Routes>
            }
          />
          <Route path={routeMap.Dashboard} element={<DashboardPage />} />
          <Route path={routeMap.Hello} element={<HelloPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RouterComponent>
  )
}

export default RouterPage