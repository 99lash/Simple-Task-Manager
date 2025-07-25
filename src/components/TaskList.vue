<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  props: {
    tasks: Array,
    filteredTasks: Array,
  },
  methods: {
    removeTask(task) {
      this.$parent.$data.tasks = this.$props.tasks.filter((t) => t.id !== task.id)
      localStorage.setItem('tasks', JSON.stringify(this.$parent.$data.tasks))
    },
    getEditedTask(e) {
      this.name = e.target.value
    },
    editTask(task) {
      this.$parent.$data.tasks.forEach((t) => {
        if (t.id === task.id) {
          t.name = this.name
          console.log(t)
          return
        }
      })
      localStorage.setItem('tasks', JSON.stringify(this.$parent.$data.tasks))
    },
    getTaskStatus(task) {
      this.$emit('status-change', task)
    },
  },
  computed: {
    reversedTasks() {
      return [...this.filteredTasks].reverse()
    },
  },
}
</script>

<template>
  <div class="grid mt-10 gap-5">
    <div v-for="task in reversedTasks" :key="task.id" class="card bg-base-200 shadow-sm">
      <div class="flex flex-row items-center gap-2.5">
        <div class="card-actions items-center pl-6">
          <input
            type="checkbox"
            name="done"
            id="done"
            class="checkbox checkbox-secondary-content checkbox-lg"
            @click="getTaskStatus(task)"
            :checked="task.done"
          />
        </div>
        <div class="card-body flex-row items-center justify-between">
          <div class="card-title">
            <span :class="{ done: task.done }">
              {{ task.name }}
            </span>
          </div>
          <div class="card-actions">
            <!-- EDIT -->
            <label :for="`edit-${task.id}`" class="btn btn-ghost">
              <SquarePen class="text-info" />
            </label>

            <input type="checkbox" :id="`edit-${task.id}`" class="modal-toggle" />
            <div class="modal" role="dialog">
              <div class="modal-box">
                <div class="flex flex-col items-center gap-2.5 px-2">
                  <span class="text-left w-[100%] p-2"> Edit Task </span>
                  <input
                    type="text"
                    name="editTask"
                    id="editTask"
                    class="border-solid border-b-1 border-primary-secondary-content focus-within:outline-0 w-[100%] p-2"
                    :value="task.name"
                    @input="getEditedTask"
                  />
                  <div class="modal-action w-[100%]">
                    <!-- CANCEL -->
                    <label :for="`edit-${task.id}`" class="btn btn-error" tabindex="0"
                      >Cancel</label
                    >
                    <!-- SAVE -->
                    <label
                      :for="`edit-${task.id}`"
                      class="btn btn-success"
                      @click="editTask(task)"
                      tabindex="0"
                    >
                      Save
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- DELETE -->
            <div class="btn btn-ghost" @click="removeTask(task)">
              <Trash class="text-error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
