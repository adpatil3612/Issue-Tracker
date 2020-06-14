<template>
  <q-input
        outlined
        :value='severity'
        label="Severity"
        @input="$emit('update:severity', $event)"
        :rules="[val => !!val || 'Field is required']"
    />
</template>

<script>
export default {
  props: ['severity']
}
</script>

<style>

</style>
