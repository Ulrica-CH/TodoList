<template>
  <div class="todoInput">
    <input type="text" v-model="todoVal" @keyup="setTodoVal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodo } from "../hooks";
export default defineComponent({
  setup() {
    const todoVal = ref<string>("");
    const { setTodo } = useTodo();
    function setTodoVal(e: KeyboardEvent): void {
      if (e.key === "Enter" && todoVal.value.trim().length) {
        setTodo(todoVal.value);
        todoVal.value = "";
      }
    }
    return {
      todoVal,
      setTodoVal,
    };
  },
});
</script>

<style scoped></style>
