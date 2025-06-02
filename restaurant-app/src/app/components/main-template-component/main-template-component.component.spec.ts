import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateComponentComponent } from './main-template-component.component';

describe('MainTemplateComponentComponent', () => {
  let component: MainTemplateComponentComponent;
  let fixture: ComponentFixture<MainTemplateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTemplateComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
