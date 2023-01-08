const { createContext } = require("react");

const UserContext = createContext()

const UserProviderWrapper = (props) => {
    const user = localStorage.getItem('user')

    return (
        <UserContext.Provider value={user} >
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProviderWrapper }