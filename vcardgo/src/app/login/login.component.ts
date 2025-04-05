import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  template: `
    <ion-content class="ion-padding">
      <ion-input placeholder="Email" [(ngModel)]="email" class="mb-4"></ion-input>
      <ion-input type="password" placeholder="Passwort" [(ngModel)]="password" class="mb-4"></ion-input>
      <ion-button expand="block" (click)="login()">Login</ion-button>
    </ion-content>
  `,
  styles: [`
    .mb-4 { margin-bottom: 16px; }
  `],
  standalone: true,
  imports: [IonContent, IonInput, IonButton]
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AngularFireAuth, private router: Router) {}

  async login() {
    await this.auth.signInWithEmailAndPassword(this.email, this.password);
    this.router.navigate(['/card-form']);
  }
}
