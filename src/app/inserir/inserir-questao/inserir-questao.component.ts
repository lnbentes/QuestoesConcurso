import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/model/Disciplina';
import { Questao } from 'src/app/model/Questao';
import { AssuntoService } from 'src/app/service/assunto.service';
import { BancaService } from 'src/app/service/banca.service';
import { CargoService } from 'src/app/service/cargo.service';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import { OrgaoService } from 'src/app/service/orgao.service';
import { SubTopicoService } from 'src/app/service/sub-topico.service';
import { TopicoService } from 'src/app/service/topico.service';
import { NomeModel } from '../../model/NomeModel';
import { AnoService } from '../../service/ano.service';

@Component({
  selector: 'app-inserir-questao',
  templateUrl: './inserir-questao.component.html',
  styleUrls: ['./inserir-questao.component.css']
})
export class InserirQuestaoComponent implements OnInit {

  constructor(
    private disciplinaService: DisciplinaService,
    private assuntoService: AssuntoService,
    private topicoService: TopicoService,
    private subTopicoService: SubTopicoService,
    private cargoService: CargoService,
    private orgaoService: OrgaoService,
    private bancaService: BancaService,
    private anoService: AnoService,
  ) { }

  ngOnInit(){
    this.disciplinaNome();
    this.cargoNome();
    this.orgaoNome();
    this.bancaNome();
    this.anoNome();
  }

  public listaDiciplina: NomeModel[];
  public listaAssunto: NomeModel[];
  public listaTopicos: NomeModel[];
  public listaSubTopicos: NomeModel[];
  public listaCargos: NomeModel[];
  public listaOrgoes: NomeModel[];
  public listaBancas: NomeModel[];
  public listaAnos: NomeModel[];

  public nomeDisciplica: string = "";
  public nomeAssunto: string = "";
  public nomeTopico: string = "";

  public questao: Questao = new Questao();

  public disciplinaNome(){
    this.disciplinaService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaDiciplina = resp;
    })
  }

  public assuntoaNome(){
    this.disciplinaService.getAllAssuntosNomes(this.nomeDisciplica).subscribe((resp: NomeModel[]) => {
      this.listaAssunto = resp;
    })
  }

  public topicoNome(){
    this.assuntoService.getAllTopicosNomes(this.nomeAssunto).subscribe((resp: NomeModel[]) => {
      this.listaTopicos = resp;
    })
  }

  public subTopicoNome(){
    this.topicoService.getAllSubTopicosNomes(this.nomeTopico).subscribe((resp: NomeModel[]) => {
      this.listaSubTopicos = resp;
    })
  }

  public cargoNome(){
    this.cargoService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaCargos = resp;
    })
  }

  public orgaoNome(){
    this.orgaoService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaOrgoes = resp;
    })
  }

  public bancaNome(){
    this.bancaService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaBancas = resp;
    })
  }

  public anoNome(){
    this.anoService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaAnos = resp;
    })
  }

}
