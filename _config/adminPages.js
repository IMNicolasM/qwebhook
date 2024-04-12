export default {
  hooks: {
    permission: 'iwebhooks.hooks.manage',
    activated: true,
    authenticated: true,
    path: '/webhook/hooks/index',
    name: 'qwebhook.admin.hooks',
    crud : import('@imagina/qwebhook/_crud/hooks'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iwebhooks.cms.sidebar.adminHooks',
    icon: 'fa-light fa-link',
    subHeader: {
      refresh: true,
    }
  },
  categories: {
    permission: 'iwebhooks.categories.manage',
    activated: true,
    authenticated: true,
    path: '/webhook/categories/index',
    name: 'qwebhook.admin.categories',
    crud : import('@imagina/qwebhook/_crud/categories'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iwebhooks.cms.sidebar.adminCategories',
    icon: 'fa-light fa-layer-group',
    subHeader: {
      refresh: true,
    }
  },
  logs: {
    permission: 'iwebhooks.logs.manage',
    activated: true,
    authenticated: true,
    path: '/webhook/logs/index',
    name: 'qwebhook.admin.logs',
    crud : import('@imagina/qwebhook/_crud/logs'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iwebhooks.cms.sidebar.adminLogs',
    icon: 'fa-light fa-book',
    subHeader: {
      refresh: true,
    }
  }
}
