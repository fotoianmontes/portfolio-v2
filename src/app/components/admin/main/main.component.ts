import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  profileForm: FormGroup;
  profilePic: string[];
  constructor(private storageService: StorageService) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      career: new FormControl(''),
      description: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      python: new FormControl(''),
      java: new FormControl(''),
      js: new FormControl(''),
      angular: new FormControl(''),
      vuejs: new FormControl(''),
      react: new FormControl(''),
      nodejs: new FormControl(''),
      php: new FormControl(''),
      swift: new FormControl(''),
      html5: new FormControl(''),
    });

    this.profilePic = [];
  }

  ngOnInit() {
    this.storageService.getImages();
    this.profilePic = this.storageService.images;
  }

  onUpload($event: any, name: string) {
    this.storageService.uploadImage($event, name);
    this.profilePic = this.storageService.images;
  }

  onDelete(image: string) {
    this.storageService.deleteImage(image);
    this.profilePic = this.storageService.images;
  }
}
