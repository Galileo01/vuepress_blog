module.exports={
    nav: [
        { text: '主页', link: '/' },
        {
            text: '分类',
            items: [
                { text: '导航', link: '/guide.md' },
                { text: '笔记', link: '/Notes.md' },
                { text: '总结', link: '/Summaries.md' },
                { text: '文章', link: '/Articles.md' },
            ],
        },
        { text: '关于', link: '/about' },
        { text: 'Github', link: 'https://github.com/Galileo01' },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', // string时间前缀  | boolean
}