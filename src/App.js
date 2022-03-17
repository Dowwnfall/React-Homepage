import React, {useState} from 'react'
import styles from './App.module.css';
import FlexRow from './Components/Flex/FlexRow'
import ListRow from './Components/ListRow/ListRow';
import Modal from './Components/UI/Modal';
import NewCatagoryForm from './Components/NewCatagoryForm';
import Footer from './Components/UI/Footer';
import {ListDataProvider} from './store/list-data';


function App() {
  const [newCatagory, setNewCatagory] = useState(false);
  const [editCatagory, setEditCatagory] = useState(false);
  const [categoryId, setCatagoryId] = useState('')
  const modalHandler = () => {
    setNewCatagory(!newCatagory);
  }
  const modalEditHandler = (id) => {
    setEditCatagory(!editCatagory)
    if(id) {
      setCatagoryId(id);
    };
  }

  return (
    <ListDataProvider>
      <FlexRow>
        <ListRow /*onConfirmNew={modalHandler}*/ onConfirmEdit={modalEditHandler}/>
      </FlexRow>
      {newCatagory && (
        <Modal onConfirm={modalHandler}>
          <NewCatagoryForm/>
        </Modal>
      )}
      {editCatagory && (
        <Modal onConfirm={() => modalEditHandler(0)}>
          <NewCatagoryForm edit="true" editId={categoryId} />
        </Modal>
      )}
  
      <Footer onConfirmNew={modalHandler}></Footer>      

    </ListDataProvider>
  );
}

export default App;
