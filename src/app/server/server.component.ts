import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: yellow;
        }`]

    })

export class ServerComponent {
    serverId = 10;
    serverStatus: String = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getStatusServer() {
        return this.serverStatus;
    }
     
    updateServerStatus(event : Event){
        this.serverStatus = (<HTMLInputElement> event.target).value;
        console.log(event);
    }

    getColor(){
        return (this.serverStatus === 'online' ? 'green' : 'red');
    }
}