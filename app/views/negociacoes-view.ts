import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

  export class NegociacaoView extends View<Negociacoes> {
    
    protected tamplate (modelo: Negociacoes) : string {
     return `
     <table class="table table-hover table-bordered">
        <thead>
          <tr> 
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
            ${modelo.lista().map((negociacao) => {
              return`
              <tr>
                <th>${this.formatarData(negociacao.data)}</th>
                <th>${negociacao.quantidade}</th>
                <th>${negociacao.valor}</th>              
              <tr>
              `
            }).join('')} 
        <tbody>
     <table>
     `
    }

    private formatarData(data: Date): string {
      // estamos fazendo esse formador para o tamplate string ficar mais enxuto e 
      // caso formos precisar dessa mesma data em outro tamplete.
      return new Intl.DateTimeFormat().format(data)
    }

  }