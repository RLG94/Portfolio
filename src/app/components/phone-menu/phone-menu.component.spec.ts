import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMenuComponent } from './phone-menu.component';

describe('PhoneMenuComponent', () => {
  let component: PhoneMenuComponent;
  let fixture: ComponentFixture<PhoneMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
