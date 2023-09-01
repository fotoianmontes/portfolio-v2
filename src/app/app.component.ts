import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-v2';

  constructor(private storageServe: StorageService) {}

  onUpload($event: any, name: string) {
    this.storageServe.uploadImage($event, name);
  }
}
