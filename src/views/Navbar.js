import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../assets/Nav';
import '../assets/style.css';
import { AiOutlineArrowRight} from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import logo from '../assets/images/logo.PNG';
import Modal from 'react-modal';

const Navbar = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#ffff';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="Top-nav">
        <p>COMEÇE A JORNADA DE TRANSFORMAÇÃO DIGITAL DO SEU NEGÓCIO  <AiOutlineArrowRight/></p>
      </div>
        
      <Nav>
        <Bars />
        <NavMenu>
        <NavLink to='/' activeStyle>
          <img src={logo} alt="Logo" />
        </NavLink>
        <NavLink to='/' activeStyle>
          Soluções 
        </NavLink>
        <NavLink to='/' activeStyle>
          Onbording
        </NavLink>
        <NavLink to='/' activeStyle>
          Branding
        </NavLink>
        <NavLink to='/' activeStyle>
          Develop
        </NavLink>
        <NavLink to='/' activeStyle>
          Go to Market
        </NavLink>
        <NavLink to='/' activeStyle>
          Your way
        </NavLink>
        <NavLink to='/contact' activeStyle>
          Contato
        </NavLink>
        <NavLink to='/' activeStyle>
          Sign In
        </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/' onClick={openModal}>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modal}
      >
        <div class="row">
          <div class="col-10">
            <p class="modal-title ">PASSO 1 DE 5</p>
            <h4>Primeiros Passos</h4>
          </div>
          <div class="col-2">
            <button onClick={closeModal}>
              <BsXLg />
            </button>
          </div>
        </div>

        <br/>
        <div>
          <form>
            <label className='label-modal'> Seu Nome 
              <input class="input-modal" placeholder='Insera seu nome.' type="text" />
            </label>

            <label className='label-modal'> Seu Sobrenome 
              <input class="input-modal" placeholder='Insera seu sobrenome.' type="text" />
            </label>

            <label className='label-modal'> Sua Empresa <span className='opcional'>(Opcional) </span>
              <input class="input-modal" placeholder='Insera nome da sua empresa.' type="text" />
            </label>

            <label className='label-modal'> Seu E-mail 
              <input class="input-modal" placeholder='Insera seu nome.' type="text" />
            </label>

            <label className='label-modal'> Seu E-mail 
              <input class="input-modal" placeholder='(55) 99999 9999' type="text" />
            </label>

            <br/><br/>

            <div>
              <button className='modal-button1'> CONTINUAR</button>
              <button className='modal-button2'> CANCELAR</button>
            </div>

          </form>
        </div>

       
      </Modal>
    </>
  );
};

const modal = {
  content: {
    padding: "30px 30px 0px 30px",
    top: '0%',
    left: '70%',
    right: '0%',
    bottom: '0%',
    color: 'white',
    backgroundColor: '#04070d'
  },
};

export default Navbar;
