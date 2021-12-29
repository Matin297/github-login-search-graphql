const UserDetails = ({ login, name, avatarUrl, location }) => {
    return (
        <div>
            <img src={avatarUrl} alt={login} />
            <h1>{login}</h1>
            <h3>{name}</h3>
            <span>{location}</span>
        </div>
    )
}

export default UserDetails;
