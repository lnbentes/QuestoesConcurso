import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestaoComponent } from './questao/questao.component';

const routes: Routes = [
  {path: "", redirectTo: "questao", pathMatch: "full"},
  {path: "questao", component: QuestaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
