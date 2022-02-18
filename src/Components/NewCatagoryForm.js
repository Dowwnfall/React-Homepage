import React, {useContext, useState} from "react";
import ListDataContext from "../store/list-data";
import styles from './NewCatagoryForm.module.css'


const NewCatagoryForm = props => {
    const {addToList} = useContext(ListDataContext);
    const {list} = useContext(ListDataContext);
    const [title, setTitle] = useState('')
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        addToList(title)
        console.log(title, list);
    }
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <h2 className={styles.h2}>New Category.</h2>
            <div className={styles['input-box']}>
                <div className={styles['inputs-box-div']}>
                    <input className={`${styles.input} ${styles.single}`} placeholder="Edit" onChange={titleChangeHandler}/>
                </div>
                <div className={styles['inputs-box-div']}>
                    <input type="text" className={`${styles.input} ${styles.double} ${styles.left}`} placeholder= "Name"/>
                    <input type="text" className={`${styles.input} ${styles.double} ${styles.right}`} placeholder = "URL"/>
                </div>
                <button type="submit" className={`${styles.submit} ${styles.single}`}>Submit </button>
    
            </div>
        </form>
        

    );
}

export default NewCatagoryForm;