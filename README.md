# react 后台管理系统模板

1. 创建项目

```bash
pnpm create vite react-admin --template react-ts
```

2. 安装依赖

2.1 `antd`

```bash
pnpm add antd @ant-design/icons
```

2.2 `tailwindcss`

```bash
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- 如何解决 `antd` 样式与 `tailwindcss` 预设样式冲突?

  `tailwind.config.js` 添加 `corePlugins: { preflight: false }`
