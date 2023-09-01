import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  uploadImage($event: any, name: string) {
    const img = $event.target.files[0];
    const imgRef = ref(this.storage, `images/${name}`);
    uploadBytes(imgRef, img)
      .then(() => {
        alert('imagen guardada');
      })
      .catch((error) => console.log(error));
  }
}
