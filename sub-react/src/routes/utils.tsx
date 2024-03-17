
import React from 'react'
import { generatePath } from 'react-router-dom'
import * as Icon from '@ant-design/icons'
import { ROUTER_BASE } from '@/config'

export enum RouteKey {
  Hello,
  Dashboard,
  Profile,
  Announcement,
  Category,
  Tag,
  Comment,
  Disqus,
  DisqusThread,
  DisqusPost,
  DisqusSync,
  Vote,
  Feedback,
  Article,
  ArticleList,
  ArticlePost,
  ArticleEdit
}

export interface RouteConfig {
  id: RouteKey
  name: string
  path: string
  subPath?: string
  icon?: React.ReactElement
  pather?(...args: Array<any>): string
}
export const getBasePath = (path: string) => {
  return `${ROUTER_BASE}${path}`
}
export const routeMap: ReadonlyMap<RouteKey, RouteConfig> = new Map(
  [
    {
      id: RouteKey.Hello,
      name: '来者何人',
      path: getBasePath('/hello'),
    },
    {
      id: RouteKey.Dashboard,
      name: '超级看板',
      path: getBasePath('/dashboard'),
      icon: <Icon.DashboardOutlined />
    },
    {
      id: RouteKey.Profile,
      name: '系统设置',
      path: getBasePath('/profile'),
      icon: <Icon.SettingOutlined />
    },
    {
      id: RouteKey.Announcement,
      name: '公告管理',
      path: getBasePath('/announcement'),
      icon: <Icon.SoundOutlined />
    },
    {
      id: RouteKey.Category,
      name: '文章分类',
      path: getBasePath('/category'),
      icon: <Icon.FolderOpenOutlined />
    },
    {
      id: RouteKey.Tag,
      name: '文章标签',
      path: getBasePath('/tag'),
      icon: <Icon.TagsOutlined />
    },
    {
      id: RouteKey.Comment,
      name: '评论管理',
      path: getBasePath('/comment'),
      icon: <Icon.CommentOutlined />
    },
    {
      id: RouteKey.Vote,
      name: '表态记录',
      path: getBasePath('/vote'),
      icon: <Icon.LikeOutlined />
    },
    {
      id: RouteKey.Feedback,
      name: '站点反馈',
      path: getBasePath('/feedback'),
      icon: <Icon.BulbOutlined />
    },
    {
      id: RouteKey.Disqus,
      name: 'Disqus',
      path: getBasePath('/disqus'),
      icon: <Icon.MessageOutlined />
    },
    {
      id: RouteKey.DisqusPost,
      name: 'Posts',
      path: getBasePath('/disqus/posts'),
      subPath: 'posts',
      icon: <Icon.MessageOutlined />
    },
    {
      id: RouteKey.DisqusThread,
      name: 'Threads',
      path: getBasePath('/disqus/threads'),
      subPath: 'threads',
      icon: <Icon.AppstoreOutlined />
    },
    {
      id: RouteKey.DisqusSync,
      name: 'Synchronize',
      path: getBasePath('/disqus/synchronize'),
      subPath: 'synchronize',
      icon: <Icon.CloudSyncOutlined />
    },
    {
      id: RouteKey.Article,
      name: '文章管理',
      path: getBasePath('/article'),
      icon: <Icon.CoffeeOutlined />
    },
    {
      id: RouteKey.ArticleList,
      name: '文章列表',
      path: getBasePath('/article/list'),
      subPath: 'list',
      icon: <Icon.OrderedListOutlined />
    },
    {
      id: RouteKey.ArticlePost,
      name: '新撰文章',
      path: getBasePath('/article/post'),
      subPath: 'post',
      icon: <Icon.EditOutlined />
    },
    {
      id: RouteKey.ArticleEdit,
      name: '编辑文章',
      path: getBasePath('/article/edit/:article_id'),
      subPath: getBasePath('edit/:article_id'),
      icon: <Icon.EditOutlined />,
      pather(article_id: string) {
        return generatePath(this.path, { article_id })
      }
    }
  ].map((route) => [route.id, route])
)

export const rc = (routeKey: RouteKey): RouteConfig => {
  return routeMap.get(routeKey)!
}
export const rcByPath = (routePath: string) => {
  return Array.from(routeMap.values()).find((route) => route.path === routePath)
}
export const isRoute = (routePath: string, routeKey: RouteKey) => {
  return routeMap.get(routeKey)?.path === routePath
}
export const routePathMap = {
  Dashboard: rc(RouteKey.Dashboard).path,
  Hello: rc(RouteKey.Hello).path,
}
