import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AssistantService } from './assistant.service';

describe('Assistant Service', () => {
  beforeEachProviders(() => [AssistantService]);

  it('should ...',
      inject([AssistantService], (service: AssistantService) => {
    expect(service).toBeTruthy();
  }));
});
