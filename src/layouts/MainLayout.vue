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
      <q-btn-dropdown
        split
        color="cyan"
        push
        no-caps
        @click="onMainClick"
        class="avatar-customs"
      >
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <q-avatar class="avatar-custom-size">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <div class="text-center avatar-name">
              Custom
            </div>
          </div>
        </template>

        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section avatar>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section avatar>
              <q-avatar icon="assignment" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Vacation</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
        <!-- <q-btn-dropdown
        split
        push
        glossy
        no-caps
        @click="onMainClick"
        class="avatar-custom"
        >
          <template v-slot:label >
            <div class="row items-center no-wrap" >
              <q-avatar class="avatar-custom-size">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-center">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paytine Arcand
              </div>
            </div>
          </template>
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick"  >
              <q-item-section avatar >
                <q-avatar >
                  <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
              </q-item-section >
              <q-item-section>
                <q-item-label>Photos</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown> -->

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
    caption: 'quasar.dev',
    icon: 'dashboard',
    link: 'https://quasar.dev'
  },
  {
    title: 'Subscription',
    caption: 'github.com/quasarframework',
    icon: 'shopping_bag',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Management',
    caption: 'chat.quasar.dev',
    icon: 'fa-solid fa-user',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Upsells',
    caption: 'forum.quasar.dev',
    icon: 'pie_chart',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Shipping',
    caption: '@quasarframework',
    icon: 'fa fa-plane',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Discounts',
    caption: '@QuasarFramework',
    icon: 'percent',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Orders',
    caption: 'Community Quasar projects',
    icon: 'o_shopping_bag',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Midsify',
    caption: '@quasarframework',
    icon: 'panorama_photosphere',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Code',
    caption: '@QuasarFramework',
    icon: 'o_mouse',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Integrations',
    caption: 'Community Quasar projects',
    icon: 'hub',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Customizer',
    caption: 'Community Quasar projects',
    icon: 'edit_calendar',
    link: 'https://awesome.quasar.dev'
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
