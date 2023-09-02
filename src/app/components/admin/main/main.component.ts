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

  constructor(private storageService: StorageService) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      career: new FormControl(''),
      description: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      python: new FormControl(''),
    });
  }

  ngOnInit() {}

  onUpload($event: any, name: string) {
    this.storageService.uploadImage($event, name);
  }
}
