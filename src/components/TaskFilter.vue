<script>
export default {
  data() {
    return {
      taskStatus: {
        all: 'all',
        pending: 'pending',
        completed: 'completed',
      },
    }
  },
  methods: {
    getSelectedFilter(newFilter) {
      this.$emit('filter-change', newFilter)
    },
  },
}
</script>

<template>
  <div class="tabs tabs-lift justify-end">
    <input
      class="tab"
      type="radio"
      name="options"
      aria-label="All"
      checked
      @click="getSelectedFilter(taskStatus.all)"
    />
    <!-- <div class="divider divider-horizontal"></div> -->
    <input
      class="tab"
      type="radio"
      name="options"
      aria-label="Pending"
      @click="getSelectedFilter(taskStatus.pending)"
    />
    <!-- <div class="divider divider-horizontal"></div> -->
    <input
      class="tab"
      type="radio"
      name="options"
      aria-label="Completed"
      @click="getSelectedFilter(taskStatus.completed)"
    />
  </div>
</template>
