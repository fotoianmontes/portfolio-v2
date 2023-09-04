import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  images: string[];
  constructor(private storage: Storage) {
    this.images = [];
  }

  uploadImage($event: any, name: string) {
    const img = $event.target.files[0];
    const imgRef = ref(this.storage, `images/${name}`);
    let imgPath: string = '';
    this.images = [];
    uploadBytes(imgRef, img)
      .then((response) => this.getImages())
      .catch((error) => {
        console.log(error);
      });
  }

  getImages() {
    const imagesRef = ref(this.storage, 'images');
    listAll(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch((error) => console.log(error));
  }

  deleteImage(img: string) {
    const imageRef = ref(this.storage, img);
    deleteObject(imageRef)
      .then(() => {
        this.getImages();
      })
      .catch((error) => console.log(error));
    this.images = [];
  }
}
