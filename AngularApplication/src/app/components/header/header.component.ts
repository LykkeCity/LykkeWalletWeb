import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EventService } from '../../services/event.service';
import { IAsideEvent } from '../../models/aside.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(public authService: AuthService,
              private eventService: EventService) {
  }

  onAsideToggle() {
    const eventData: IAsideEvent = {direction: 'from-left', operation: 'LykkeGroup', data: {}};
    this.eventService.emitEvent('open:aside',  eventData);
  }
}
