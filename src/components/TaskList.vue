<script>
export default {
  props: {
    tasks: Array,
  },
  methods: {
    removeTask(task) {
      this.$parent.$data.tasks = this.$props.tasks.filter((t) => t.id !== task.id)
      localStorage.setItem('tasks', JSON.stringify(this.$parent.$data.tasks))
    },
    toggleTaskStatus(task) {
      this.$parent.$data.tasks = this.$props.tasks.map((t) => {
        if (t.id === task.id) t.done = !t.done
        return t
      })
      localStorage.setItem('tasks', JSON.stringify(this.$parent.$data.tasks))
    },
  },
  computed: {
    reversedTasks() {
      return [...this.tasks].reverse()
    },
  },
}
</script>

<template>
  <div className="grid mt-10 gap-5">
    <div v-for="task in reversedTasks" :key="task.id" className="card bg-base-200 shadow-sm">
      <div className="flex flex-row items-center gap-2.5">
        <div className="card-actions items-center pl-6">
          <input
            type="checkbox"
            name="done"
            id="done"
            className="checkbox checkbox-secondary checkbox-sm"
            @click="toggleTaskStatus(task)"
            :checked="task.done"
          />
        </div>
        <div className="card-body flex-row items-center justify-between">
          <div className="card-title">
            <span :class="{ done: task.done }">
              {{ task.name }}
            </span>
          </div>
          <div className="card-actions">
            <div className="btn btn-ghost">
              <!-- EDIT -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#5985E1"
              >
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"
                />
              </svg>
            </div>
            <div className="btn btn-ghost" @click="removeTask(task)">
              <!-- DELETE -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#EA3323"
              >
                <path
                  d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                />
              </svg>
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
