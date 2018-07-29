import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCellEditorComponent } from './password-cell-editor.component';

describe('PasswordCellEditorComponent', () => {
  let component: PasswordCellEditorComponent;
  let fixture: ComponentFixture<PasswordCellEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordCellEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
