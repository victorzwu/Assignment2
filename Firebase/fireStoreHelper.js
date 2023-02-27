import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase-setup";

export async function writeToDB(entry) {
    try {
      const docRef = await addDoc(collection(firestore, "entries"), entry);
    } catch (error) {
      console.log(error);
    }
  }

  export async function deleteFromDB(id) {
    try {
      await deleteDoc(doc(firestore, "entries", id));
    } catch (err) {
      console.log(err);
    }
  }


   export async function editFromDB(id) {
    try {
      await updateDoc(doc(firestore, "entries", id), {overLimit: false});
    } catch (err) {
      console.log(err);
    }
  }