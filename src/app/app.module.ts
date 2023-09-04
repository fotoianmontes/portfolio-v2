import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { MainComponent } from './components/admin/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperiencesComponent } from './components/admin/experiences/experiences.component';
import { EducationComponent } from './components/admin/education/education.component';
import { HomeComponent } from './components/home/home.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { appRoutingProviders, routing } from 'src/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    MainComponent,
    ExperiencesComponent,
    EducationComponent,
    HomeComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
