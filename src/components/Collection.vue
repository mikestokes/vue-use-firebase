<template>
  <div>
    <div v-for="(doc, index) in docs" :key="doc.id">
      <slot :doc="doc" :id="doc.id" :index="index"></slot>
      <slot v-show="isLoading" name="loading"></slot>
      <slot v-show="isEmpty" name="empty"></slot>
      <slot v-show="isError" name="error"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, computed, Ref, PropType, onServerPrefetch, onMounted, onUnmounted } from '@vue/composition-api'
import { useCollection } from '@/firestore/use-collection'
import { firestore } from 'firebase'

export default createComponent({
  props:{
    query: {
      type: Object as PropType<firestore.Query>,
      required: true
    },
    once: {
      type: Boolean,
      required: true
    },
    wait: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  setup (props, ctx) {
    const { snapshot, loading, error, unsubscribe } = useCollection(props.query)
    
    // Watch for data changes from onSnapshot
    const docs = computed(() => {
      const data = snapshot.value.docs.map(snap => ({
        ...snap.id,
        ...snap.data()
      }))

      // Unsubscribe immediately with once queries
      props.once && unsubscribe()

      return data
    })

    // Slot state
    // TODO: how to correctly return type from useXXX
    const isLoading = computed(() => (loading as Ref<boolean>).value === true)
    const isEmpty = computed(() => docs && docs.value.length === 0)
    const isError = computed(() => error.value)

    // Unsubscribe on component unmount 
    onUnmounted(() => {
      unsubscribe()
    })

    return {
      docs,
      loading,
      error,
      isLoading,
      isEmpty,
      isError
    }
  }
})
</script>
