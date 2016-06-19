import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AssistantListAppComponent, environment} from './app/';

import {AssistantService} from './app/assistant.service'
if (environment.production) {
  enableProdMode();
}

bootstrap(AssistantListAppComponent, [HTTP_PROVIDERS, AssistantService]);
