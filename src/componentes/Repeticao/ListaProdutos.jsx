import React from "react";
import produtos from "../../data/Produtos";

export default function ListaProdutos (props) {

    function LinhasTabela(){
        return produtos.map(produto => {
            return(
                <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
            )
        })
    }
    return(
        <>
            <table border='1px' className="Tabela">
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
        </>
    )
}