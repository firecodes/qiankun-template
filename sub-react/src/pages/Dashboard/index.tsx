
import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'

import styles from './style.module.less'

export const DashboardPage: React.FC = () => (
  <div className={styles.pageMain}>
    <Result
      status="info"
      title="Dashboard Page 111111"
      extra={
        <Link to="/">
          <Button type="link">Go Home</Button>
        </Link>
      }
    />
  </div>
)
