import { Component, OnInit } from '@angular/core';
import { WsServiceService } from './services/ws-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  constructor(wService: WsServiceService) {
    wService.socketWatchdog();
   }

  ngOnInit(): void {
    
  }
  
}
