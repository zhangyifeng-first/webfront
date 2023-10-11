module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  // 规则继承
  extends: [
    // 全部规则默认是关闭的，这个配置项开启推荐规则
    "eslint:recommended",
    // ts语法规则
    "plugin:@typescript-eslint/recommended",
    // vue3语法规则
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],
  // 为特定类型的文件指定处理器
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  // 指定如何解析语法
  parser: "vue-eslint-parser",
  // 优先级低于parse 的语法解析配置
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    // eslint
    // 要求使用let 或 const 而不是 var
    "no-var": "error",
    // 不允许多个空行
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 禁止空余的多行
    "no-unexpected-multiline": "error",
    // 禁止不必要的转义字符
    "no-useless-escape": "error",
    // typescript
    // 禁止使用未定义的变量
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/semi": "off",

    // eslint-plugin-vue
    "vue/multi-word-component-names": "off",
    "vue/multi-word-component-names": "error",
    "vue/no-mutating-props": "error",
    "vue/attribute-hyphenation": "off",
  },
};
