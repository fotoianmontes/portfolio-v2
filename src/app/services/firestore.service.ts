import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  deleteDoc,
  collection,
  addDoc,
  updateDoc,
  collectionData,
} from '@angular/fire/firestore';
import { Profile } from '../interfaces/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getProfile(): Observable<Profile[]> {
    const profileRef = collection(this.firestore, 'profile');
    return collectionData(profileRef, { idField: 'id' }) as Observable<
      Profile[]
    >;
  }

  addProfile(profileData: Profile) {
    const profileRef = collection(this.firestore, 'profile');
    return addDoc(profileRef, profileData);
  }

  deleteProfile() {
    let delProfile: Profile[] = [];
    this.getProfile().subscribe((profile) => {
      delProfile = profile;
      const profileDocRef = doc(this.firestore, `profile/${delProfile[0].id}`);
      deleteDoc(profileDocRef);
    });
  }

  updateProfile(id: string, updatedProfile: any, collection: string) {
    const profileDoc = doc(this.firestore, collection, id);
    updateDoc(profileDoc, updatedProfile)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}
