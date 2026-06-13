import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-github',
  imports: [],
  templateUrl: './github.html',
  styleUrl: './github.css',
})
export class Github {
  private base_url: string = 'https://api.github.com/users/';
  query = signal('');
  user = signal<any>(null);
  loading = signal(false);
  error = signal('');

searchUser() {
  if (!this.query()) return;

    this.loading.set(true);
    this.error.set('');
    this.user.set(null);

    fetch(`${this.base_url}${this.query()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((data) => {
        this.user.set(data);
      })
      .catch((err) => {
        this.error.set(err.message);
      })
      .finally(() => {
        this.loading.set(false);
      });
}
 openProfile() {
  if (this.user()) {
    window.open(this.user().html_url, '_blank');
  }
 }

}
