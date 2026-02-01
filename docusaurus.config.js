// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Schuldiner Lab SOP',
  tagline: 'Standard Operating Procedures',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Schuldiner-Lab.github.io',
  // Set the /<baseUrl>/ pathname previously configured in GitHub Pages
  baseUrl: '/schuldiner-sop/',

  // GitHub pages deployment config.
  organizationName: 'Schuldiner-Lab', // Usually your GitHub org/user name.
  projectName: 'schuldiner-sop', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
            'https://github.com/Schuldiner-Lab/schuldiner-sop/tree/main/',
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
          src: 'img/logo.svg', // You can replace this file later
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'SOP Wiki',
          },
          {
            href: 'https://github.com/Schuldiner-Lab/schuldiner-sop',
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
                to: '/docs/intro',
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