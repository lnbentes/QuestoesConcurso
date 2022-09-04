import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirAssuntoComponent } from './inserir/inserir-assunto/inserir-assunto.component';
import { InserirDisciplinaComponent } from './inserir/inserir-disciplina/inserir-disciplina.component';
import { InserirQuestaoComponent } from './inserir/inserir-questao/inserir-questao.component';

const routes: Routes = [
  {path: "", redirectTo: "inserirQuestao", pathMatch: "full"},
  {path: "inserirQuestao", component: InserirQuestaoComponent},
  {path: "inserirDisciplina", component: InserirDisciplinaComponent},
  {path: "inserirAssunto", component: InserirAssuntoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
