import {Dialog} from "./Dialog.jsx";

export const ConfirmDialog = props => (
    <Dialog title={props.title}>
        {props.children}
        <hr/>
        <button>Yes</button> <button>No</button>
    </Dialog>
)
