// Tu código aquí.

import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const counter = ref(0)


    const lower = () => {
      counter.value--;
    }
    
    const add = () => {
      counter.value++;
    }

    

    return {
      counter,
      lower,
      add,
      

    };
  },
}).mount("#app");
