import { Component } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  oldProfileInfo: Profile[] = [];
  constructor(private controller: ControllerService) {}

  ngOnInit() {
    this.controller.getProfile();
  }
}
