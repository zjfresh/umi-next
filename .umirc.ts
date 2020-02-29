function getMenus(opts: { lang?: string; base: '/docs' | '/plugins' }) {
  const menus = {
    '/plugins': [
      {
        title: 'Presets',
        children: ['/plugins/preset-react'],
      },
      {
        title: 'Plugins',
        children: [
          '/plugins/plugin-access',
          '/plugins/plugin-analytics',
          '/plugins/plugin-antd',
          '/plugins/plugin-crossorigin',
          '/plugins/plugin-dva',
          '/plugins/plugin-initial-state',
          '/plugins/plugin-layout',
          '/plugins/plugin-locale',
          '/plugins/plugin-model',
          '/plugins/plugin-qiankun',
          '/plugins/plugin-request',
          '/plugins/plugin-webpack-5',
        ],
      },
      {
        title: 'Plugin Develop',
        'title_zh-CN': '插件开发',
        children: ['/plugins/api', '/plugins/test'],
      },
    ],
    '/docs': [
      {
        title: 'Introduce',
        'title_zh-CN': '介绍',
        children: [
          '/docs/README',
          '/docs/how-umi-works',
          '/docs/getting-started',
        ],
      },
      {
        title: 'Umi Basic',
        'title_zh-CN': 'Umi 基础',
        children: [
          '/docs/directory-structure',
          '/docs/config',
          '/docs/routing',
          '/docs/convention-routing',
          // '/docs/plugin',
          // '/docs/navigate-between-pages',
          // '/docs/html-template',
          '/docs/runtime-config',
          '/docs/mock',
          '/docs/env-variables',
        ],
      },
      {
        title: '样式和资源文件',
        'title_zh-CN': '样式和资源文件',
        children: ['/docs/assets-css', '/docs/assets-image'],
      },
      {
        title: 'Umi Advanced',
        'title_zh-CN': 'Umi 进阶',
        children: [],
      },
      {
        title: 'API',
        path: '/docs/api',
      },
      {
        title: 'CONTRIBUTING',
        'title_zh-CN': '贡献',
        path: '/docs/contributing',
      },
      {
        title: 'FAQ',
        path: '/docs/faq',
      },
    ],
  };
  return (menus[opts.base] as []).map((menu: any) => {
    if (!opts.lang) return menu;
    return {
      ...menu,
      title: menu[`title_${opts.lang}`] || menu.title,
    };
  });
}

export default {
  favicon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
  mode: 'site',
  title: 'UmiJS',
  resolve: {
    includes: ['./docs'],
    previewLangs: [],
  },
  menus: {
    '/zh-CN/docs': getMenus({ lang: 'zh-CN', base: '/docs' }),
    '/docs': getMenus({ base: '/docs' }),
    '/zh-CN/plugins': getMenus({ lang: 'zh-CN', base: '/plugins' }),
    '/plugins': getMenus({ base: '/plugins' }),
  },
  navs: [
    null,
    {
      title: 'v2.x',
      path: 'https://v2.umijs.org',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/umi',
    },
  ],
  exportStatic: {},
};