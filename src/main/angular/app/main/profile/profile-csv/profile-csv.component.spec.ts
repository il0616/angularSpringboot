import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCsvComponent } from './profile-csv.component';

describe('ProfileCsvComponent', () => {
  let component: ProfileCsvComponent;
  let fixture: ComponentFixture<ProfileCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
