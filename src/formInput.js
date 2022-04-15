import './Form.css';

function FormInput(props) {
    return (
      <div>
        <label for={props.name}>{props.label}</label><br/>
          <input type={props.type} name={props.name} id={props.name} value={props.value} onChange={props.onChange} />
          <br/><br/>
      </div>
    );
  }
  
  export default FormInput;