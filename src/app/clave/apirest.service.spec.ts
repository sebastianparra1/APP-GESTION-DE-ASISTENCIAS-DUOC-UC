import { TestBed } from '@angular/core/testing';
import { ClaveApirestService } from './apirest.service';



describe('ApirestService', () => {
  let service: ClaveApirestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaveApirestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});