import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  /*template: `
    <app-server></app-server>
    <app-server></app-server>
  `,*/
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  ieEnableButton = false;
  serverCreationStatus: String = 'No server was create!';
  serverName = '';
  serverCreated = false;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.ieEnableButton = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was create sucessfully! Name ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  updateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }
}
