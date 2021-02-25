const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 使用 less
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#80bd01', // 主题色
      '@gray-4': '#e8e8e8'
    }
  }),
  // 配置别名
  addWebpackAlias({
    '@': resolve('src'),
    'views': resolve('src/views'),
    'components': resolve('src/components'),
  })
);