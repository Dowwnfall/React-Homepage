import React, {useContext} from 'react';
import styles from './ListRow.module.css'
import ListLinks from './ListLinks';
import ListDataContext from '../../store/list-data';
const ListRow = (props) => {
    const {list} = useContext(ListDataContext);
      return (
        <>
            {list.map(List => (
                <div className={styles.container}>
                    <h2 className={styles.line}>{List.title}</h2>
                    <ListLinks links={List.links}/>
                </div>
            ))}
            <div onClick={props.onConfirmNew} className={`${styles.add} ${styles.container}`}>
                <h2>Add Another List</h2>
                <div className={styles.plus}>+</div>
            </div>
            
        
        </>
      )
}

export default ListRow;