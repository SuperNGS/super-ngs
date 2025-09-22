import { Component, OnInit } from '@angular/core';
import { Notification } from '../classes/notification';
import { NotificationService } from '../services/notification.service';
import { Subscription } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MatIcon, MatIconButton, NgClass],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {

  private notificationSub!: Subscription;
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationSub = this.notificationService.getObservable().subscribe((res: Notification) => this.addNotification(res));
  }

  public addNotification(notification: Notification) {
    this.notifications.push(notification);

    if( notification.timeout !== 0 ) {
      setTimeout( () => this.closeNotification(notification), notification.timeout);
    }
  }

  public closeNotification(notification: Notification) {
    this.notifications = this.notifications.filter((res) => res.id !== notification.id);
  }
}
