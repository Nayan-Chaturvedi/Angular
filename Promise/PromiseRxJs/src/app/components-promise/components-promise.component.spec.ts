import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPromiseComponent } from './components-promise.component';

describe('ComponentsPromiseComponent', () => {
  let component: ComponentsPromiseComponent;
  let fixture: ComponentFixture<ComponentsPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsPromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
