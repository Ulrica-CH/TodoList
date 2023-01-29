<template>
  <div class="todoList">
    <todo-item
      v-for="item in todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TodoItem from "./TodoItem.vue";
import { ITodo } from "@/types";
import { useTodo } from "@/hooks";

export default defineComponent({
  name: "TodoList",
  components: { TodoItem },
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  setup() {
    const { removeTodo, setStatus, setDoing } = useTodo();
    return { removeTodo, setStatus, setDoing };
  },
});

const { removeTodo, setDoing, setStatus } = useTodo();
</script>

<style scoped></style>
