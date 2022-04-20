function ItemLista(props) {
    return (
      <tr>
        <td>{props.cliente.nome}</td>
        <td>{props.cliente.endereco}</td>
        <td>{props.cliente.cidade}</td>
        <td>{props.cliente.estado}</td>
        <td>{props.cliente.telefone}</td>
      </tr>
    );
  }
  
  export default ItemLista;