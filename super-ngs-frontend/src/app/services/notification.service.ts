import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification } from '../classes/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public DEFAULT_TIMEOUT = 5000;

  private INDEX = 0;

  private SUBJECT = new Subject<Notification>();

  constructor() { }

  public getObservable(): Observable<Notification> {
    return this.SUBJECT.asObservable();
  }

   /**
   * Displays an info message to the user
   * 
   * @param title Title of the Notification
   * @param message Message associated with the Notification
   * @param timeout How long (in milliseconds) before the message should auto close, leave blank for default
   */
  info(title: string, message: string, timeout?: number){
    this.SUBJECT.next( { id: this.INDEX++, type: "info", title: title, message: message, timeout: timeout ? timeout : this.DEFAULT_TIMEOUT } );
  }

    /**
   * Displays a success message to the user
   * 
   * @param title Title of the Notification
   * @param message Message associated with the Notification
   * @param timeout How long (in milliseconds) before the message should auto close, leave blank for default
   */
  success(title: string, message: string, timeout?: number){
    this.SUBJECT.next( { id: this.INDEX++, type: "success", title: title, message: message, timeout: timeout ? timeout : this.DEFAULT_TIMEOUT } );
  }

    /**
   * Displays a warning message to the user
   * 
   * @param title Title of the Notification
   * @param message Message associated with the Notification
   * @param timeout How long (in milliseconds) before the message should auto close, leave blank for default
   */
  warning(title: string, message: string, timeout?: number){
    this.SUBJECT.next( { id: this.INDEX++, type: "warning", title: title, message: message, timeout: timeout ? timeout : this.DEFAULT_TIMEOUT } );
  }

    /**
   * Displays an error message to the user
   * 
   * @param title Title of the Notification
   * @param message Message associated with the Notification
   * @param timeout How long (in milliseconds) before the message should auto close, leave blank for default
   */
  error(title: string, message: string, timeout?: number){
    this.SUBJECT.next( { id: this.INDEX++, type: "error", title: title, message: message, timeout: timeout ? timeout : this.DEFAULT_TIMEOUT } );
  }
}
