import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPromotionComponent } from './client-promotion.component';

describe('ClientPromotionComponent', () => {
  let component: ClientPromotionComponent;
  let fixture: ComponentFixture<ClientPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPromotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
