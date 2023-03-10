import './Cabecalho.css';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import teste from './Logo.png'
import CaixaPesquisa from '../CaixaPesquisa/CaixaPesquisa';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Form/Form';

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          Cadastrar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro :) </Modal.Title>
          </Modal.Header>
          <Modal.Body> <Input/> </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  


function Cabecalho() {
    return (
        <header className="position-relative">
        
            <nav className="navbar navbar-expand-lg" color="primary" dark expand="md">

                <div className="container-fluid">
                    <div className="container position-absolute translate-middle" id="Logo">
                        <img id='logo' src={teste} alt='logo' style={{ width: '100px', height: '100px' }} />
                        <h1 className="navbar-brand fs-5" id='TitleHeader'>ALHAMA</h1>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse Navegacao" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 ">
                            <li className='nav-item'>

                                    <CaixaPesquisa />

                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <FontAwesomeIcon icon={faUser} />
                                </a>
                                <ul className="dropdown-menu">
                                     <Button variant="secondary" >Login</Button>
                                    <li>
                                        <Example /> 
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Logo">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Nova Imagem</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Equipe"> Desenvolvedores</a>
                            </li>
                            <li className="nav-item" />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Cabecalho;