import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCodeComponent } from './all-code.component';

describe('AllCodeComponent', () => {
  let component: AllCodeComponent;
  let fixture: ComponentFixture<AllCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
