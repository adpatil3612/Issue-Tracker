<template>
  <q-input
    label="Due Date"
    outlined
    :value="due_date"
    @input="$emit('update:due_date', $event)"
    :rules="[val => !!val || 'Field is required']"
    class="q-pb-md"
  >
    <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy>
            <q-date
                :value="due_date"
                @input="$emit('update:due_date', $event)"
            />
            </q-popup-proxy>
        </q-icon>
        </template>
    </q-input>
</template>

<script>
export default {
  props: ['due_date']

}
</script>

<style>

</style>
