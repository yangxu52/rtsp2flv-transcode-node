module.exports = {
  arrowParens: 'always', //  是否在箭头函数仅有一个参数时也给参数加上括号
  bracketSpacing: true, // 是否在括号内添加空格（对象、数组等）
  htmlWhitespaceSensitivity: 'ignore', // 指定HTML标签中空格的处理方式。css:将块级元素中的空格进行格式化、strict：所有空格都不格式化、 ignore：所有空格格式化
  singleAttributePerLine: false, // 在html、vue、jsx中，是否启用标签多个属性时候，每个属性单独占一行
  insertPragma: false, // 是否自动插入 @format 的特殊注释，以表明改文件已经被 Prettier 格式化过了
  bracketSameLine: true, // 在HTML、JSX、Vue、Angular中，是否将有多个属性标签的 > 放在最后一个属性的末尾，而不是另起一行
  jsxBracketSameLine: false, // 是否将有多个属性的jsx标签的 > 放在最后一个属性的末尾，而不是另起一行
  printWidth: 160, // 指定每行代码的最佳长度，如果超出该长度则格式化
  jsxSingleQuote: true, // 是否在 JSX 中使用单引号而不是双引号
  proseWrap: 'preserve', // Markdown）将散文包含在多行中
  quoteProps: 'as-needed', // 指定object的key添加引号的方式。as-needed：只有在需求要的情况下加引号、 consistent：有一个需要引号就给其他都统一加上、 preserve：保留用户输入的引号
  requirePragma: false, // 是否只对有特定开头编译指示（如 @format ）的文件进行格式化
  semi: false, // 是否在每行末尾添加分号
  singleQuote: true, // 是否使用单引号而不是双引号
  tabWidth: 2, // 指定每个制表符占用的空格数
  trailingComma: 'es5', // 指定添加尾随逗号的方式（数组、对象最后一个元素后）。none：无、es5：在ES5中有效的尾随逗号（如对象与数组等）
  useTabs: false, // 是否使用 tab 缩进，而不是空格缩进,
  vueIndentScriptAndStyle: false, // 是否缩进 Vue 的 <script> 和 <style> 标签。可能会影响到编辑器的代码折叠功能
  embeddedLanguageFormatting: 'auto', // 是否对被引号包裹的代码使用智能格式化
}
