import { Component } from '@angular/core';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  barStat: string = '15%';
  constructor(public controller: ControllerService) {}
  ngOnInit() {
    this.controller.getProfile();
  }
}
