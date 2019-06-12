import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHideMenuComponent } from './show-hide-menu.component';

describe('ShowHideMenuComponent', () => {
  let component: ShowHideMenuComponent;
  let fixture: ComponentFixture<ShowHideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
