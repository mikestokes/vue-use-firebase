const { mockFirebase } = require('firestore-jest-mock')
const { mockCollection, mockWhere } = require('firestore-jest-mock/mocks/firestore')
import { useCollection } from '@/firestore/use-collection'

describe('we can query', () => {
  const firebase = require('firebase')
  
  mockFirebase({
    database: {
      users: [
        { id: 'abc123', name: 'Homer Simpson' },
        { id: 'abc456', name: 'Lisa Simpson' }
      ]
    }
  })

  describe('useCollection', () => {
    it('should query collection', () => {
  const db = firebase.firestore()

      const query = db.collection('users')
      const use = useCollection(query)


      expect(use.snapshot).toBeFalsy
    })
  })

  test('testing stuff', () => {
    // const firebase = require('firebase'); // or import firebase from 'firebase';
    const firebase = require('firebase')
    const db = firebase.firestore()
     
    db.collection('users')
      .get()
      .then((userDocs: any) => {
        
      });
  });
})