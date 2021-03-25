import { items } from '../data/irregular_verbs';
import { sample } from '../lib/utils';

const trainItems = [];

function genTrainItems() {
  const values = sample(Object.keys(items).map((k) => [k, ...items[k]]), 10);
  const shuffled = values.map((v) => [
    v,
    Math.floor(Math.random() * 3),
    '', // answer
    '', // mark
  ]);
  for (let i = 0; i < shuffled.length; i++) {
    trainItems[i] = shuffled[i];
  }
}

export const trainComp = {
  data() {
    if (trainItems.length === 0) {
      genTrainItems();
    }
    return {
      trainItems,
    };
  },
  methods: {
    check(e) {
      for (const trainItem of trainItems) {
        const [values, fi, answer] = trainItem;
        trainItem[3] = values[fi] === answer ? 'ok' : 'ko';
      }
      console.log(trainItems);
    },
  },
  template: `<div class="container m-3 mx-auto">
  <div class="flex bg-gray-100">
      <div class="p-1 w-1/4" />
      <div class="p-1 w-1/4 bg-blue-200"></div>
      <div class="p-1 w-1/4 bg-blue-300"></div>
      <div class="p-1 w-1/4 bg-blue-400">
        <button v-on:click="check" 
                class="bg-gray-200 focus:outline-none focus:ring rounded-md 
                       border border-blue-700 shadow-sm px-4 py-1 m-1 text-sm 
                       font-medium float-right">
          check
        </button>
      </div>
  </div>

  <div v-for="o in trainItems" class="flex mt-1 ml-1 bg-gray-100">

     <input v-model="o[2]" v-if="o[1] === 0" class="p-1 w-1/4 border-2 border-blue-300 rounded">
     <div v-else class="p-1 w-1/4">{{o[0][0]}}</div>

      <input v-model="o[2]" v-if="o[1] === 1" class="p-1 w-1/4 border-2 border-blue-300 rounded">
      <div v-else class="p-1 w-1/4 border-l-2">{{o[0][1]}}</div>

      <input v-model="o[2]" v-if="o[1] === 2" class="p-1 w-1/4 border-2 border-blue-300 rounded">
      <div v-else class="p-1 w-1/4">{{o[0][2]}}</div>

      <div class="p-1 w-1/4">{{o[0][3].join(', ')}}</div>

  </div> 
</div>
`,
};
