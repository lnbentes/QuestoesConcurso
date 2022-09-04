import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assunto } from 'src/app/model/Assunto';
import { Disciplina } from 'src/app/model/Disciplina';
import { NomeModel } from 'src/app/model/NomeModel';
import { AssuntoService } from 'src/app/service/assunto.service';
import { DisciplinaService } from 'src/app/service/disciplina.service';

@Component({
  selector: 'app-inserir-assunto',
  templateUrl: './inserir-assunto.component.html',
  styleUrls: ['./inserir-assunto.component.css']
})
export class InserirAssuntoComponent implements OnInit {

  constructor(
    private router: Router,
    private assuntoService: AssuntoService,
    private disciplinaService: DisciplinaService,
  ) { }

  ngOnInit(){
    this.disciplinaNome();
  }

  public listaDiciplina: NomeModel[];
  public nomeDisciplica: string = "";
  public disciplina: Disciplina = new Disciplina();

  public assunto: Assunto = new Assunto();

  public disciplinaNome(){
    this.disciplinaService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaDiciplina = resp;
    })
  }

  public post() {
    this.assunto.peso = 0;
    this.assunto.disciplina = this.disciplina;

    this.assuntoService.post(this.assunto).subscribe({next: (resp: Assunto) => {
        this.assunto = resp;
        alert("Enviada com sucesso!");
        this.assunto = new Assunto();
      },
      error: erro => {
        if(erro.status == 500 || erro.status == 401 || erro.status == 400){
          alert("Não foi possível cadastrar");
        }
      },
    });
  }

}
