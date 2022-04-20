import ItemLista from "./itemLista";

function ListaClientes({ clientes }) {
    let lista= clientes.map
    ( 
        dados => 
        {
            return <ItemLista cliente={dados}/>
        } 
    );

    return (
        <div className="lista-box">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Endereco</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {lista}
                </tbody>
            </table>
        </div>
    );

  }
  
  export default ListaClientes;