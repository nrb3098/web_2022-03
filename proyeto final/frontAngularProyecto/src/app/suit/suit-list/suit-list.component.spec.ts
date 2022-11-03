import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitListComponent } from './suit-list.component';

describe('SuitListComponent', () => {
  let component: SuitListComponent;
  let fixture: ComponentFixture<SuitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuitListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
