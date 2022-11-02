import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantherUpdateComponent } from './panther-update.component';

describe('PantherUpdateComponent', () => {
  let component: PantherUpdateComponent;
  let fixture: ComponentFixture<PantherUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantherUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantherUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
