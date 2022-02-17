import React from "react";
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<div onClick={props.onConfirm} className={styles.backdrop} onClick={props.onConfirm} />, document.getElementById('overlay'))}
            {ReactDOM.createPortal(<div className={styles.modal}> {props.children}</div>, document.getElementById('modal') )}
        </>
    )
}

export default Modal;