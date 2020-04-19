/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  // {
  //   caption: 'User1',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/image.jpg'.
  //   image: '/img/undraw_open_source.svg',
  //   infoLink: 'https://www.facebook.com',
  //   pinned: true,
  // },
];

const contributors = [
  {
    caption: 'shirakaba',
    image: 'https://github.com/shirakaba.png?size=100',
    infoLink: 'https://github.com/shirakaba',
  },
  {
    caption: 'rigor789',
    image: 'https://github.com/rigor789.png?size=100',
    infoLink: 'https://github.com/rigor789',
  },
  {
    caption: 'ikoevska',
    image: 'https://github.com/ikoevska.png?size=100',
    infoLink: 'https://github.com/ikoevska',
  },
];

const siteConfig = {
  title: 'Crank Native', // Title for your website.
  tagline: 'Write JSX-driven components with functions, Promises and generators for iOS and Android.',
  url: 'http://crank-native.netlify.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // defaultVersionShown: '0.12.0', /* I won't be touching this until the package hits v1.0.0 */

  // Used for publishing and more
  projectName: 'crank-native',
  organizationName: 'shirakaba',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'introduction/introduction', label: 'Docs'},
    // {doc: 'doc4', label: 'API'},
    // {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],

  /* If you have users set above, you add it here: */
  // users,

  /* TODO */
  algolia: {
    apiKey: '16edafa1a5d6e60125dc2681f6a8d3d0',
    indexName: 'crank-native',
  },

  /* path to images for header/footer */
  // headerIcon: 'img/crank-native.svg',
  // footerIcon: 'img/crank-native.svg',
  // favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    // primaryColor: '#485FFC', /* NativeScript logo blue */

    // primaryColor: '#364CCB', /* NativeScript website backdrop blue */
    // secondaryColor: '#0B1C4C', /* NativeScript website dark button */

    primaryColor: '#0C1227', /* Crank docs website backdrop royal blue */
    secondaryColor: '#DBB368', /* Crank docs website gold */
  },
  // https://github.com/nativescript-vue/nativescript-vue.org/blob/master/content/docs/en
  editUrl: 'https://github.com/shirakaba/crank-native-site/edit/master/docs/', // TODO: check whether correct

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Jamie Birch`,

  usePrism: ['jsx', 'tsx'],
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    // https://github.com/isagalaev/highlight.js/tree/master/src/styles
    // theme: 'pojoaque',
    // theme: 'default',
    theme: 'solarized-dark',

    defaultLang: 'typescript',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitter: false, // Whether (my) Twitter image should appear at the bottom of any blog post.
  twitterUsername: 'LinguaBrowse',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/shirakaba/crank-native',
};

module.exports = siteConfig;
