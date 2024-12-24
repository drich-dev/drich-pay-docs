import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Drich企业收单系统",
  description: "Drich企业收单系统，多商户，多通道。",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Backend', link: '/backend' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Example',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/backend/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Introduce',
              link: '/backend/'
            },
            {
              text: 'Response',
              link: '/backend/response'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: 'Copyright © 2024 drich-dev'
    }
  },
  base: "/drich-pay-docs/"
})
