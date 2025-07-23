<script>
export default {
  data() {
    return {
      taskStatus: {
        all: 'all',
        inProgress: 'in progress',
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
  <div className="flex items-center gap-2.5">
    <div
      class="btn btn-ghost border-secondary-content rounded-sm flex-1"
      @click="getSelectedFilter(taskStatus.all)"
    >
      All
    </div>
    <div
      class="btn btn-ghost border-secondary-content rounded-sm flex-1"
      @click="getSelectedFilter(taskStatus.inProgress)"
    >
      In Progress
    </div>
    <div
      class="btn btn-ghost border-secondary-content rounded-sm flex-1"
      @click="getSelectedFilter(taskStatus.completed)"
    >
      Completed
    </div>
  </div>
</template>
