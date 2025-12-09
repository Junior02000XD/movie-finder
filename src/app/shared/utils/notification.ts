import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  showError(message: string) {
    alert('Error: ' + message);
  }

  showInfo(message: string) {
    alert(message);
  }
}
