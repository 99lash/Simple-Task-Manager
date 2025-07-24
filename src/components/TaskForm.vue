<script>
export default {
  data() {
    return {
      taskId: '',
      taskName: '',
    }
  },
  methods: {
    addTask() {
      this.taskId = crypto.randomUUID()
      this.$parent.$data.tasks.push({
        id: this.taskId,
        name: this.taskName,
        done: false,
      })
      localStorage.setItem('tasks', JSON.stringify(this.$parent.$data.tasks))
      this.taskName = ''
    },
  },
}
</script>

<template>
  <form class="flex items-center gap-2.5 px-2" @submit.prevent="addTask">
    <input
      v-model="taskName"
      type="text"
      name="task"
      id="task"
      placeholder="Add a task"
      class="border-solid border-b-1 border-primary-secondary-content focus-within:outline-0 flex-1 p-2"
      required
    />
    <button type="submit" class="btn btn-primary px-12">Add</button>
  </form>
</template>
