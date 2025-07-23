<script>
import TaskFilter from './TaskFilter.vue'
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'

export default {
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    }
  },
  methods: {},
  components: {
    TaskForm,
    TaskFilter,
    TaskList,
  },
}
</script>

<template>
  <main className="container mx-auto px-4 min-h-screen mt-10">
    <!-- TASK FORM -->
    <TaskForm />

    <div className="mt-10">
      <!-- TASK FILTER -->
      <TaskFilter :unfilteredTasks="tasks" />
      <!-- TASK LIST -->
      <TaskList :tasks="this.tasks" />
    </div>
  </main>
</template>
