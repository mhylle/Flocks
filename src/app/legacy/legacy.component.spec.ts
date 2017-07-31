import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyComponent } from './legacy.component';

describe('LegacyComponent', () => {
  let component: LegacyComponent;
  let fixture: ComponentFixture<LegacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
