import { Injectable } from '@angular/core';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  toasts: Toast[] = [];

  private nextId = 1;

  show(message: string, type: Toast['type']) {
    const id = this.nextId++;
    const toast: Toast = { message, type, id };

    this.toasts.push(toast);

    // Auto-close a los 3 segundos
    setTimeout(() => {
      this.removeById(id);
    }, 5000);
  }

  showSuccess(message: string) {
    this.show(message, 'success');
  }

  showError(message: string) {
    this.show(message, 'error');
  }

  showInfo(message: string) {
    this.show(message, 'info');
  }

  showWarning(message: string) {
    this.show(message, 'warning');
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter(t => t.id !== toast.id);
  }

  private removeById(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }
}
