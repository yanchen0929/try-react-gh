import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import 'antd-mobile'
import './assets/styles/reset.css'
import 'swiper/css/swiper.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/fonts/iconfont.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
