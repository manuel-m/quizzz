import { items } from '../data/irregular_verbs';

export const learnComp = {
  data() {
    return {
      items: Object.keys(items).map((k) => [k, ...items[k]]),
    };
  },
  template: `<div class="container m-3 mx-auto">
  <div class="flex bg-gray-100 h-8">
      <div class="p-1 w-1/4" />
      <div class="p-1 w-1/4 bg-blue-200"></div>
      <div class="p-1 w-1/4 bg-blue-300"></div>
      <div class="p-1 w-1/4 bg-blue-400"></div>
  </div>

  <div v-for="o in items" class="flex mt-1 bg-gray-100">
      <div class="p-1 w-1/4">{{o[0]}}</div>
      <div class="p-1 w-1/4 border-l-2">
          <div class="w7">{{o[1]}}</div>
      </div>
      <div class="p-1 w-1/4">{{o[2]}}</div>
      <div class="p-1 w-1/4">{{o[3].join(', ')}}</div>
  </div>
</div>
`,
};
