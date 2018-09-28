import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AssistantListComponent } from './assistant-list/assistant-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssistantService } from './shared/services/assistant/assistant.service';

@NgModule({
  declarations: [
    AppComponent,
    AssistantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AssistantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
