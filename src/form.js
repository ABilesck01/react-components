import FormInput from './formInput';
import React, { useState } from 'react'
import {toast} from 'react-toastify' 
import './Form.css';

function Form() {

  const [nome, setNome] = useState();
  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [telefone, setTelefone] = useState();

  function alterarNome(e){
    setNome(e.target.value);
    console.log(e.target.value)
  }

  function alterarEndereco(e){
    setEndereco(e.target.value);
  }

  function alterarCidade(e){
    setCidade(e.target.value);
  }

  function alterarEstado(e){
    setEstado(e.target.value);
  }

  function alterarTelefone(e){
    setTelefone(e.target.value);
  }

  function enviarValidar(e){
    e.preventDefault()
    if(nome === undefined) 
      toast.error("Erro. Nome não pode estar vazio") 
    else 
      toast.success("Dados Cadastrados! ") 
   } 

  return (
    <div className="form-box">
      <form onSubmit={enviarValidar}>
        <FormInput label="Nome" name="Nome" type="text" value={nome} onChange = {alterarNome} />
        <FormInput label="Endereco" name="Endereco" type="text" value={endereco} onChange = {alterarEndereco}/>
        <FormInput label="Cidade" name="Cidade" type="text" value={cidade} onChange = {alterarCidade}/>
        <FormInput label="Estado" name="Estado" type="text" value={estado} onChange = {alterarEstado}/>
        <FormInput label="Telefone" name="Telefone" type="text" value={telefone} onChange = {alterarTelefone}/>

        <input type="submit" value="Submit" className="btnSubmit"/>
    </form>
    </div>
    
  );
}

export default Form;
