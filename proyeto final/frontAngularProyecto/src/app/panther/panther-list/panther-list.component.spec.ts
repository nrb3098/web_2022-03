import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantherListComponent } from './panther-list.component';

describe('PantherListComponent', () => {
  let component: PantherListComponent;
  let fixture: ComponentFixture<PantherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
