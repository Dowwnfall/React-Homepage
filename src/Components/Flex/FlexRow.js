import React from 'react';
import styles from './FlexRow.module.css';

const FlexRow = (props) => {
    return (
        <div className={styles.frow}>
            {props.children}
        </div>
    )
};


export default FlexRow;