export class VendaModel {
    constructor(
        public id_cliente: number,
        public carrinho: [{id_produto: string}]
        ) {
        
    }
}