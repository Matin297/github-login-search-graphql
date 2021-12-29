import useInput from '../hooks/useInput'

const LoginSearchForm = ({ onSearchLogin }) => {
    const [loginProps, resetLogin] = useInput("");

    const onSubmitHandler = e => {
        e.preventDefault();
        onSearchLogin(loginProps.value);
        resetLogin();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input {...loginProps} required placeholder="Github Login..." />
            <button>Search</button>
        </form>
    );
}

export default LoginSearchForm;
