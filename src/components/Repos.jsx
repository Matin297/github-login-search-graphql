import List from './List'

const Repos = ({ nodes = [], totalCount = 0 }) => {
    return (
        <div>
            <h5> Total Repositories: {totalCount} </h5>
            <List data={nodes} renderItem={item => <span>{item.name}</span>} />
        </div>
    )
}

export default Repos;