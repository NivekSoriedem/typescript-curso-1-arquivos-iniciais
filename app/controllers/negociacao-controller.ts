import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";
import { diaDaSemana } from "../ENUM/diasDaSemana.js";

export class NegociacaoController {
  private inputData : HTMLInputElement;
  private inputQuantidade : HTMLInputElement;
  private inputValor : HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacaoView("#negociacoesView",true);
  private mensagemView = new MensagemView("#mensagemView", true);
  private readonly DOMINGO = 0;
  private readonly SABADO = 6; 

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  // essa funcao é chamada em app.ts que aciona após um submit do botao do front
  public adiciona() : void {
    const negociacao = this.criaNegociacao();
    
    if (!this.eDiaUtilEssa(negociacao.data)) {
      return this.mensagemView.update('A negociação só é criada com dias uteis.'); 
    }

    this.negociacoes.adiciona(negociacao);
    this.atualizaView()
    this.limpaFormulario();
  }

  private eDiaUtilEssa(data: Date): boolean {
    const result = data.getDay() > diaDaSemana.DOMINGO && data.getDay() < diaDaSemana.SABADO;
    return result;
  }

  private criaNegociacao() : Negociacao {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    )

    return negociacao;
  }

  private limpaFormulario() : void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView() : void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('linha adicionada com sucesso');
  }

}