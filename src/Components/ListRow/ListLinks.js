import { useContext } from "react";
import ListDataContext from "../../store/list-data";

const ListLinks = (props) => {
    const {delListItem} = useContext(ListDataContext);
    const {isHidden} = useContext(ListDataContext);
    return (
        <>
            {props.links.map((link, index) => (
                <div key={index}>
                    <a href={link.linkUrl}>{link.linkTitle}</a>
                    {isHidden && <button onClick={() => delListItem(props.categoryIndex, index)}>x</button>}
                </div>
            ))}
        </>
    )
}

export default ListLinks;