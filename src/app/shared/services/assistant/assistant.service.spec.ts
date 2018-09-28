import { TestBed } from '@angular/core/testing';

import { AssistantService } from './assistant.service';

describe('AssistantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssistantService = TestBed.get(AssistantService);
    expect(service).toBeTruthy();
  });
});
