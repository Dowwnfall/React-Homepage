import React, {useContext, useState} from "react";
import ListDataContext from "../store/list-data";
import styles from './NewCatagoryForm.module.css'
import useIsvalid from "../hooks/useIsValid";

const NewCatagoryForm = props => {
    const {addToList} = useContext(ListDataContext);
    const {list} = useContext(ListDataContext);

    const {
        value:linkName,
        valueIsValid:linkNameIsValid,
        hasError:linkNameHasError,
        valueChangeHandler:linkNameChangeHandler,
        valueBlurHandler:linkNameBlurHandler,
        reset:linkNameReset,
    } = useIsvalid(value => value.trim() !== "");

    const {
        value:title,
        valueIsValid:titleIsValid,
        hasError:titleHasError,
        valueChangeHandler:titleChangeHandler,
        valueBlurHandler:titleBlurHandler,
        reset:titleReset,
    } = useIsvalid(value => value.trim() !== "");


    const {
        value:url,
        valueIsValid:urlIsValid,
        hasError:urlHasError,
        valueChangeHandler:urlChangeHandler,
        valueBlurHandler:urlBlurHandler,
        reset:urlReset,
    } = useIsvalid(value => value.trim() !== "");

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(title, linkName, url);
        if (!props.editId) {
            addToList(title, linkName, url);
        } else if (props.editId) {
            addToList(false, linkName, url, props.editId);
        }
        titleReset('');
        linkNameReset('');
        urlReset('');
    };
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            {!props.edit && <h2 className={styles.h2}>New Category.</h2>}
            {props.edit && <h2 className={styles.h2}>New Link.</h2>}

            <div className={styles['input-box']}>
            {!titleIsValid && <p className={styles.invalidText}>Please enter a title.</p>}
            {!urlIsValid && <p className={styles.invalidText}>Please enter a full url with 'http'.</p>}
            {!linkNameIsValid && <p className={styles.invalidText}>Please enter a link name.</p>}
                {!props.edit && <div className={styles['inputs-box-div']}>
                    <input className={`${styles.input} ${styles.single}`} placeholder="Title" value={title} onChange={titleChangeHandler} onBlur={titleBlurHandler}/>
                </div>}
                <div className={styles['inputs-box-div']}>
                    <input type="text" className={`${styles.input} ${styles.double} ${styles.left}`} placeholder= "Link Name" value={linkName} onChange={linkNameChangeHandler} onBlur={linkNameBlurHandler}/>
                    <input type="text" className={`${styles.input} ${styles.double} ${styles.right}`} placeholder = "URL" value={url} onChange={urlChangeHandler} onBlur={urlBlurHandler}/>
                </div>
                <button type="submit" className={`${styles.submit} ${styles.single}`}>Submit </button>
    
            </div>
        </form>
        

    );
}

export default NewCatagoryForm;