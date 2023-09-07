import { Component } from '@angular/core';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public controller: ControllerService) {}

  ngOnInit() {
    this.controller.getProfile();
  }
}
