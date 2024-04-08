const pages = config('pages') // Get Pages from config

//Webhook
export default [
  {
    title: 'iwebhooks.cms.sidebar.adminGroup',
    icon: 'fa-light fa-webhook',
    children: [
      pages.qwebhook.hooks, // Hooks setup
      pages.qwebhook.categories, // categories setup
      pages.qwebhook.logs, // Logs setup
    ]
  },
]
