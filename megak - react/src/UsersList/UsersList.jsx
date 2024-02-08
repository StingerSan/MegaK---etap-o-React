import {UsersListOneItem} from "./UsersListOneItem.jsx";

export const UsersList = props => (
    <ul>
        {
            [...props.users]
                .sort((a, b) => a.username.localeCompare(b.username))
                .map(userObj => <UsersListOneItem user={userObj} key={userObj.username}/>)
        }
    </ul>
);
