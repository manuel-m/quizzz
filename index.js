import Vue from './node_modules/vue/dist/vue.esm.browser';
import VueRouter from './node_modules/vue-router/dist/vue-router.esm.browser';

import { hdr } from './app/hdr.comp';

import { learnComp } from './app/learn.comp';
import { trainComp } from './app/train.comp';
import { testComp } from './app/test.comp';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/learn', component: learnComp },
    { path: '/train', component: trainComp },
    // { path: '/test', component: testComp },
  ],
});

router.push('/train');

const app = new Vue({
  components: {
    hdr,
    learnComp,
    testComp,
  },
  router,
  template: '<div><hdr/><router-view></router-view></div>',
}).$mount('#app');
