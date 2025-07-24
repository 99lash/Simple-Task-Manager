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
  <div className="tabs tabs-border justify-end">
    <input
      className="tab"
      type="radio"
      name="options"
      aria-label="All"
      checked
      @click="getSelectedFilter(taskStatus.all)"
    />
    <!-- <div className="divider divider-horizontal"></div> -->
    <input
      className="tab"
      type="radio"
      name="options"
      aria-label="Pending"
      @click="getSelectedFilter(taskStatus.pending)"
    />
    <!-- <div className="divider divider-horizontal"></div> -->
    <input
      className="tab"
      type="radio"
      name="options"
      aria-label="Completed"
      @click="getSelectedFilter(taskStatus.completed)"
    />
  </div>
</template>
