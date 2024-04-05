import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import '@/styles/app.less'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
