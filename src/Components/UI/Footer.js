import React, {useContext} from "react";
import styles from './Footer.module.css';
import ListDataContext from '../../store/list-data'


const Footer = (props) => {
    const {editHandler} = useContext(ListDataContext)
    const {isHidden} = useContext(ListDataContext)
    return (
        <footer className={styles.footer}>
            <button onClick={() => editHandler(false)}>Edit Links</button>
            {isHidden && <div className={styles.menu}>
                <button onClick={props.onConfirmNew}>Add Another List</button>
            
            </div>}
        </footer>
    )
}

export default Footer;