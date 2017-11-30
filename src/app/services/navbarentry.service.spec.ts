import { TestBed, inject } from '@angular/core/testing';

import { NavbarentryService } from './navbarentry.service';

describe('NavbarentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarentryService]
    });
  });

  it('should be created', inject([NavbarentryService], (service: NavbarentryService) => {
    expect(service).toBeTruthy();
  }));
});
