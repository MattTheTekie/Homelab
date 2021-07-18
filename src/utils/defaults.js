module.exports = {
  pageInfo: {
    title: 'Dashy',
    description: '',
    navLinks: [
      { title: 'Home', path: '/' },
      { title: 'Source', path: 'https://github.com/Lissy93/dashy' },
    ],
    footerText: '',
  },
  appConfig: {},
  iconSize: 'medium',
  layout: 'auto',
  theme: 'default',
  fontAwesomeKey: '0821c65656',
  faviconApi: 'faviconkit',
  builtInThemes: [
    'callisto',
    'thebe',
    'dracula',
    'material',
    'material-dark',
    'colorful',
    'nord',
    'nord-frost',
    'minimal-dark',
    'minimal-light',
    'oblivion',
    'matrix',
    'matrix-red',
    'hacker-girl',
    'raspberry-jam',
    'bee',
    'tiger',
    'blue-purple',
    'material-original',
    'material-dark-original',
    'cyberpunk',
    'vaporware',
    'high-contrast-dark',
    'high-contrast-light',
  ],
  visibleComponents: {
    pageTitle: true,
    navigation: true,
    searchBar: true,
    settings: true,
    footer: true,
  },
  localStorageKeys: {
    HIDE_WELCOME_BANNER: 'hideWelcomeHelpers',
    LAYOUT_ORIENTATION: 'layoutOrientation',
    COLLAPSE_STATE: 'collapseState',
    ICON_SIZE: 'iconSize',
    THEME: 'theme',
    CUSTOM_COLORS: 'customColors',
    CONF_SECTIONS: 'confSections',
    PAGE_INFO: 'pageInfo',
    APP_CONFIG: 'appConfig',
    BACKUP_ID: 'backupId',
    BACKUP_HASH: 'backupHash',
    HIDE_SETTINGS: 'hideSettings',
    USERNAME: 'username',
  },
  cookieKeys: {
    AUTH_TOKEN: 'authenticationToken',
  },
  sessionStorageKeys: {
    SW_STATUS: 'serviceWorkerStatus',
  },
  modalNames: {
    CONF_EDITOR: 'CONF_EDITOR',
    CLOUD_BACKUP: 'CLOUD_BACKUP',
    REBUILD_APP: 'REBUILD_APP',
    THEME_MAKER: 'THEME_MAKER',
    ABOUT_APP: 'ABOUT_APP',
  },
  topLevelConfKeys: {
    PAGE_INFO: 'pageInfo',
    APP_CONFIG: 'appConfig',
    SECTIONS: 'sections',
  },
  mainCssVars: ['primary', 'background', 'background-darker'],
  splashScreenTime: 1900,
  metaTagData: [
    { name: 'description', content: 'A simple static homepage for you\'re server' },
  ],
  toastedOptions: {
    position: 'bottom-center',
    duration: 2500,
    keepOnHover: true,
    className: 'toast-message',
    iconPack: 'fontawesome',
  },
  backupEndpoint: 'https://dashy-sync-service.as93.net',
  faviconApiEndpoints: {
    mcapi: 'https://eu.mc-api.net/v3/server/favicon/$URL',
    clearbit: 'https://logo.clearbit.com/$URL',
    faviconkit: 'https://api.faviconkit.com/$URL/64',
    // favicongrabber: 'https://favicongrabber.com//api/grab/$URL',
    google: 'https://www.google.com/s2/favicons?sz=128&domain_url=$URL',
    allesedv: 'https://f1.allesedv.com/128/$URL',
    webmasterapi: 'https://api.webmasterapi.com/v1/favicon/yEwx0ZFs0CSPshHq/$URL',
  },
};
