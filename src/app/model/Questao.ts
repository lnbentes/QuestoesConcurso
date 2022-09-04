import { Ano } from "./Ano";
import { AreaDeConhecimento } from "./AreaDeConhecimento";
import { Banca } from "./Banca";
import { Cargo } from "./Cargo";
import { Orgao } from "./Orgso";
import { SubTopico } from "./SubTopico";

export class Questao{

  public id: number;
  public titulo: string;
  public descricao: string;
  public resposta: boolean;
  public explicacao: string;
  public peso: number;
  
  public banca: Banca;
  public subTopico: SubTopico;
  public are: AreaDeConhecimento;
  public orgao: Orgao;
  public cargo: Cargo;
  public ano: Ano;

}
