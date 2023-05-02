<template>
  <q-item
    clickable
    tag="a"
    href="#"
    class="menubar-list-custom"
  >
    <q-item-section
      v-if="icon"
      avatar
      class="font-white  "
    >
      <q-icon :name="icon" class="iconsize"/>
    </q-item-section>

    <q-item-section>
      <q-item-label class="font-white">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
<style scoped>
.iconsize{
  font-size: 16px;
}

</style>
