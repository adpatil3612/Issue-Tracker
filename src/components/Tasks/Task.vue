<template>
 <div class="issue-card">
      <q-item class="card-content">
        <q-item-section avatar>
          <q-chip color="teal" text-color="white" icon="bookmark"  class="q-mb-lg">
            {{task.status}}
          </q-chip>
          <q-item-label caption lines="2">ID: {{id}}</q-item-label>
          <q-item-label ><b>{{task.summary}}</b></q-item-label>
          <q-item-label caption lines="2">{{task.desription}}</q-item-label>
        </q-item-section>
        <q-item-section>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption >
            <q-btn style="background: goldenrod; color: white; margin: 2px" label="Close"  @click="updateTask({ id: id, updates: { status : 'Completed'}})"/>
            <q-btn style="background: red; color: white; margin: 2px" label="Delete" @click="prompToDelete(id)"/>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="card-info">
        <q-item-section class="card-icons">
            <q-icon color="primary" name="perm_identity" />
            <q-item-label >{{task.assignedTo}}</q-item-label>
            <q-icon color="primary" name="date_range" />
            <q-item-label >{{task.due_date}}</q-item-label>
            <q-icon color="primary" name="stars" />
            <q-item-label >{{task.severity}}</q-item-label>
          </q-item-section>
      </q-item>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    prompToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to really delete the issue?',
        cancel: {
          color: 'negative'
        },
        ok: {
          push: true
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  }
}
</script>
<style>

</style>
