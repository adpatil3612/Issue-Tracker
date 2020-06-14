<template>
  <q-input
        outlined
        :value='status'
        label="Status"
        @input="$emit('update:status', $event)"
        :rules="[val => !!val || 'Field is required']"
    />
</template>

<script>
export default {
  props: ['status']
}
</script>

<style>

</style>
