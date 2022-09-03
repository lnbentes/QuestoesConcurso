import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirSubTopicoComponent } from './inserir-sub-topico.component';

describe('InserirSubTopicoComponent', () => {
  let component: InserirSubTopicoComponent;
  let fixture: ComponentFixture<InserirSubTopicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirSubTopicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirSubTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
