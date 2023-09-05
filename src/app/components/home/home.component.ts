import { Component } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  oldProfileInfo: Profile[] = [];
  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.firestoreService.getProfile().subscribe((profile) => {
      this.oldProfileInfo = profile;

      console.log(this.oldProfileInfo[0]);
    });
  }
}
