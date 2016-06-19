import {Component} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {AssistantService, Assistants, Assistant, Name, Location, ProfilePicture} from './assistant.service'

@Component({
  moduleId: module.id,
  selector: 'assistant-list-app',
  templateUrl: 'assistant-list.component.html',
  styleUrls: ['assistant-list.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher],

})
export class AssistantListAppComponent {
  constructor(private assistantService:AssistantService) {
  }

  DEFAULT_ASSISTANTS:string = '6';
  formShowing:boolean = false;
  views:Object[] = [
    {
      name: "My Account",
      description: "Edit my account",
      icon: "assignment ind"
    },
    {
      name: "Next events",
      description: "Find incoming events!",
      icon: "event"
    }
  ];

  assistants:Assistant[];
  errorMessage:string;

  model:Assistant;

  add() {
    this.assistants.push(this.model);
    this.initModel();
  }

  getAssistants() {
    this.assistantService.getAssistants(this.DEFAULT_ASSISTANTS).subscribe(
      assistants => {
        this.assistants = assistants.results;
      },
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getAssistants();
    this.initModel();
  }

  initModel() {
    this.model = new Assistant(new Name('', ''), new Location(''), '', new ProfilePicture(''), '');
  }
}
