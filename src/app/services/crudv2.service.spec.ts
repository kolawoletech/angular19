import { TestBed } from '@angular/core/testing';

import { Crudv2Service } from './crudv2.service';

describe('Crudv2Service', () => {
  let service: Crudv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crudv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
