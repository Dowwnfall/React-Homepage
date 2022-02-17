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
        <form onSubmit={submitHandler}>
            <label className={styles.titleLabel}>New Catagory</label>
            <input className={styles.titleInput} placeholder="Edit" onChange={titleChangeHandler}></input>
            <button type="submit" className={styles.submit}>Submit</button>
        </form>
    );
}

export default NewCatagoryForm;