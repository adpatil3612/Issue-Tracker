<template>
  <q-page class="flex flex-center">
  <div class="q-mx-lg">
    <q-list padding>
      <q-item>
        <q-item-section>
          <q-item-label><b>List Of Issues</b></q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div class="absolute-button text-center">
            <q-btn
            color="green"
            label="Add New Issue"
            @click="showAddTask = true"/>
          </div>
        </q-item-section>
      </q-item>

      <q-separator />
      <task v-for="(task, key) in tasks"
        v-bind:key = "key"
        :task= "task"
        :id= "key"
      ></task>
    </q-list>

     <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>
  </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    task: require('components/Tasks/Task').default,
    'add-task': require('components/Tasks/Modals/AddTask').default
  }
}
</script>
