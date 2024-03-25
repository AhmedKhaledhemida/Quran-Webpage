import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeiaComponent } from './adeia.component';

describe('AdeiaComponent', () => {
  let component: AdeiaComponent;
  let fixture: ComponentFixture<AdeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdeiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
