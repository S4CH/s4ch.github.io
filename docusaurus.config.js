const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CyFun',
  tagline: 'Navigating the digital world, one byte at a time', //As a clueless beginner, I taught myself the ways of hacking, found myself becoming more and more enamored with the endless possibilities it presented!
  url: 'https://s4ch.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'cyfun',
  projectName: 's4ch',
  trailingSlash: true,
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/cy.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/cy.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/cy.png',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/cy.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ctf',
        path: 'ctf',
        routeBasePath: 'ctf',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'writeups',
        path: 'writeups',
        routeBasePath: 'writeups',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
  themeConfig: {
    image: '/img/cydesk.png',
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'CyFun',
      logo: {
        alt: 'Logo',
        src: 'img/cy.png',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          to: '/docs',
          activeBasePath: 'docs',
          label: 'Threads',
          position: 'left',
        },
        {
          to: '/ctf',
          activeBasePath: 'ctf',
          label: 'CTF',
          position: 'left',
        },
        {
          to: '/writeups',
          activeBasePath: 'writeups',
          label: 'Writeups',
          position: 'left',
        },
        {
          href: 'https://github.com/s4ch/s4ch.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Support me',
          items: [
            {
              label: `Github`,
              href: `https://github.com/sponsors/S4CH`,
            },
          ],
        },
      ],
      copyright: `Made with   ♥  by CyFun © ${new Date().getFullYear()} 
                            | Built on Docusaurus`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    metadatas: [
      { name: 'robots', content: 'max-image-preview:large' },
      { name: 'monetization', content: '$ilp.uphold.com/fYPB8Pjyig3z' },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/s4ch/s4ch.github.io/edit/master/',
          feedOptions: {
            type: 'all',
          },
          postsPerPage: 3,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
