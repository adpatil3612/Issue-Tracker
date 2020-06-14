<template>
  <div class="q-pa-md">
      <q-item-label><b>Severity</b></q-item-label>
    <q-btn-dropdown label="Select Severity">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>High</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Medium</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Low</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  /**
   * Still yet to implement the component
   */
  data () {
    return {
      severityMenu: {
        severity: ''
      }
    }
  },
  methods: {
    onItemClick (e) {
      console.log('In Dropdown', e)
    }
  }
}
</script>

<style>

</style>
