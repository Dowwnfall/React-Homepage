import React, {useContext, useState} from "react";
import ListDataContext from "../store/list-data";
import styles from './NewCatagoryForm.module.css'


const NewCatagoryForm = props => {
    const {addToList} = useContext(ListDataContext);
    const {list} = useContext(ListDataContext);
    const [title, setTitle] = useState(false);
    const [linkName, setLinkName] = useState('');
    const [url, setUrl] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const linkNameChangeHandler = (event) => {
        setLinkName(event.target.value);
    };
    const urlChangeHandler = (event) => {
        setUrl(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(url);
        if (!props.editId) {
            addToList(title, linkName, url);
        } else if (props.editId) {
            addToList(title, linkName, url, props.editId);
        }

        console.log(title, list);
        setTitle('');
        setLinkName('');
        setUrl('');
    };
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            {!props.edit && <h2 className={styles.h2}>New Category.</h2>}
            {props.edit && <h2 className={styles.h2}>New Link.</h2>}
            <div className={styles['input-box']}>
                {!props.edit && <div className={styles['inputs-box-div']}>
                    <input className={`${styles.input} ${styles.single}`} placeholder="Title" onChange={titleChangeHandler}/>
                </div>}
                <div className={styles['inputs-box-div']}>
                    <input type="text" className={`${styles.input} ${styles.double} ${styles.left}`} placeholder= "Link Name" onChange={linkNameChangeHandler}/>
                    <input type="text" className={`${styles.input} ${styles.double} ${styles.right}`} placeholder = "URL" onChange={urlChangeHandler}/>
                </div>
                <button type="submit" className={`${styles.submit} ${styles.single}`}>Submit </button>
    
            </div>
        </form>
        

    );
}

export default NewCatagoryForm;