<script>
export default {
  data() {
    return {
      tasks: this.$parent.$data.tasks,
    }
  },
  props: {
    unfilteredTasks: Array,
  },
  created() {
    console.log(this.tasks)
  },
  methods: {
    filterTasks(type) {
      switch (type) {
        case 'all':
          this.$parent.$data.tasks = this.$props.unfilteredTasks
          break

        case 'inprogress':
          this.$parent.$data.tasks = this.$parent.$data.tasks.filter((t) => t.done === false)
          break

        case 'completed':
          this.$parent.$data.tasks = this.$parent.$data.tasks.filter((t) => t.done === true)
          break

        default:
          break
      }
    },
  },
}
</script>

<template>
  <div className="flex items-center gap-2.5">
    <div
      class="btn btn-ghost border-secondary-content rounded-sm flex-1"
      @click="filterTasks('all')"
    >
      All
    </div>
    <div
      class="btn btn-ghost border-secondary-content rounded-sm flex-1"
      @click="filterTasks('inprogress')"
    >
      In Progress
    </div>
    <div
      class="btn btn-ghost border-secondary-content rounded-sm flex-1"
      @click="filterTasks('completed')"
    >
      Completed
    </div>
  </div>
</template>
