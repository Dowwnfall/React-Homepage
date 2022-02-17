import React, { createContext, useState } from "react";



const ListDataContext = React.createContext({
  addToList: () => {},
  list: []
})


const ListDataProvider = (props) => {
  const [list, setList] = useState([
    {
      title:'Social',
      links: [
        {
          linkTitle: 'Instagram',
          linkUrl: 'https://www.instagram.com/'
        },
        {
          linkTitle:'Facebook',
          linkUrl: 'https://www.facebook.com/'
        }
      ]
    },
    {
        title:'Personal',
        links: [
            {
                linkTitle:'Calandar',
                linkUrl:'https://www.timeanddate.com/calendar/'
            },
            {
                linkTitle:'To-Do List',
                linkUrl:'https://todoist.com/'
            }
        ]
    }
  ]);

  const addToList = (titleToAdd) =>
  setList([
    ...list,
    {
      title: titleToAdd
    }
  ]);

  



    return (<ListDataContext.Provider value={{addToList, list}}>
      {props.children}
    </ListDataContext.Provider>)
}
  export default ListDataContext;
  export {ListDataProvider}