<template>
  <q-card>
    <modal-header>Add New Issue</modal-header>
    <q-form
      @submit="validateForm"
      class="q-gutter-md"
    >
      <q-card-section class="q-pt-none">
        <modal-input-summary-box
          :name.sync='taskToSubmit.summary'
          ref="modalTaskName"
        >
        </modal-input-summary-box>

        <div class ="row">
          <modal-input-severity-box class="q-pr-md"
            :severity.sync='taskToSubmit.severity'
          ></modal-input-severity-box>

          <modal-due-date
            :due_date.sync='taskToSubmit.due_date'
          >
          </modal-due-date>
        </div>
        <div class ="row">
          <modal-input-assigned-box class="q-pr-md"
            :assignedTo.sync='taskToSubmit.assignedTo'
          ></modal-input-assigned-box>
          <modal-input-status-box class="w-52"
            :status.sync='taskToSubmit.status'
          >
          </modal-input-status-box>
        </div>
        <q-input
          outlined
          v-model="taskToSubmit.desription"
          label="Description"
          :rules="[val => !!val || 'Field is required']"
        />
      </q-card-section>
    <modal-buttons></modal-buttons>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      taskToSubmit: {
        summary: '',
        severity: '',
        due_date: '',
        assignedTo: '',
        status: '',
        desription: ''
      }
    }
  },
  components: {
    // 'drop-down': require('components/Tasks/Modals/DropDownMenu').default,
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader').default,
    'modal-input-summary-box': require('components/Tasks/Modals/Shared/ModalInputSummaryBox').default,
    'modal-input-severity-box': require('components/Tasks/Modals/Shared/ModalInputSeverityBox').default,
    'modal-input-assigned-box': require('components/Tasks/Modals/Shared/ModalInputAssignedBox').default,
    'modal-input-status-box': require('components/Tasks/Modals/Shared/ModalInputStatusBox').default,
    'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate').default,
    'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons').default

  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    /**
     * Method to validate the data from the form
     */
    validateForm () {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    /**
     * Method to submit data from the form
     */
    submitTask () {
      console.log('Submitted Succesfully')
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
