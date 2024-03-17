import React from 'react'
import { useLocation, matchPath } from 'react-router-dom'
import { Breadcrumb, BackTop, Typography } from 'antd'
import * as Icon from '@ant-design/icons'
import { routeMap } from '@/routes/utils'

import styles from './style.module.less'

export const AppContent: React.FC<React.PropsWithChildren> = (props) => {
  const location = useLocation()
  const [, ...paths] = location.pathname.split('/')
  const currentRoute = Array.from(routeMap.values()).find((route) => {
    return matchPath(route.path, location.pathname)
  })

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <Typography.Title className={styles.title} level={4}>
          <span className={styles.icon}>{currentRoute?.icon}</span>
          {currentRoute?.name}
        </Typography.Title>
        <Breadcrumb className={styles.breadcrumb}>
          {paths.map((path) => (
            <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
      <div className={styles.pageContent}>{props?.children}</div>
    </div>
  )
}
