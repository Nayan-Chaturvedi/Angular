import { Injectable } from '@angular/core';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private db: any;
  constructor() {
    this.db = getFirestore();
  }

  async createSnippet(snippet: { title: string; code: string }) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippet'), snippet);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('While craeting error');
    }
  }

  // Get all snippet function
  async getAllSnippet() {
    let result: any[] = [];
    const querySnapshot = await getDocs(collection(this.db, 'snippet'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      result.push(doc.data);
    });
    return result;
  }

  // Get single snippet
 async getSnippetById(docId:string)
 {
  const docRef = doc(this.db, "snippet", "docId");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
 }
}
