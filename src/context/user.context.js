const { createContext } = require("react");

const UserContext = createContext()

const UserProviderWrapper = (props) => {
    const role = localStorage.getItem('role')

    return (
        <UserContext.Provider value={role} >
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProviderWrapper }