const themeConfig = require('./config/themeConfig');
const headConfig = require('./config/headConfig');
const pluginConfig=require('./config/pluginConfig')
module.exports = {
    base: '/vuepress_blog/',
    title: "JOE' Blog",
    description: '个人博客',
    head: headConfig,
    themeConfig,
    plugins:pluginConfig
};
