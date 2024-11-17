import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateBinComponent } from './crate-bin.component';

describe('CrateBinComponent', () => {
  let component: CrateBinComponent;
  let fixture: ComponentFixture<CrateBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrateBinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrateBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
