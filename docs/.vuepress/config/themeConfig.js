module.exports={
    nav: [
        { text: 'Home', link: '/' },
        {
            text: 'Category',
            items: [
                { text: 'Guide', link: '/guide.md' },
                { text: 'Note', link: '/Notes.md' },
                { text: 'Summary', link: '/Summaries.md' },
                { text: 'Article', link: '/Articles.md' },
            ],
        },
        { text: 'About', link: '/about' },
        { text: 'Github', link: 'https://github.com/Galileo01' },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', // string时间前缀  | boolean
}