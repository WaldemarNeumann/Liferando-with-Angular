import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardContainerComponent } from './shopping-card-container.component';

describe('ShoppingCardContainerComponent', () => {
  let component: ShoppingCardContainerComponent;
  let fixture: ComponentFixture<ShoppingCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
