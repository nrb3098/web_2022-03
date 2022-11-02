import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantherDeleteComponent } from './panther-delete.component';

describe('PantherDeleteComponent', () => {
  let component: PantherDeleteComponent;
  let fixture: ComponentFixture<PantherDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantherDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantherDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
