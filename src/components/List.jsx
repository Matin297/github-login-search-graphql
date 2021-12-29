const List = ({ data, renderItem, renderEmpty = <p>List is Empty</p> }) => {

    if (!data.length) return renderEmpty;

    return <ul>{data.map(item => <li key={item.id}> {renderItem(item)} </li>)}</ul>;
}

export default List;
