import About from './../template/pages/About.vue';
import ApiSample from './../template/pages/ApiSample.vue';
import MDLSamples from './../template/pages/MDLSamples.vue';
import Libraries from './../template/pages/Libraries.vue';
import Credit from './../template/pages/Credit.vue';

// SPAのルーティングを書くファイル

export default [
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'ApiSample',
    path: '/api-sample',
    component: ApiSample
  },
  {
    name: 'MDLSamples',
    path: '/mdl-samples',
    component: MDLSamples
  },
  {
    name: 'libraries',
    path: '/libraries',
    component: Libraries
  },
  {
    name: 'credit',
    path: '/credit',
    component: Credit
  },
  {
    name: 'NotFound',
    path: '*',
    component: About
  }
];