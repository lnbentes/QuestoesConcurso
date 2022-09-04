import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NomeModel } from 'src/app/model/NomeModel';
import { SubTopico } from 'src/app/model/SubTopico';
import { Topico } from 'src/app/model/Topico';
import { SubTopicoService } from 'src/app/service/sub-topico.service';
import { TopicoService } from 'src/app/service/topico.service';

@Component({
  selector: 'app-inserir-sub-topico',
  templateUrl: './inserir-sub-topico.component.html',
  styleUrls: ['./inserir-sub-topico.component.css']
})
export class InserirSubTopicoComponent implements OnInit {

  constructor(
    private router: Router,
    private topicoService: TopicoService,
    private subTopicoService: SubTopicoService
  ) { }

  ngOnInit(){
    this.topicoNome();
  }

  public listaTopicos: NomeModel[];
  public nomeTopico: string = "";
  public topico: Topico = new Topico();

  public subTopico: SubTopico = new SubTopico();

  public topicoNome(){
    this.topicoService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaTopicos = resp;
    })
  }

  public post() {
    this.subTopico.peso = 0;
    this.subTopico.topico = this.topico;

    this.subTopicoService.post(this.subTopico).subscribe({next: (resp: SubTopico) => {
        this.subTopico = resp;
        alert("Enviada com sucesso!");
        this.subTopico = new SubTopico();
      },
      error: erro => {
        if(erro.status == 500 || erro.status == 401 || erro.status == 400){
          alert("Não foi possível cadastrar");
        }
      },
    });
  }

}
