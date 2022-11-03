import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitCreateComponent } from './suit-create.component';

describe('SuitCreateComponent', () => {
  let component: SuitCreateComponent;
  let fixture: ComponentFixture<SuitCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuitCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
