<script setup></script>

<template>
  <div
    class="p-16 space-y-3 flex flex-col w-full items-center min-h-screen border border-red-800"
  >
    <p>hahah</p>
    <div class="w-1/2" ref="printThis">
      <draggable
        v-model="separatedText"
        class="space-x-2 flex h-32 w-full border justify-center items-center"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{ element }">
          <span
            class="w-auto cursor-grabbing font-bold"
            :class="fontColor"
            :style="{ 'font-size': fontSize + 'px' }"
            >{{ element }}</span
          >
        </template>
      </draggable>
    </div>

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
    <div class="flex w-1/2 space-x-2 items-center">
      <input
        id="default-range"
        type="range"
        min="1"
        max="100"
        @input="changeFontSize"
        :value="fontSize"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
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
        :class="{ 'outline-none ring ring-red-200': fontColor == 'red' }"
        class="w-10 h-10 rounded bg-red-300 focus:outline-none focus:ring focus:ring-red-200"
      />
      <button
        @click="changeFontColor('green')"
        :class="{ 'outline-none ring ring-green-200': fontColor == 'green' }"
        class="w-10 h-10 rounded bg-green-300 focus:outline-none focus:ring focus:ring-green-200"
      />
      <button
        @click="changeFontColor('purple')"
        :class="{ 'outline-none ring ring-purple-200': fontColor == 'purple' }"
        class="w-10 h-10 rounded bg-purple-300 focus:outline-none focus:ring focus:ring-purple-200"
      />
      <button
        @click="changeFontColor('blue')"
        :class="{ 'outline-none ring ring-blue-200': fontColor == 'blue' }"
        class="w-10 h-10 rounded bg-blue-300 focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
    <button
      @click="downloadLogo"
      type="button"
      class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Download
    </button>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import "regenerator-runtime/runtime";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      input: "Humaida",
      separatedText: [],
      fontSize: "52",
      fontColor: "text-red-300",
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
      this.fontColor = `text-${val}-300`;
      console.log(this.fontColor, "hahah");
    },
    async downloadLogo() {
      const el = this.$refs.printThis;
      const options = {
        type: "dataURL",
      };
      const output = await this.$html2canvas(el, options);
      console.log(output);
      const link = document.createElement("a");
      link.href = output;
      link.target = "_blank";
      link.download = "Logo.png";
      link.click();
    },
  },
  mounted() {
    this.input ? (this.separatedText = this.input.split("")) : [];
  },
};
</script>
