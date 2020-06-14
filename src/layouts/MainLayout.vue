<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

      <q-tabs
        inline-label
        class="bg-primary text-white"
      >
      <q-tab icon="calendar_today"/>
      </q-tabs>
        <q-toolbar-title>
          Issue Tracker
        </q-toolbar-title>

        <q-tabs align="left">
        <q-tab label="Home" />
        <q-tab label="About Us" />
      </q-tabs>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs
        class="bg-primary text-white shadow-2"
      >
        <q-tab name="home" icon="home" label="Home" />
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="people_outline" icon="people_outline" label="About Us" />
      </q-tabs>
      </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-white-8"
        >
          Navigation Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Help',
          caption: 'Click for help ',
          icon: 'live_help'
        },
        {
          title: 'About',
          caption: 'About Us',
          icon: 'people_outline'
        }
      ]
    }
  }
}
</script>
<style>
@media screen and (min-width: 768px){
  .q-footer{
  display: none;
  }
}
</style>
