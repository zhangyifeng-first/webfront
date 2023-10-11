modules.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/vue',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  rules: {
    // css中使用v-bind 不报错
    'value-keyword-case': null,
    // 禁止在具有较高优先级的选择器后出现被其覆盖的
    'no-descending-specificity': null,
    // 要求或禁止url的引号
    'function-url-quotes': 'always',
    // 关闭禁止空源码
    'no-empty-source': null,
    // 关闭强制选择器类名的格式
    'selector-class-pattern': null,
    // 禁止未知的属性
    'property-no-unknown': null,
    // 大括号前必须有一个空格或不能不
    'block-opening-brace-space-before': 'always',
    // 关闭属性前缀 -webkit-box
    'value-no-vendor-prefix': null,
    // 关闭属性前缀 -webkit-mask
    'property-no-vendor-prefix': null,
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'],
      },
    ],
  },
}
