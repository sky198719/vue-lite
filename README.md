命令
vue-lite 创建项目
npm run init 第一次创建项目后进行的初始化操作
npm run use 开发中项目初始化操作
npm run update 更新第三方库
npm run partbuild 局部多页面打包
npm run build 完整多页面打包

目录结构和文件
1、development/ 开发目录
	1.1、assets/ 静态资源目录
		1.1.1、css/ 通用样式目录
			1.1.1.1、global.scss 基础样式设置文件
		1.1.2、images/ 通用图片目录
		1.1.3、js/ 通用方法目录
			1.1.3.1、getData.js 封装的异步方法
	1.2、components/ 通用组件目录
		1.2.1、index.js 通用组件注册文件
	1.3、config/ 配置文件目录
		1.3.1、index.js 项目配置文件
	1.4、pages/ 多页面存放目录
		1.4.1、index/ 默认多页面应用首页目录
			1.4.1.1、config/ 单页面配置目录
				1.4.1.1.1、index.js 路由、状态管理器集合入口
				1.4.1.1.2、route.js 路由配置文件
				1.4.1.1.3、store.js 状态管理器配置文件
			1.4.1.2、mods/ 单页面路由目录
				1.4.1.2.1、home/ 单页面默认路由目录
					1.4.1.2.1.1、index.vue 单页面默认路由实例(向下扩展mods)
			1.4.1.3、index.html html实例文件
			1.4.1.4、index.js 单页面入口文件
			1.4.1.5、index.vue 单页面入口实例
	1.5、static/ 第三方插件、mock数据目录
		1.5.1、lib/ 第三方插件目录
		1.5.2、mock/ mock数据目录
2、production/ 生产目录
3、node_modules/ 
4、.babelrc 
5、.gitignore
6、manifest.json
7、package.json
8、package-lock.json
9、webpack.config.js
10、webpack.dll.config.js