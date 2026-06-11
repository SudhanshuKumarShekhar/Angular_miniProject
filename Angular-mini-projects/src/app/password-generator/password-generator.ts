import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  imports: [],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGenerator {
password = signal('');
generate() {
  // Password generation logic would go here
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  let pass = '';
  for (let i = 0; i < 12; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  this.password.set(pass);
}
}
