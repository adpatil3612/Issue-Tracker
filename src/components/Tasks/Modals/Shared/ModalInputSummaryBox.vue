<template>
  <q-input
        outlined
        :value='name'
        label="Issue Summary"
        @input="$emit('update:name', $event)"
        ref="name"
        :rules="[val => !!val || 'Field is required']"
    />
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>

</style>
