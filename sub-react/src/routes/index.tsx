

import { BrowserRouter, HashRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { ENV, VITE_ENV, APP_COLOR_PRIMARY, ENABLEd_HASH_ROUTER } from '@/config'
import { RouteKey, rc, routePathMap, getBasePath } from '@/routes/utils'

import { AppAuth } from '@/components/AppAuth'
import { AppLayout } from '@/components/AppLayout'

import { DashboardPage } from '@/pages/Dashboard'
import { HelloPage } from '@/pages/Hello'
import { NotFoundPage } from '@/pages/NotFound'

// Router: WORKAROUND for outside
const RouterComponent: React.FC<React.PropsWithChildren> = (props) => {
  return ENABLEd_HASH_ROUTER ? (
    <HashRouter>{props.children}</HashRouter>
  ) : (
    <BrowserRouter>{props.children}</BrowserRouter>
  )
}

console.log("all router path", routePathMap)
const RouterPage: React.FC = () => {
  return (
    <RouterComponent>
      <Routes>
        <Route path="/" element={
          <AppAuth>
            <AppLayout>
              <Outlet />
            </AppLayout>
          </AppAuth>
        }>
          <Route index={true} element={<Navigate to={getBasePath(`/`)} replace />} />
          <Route path={getBasePath(`/*`)}
            element={
              <Routes> <Route index={true} element={<Navigate to={routePathMap.Dashboard} replace />} /> </Routes>
            }
          />
          <Route path={routePathMap.Dashboard} element={<DashboardPage />} />
          <Route path={routePathMap.Hello} element={<HelloPage />} />
          <Route path={rc(RouteKey.Dashboard).path} element={<DashboardPage />} />
          <Route path={rc(RouteKey.Announcement).path} element={<HelloPage />} />
          <Route path={rc(RouteKey.Category).path} element={<HelloPage />} />
          <Route path={rc(RouteKey.Tag).path} element={<HelloPage />} />
          <Route path={rc(RouteKey.Comment).path} element={<HelloPage />} />
          <Route path={rc(RouteKey.Vote).path} element={<HelloPage />} />
          <Route path={rc(RouteKey.Feedback).path} element={<HelloPage />} />
          <Route path={rc(RouteKey.Profile).path} element={<HelloPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RouterComponent>
  )
}

export default RouterPage