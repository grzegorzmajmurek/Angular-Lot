import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTranslationComponent } from './dropdown-translation.component';

describe('DropdownTranslationComponent', () => {
  let component: DropdownTranslationComponent;
  let fixture: ComponentFixture<DropdownTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
