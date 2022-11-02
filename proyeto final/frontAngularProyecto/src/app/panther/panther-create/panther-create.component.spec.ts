import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantherCreateComponent } from './panther-create.component';

describe('PantherCreateComponent', () => {
  let component: PantherCreateComponent;
  let fixture: ComponentFixture<PantherCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantherCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantherCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
