import { createContext, useState } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const [aToken, setAtoken] = useState(" ")
    const value = {
        aToken, setAtoken



    }

    return (
        <AdminContext.Provider value={value}>
            {props.childern}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider