<template>
  <div class="todoList">
    <input type="text" v-model="todoVal" @keyup="setTodoVal" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTodo } from "../../hooks";
const todoVal = ref<string>("");
const { setTodo } = useTodo();
const setTodoVal = (e: KeyboardEvent) => {
  if (e.key === "Enter" && todoVal.value.trim().length) {
    setTodo(todoVal.value);
    todoVal.value = "";
  }
};
</script>

<style scoped></style>
