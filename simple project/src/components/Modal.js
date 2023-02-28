import React,{useState} from 'react'
import Form from './Form';
import './Modal.css';

export default function Modal() {

    const [modal,setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    };

    if(modal){
        document.body.classList.add('active-modal')     /* this code will remove the scroll bar when modal is opened */
    }
    else{
        document.body.classList.remove('active-modal')
    }
    
  return (
    <>
    <div className='page'>
        <button className='btn-modal' onClick={toggleModal}>
            Add Details
        </button>

        <h2>Hey!!! you can add your details by clicking add details button</h2>
        
        {modal && (
            <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <button className='close-btn' onClick={toggleModal}>CLOSE</button>
                <Form/>
            </div>
         </div>
        )}

        
    </div>
    
    </>
  )
}
