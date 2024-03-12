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

2.3 `eslint`

```bash
pnpm add -D eslint eslint-config-react-app
```

`.eslintrc.cjs`

```cjs
module.exports = {
  extends: ['react-app', 'prettier'],
};
```

>虽然 create-react-app 被淘汰了，但它的 ESLint 规则还是最权威的，开发 React 项目的最佳规范！

2.4 `prettier`

`.prettierrc.cjs`

```cjs
module.exports = {
  singleQuote: true,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  organizeImportsSkipDestructiveCodeActions: true,
};
```

>prettier-plugin-organize-imports，对 import 进行自动排序的 Prettier 插件 \
>prettier-plugin-tailwindcss，对 Tailwind CSS 的 className 进行自动排序的 Prettier 插件

参考: <https://zhuanlan.zhihu.com/p/552344435>

2.5 配置 `vscode` 自动格式化

`.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true
}
```
