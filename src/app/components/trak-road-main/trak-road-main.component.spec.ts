import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakRoadMainComponent } from './trak-road-main.component';

describe('TrakRoadMainComponent', () => {
  let component: TrakRoadMainComponent;
  let fixture: ComponentFixture<TrakRoadMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrakRoadMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrakRoadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
