
// npm install [-g] fis3-hook-commonjs
fis.hook('commonjs');

fis.match('/comp/**/*.js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
    release: '/static/$0',
    optimizer: fis.plugin('uglify-js') //开启压缩
});

/*css压缩*/
fis.match('/style/*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
})

// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});

/**
  fis3 release prod 产品发布，进行合并,压缩,加md5
  fis3 release prod 以上写的 配置 都会生效
  如果不让 以上的配置生效 见 "dev"
**/
fis.media('prod')
    .match('*.css', { //合并项目中所有css 到一个style.min.css 文件
        packTo: '/static/style.min.css',
    })
    .match('*.js', { //合并项目中所有js 到一个build.min.js' 文件
        packTo: '/static/build.min.js',
    });

/**
  fis3 release dev -wL 开发时用 ；以上的配置 如optimizer，useHash这些 可以设置不生效
  开发环境 不需要压缩 optimizer:null
**/
fis.media('dev')
    .match('*.{js,css}', {
        optimizer:null,
        useHash:false
    })
