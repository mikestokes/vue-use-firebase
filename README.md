# vue-use-firebase
Vue.js Composition API functions for Firebase

You can use these with Vue 2 right now using [@vue/composition-api](https://github.com/vuejs/composition-api).

Core support for the Vue Composition API is coming in Vue 3 and will be compatible with the Vue 2 library implementation.

## Why?
Vue's new Composition API is an amazing and clean way to extract and re-use common code that is somewhat based on the popular React Hooks. You can check out the [Vue team's detailed reasoning and design](https://vue-composition-api-rfc.netlify.com/).

I've always used Vuex (or Redux in React) for state management within larger applications. This library explores the use of Firebase without having to store the state in Vuex, although that is definately possible if you want to.

## Installation

```bash
# install with yarn
yarn add @vue/composition-api vue-use-firebase

# install with npm
npm install @vue/composition-api vue-use-firebase
```

## Usage


## Sharing State
By default when you call a Composition function, a new instance is created. If you want ot share your state between components in your application, you need to use the ``Provide`` and ``Inject`` APIs:

TODO: add example

## Server Side Rendering Support
You can use these functions with the ``onServerPrefetch`` hook exposed in the composition API:

TODO: add example

### Nuxt Support
Nuxt supports the ``onServerPrefetch`` hook so you can replace the use of Nuxt's ``fetch`` function with this: 

TODO: add example

## Vuex Support

## Inspitation
This library is inspired from the awesome work by ChrisBianca on [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks)

## License
See [LICENSE](LICENSE)
