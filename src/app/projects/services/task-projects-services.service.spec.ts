import { TestBed } from '@angular/core/testing';

import { TaskProjectsServicesService } from './task-projects-services.service';

describe('TaskProjectsServicesService', () => {
  let service: TaskProjectsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskProjectsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
