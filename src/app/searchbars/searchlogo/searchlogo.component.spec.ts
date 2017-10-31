import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlogoComponent } from './searchlogo.component';

describe('SearchlogoComponent', () => {
  let component: SearchlogoComponent;
  let fixture: ComponentFixture<SearchlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
