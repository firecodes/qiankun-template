
import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'

import styles from './style.module.less'

export const HelloPage: React.FC = () => (
  <div className={styles.pageMain}>
    <Result
      status="info"
      title="Hello Page 2222222"
      extra={
        <Link to="/">
          <Button type="link">Go Home</Button>
        </Link>
      }
    />
  </div>
)
