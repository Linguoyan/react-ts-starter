const path = require('path');
const fs = require('fs');

// 获取 node 执行文件的工作目录
const appDirectory = fs.realpathSync(process.cwd());

/**
 * 将相对路径解析成绝对路径
 * @param {string} relativePath 相对路径
 */
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

// 默认模块拓展
const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx'];

/**
 * 解决模块路径
 * @param {function} resolveFn resolve function
 * @param {string} filePath file path
 */
function resolveModule(resolveFn, filePath) {
  // 检查文件是否存在
  const extension = moduleFileExtensions.find((ex) => fs.existsSync(resolveFn(`${filePath}.${ex}`)));

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }
  return resolveFn(`${filePath}.ts`); // 默认是 .ts
}

module.exports = {
  appDist: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appIndex: resolveModule(resolveApp, 'src/index'), // 打包入口文件
  appHtml: resolveApp('public/index.html'),
  appFavicon: resolveApp('public/favicon.png'), // node_modules path
  appSrc: resolveApp('src'),
  appProxySetup: resolveModule(resolveApp, 'src/setProxy'),
  appTsConfig: resolveApp('tsconfig.json'),
  moduleFileExtensions,
};
