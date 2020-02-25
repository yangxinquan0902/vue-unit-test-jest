const path = require('path')

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // 根目录
  rootDir: path.resolve(__dirname, './'),
  // 测试环境，这个字段可以选择node或者是jsdom两个选项
  testEnvironment: 'jsdom',
  verbose: true,
  // 设置测试地址
  testURL: "http://localhost/",

  // 告诉 Jest 需要处理的文件后缀
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],

  // 别名，类似于webpack中的alias，可自己定义一些别名，方便引入库
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@\/(.*?\.?(js|vue)?|)$': '<rootDir>/src/$1',  // # @路径转换，例如：@/views/shop/info.vue -> rootDir/src/shop/info.vue
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/unit/__mocks__/fileMock.js',  // #  模拟加载静态文件
    '\\.(css|less)$': 'identity-obj-proxy'　　//# 模拟加载样式文件   
  },

  // 用 `vue-jest` 处理 `*.vue` 文件
  // 用 `babel-jest` 处理 `*.js` 文件
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },

  // 快照的序列化工具,快照测试时使用
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],

  // mapCoverage: true,

  testMatch: [
    '<rootDir>/test/unit/**/*.spec.js'
  ],

  /*
  // 忽略文件
  testPathIgnorePatterns: ['/node_modules/'], 
  modulePathIgnorePatterns: ['<rootDir>/test/unit/coverage/'],
  */

  //是否开启代码测试覆盖率【建议开启】
  collectCoverage: true,
  
  coverageReporters: ["html", "text-summary"],

  // 覆盖率报告输出地址
  coverageDirectory: '<rootDir>/test/unit/coverage',

  // 添加 collectCoverageFrom 数组来定义需要收集测试覆盖率信息的文件
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**'
  ]
}
