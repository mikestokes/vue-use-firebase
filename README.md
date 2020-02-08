# vue-use-firebase

[![GitHub license](https://img.shields.io/github/license/mikestokes/vue-use-firebase?style=flat-square)](https://github.com/mikestokes/vue-use-firebase/blob/master/LICENSE)

Vue.js Composition API functions for [Firebase](https://firebase.google.com)

You can use these with Vue 2 right now using [@vue/composition-api](https://github.com/vuejs/composition-api).

Core support for the Vue Composition API is coming in Vue 3 and will be compatible with the Vue 2 library implementation.

## Why?
Vue's new Composition API is an amazing and clean way to extract and re-use common code that is somewhat based on the popular React Hooks. You can check out the [Vue team's detailed reasoning and design](https://vue-composition-api-rfc.netlify.com/).

I've always used Vuex (or Redux in React) for state management within larger applications. This library explores the use of Firebase without having to store the state in Vuex, although that is definately possible if you want to.

## Installation
To install the library and the Vue Composition API:

```bash
# install with yarn
yarn add @vue/composition-api vue-use-firebase

# install with npm
npm install @vue/composition-api vue-use-firebase
```

## TypeScript
Please also follow the installation steps for the [Composition API](https://github.com/vuejs/composition-api). This plugin requires TypeScript version >3.5.1. If you are using vetur, make sure to set ``vetur.useWorkspaceDependencies`` to ``true`` (if you are using [Visual Studio Code](https://code.visualstudio.com/), you can do this in the ``Preferences->Settings->User`` window and search for ``vetur`` to display the settings).

## Usage


## Sharing State
By default when you call a Composition function, a new instance is created. If you want ot share your state between components in your application, you need to use the ``Provide`` and ``Inject`` APIs:

TODO: add example

## Server Side Rendering Support
You can use these functions with the ``onServerPrefetch`` and ``onMounted`` hooks exposed in the composition API. Note that ``onServerPrefetch`` is implemented in the Composition API for Vue 2 but the SSR implementation in Vue 3 may look different.

```typescript
import { onServerPrefetch, onMounted } from '@vue/composition-api';

export default {
  setup (props, ctx) {
    const result = ref();

    onServerPrefetch(async () => {
      result.value = await useCollection(...)
    });
    
    onMounted(async () => {
      if (process.client) {
        result.value = await useCollection(...)
      }
    });

    return {
      result,
    };
  },
};
```

### Nuxt Support
Nuxt supports the ``onServerPrefetch`` hook so you can replace the use of Nuxt's ``fetch`` function with this: 

TODO: add example

## Vuex Support

## Inspiration
This library is inspired from the awesome work by ChrisBianca on [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks)

## License
See [LICENSE](LICENSE)