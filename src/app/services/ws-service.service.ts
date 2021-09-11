import { Injectable, OnInit } from '@angular/core';


export const WS_ENDPOINT = "wss://server.ultimaos.com/ws";


@Injectable({
  providedIn: 'root'
})
export class WsServiceService {
  socket!: any;
  dogTimer!: NodeJS.Timeout;

  constructor() {
  }

  socketWatchdog(): void {
    console.log('Starting');
    this.socket = null;
    this.socket = new WebSocket(WS_ENDPOINT);

    this.socket.onmessage = (event: string): void => {
      console.log('Event: ' + event);
      // subscriptions are coming here
    };

    this.socket.onerror = (): void => {
      console.log('Error connecting to socket, who cares');
      this.socket.close();
    };


    this.socket.onopen = (): void => {
      clearInterval(this.dogTimer);
      console.log('We are live');

      this.socket.onclose = (): void => {
        console.log('Socket on close triggered, no pasará!');

        this.dogTimer = setInterval(() => {
          console.log('Socket disconnected, dogs are getting a refreshment');
          if (this.socket.CLOSED) {
            console.log('socket is closed trying to let the dogs out');
            this.socketWatchdog();
          }
          if (!this.socket.OPEN) {
            console.log('Trying to listen');
            this.socketWatchdog();
          } else {
            console.log('Everything`s gonna be fine folks, working');
          }
        }, 10000);
      };
    };
  }
}