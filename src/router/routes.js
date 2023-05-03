
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/DashboardPage', component: () => import('pages/Dashboard.vue') },
      { path: '/SubscriptionPage', component: () => import('pages/Subscription.vue') },
      { path: '/ManagementPage', component: () => import('pages/Management.vue') },
      { path: '/UpsellsPage', component: () => import('pages/Upsells.vue') },
      { path: '/ShippingPage', component: () => import('pages/Shipping.vue') },
      { path: '/DiscountsPage', component: () => import('pages/Discounts.vue') },
      { path: '/OrdersPage', component: () => import('pages/Orders.vue') },
      { path: '/MidisifyPage', component: () => import('pages/Midisify.vue') },
      { path: '/CodePage', component: () => import('pages/Code.vue') },
      { path: '/IntegrationsPage', component: () => import('pages/Integrations.vue') },
      { path: '/CustomizerPage', component: () => import('pages/Customizer.vue') }
    ]
  }
]

export default routes
