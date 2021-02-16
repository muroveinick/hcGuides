import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTalentComponent } from './hero-talent.component';

describe('HeroTalentComponent', () => {
  let component: HeroTalentComponent;
  let fixture: ComponentFixture<HeroTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
