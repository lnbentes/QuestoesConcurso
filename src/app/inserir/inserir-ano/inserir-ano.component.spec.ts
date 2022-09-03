import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAnoComponent } from './inserir-ano.component';

describe('InserirAnoComponent', () => {
  let component: InserirAnoComponent;
  let fixture: ComponentFixture<InserirAnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirAnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
