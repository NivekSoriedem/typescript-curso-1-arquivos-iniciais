import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData : HTMLInputElement;
  private inputQuantidade : HTMLInputElement;
  private inputValor : HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacaoView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  // essa funcao é chamada em app.ts que aciona após um submit do botao do front
  public adiciona() : void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.atualizaView();
    this.limpaFormulario();
  }

  private criaNegociacao() : Negociacao {
    // manter os paramentros separados para ter mais clareza.
    const date = new Date(this.inputData.value.replace(/-/g, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(date,quantidade,valor);
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