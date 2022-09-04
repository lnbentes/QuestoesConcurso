import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirAssuntoComponent } from './inserir/inserir-assunto/inserir-assunto.component';
import { InserirCargoComponent } from './inserir/inserir-cargo/inserir-cargo.component';
import { InserirDisciplinaComponent } from './inserir/inserir-disciplina/inserir-disciplina.component';
import { InserirOrgaoComponent } from './inserir/inserir-orgao/inserir-orgao.component';
import { InserirQuestaoComponent } from './inserir/inserir-questao/inserir-questao.component';
import { InserirSubTopicoComponent } from './inserir/inserir-sub-topico/inserir-sub-topico.component';
import { InserirTopicoComponent } from './inserir/inserir-topico/inserir-topico.component';

const routes: Routes = [
  {path: "", redirectTo: "inserirQuestao", pathMatch: "full"},
  {path: "inserirQuestao", component: InserirQuestaoComponent},
  {path: "inserirDisciplina", component: InserirDisciplinaComponent},
  {path: "inserirAssunto", component: InserirAssuntoComponent},
  {path: "inserirTopico", component: InserirTopicoComponent},
  {path: "inserirSubTopico", component: InserirSubTopicoComponent},
  {path: "inserirCargo", component: InserirCargoComponent},
  {path: "inserirOrgao", component: InserirOrgaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
