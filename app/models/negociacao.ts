export class Negociacao {
  
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}

  get volume() : number {
    return this._quantidade * this._valor;
  }

  get data() : Date {
    const copiaData = new Date(this._data.getTime())
    return copiaData;
  }

  get quantidade() : number {
    return this._quantidade;
  }
  
  get valor() : number {
    return this._valor;
  }

  public criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const date = new Date(dataString.replace(/-/g, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
  
    return new Negociacao(date, quantidade,valor);
  }

}