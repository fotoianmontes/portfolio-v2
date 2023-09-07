import { Component } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  profileData!: Profile;
  barStat: string = '15%';
  constructor(private firestore: FirestoreService) {}

  getProfile() {
    this.firestore.getProfile().subscribe((profile: Profile[]) => {
      this.profileData = profile[0];
      console.log(this.profileData);
    });
  }

  ngOnInit() {
    this.getProfile();
  }

  getResume() {}
}
