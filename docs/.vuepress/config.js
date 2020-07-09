const themeConfig = require('./config/themeConfig');
const headConfig = require('./config/headConfig');
const pluginConfig=require('./config/pluginConfig')
module.exports = {
    base: '/vuepress_blog/',
    title: "Mark's Blog",
    description: '个人博客',
    head: headConfig,
    themeConfig,
    plugins:pluginConfig
};
