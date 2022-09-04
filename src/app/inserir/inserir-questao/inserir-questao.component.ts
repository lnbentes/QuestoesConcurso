import { Component, OnInit } from '@angular/core';
import { Ano } from 'src/app/model/Ano';
import { AreaDeConhecimento } from 'src/app/model/AreaDeConhecimento';
import { Banca } from 'src/app/model/Banca';
import { Cargo } from 'src/app/model/Cargo';
import { Disciplina } from 'src/app/model/Disciplina';
import { Orgao } from 'src/app/model/Orgso';
import { Questao } from 'src/app/model/Questao';
import { SubTopico } from 'src/app/model/SubTopico';
import { AreaServiceService } from 'src/app/service/area.service';
import { AssuntoService } from 'src/app/service/assunto.service';
import { BancaService } from 'src/app/service/banca.service';
import { CargoService } from 'src/app/service/cargo.service';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import { OrgaoService } from 'src/app/service/orgao.service';
import { QuestaoService } from 'src/app/service/questao.service';
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
    private cargoService: CargoService,
    private orgaoService: OrgaoService,
    private bancaService: BancaService,
    private areaService: AreaServiceService,
    private anoService: AnoService,
    private questaoService: QuestaoService,
  ) { }

  ngOnInit(){
    this.disciplinaNome();
    this.cargoNome();
    this.orgaoNome();
    this.bancaNome();
    this.AreaNome();
    this.anoNome();
  }

  public listaDiciplina: NomeModel[];
  public listaAssunto: NomeModel[];
  public listaTopicos: NomeModel[];
  public listaSubTopicos: NomeModel[];
  public listaCargos: NomeModel[];
  public listaOrgoes: NomeModel[];
  public listaBancas: NomeModel[];
  public listaArias: NomeModel[];
  public listaAnos: NomeModel[];

  public nomeDisciplica: string = "";
  public nomeAssunto: string = "";
  public nomeTopico: string = "";

  public questao: Questao = new Questao();
  public subTopico: SubTopico = new SubTopico();
  public cargo: Cargo = new Cargo();
  public orgao: Orgao = new Orgao();
  public banca: Banca = new Banca();
  public area: AreaDeConhecimento = new AreaDeConhecimento();
  public ano: Ano = new Ano();

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

  public AreaNome(){
    this.areaService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaArias = resp;
    })
  }

  public anoNome(){
    this.anoService.getAllNome().subscribe((resp: NomeModel[]) => {
      this.listaAnos = resp;
    })
  }

  public postarQuestao(){

    this.questao.subTopico = this.subTopico;
    this.questao.cargo = this.cargo;
    this.questao.orgao = this.orgao;
    this.questao.banca = this.banca;
    this.questao.are = this.area;
    this.questao.ano = this.ano;

    this.questao.peso = 0;

    this.questaoService.post(this.questao).subscribe({next: (resp: Questao) => {
        this.questao = resp;
        alert("Enviada com sucesso!")
        this.questao = new Questao();
      },
      error: erro => {
        if(erro.status == 500 || erro.status == 401 || erro.status == 400){
          alert("Não foi possível cadastrar esta questao. Por favor, verifique os campos novamente.");
        }
      },
    });
  }

  public teste(){

    this.questao.titulo = "Titulo Maneiro";
    this.questao.descricao = "Descricao Maneiro";
    this.questao.resposta = true;
    this.questao.explicacao = "Esplicacao Maneira";
    this.questao.peso = 0;

    this.questao.subTopico = this.subTopico;
    this.questao.cargo = this.cargo;
    this.questao.orgao = this.orgao;
    this.questao.banca = this.banca;
    this.questao.are = this.area;
    this.questao.ano = this.ano;

    console.log(this.questao)

    this.questaoService.post(this.questao).subscribe({next: (resp: Questao) => {
        this.questao = resp;
        console.log(this.questao)
      },
      error: erro => {
        if(erro.status == 500 || erro.status == 401 || erro.status == 400){
          alert("Não foi possível cadastrar esta questao. Por favor, verifique os campos novamente.");
        }
      },
    });
  }


}
