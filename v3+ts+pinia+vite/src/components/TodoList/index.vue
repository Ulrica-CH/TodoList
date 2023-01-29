<template>
  <div class="todoList">
    <todo-item
      v-for="item in todoList"
      :item="item"
      :key="item.id"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ITodo } from "../../types";
import TodoItem from "./item.vue";
import { useTodo } from "../../hooks";
const { removeTodo, setDoing, setStatus } = useTodo();
defineProps({
  todoList: {
    type: Array as PropType<ITodo[]>,
    required: true,
  },
});
</script>

<style scoped></style>
