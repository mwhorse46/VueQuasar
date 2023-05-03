<template >
  <q-layout view="lHh Lpr lFf" >
    <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    class="bg-menubar-custom"
    >
      <q-list class="mt-120" >
        <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
        style="border-top: 1px solid #353535;"
        />
        <div class="row avatarbtn" >
          <div>
            <q-avatar class="avatasize">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
          </div>
          <div class="avatarbtnlabel">Paityn Acand</div>
          <div>
            <q-icon name="expand_more" style="color:white;margin-left: 30px;"></q-icon>
          </div>
        </div>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    caption: 'Dashboard',
    icon: 'dashboard',
    link: '/DashboardPage'
  },
  {
    title: 'Subscription',
    caption: 'Subscription',
    icon: 'shopping_bag',
    link: '/SubscriptionPage'
  },
  {
    title: 'Management',
    caption: 'Management',
    icon: 'fa-solid fa-user',
    link: '/ManagementPage'
  },
  {
    title: 'Upsells',
    caption: 'Upsells',
    icon: 'pie_chart',
    link: '/UpsellsPage'
  },
  {
    title: 'Shipping',
    caption: 'Shipping',
    icon: 'fa fa-plane',
    link: '/ShippingPage'
  },
  {
    title: 'Discounts',
    caption: 'Discounts',
    icon: 'percent',
    link: '/DiscountsPage'
  },
  {
    title: 'Orders',
    caption: 'Orders',
    icon: 'o_shopping_bag',
    link: '/OrdersPage'
  },
  {
    title: 'Midisify',
    caption: 'Midisify',
    icon: 'panorama_photosphere',
    link: '/MidisifyPage'
  },
  {
    title: 'Code',
    caption: 'Code',
    icon: 'o_mouse',
    link: '/CodePage'
  },
  {
    title: 'Integrations',
    caption: 'Integrations',
    icon: 'hub',
    link: '/IntegrationsPage'
  },
  {
    title: 'Customizer',
    caption: 'Customizer',
    icon: 'edit_calendar',
    link: '/CustomizerPage'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }

})
</script>
