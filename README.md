# 项目名称

## 技术栈

- Vue 3
- Vue Router
- Pinia
- SCSS

## 目录结构

- `src/` - 源代码目录
  - `App.vue` - 应用的主组件
  - `components/` - 存放可复用组件的目录
    - `BaseFooter.vue` - 底部导航组件
  - `pages/` - 存放页面组件的目录
    - `home/` - 首页组件
    - `shop/` - 商城页面组件
    - `message/` - 消息页面组件
    - `me/` - 个人中心页面组件
  - `router/` - 路由配置目录
    - `routes.js` - 路由定义
  - `store/` - 状态管理目录
  - `utils/` - 工具函数目录
    - `hooks/` - 自定义 hooks
      - `useNav.js` - 导航功能的自定义 hook
  - `styles/` - 样式文件目录

## 安装与运行

1. 克隆项目：

   ```bash
   git clone <项目地址>
   ```

2. 进入项目目录：

   ```bash
   cd <项目目录>
   ```

3. 安装依赖：

   ```bash
   npm install
   ```

4. 启动开发服务器：
   ```bash
   npm run serve
   ```

## 主要功能

- 动态路由导航
- 响应式设计
- 状态管理
- 自定义 hooks

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证

本项目采用 MIT 许可证，详细信息请查看 LICENSE 文件。
