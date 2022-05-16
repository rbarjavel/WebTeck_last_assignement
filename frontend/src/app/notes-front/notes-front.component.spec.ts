import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFrontComponent } from './notes-front.component';

describe('NotesFrontComponent', () => {
  let component: NotesFrontComponent;
  let fixture: ComponentFixture<NotesFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
