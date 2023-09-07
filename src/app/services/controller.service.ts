import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { StorageService } from './storage.service';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class ControllerService {
  profileData!: Profile;

  constructor(
    private firestore: FirestoreService,
    private storage: StorageService
  ) {}

  getProfile() {
    this.firestore
      .getProfile()
      .subscribe((profile: Profile[]) => (this.profileData = profile[0]));
  }
}
