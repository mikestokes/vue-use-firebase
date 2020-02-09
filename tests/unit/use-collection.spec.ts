import Vue from 'vue'
import VueCompositionApi, { createComponent } from '@vue/composition-api'
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
const { mockFirebase } = require('firestore-jest-mock')
const { mockCollection, mockWhere } = require('firestore-jest-mock/mocks/firestore')
import { useCollection } from '@/firestore/use-collection'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

// const component = createComponent({
//   setup(props,ctx) {
//     return { 
//       testThis: true 
//     }
//   }
// })

const mountComposition = (cb: () => any) => {
  return mount(
      {
          setup() {
              return cb()
          },
          render(h) {
              return h('div')
          }
      },
      { localVue }
  )
}

mockFirebase({
  database: {
    users: [
      { id: 'abc123', name: 'Homer Simpson' },
      { id: 'abc456', name: 'Lisa Simpson' }
    ]
  }
})


describe('we can query', () => {
    
  it('should create', () => {
    const firebase = require('firebase')
    const db = firebase.firestore()

    const query = db.collection('users')
  
    let use;

    const component = mountComposition(() => {
      use = useCollection(query);
    });

    expect(use).toBe(true);
    
    // expect(use).toHaveProperty('snapshot')
  
  })


  // describe('useCollection', () => {
  //   it('should query collection', () => {
  // const db = firebase.firestore()

  //     const query = db.collection('users')
  //     const use = useCollection(query)


  //     expect(use.snapshot).toBeFalsy
  //   })
  // })

  // test('testing stuff', () => {
  //   // const firebase = require('firebase'); // or import firebase from 'firebase';
  //   const firebase = require('firebase')
  //   const db = firebase.firestore()
     
  //   db.collection('users')
  //     .get()
  //     .then((userDocs: any) => {
        
  //     })
  // })
})