const themeConfig = require('./config/themeConfig');
const headConfig = require('./config/headConfig');
const pluginConfig=require('./config/pluginConfig')
module.exports = {
    // base: '/vuepress_blog/',//部署到服务器 需要注释掉
    title: "Mark's Blog",
    description: '个人博客',
    head: headConfig,
    themeConfig,
    plugins:pluginConfig
};
