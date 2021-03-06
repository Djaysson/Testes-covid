import React from 'react';
import { FiAlignJustify } from "react-icons/fi";
import './styles.css';
import LogoImg from '../../images/logo.svg';
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="container">
      <header>
        <img src={LogoImg} alt="logo" />
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <FiAlignJustify />
          </label>


          <ul>
            <li><Link to="/">Casos</Link></li>
            <li><Link to="/Tests">Testes</Link></li>
            <li><Link to="/Tips">Dicas</Link></li>
            <li><Link to="/Plato">Plantão Coronavirus</Link></li>
          </ul>

        </nav>
      </header>
    </div>
  );
}

export default header;