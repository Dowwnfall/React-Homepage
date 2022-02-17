const ListLinks = (props) => {
    return (
        <>
            {props.links.map(link => (
                <a href={link.linkUrl}>{link.linkTitle}</a>
            ))}
        </>
    )
}

export default ListLinks;