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
  const [isHidden, setIsHidden] = useState(false);
  const editHandler = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true); 
  }

  const addToList = (titleToAdd = false, linkTitleToAdd, urlToAdd, id = false) =>{
    // const listCopy = [...list];
    // listCopy[0] = {...listCopy, title:'boof'}
    if (titleToAdd !== false && id === false) {
      setList([
        ...list,
        {
          title: titleToAdd,
          links: [
            {
              linkTitle: linkTitleToAdd ,
              linkUrl: urlToAdd,
            },
          ],
        }
      ]);
    } else if (titleToAdd === false) {
      const newArray = list.slice();
      const curIndex = id - 1;
      newArray[curIndex].links.push({
        linkTitle: linkTitleToAdd,
        linkUrl: urlToAdd,
      })
      setList(newArray);

      // console.log(newArray[curIndex].links);
      
      // refer to stack overflow now that you have the ID

    }
  }
  const delListItem = (categoryIndex, linkIndex)  => {
    const newArray = list.slice();
    newArray[categoryIndex].links.splice(linkIndex,1);
    if (newArray[categoryIndex].links.length < 1) {
      newArray.splice(categoryIndex, 1);
    }
    setList(newArray)
  }
 

  


    return (<ListDataContext.Provider value={{addToList,delListItem, editHandler, list,isHidden}}>
      {props.children}
    </ListDataContext.Provider>)
}
  export default ListDataContext;
  export {ListDataProvider}