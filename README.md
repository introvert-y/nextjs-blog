效果：https://nextjs-blog-five-ecru.vercel.app/

### 安装依赖
npm/cnpm run dev

### 启动
本地开发 npm run dev

生产部署 npm run start （即 next build && next start)

两者区别: https://stackoverflow.com/questions/69400243/whats-the-difference-between-npm-run-dev-and-npm-run-start-in-next-js

### SSG: Static-site generation
next export允许您将 Next.js 应用程序导出为静态 HTML，无需 Node.js 服务器即可独立运行。建议仅next export在您不需要任何需要服务器的不受支持的功能时使用。

如果您希望构建一个混合站点，其中只有一些页面被预呈现为静态 HTML，Next.js 已经自动完成了。了解有关自动静态优化和增量静态再生的更多信息。

https://nextjs.org/docs/advanced-features/static-html-export

### 部署
在决定使用自定义服务器之前，请记住只有在 Next.js 的集成路由器不能满足您的应用需求时才应该使用它。自定义服务器将删除重要的性能优化，例如无服务器功能和自动静态优化。

https://nextjs.org/docs/advanced-features/custom-server
