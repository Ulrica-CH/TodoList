<template>
  <div class="todoItem">
    <input
      type="checkbox"
      :checked="item.status === FININSHED"
      @click="setStatus(item.id)"
    />
    <span
      class="content"
      :class="item.status === FININSHED ? 'line-through' : ''"
      >{{ item?.content }}</span
    >
    <button @click="removeTodo(item.id)">删除</button>
    <button
      @click="setDoing(item.id)"
      :class="item.status === DOING ? 'doing' : 'todo'"
    >
      {{ item.status === DOING ? "正在做" : "马上做" }}
    </button>
  </div>
</template>

<!-- <script lang="ts" setup>
import { ITodo, TODO_STATIS } from "@/types";
import { PropType } from "vue";

defineProps({ item: Object as PropType<ITodo> });
const emit = defineEmits(["removeTodo", "setStatus", "setDoing"]);
interface IStatusState {
  FININSHED: TODO_STATIS;
  WILLDO: TODO_STATIS;
  DOING: TODO_STATIS;
}
const statusState: IStatusState = {
  FININSHED: TODO_STATIS.FINISHED,
  WILLDO: TODO_STATIS.WILLDO,
  DOING: TODO_STATIS.DOING,
};
const removeTodo = (id: any) => {
  emit("removeTodo", id);
};
const setStatus = (id: any) => {
  emit("setStatus", id);
};
const setDoing = (id: any) => {
  emit("setDoing", id);
};
</script> -->

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodo, TODO_STATIS } from "@/types";
export default defineComponent({
  name: "TodoItem",
  props: {
    item: {
      type: Object as PropType<ITodo>,
      required: true,
    },
  },
  setup(_, { emit }) {
    interface IStatusState {
      FININSHED: TODO_STATIS;
      WILLDO: TODO_STATIS;
      DOING: TODO_STATIS;
    }
    const statusState: IStatusState = {
      FININSHED: TODO_STATIS.FINISHED,
      WILLDO: TODO_STATIS.WILLDO,
      DOING: TODO_STATIS.DOING,
    };
    const removeTodo = (id: number) => {
      emit("removeTodo", id);
    };
    const setStatus = (id: number) => {
      emit("setStatus", id);
    };
    const setDoing = (id: number) => {
      emit("setDoing", id);
    };

    return {
      ...statusState,
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>
<style scoped>
.line-through {
  text-decoration: line-through;
}
.doing {
  background-color: #ccc;
}
.todo {
  background-color: red;
}
</style>
