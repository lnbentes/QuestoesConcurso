import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assunto } from 'src/app/model/Assunto';
import { NomeModel } from 'src/app/model/NomeModel';
import { Topico } from 'src/app/model/Topico';
import { AssuntoService } from 'src/app/service/assunto.service';
import { TopicoService} from 'src/app/service/topico.service';

@Component({
  selector: 'app-inserir-topico',
  templateUrl: './inserir-topico.component.html',
  styleUrls: ['./inserir-topico.component.css']
})
export class InserirTopicoComponent implements OnInit {

  constructor(
    private router: Router,
    private assuntoService: AssuntoService,
    private topicoService: TopicoService,
  ) { }

  ngOnInit(){
    this.assuntoNome();
  }

  public listaAssunto: NomeModel[];
  public nomeAssunto: string = "";
  public assunto: Assunto = new Assunto();

  public topico: Topico = new Topico();

  public assuntoNome(){
    this.assuntoService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaAssunto = resp;
    })
  }

  public post() {
    this.topico.peso = 0;
    this.topico.assunto = this.assunto;

    this.topicoService.post(this.topico).subscribe({next: (resp: Topico) => {
        this.topico = resp;
        alert("Enviada com sucesso!");
        this.topico = new Topico();
      },
      error: erro => {
        if(erro.status == 500 || erro.status == 401 || erro.status == 400){
          alert("Não foi possível cadastrar");
        }
      },
    });
  }

}
