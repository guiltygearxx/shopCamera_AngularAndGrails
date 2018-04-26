import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGioiThieuComponent } from './web-gioi-thieu.component';

describe('WebGioiThieuComponent', () => {
  let component: WebGioiThieuComponent;
  let fixture: ComponentFixture<WebGioiThieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebGioiThieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGioiThieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
