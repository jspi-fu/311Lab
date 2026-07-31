# 311LAB 网络舆情安全实验室 Web 门户

本项目为江苏警官学院 · 国家安全学院「网络舆情安全实验室（青朗先锋团队）」的官方招新宣传与科研成果展示 Web 门户网站。

网页基于现代前端技术栈构建，采用极客与警务科技感相结合的暗色设计风格，呈现实验室在网络舆情安全、大语言模型垂直应用、学科竞赛战绩及个人发展素拓等方面的核心成果。

---

## 技术栈与核心依赖

- 核心框架：React 18 + Vite 6 + TypeScript 5（Strict Mode）
- 路由管理：React Router DOM (HashRouter 模式)
- 样式系统：Tailwind CSS v4（@tailwindcss/vite 插件模式）
- 动效与微交互：Framer Motion 11
- 图标库：Lucide React
- 字体系统：Noto Sans SC（中文字体） + Almarai（拉丁与数字 Display 字体） + Instrument Serif

---

## 页面模块

- 首页 (/)：包含 Hero 动态背景视频、核心战绩计分板 (Ops Scoreboard)、实验室宣言、四维优势轮播 (Capabilities Carousel)、选拔考核 Terminal Rules 规范及发展规划时间线。
- 获奖成果 (/achievements)：展示国家级与省级学科竞赛获奖矩阵、大创项目产出及发表论文记录。
- 个人发展 (/development)：解构 6211 综合评价体系胜负手，展示素拓分加分细则与公安一线地市实战对接网络拓扑。
- 实验室概况 (/overview)：展示 311 战术空间 80 平米 30 工位硬件设施清单及六大 AI 前沿科研矩阵。
- 加入我们 (/join)：面向全院 26 级新生的三步选拔考核流程、推荐编程语言及纪律规范。

---

## 项目目录结构

```
311Lab/
├── public/
│   ├── logo.png           # 实验室官方 Logo
│   └── _redirects         # Netlify 部署 SPA 回退配置
├── src/
│   ├── components/        # 独立复用 UI 组件与动画原语
│   ├── pages/             # 页面路由组件 (Home, Overview, Join, Development, Achievements)
│   ├── App.tsx            # HashRouter 路由配置与全局布局包装
│   ├── index.css          # Tailwind CSS v4 @theme 令牌与全局样式
│   └── main.tsx           # 应用入口文件
├── index.html             # HTML 模板与 Google Fonts 引入
├── package.json           # 项目依赖与运行脚本
├── tsconfig.json          # TypeScript 编译器配置
└── vite.config.ts         # Vite 构建与路径别名配置
```

---

## 本地开发与构建

项目统一推荐使用 **pnpm** 作为包管理器。

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

### 3. 类型检查与生产打包

```bash
# 静态类型检查
pnpm lint

# 生产环境打包 (先运行 tsc 类型检查，后执行 vite build)
pnpm build

# 本地预览打包产物
pnpm preview
```

---

## 静态资源与部署规范

- 静态资源策略：大体积媒体资源（如 Hero 动态背景视频）已通过 .gitignore 排除，运行时通过在线 CDN 托管；轻量静态图片资源保留在 public/ 目录下。
- 静态部署支持：项目构建产物位于 dist/ 目录，支持部署至 Netlify、Vercel、GitHub Pages 或静态 Web 服务器。
