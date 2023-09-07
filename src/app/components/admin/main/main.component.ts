import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/interfaces/profile';
import { FirestoreService } from 'src/app/services/firestore.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  profileForm: FormGroup;
  profilePic: string[];
  profileData: Profile = {
    id: '',
    firstName: '',
    lastName: '',
    logo: '',
    career: '',
    description: '',
    email: '',
    phoneNumber: '',
    python: false,
    java: false,
    js: false,
    angular: false,
    vuejs: false,
    react: false,
    nodejs: false,
    php: false,
    swift: false,
    html5: false,
    imgpath: '',
  };

  constructor(
    private storageService: StorageService,
    private firestoreService: FirestoreService
  ) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      logo: new FormControl(''),
      career: new FormControl(''),
      description: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      python: new FormControl(false),
      java: new FormControl(false),
      js: new FormControl(false),
      angular: new FormControl(false),
      vuejs: new FormControl(false),
      react: new FormControl(false),
      nodejs: new FormControl(false),
      php: new FormControl(false),
      swift: new FormControl(false),
      html5: new FormControl(false),
    });
    this.profilePic = [];
    this.firestoreService.getProfile().subscribe(
      (profile) =>
        (this.profileData = {
          id: profile[0].id,
          firstName: profile[0].firstName,
          lastName: profile[0].lastName,
          logo: profile[0].logo,
          career: profile[0].career,
          description: profile[0].description,
          email: profile[0].email,
          phoneNumber: profile[0].phoneNumber,
          python: profile[0].python,
          java: profile[0].java,
          js: profile[0].js,
          angular: profile[0].angular,
          vuejs: profile[0].vuejs,
          react: profile[0].react,
          nodejs: profile[0].nodejs,
          php: profile[0].php,
          swift: profile[0].swift,
          html5: profile[0].html5,
          imgpath: profile[0].imgpath,
        })
    );
  }
  async onSubmit() {
    this.profileForm.addControl('imgpath', new FormControl(this.profilePic[0]));
    const response = await this.firestoreService.addProfile(
      this.profileForm.value
    );
    console.log(response);
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

  onUpdate(profile: Profile) {
    if (profile.id) {
      this.firestoreService.updateProfile(
        profile.id,
        this.profileForm.value,
        'profile'
      );
    }
  }
}
