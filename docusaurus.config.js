// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Schuldiner Lab SOP',
  tagline: 'Standard Operating Procedures',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mschuldi-lab.github.io',
  // Set the /<baseUrl>/ pathname previously configured in GitHub Pages
  baseUrl: '/schuldiner-sop/',

  // GitHub pages deployment config.
  organizationName: 'mschuldi-lab', // Usually your GitHub org/user name.
  projectName: 'schuldiner-sop', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  markdown: {
    format: 'mdx',
    mermaid: true,
    preprocessor: ({filePath, fileContent}) => {
      return fileContent;
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  scripts: [
    {
      src: 'https://hypothes.is/embed.js',
      async: true,
  },
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // This allows lab members to edit pages directly:
          editUrl:
            'https://github.com/mschuldi-lab/schuldiner-sop/tree/main/',        
        },
        blog: false, // Disabling the blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        language: "en",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Schuldiner Lab',
        logo: {
          alt: 'Lab Logo',
          // 1. Logo for Light Mode (usually dark text/black)
          src: 'img/Schuldiner_logo_white.png',
          // 2. Logo for Dark Mode (usually light text/white)
          srcDark: 'img/Schuldiner_logo_black.png', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'SOP Wiki',
            to: '/docs/general-lab-stuff',
          },
          {
            href: 'https://github.com/mschuldi-lab/schuldiner-sop',
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
                label: 'General Lab Stuff',
                to: '/docs/general-lab-stuff',              
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Weizmann Institute',
                href: 'https://www.weizmann.ac.il/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Schuldiner Lab. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;