import { Subscription } from 'rxjs/Subscription';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventService  {

  events = {};

  addEvent(eventName ) {
    this.events[eventName] = {};
    this.events[eventName].name = eventName;
    this.events[eventName].event =  new EventEmitter<any>();
    this.events[eventName].subscriptions = [];

  }

  subscribeToEvent(eventName, callback): Subscription {

    const subId = this.events[eventName].subscriptions.length;
    this.events[eventName].subscriptions[subId] = this.events[eventName].event.subscribe(callback);

    return subId;

  }

  unsubscribeToEvent(eventName , subId)
  {
    this.events[eventName].subscriptions[subId].unsubscribe();
  }

  emitEvent(eventName, params = {} )
  {
    this.events[eventName].event.emit(params);
  }
}
