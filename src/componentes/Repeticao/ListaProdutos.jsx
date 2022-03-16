import React from "react";
import produtos from "../../data/Produtos";
import './ListaProdutos.css'

export default function ListaProdutos (props) {

    function LinhasTabela(){
        return produtos.map((produto, i) => {
            return(
                <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
            )
        })
    }
    return(
        <div className="Tabela">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {LinhasTabela()}
                </tbody>
            </table>
        </div>
    )
}