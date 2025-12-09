import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-loading-spinner',
  template: `
    <div class="d-flex justify-content-center py-3">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  `,
  imports: [CommonModule]
})
export class LoadingSpinner {}
