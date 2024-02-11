import {UsersListOneItem} from "./UsersListOneItem.jsx";
import './UsersList.css'
import {useState} from "react";

export const UsersList = props => {

    const [list, setList] = useState(props.users)

    const removeItem = (username) => {
        setList(list => (
            list
                .filter(one => one.username !== username)
        ))
    }

    return (
     <ul className="UsersList">
         {
             [...list]
                 .sort((a, b) => b.username.localeCompare(a.username))
                 .map(userObj => <UsersListOneItem
                     user={userObj}
                     key={userObj.username}
                     onRemoveItem={removeItem}
                 />)
         }
     </ul>
    )
};
