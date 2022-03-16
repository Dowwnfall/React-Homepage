import React, {useContext} from 'react';
import styles from './ListRow.module.css'

import ListLinks from './ListLinks';
import ListDataContext from '../../store/list-data';
const ListRow = (props) => {
    const {addToList} = useContext(ListDataContext);
    const {list} = useContext(ListDataContext);
    const {isHidden} = useContext(ListDataContext);
      return (
        <>
            {list.map((list, index) => (
                <div className={styles.container} key={index + 1}>
                    <h2 className={styles.line}>{list.title}</h2>
                    <ListLinks categoryIndex={index} links={list.links}/>
                    {isHidden && <a onClick={() => props.onConfirmEdit(index + 1)}>+link</a>}
                </div>
            ))}
            {/* {isHidden && <div onClick={props.onConfirmNew} className={`${styles.add} ${styles.container}`}>
                <h2>Add Another List</h2>
                <div className={styles.plus}>+</div>
            </div>} */}
            
        
        </>
      )
}

export default ListRow;