<script>
import TaskFilter from './TaskFilter.vue'
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'
// import ToastNotification from './ToastNotification.vue'

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
    handleTaskStatusChange(task) {
      this.tasks.forEach((t) => {
        if (t.id === task.id) {
          t.done = !t.done
          return
        }
      })
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
  },
  components: {
    TaskForm,
    TaskFilter,
    TaskList,
    // ToastNotification,
  },
  computed: {
    filterTasks() {
      if (this.selectedFilter === 'completed') return this.tasks.filter((t) => t.done === true)
      if (this.selectedFilter === 'pending') return this.tasks.filter((t) => t.done === false)
      return this.tasks
    },
  },
}
</script>

<template>
  <main class="container mx-auto px-4 min-h-screen mt-20">
    <!-- TASK FORM -->
    <TaskForm />

    <div class="mt-10">
      <!-- TASK FILTER -->
      <TaskFilter @filter-change="handleFilterChange" />
      <!-- TASK LIST -->
      <TaskList
        :tasks="tasks"
        :filteredTasks="filterTasks"
        @status-change="handleTaskStatusChange"
      />
      <!-- <ToastNotification /> -->
    </div>
  </main>
</template>
