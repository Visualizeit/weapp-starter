## 项目概述

微信小程序项目，使用 wevu（Vue 3 小程序运行时）+ TailwindCSS。包管理器使用 **pnpm**。

## 交流风格

In all interactions and commit messages, be extremely concise and sacrifice grammar for the sake of concision.

## 技术规范

### wevu 核心约束

**响应式 API**
- 必须从 `wevu` 导入，不是 `vue`
- 支持：`ref()`、`reactive()`、`computed()`、`watch()`
- 不支持：`h()`、`Transition`、`KeepAlive`、`Teleport`、`onRenderTracked()`

**生命周期钩子**
- 必须在 `setup()` 同步阶段注册，`await` 后注册会失效
- Vue 映射：`onMounted` → `onReady`，`onUnmounted` → `onUnload`，`onActivated` → `onShow`
- 页面事件：`onPageScroll`、`onReachBottom`、`onPullDownRefresh`、`onShareAppMessage`、`onTabItemTap`

**配置宏**
- `defineAppJson()` - 应用配置
- `definePageJson()` - 页面配置
- `defineComponentJson()` - 组件配置
- 宏必须在 `<script setup>` 顶层同步调用，不可在条件语句或异步代码中使用

**数据更新机制**
- wevu 在 `created` 阶段缓冲更新，在 `attached`/`onLoad` 时才刷新到 `setData()`
- 仅变更的路径会被发送，如 `{ 'a.b.c': nextValue }`

### 模板约束

**标签使用**
- 使用小程序原生标签：`<view>`、`<text>`、`<image>`、`<scroll-view>`、`<swiper>` 等
- 不要使用 HTML 标签如 `<div>`、`<span>`、`<img>`

**事件绑定**
- 使用 `@tap` 而非 `@click`
- 事件参数通过 `$event.detail` 访问

**v-model 限制**
- 不支持参数语法：`v-model:title`
- 不支持修饰符：`.trim`、`.number`、`.lazy`
- 支持的表单元素：`input`、`textarea`、`select`、`switch`、`slider`、`picker`

**v-bind 限制**
- 对象展开语法 `v-bind="object"` 不会生成属性
- 需使用显式绑定：`:prop="value"` 和 `@event="handler"`

### 组件注册

- 组件必须在 JSON 配置的 `usingComponents` 中声明路径
- 不像 Web Vue 通过 import 导入组件
- 组件的 JSON 配置需包含 `"component": true`
- 注意路径大小写敏感

### 状态管理

- 使用 `defineStore(id, setup)` 定义 store
- 从 `wevu` 导入，不支持 `wevu/store` 子路径
- 使用 `storeToRefs()` 解构时保持响应性
- 支持 `$patch()`、`$reset()`（仅 Options Store）、`$subscribe()`、`$onAction()`

### 样式

- rem 单位自动转换为 rpx
- 小程序选择器限制仍然适用

## 参考文档

- wevu 文档：https://vite.icebreaker.top/wevu/
- 微信小程序文档：https://developers.weixin.qq.com/miniprogram/dev/framework/
