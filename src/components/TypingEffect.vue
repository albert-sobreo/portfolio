<template>

</template>

<script setup lang="ts">
import {ref, defineProps, computed} from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: '',
  }
})

</script>