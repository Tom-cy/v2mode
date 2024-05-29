module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', "@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      'import',
      {
        libraryName: 'vxe-table',
        style: true // 样式是否也按需加载
      }
    ]
  ]
}
