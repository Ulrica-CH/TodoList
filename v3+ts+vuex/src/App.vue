<template>
  <div class="warpper">
    <todo-input />
    <todo-list :todoList="todoList" />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, onMounted } from "vue";
import { useTodo } from "@/hooks";
import { useStore } from "vuex";
import { ITodo } from "./types";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    TodoInput,
    TodoList,
  },
  setup() {
    const store = useStore();
    const todoList: ComputedRef<ITodo[]> = computed(() => store.state.list);
    const { setTodoList } = useTodo();
    onMounted(() => {
      setTodoList();
    });
    return {
      todoList,
    };
  },
});
</script>
