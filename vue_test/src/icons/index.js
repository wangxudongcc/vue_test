// index.js 内代码
import Vue from 'vue'
// import SvgIcon from '@/components/SvgIcon'// svg component svg组件
//TODO:

// register globally 全局注册
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
