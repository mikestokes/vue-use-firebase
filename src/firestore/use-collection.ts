import { reactive, toRefs, onServerPrefetch, onMounted } from '@vue/composition-api'
import { firestore } from "firebase"

interface UseCollectionState {
  snapshot?: firestore.QuerySnapshot,
  loading: boolean,
  error?: Error
}

export interface QueryOptions {
  onServerPrefetch?: boolean,
  onMounted?: boolean,
  snapshotListenOptions?: firestore.SnapshotListenOptions
}

// TODO: Unsubscribe from ref
// TODO: unit tests
// TODO: loading state reset on re-fresh?
// TODO: declarative components wrappers

export const useCollection = (query: firestore.Query, options?: QueryOptions) => {
  const state = reactive<UseCollectionState>({
    loading: true
  })
  
  // options?.onServerPrefetch && onServerPrefetch(async () => {
  //   _ref = snapshot()
  // })

  // options?.onMounted && onMounted(async () => {
  //   _ref = snapshot()
  // })

  const _unsubscribe = query.onSnapshot({
    ...options?.snapshotListenOptions
  }, (snapshot) => {
    state.snapshot = snapshot
    state.error = undefined
  }, (error) =>{
    state.error = error
    state.loading = false
  })
  
  const unsubscribe = (): void => {
    _unsubscribe()
  }
  
  return {
    ...toRefs(state),
    unsubscribe
  }
}
