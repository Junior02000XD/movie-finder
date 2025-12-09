import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../utils/notification';

@Component({
  standalone: true,
  selector: 'app-toast-container',
  templateUrl: './toast-container.html',
  styleUrls: ['./toast-container.css'],
  imports: [CommonModule]
})
export class ToastContainerComponent {
  constructor(public notifier: NotificationService) {}
}