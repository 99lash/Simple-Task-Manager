<script>
import TaskFilter from './TaskFilter.vue'
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'

export default {
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      selectedFilter: 'All',
    }
  },
  methods: {
    handleFilterChange(newFilter) {
      this.selectedFilter = newFilter
    },
  },
  components: {
    TaskForm,
    TaskFilter,
    TaskList,
  },
  computed: {
    filterTasks() {
      if (this.selectedFilter === 'completed') return this.tasks.filter((t) => t.done === true)
      if (this.selectedFilter === 'in progress') return this.tasks.filter((t) => t.done === false)
      return this.tasks
    },
  },
}
</script>

<template>
  <main className="container mx-auto px-4 min-h-screen mt-10">
    <!-- TASK FORM -->
    <TaskForm />

    <div className="mt-10">
      <!-- TASK FILTER -->
      <TaskFilter @filter-change="handleFilterChange" />
      <!-- TASK LIST -->
      <TaskList :tasks="filterTasks" />
    </div>
  </main>
</template>
