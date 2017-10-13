// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    
     // 关闭全等
    'eqeqeq': [0],
    // 检测缩进为4个空格
    'indent': ['error', 4],
    'no-unused-vars': [2, {
      // 允许声明未使用变量
      'vars': 'local',
      // 参数不检查
      'args': 'none'
    }],
    // 关闭语句强制分号结尾
    'semi': [0],
    // 空行最多不能超过100行
    'no-multiple-empty-lines': [0, {'max': 100}],
    // 关闭禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [0],
    // 关闭检测是否是驼峰写法
    'camelcase': 0,
    // 关闭禁用不必要的转义
    'no-useless-escape': 0,
    // 关闭禁用抛出异常字面量
    'no-throw-literal': 0,
    // 关闭禁止重新声明变量
    'no-redeclare': 0,
    'no-multi-spaces': 0,//不能用多余的空格
    'no-tabs':'off'
  }
}
