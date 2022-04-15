import { GoPerson } from 'react-icons/go';
import Clock from './relogio'

function Header() {
  return (
    <div>
      <header>
        <h1><GoPerson /> Cadastro de clientes</h1>
        <Clock />
      </header>
    </div>
  );
}
setInterval(Clock, 1000);
export default Header;
