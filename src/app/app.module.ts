import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SucessAlert } from './sucess-alert/sucess-alert.component';
import { NgForExerciseComponente } from './ngFor/ngFor.component';
import { BasicHighlightDirective } from './atributeDirective/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './atributeDirective/better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SucessAlert,
    WarningComponent,
    NgForExerciseComponente,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
