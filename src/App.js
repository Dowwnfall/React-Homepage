import React, {useState} from 'react'
import styles from './App.module.css';
import FlexRow from './Components/Flex/FlexRow'
import ListRow from './Components/ListRow/ListRow';
import Modal from './Components/UI/Modal';
import NewCatagoryForm from './Components/NewCatagoryForm';
import {ListDataProvider} from './store/list-data';


function App() {
  const [newCatagory, setNewCatagory] = useState(false);
  const modalHandler = () => {
    setNewCatagory(!newCatagory);
  }
  

  return (
    <ListDataProvider>
      <FlexRow>
        <ListRow onConfirmNew={modalHandler}/>
      </FlexRow>
      {newCatagory && (
        <Modal onConfirm={modalHandler}>
          <NewCatagoryForm/>
        </Modal>
      )}
    </ListDataProvider>
  );
}

export default App;
