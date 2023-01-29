<template>
  <div class="app">
    <todo-input />
    <todo-list :todoList="todoList" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useTodo } from "./hooks";
import useList from "./store/listStore";
import TodoInput from "./components/TodoInput/index.vue";
import TodoList from "./components/TodoList/index.vue";

const { setTodoList } = useTodo();
const listStore = useList();
const todoList = computed(() => listStore.list);
onMounted(() => setTodoList());
</script>

<style scoped></style>
