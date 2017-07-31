import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityselectorComponent } from './entityselector.component';

describe('EntityselectorComponent', () => {
  let component: EntityselectorComponent;
  let fixture: ComponentFixture<EntityselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
