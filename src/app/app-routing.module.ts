import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirDisciplinaComponent } from './inserir/inserir-disciplina/inserir-disciplina.component';
import { InserirQuestaoComponent } from './inserir/inserir-questao/inserir-questao.component';

const routes: Routes = [
  {path: "", redirectTo: "inserirQuestao", pathMatch: "full"},
  {path: "inserirQuestao", component: InserirQuestaoComponent},
  {path: "inserirDisciplina", component: InserirDisciplinaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
