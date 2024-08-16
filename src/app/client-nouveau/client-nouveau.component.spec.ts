import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNouveauComponent } from './client-nouveau.component';

describe('ClientNouveauComponent', () => {
  let component: ClientNouveauComponent;
  let fixture: ComponentFixture<ClientNouveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNouveauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientNouveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
