<template>
  <div class="todoItem">
    <input type="checkbox" @click="setStatus(item.id)" />
    <span :class="item.status === statusState.FINISHED ? 'line-through' : ''">{{
      item.content
    }}</span>
    <button @click="removeTodo(item.id)">删除</button>
    <button @click="setDoing(item.id)">
      {{ item.status === statusState.DOING ? "正在做" : "马上做" }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ITodo, TODO_STATIS } from "../../types";

defineProps({
  item: {
    type: Object as PropType<ITodo>,
    required: true,
  },
});
const emit = defineEmits(["removeTodo", "setStatus", "setDoing"]);
const statusState = {
  FINISHED: TODO_STATIS.FINISHED,
  WILLDO: TODO_STATIS.WILLDO,
  DOING: TODO_STATIS.DOING,
};

const removeTodo = (id: number) => emit("removeTodo", id);
const setStatus = (id: number) => emit("setStatus", id);
const setDoing = (id: number) => emit("setDoing", id);
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
