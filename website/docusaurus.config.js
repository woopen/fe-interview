// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require('prism-react-renderer/themes/github');
// @ts-ignore
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const remarkPlugin = require('./remark-plugin')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FE Interview',
  tagline: '✨ 全网最新最全面的前端面试平台 ✨',
  url: 'https://github.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'easy-interview', // Usually your GitHub org/user name.
  projectName: 'fe-interview', // Usually your repo name.

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/easy-interview/fe-interview/edit/main/website/',
          beforeDefaultRemarkPlugins: [remarkPlugin]
        },
        blog: {
          blogSidebarCount: 0,
          editUrl: ({blogDirPath, blogPath}) => {
            return `https://github.com/easy-interview/fe-interview/edit/main/website/${blogDirPath}/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      announcementBar: {
        content: '如果觉得还不错，请在 <a target="_blank" rel="noopener noreferrer" href="https://github.com/easy-interview/fe-interview">GitHub 上给我们一个 Star ⭐️</a> 并 <a href="/blog/community">加入微信群</a>',
        backgroundColor: 'rgb(10, 25, 41)',
        textColor: 'rgb(160, 170, 180)'
      },
      navbar: {
        title: 'FE Interview',
        logo: {
          alt: 'FE Interview',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'questions',
            position: 'left',
            label: '面试题',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'records',
            label: '面试记录',
          },
          {
            position: 'left',
            label: '面试官',
            to: 'blog/interviewer'
          },
          {
            position: 'left',
            label: '攻略',
            to: 'blog/walk-through'
          },
          {
            position: 'left',
            label: '简历',
            to: 'blog/resume'
          },
          {
            position: 'left',
            label: '微信群',
            to: 'blog/community'
          },
          {
            position: 'left',
            label: '内推/工作机会',
            to: 'blog/job'
          },
          {
            position: 'left',
            label: '贡献',
            to: 'blog/contribute'
          },
          {
            position: 'left',
            label: '捐赠',
            to: 'blog/donate'
          },
          {
            position: 'left',
            label: '反馈',
            to: 'blog/feedback'
          },
          {
            href: 'https://github.com/easy-interview/fe-interview',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/questions/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/easy-interview/fe-interview',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fe Interview.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    require('./plugin'),
  ],
};

module.exports = config;
