<template>
  <q-input
        outlined
        :value='assignedTo'
        label="Assigned To"
        @input="$emit('update:assignedTo', $event)"
        :rules="[val => !!val || 'Field is required']"
    />
</template>

<script>
export default {
  props: ['assignedTo']
}
</script>

<style>

</style>
