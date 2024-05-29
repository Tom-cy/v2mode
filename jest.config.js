module.exports = {
  // 指定 Jest 运行的环境
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'json',
    // 告诉 Jest 处理 `*.vue` 文件
    'vue'
  ],
   "transform": {
    // ...
    // 用 `babel-jest` 处理 js
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  // 匹配测试文件的正则表达式
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  // 模块映射，用于处理导入模块
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 测试覆盖率报告
  collectCoverage: true,
  // 测试覆盖率报告输出目录
  coverageDirectory: 'coverage'
}
