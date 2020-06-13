module.exports = {
    base: '/vuepress_blog/',
    title: "JOE' Blog",
    description: '个人博客',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: '前端博客,joe' }],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Category',
                items: [
                    { text: 'Guide', link: '/guide.md' },
                    { text: 'Note', link: '/guide.md#笔记' },
                    { text: 'Summary', link: '/guide.md#总结' },
                    { text: 'Article', link: '/guide.md#文章' },
                ],
            },
            { text: 'About', link: '/about' },
            { text: 'Github', link: 'https://github.com/Galileo01' },
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated', // string时间前缀  | boolean
    },
    plugins: {
        '@vuepress/back-to-top': true,
        '@vuepress/medium-zoom': {
            selector: 'img',
        },
        '@vuepress/search': true,
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'Galileo01',
            repo: 'vuepress_blog',
            clientId: 'e78f96ff9ff6504ca2af',
            clientSecret: '218702c55d31f1b3de1aefe88026f50c18bc7bee',
            autoCreateIssue:true //自动创建 vssiue
        },
    },
};
