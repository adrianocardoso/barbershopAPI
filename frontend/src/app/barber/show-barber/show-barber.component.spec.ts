import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBarberComponent } from './show-barber.component';

describe('ShowBarberComponent', () => {
  let component: ShowBarberComponent;
  let fixture: ComponentFixture<ShowBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
