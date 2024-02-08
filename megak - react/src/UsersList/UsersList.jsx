import {UsersListOneItem} from "./UsersListOneItem.jsx";
import './UsersList.css'

export const UsersList = props => (
    <ul className="UsersList">
        {
            [...props.users]
                .sort((a, b) => b.username.localeCompare(a.username))
                .map(userObj => <UsersListOneItem user={userObj} key={userObj.username}/>)
        }
    </ul>
);
