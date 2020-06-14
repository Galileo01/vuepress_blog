module.exports = {
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {
        selector: 'img',
    },
    '@vuepress/search': {
        searchMaxSuggestions: 10,
    },
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',

        // 其他的 Vssue 配置
        owner: 'Galileo01',
        repo: 'vuepress_blog',
        clientId: 'e78f96ff9ff6504ca2af',
        clientSecret: '218702c55d31f1b3de1aefe88026f50c18bc7bee',
        autoCreateIssue: true, //自动创建 vssiue
    },
};
