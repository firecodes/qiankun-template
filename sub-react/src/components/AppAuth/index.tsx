
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef, onMounted, onBeforeUnmount } from 'veact'
import { useLoading } from 'veact-use'
import { notification, Typography } from 'antd'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { routePathMap } from '@/routes/utils'

import styles from './style.module.less'

let renewalTimer: null | number = null

export const AppAuth: React.FC<React.PropsWithChildren> = (props) => {
  const navigate = useNavigate()
  const loading = useLoading()
  const isLogined = useRef(true)
  isLogined.value = true

  console.log("AppAuth create", loading, isLogined)
  onMounted(async () => {
    console.log("AppAuth onMounted", loading, isLogined)
    try {
      // 程序初始化时检查本地 Token
      console.info('Token 校验中...')
      // Token 本地校验
      // await (isTokenValid() ? Promise.resolve() : Promise.reject('本地 Token 无效'))
      // Token 远程校验
      // await loading.promise(checkTokenValidity())
      // 通过验证，则初始化 APP
      console.info('Token 验证成功，正常工作')
      // 开始自动续约 Token
      //  runRenewalToken()
      // 需要一个延时效果
      setTimeout(() => {
        isLogined.value = false
      }, 668)
    } catch (error) {
      console.warn('Token 被验证是无效的，跳登陆页：', error)
      notification.info({ message: '好久不见！', description: '你还好吗？' })
      // removeToken()
      navigate(routePathMap.Hello)
    }
  })

  onBeforeUnmount(() => {
    // stopRenewalToken()
    console.log("AppAuth onBeforeUnmount", isLogined)
  })

  return (
    <CSSTransition
      classNames="fade"
      key={Number(isLogined.value)}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false)
      }}
    >
      {isLogined.value ? (
        <div className={styles.authContainer}>{props.children}</div>
      ) : (
        <div className={styles.loading}>
          <div className={styles.animation}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Typography.Text className={styles.text} disabled>
            {loading.state.value ? '校验 Token...' : '初始化...'}
          </Typography.Text>
        </div>
      )}
    </CSSTransition>
  )
}
