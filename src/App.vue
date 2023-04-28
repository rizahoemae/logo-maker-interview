<script setup></script>

<template>
  <div
    class="p-16 space-y-3 flex flex-col w-full items-center min-h-screen border border-red-800"
  >
    <!-- <h1 class="text-3xl font-bold underline">{{ separatedText }}</h1> -->
    <draggable
      v-model="separatedText"
      class="space-x-2 flex h-32 w-1/2 border justify-center items-center"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
    >
      <template #item="{ element }">
        <span
          class="w-auto cursor-grabbing font-bold"
          :class="'text-' + fontColor"
          :style="{ 'font-size': fontSize + 'px' }"
          >{{ element }}</span
        >
      </template>
    </draggable>
    <form class="w-1/2 flex">
      <input
        type="search"
        id="default-search"
        class="text-sm w-full text-center flex text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
        v-model="input"
        @input="separateText"
      />
    </form>
    <div class="flex w-1/2">
      <input
        id="default-range"
        type="range"
        @input="changeFontSize"
        :value="fontSize"
        class="w-11/12 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <label
        for="default-range"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >{{ fontSize }}</label
      >
    </div>
    <div class="flex space-x-4">
      <button
        @click="changeFontColor('red')"
        class="w-10 h-10 rounded bg-red-300 focus:outline-none focus:ring focus:ring-red-200"
      />
      <button
        @click="changeFontColor('green')"
        class="w-10 h-10 rounded bg-green-300 focus:outline-none focus:ring focus:ring-green-200"
      />
      <button
        @click="changeFontColor('purple')"
        class="w-10 h-10 rounded bg-purple-300 focus:outline-none focus:ring focus:ring-purple-200"
      />
      <button
        @click="changeFontColor('blue')"
        class="w-10 h-10 rounded bg-blue-300 focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      input: "Humaida",
      separatedText: [],
      fontSize: "52",
      fontColor: "red-300",
      drag: false,
      positions: {
        clientX: undefined,
        clientY: undefined,
        initialX: 0,
        initialY: 0,
      },
    };
  },
  methods: {
    separateText() {
      this.separatedText = this.input.split("");
    },
    changeFontSize(e) {
      this.fontSize = e.target.value;
    },
    changeFontColor(val) {
      this.fontColor = val + "-300";
			console.log(this.fontColor)
    },
    // dragMouseDown(e) {
    //   e.preventDefault();
    //   console.log(e);
    //   // get the mouse cursor position at startup:
    //   this.positions.clientX = e.clientX;
    //   this.positions.clientY = e.clientY;
    //   document.onmousemove = this.elementDrag;
    //   document.onmouseup = this.closeDragElement;
    // },
    // elementDrag(e) {
    //   e.preventDefault();
    //   this.positions.initialX = this.positions.clientX - e.clientX;
    //   this.positions.initialY = this.positions.clientY - e.clientY;
    //   this.positions.clientX = e.clientX;
    //   this.positions.clientY = e.clientY;
    //   // set the element's new position:
    //   this.$refs.draggableElement.style.top =
    //     this.$refs.draggableElement.offsetTop - this.positions.initialY + "px";
    //   this.$refs.draggableElement.style.left =
    //     this.$refs.draggableElement.offsetLeft - this.positions.initialX + "px";
    // },
    // closeDragElement() {
    //   document.onmouseup = null;
    //   document.onmousemove = null;
    // },
  },
  mounted() {
    this.input ? (this.separatedText = this.input.split("")) : [];
  },
};
</script>
<!-- <style>
#draggable-element {
  position: absolute;
  z-index: 9;
}
</style> -->
