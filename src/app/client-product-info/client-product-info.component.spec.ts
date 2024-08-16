import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProductInfoComponent } from './client-product-info.component';

describe('ClientProductInfoComponent', () => {
  let component: ClientProductInfoComponent;
  let fixture: ComponentFixture<ClientProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProductInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
