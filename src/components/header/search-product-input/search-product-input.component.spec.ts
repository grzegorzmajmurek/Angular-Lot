import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductInputComponent } from './search-product-input.component';

describe('SearchProductInputComponent', () => {
  let component: SearchProductInputComponent;
  let fixture: ComponentFixture<SearchProductInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
