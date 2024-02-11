import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {Dialog} from "../components/common/Dialog/Dialog.jsx";
import {ConfirmDialog} from "../components/common/Dialog/ConfirmDialog.jsx";
// import {Form} from "../components/Form/Form.jsx";
// import {ColorBox} from "../components/ColorBox/ColorBox.jsx";
// import {UsersList} from "../UsersList/UsersList.jsx";
// import {people} from "../data/people.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore eveniet neque repudiandae
                sapiente. Adipisci debitis doloribus error excepturi, facilis, fugiat hic impedit inventore nihil,
                perspiciatis totam veritatis. Explicabo, natus?</p><p>A delectus dolore dolorum eaque eligendi
            repudiandae suscipit veniam. Animi cupiditate dolorem ea enim est expedita explicabo facere itaque labore
            molestiae necessitatibus obcaecati porro quae, quo quos ratione rem voluptates!</p><p>Accusantium alias
            aliquam assumenda autem beatae consequatur, deleniti deserunt, doloremque doloribus eius enim id illum
            labore magnam minus mollitia nostrum odit pariatur perferendis porro qui quia repellat vel voluptas
            voluptates.</p>

            <Dialog>
                Witam serdecznie
            </Dialog>
            <Dialog title="Testowe okno">
                <h1>Tytuł okna</h1>
                <p>Na naszej stronie</p>
            </Dialog>

            <ConfirmDialog title="Czy na pewno?">
                <p>Jesteś pewien ?</p>
            </ConfirmDialog>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, delectus dolorem exercitationem
                expedita harum labore, maiores nostrum odit perspiciatis quae repellat, sequi tempore. Alias ex fuga sit
                totam ullam unde.</p><p>Atque cupiditate dolore dolorum enim ex excepturi, hic nesciunt obcaecati saepe
            tenetur veniam voluptatibus. Accusantium at culpa ducimus eveniet libero magni optio tempore. Blanditiis
            fugiat hic qui quia? Delectus, nam!</p><p>Aliquam assumenda atque consequuntur, fuga impedit in minus
            mollitia non provident quae quasi sint ut vel voluptatem voluptates! Autem expedita libero modi mollitia
            natus perferendis provident quae quam quos similique.</p><p>Amet autem commodi delectus distinctio earum
            eius est et eum facere harum iste labore maiores molestias nisi nostrum odio optio perspiciatis quae quam
            sequi sunt tempora ullam ut, vero voluptate.</p>
        </>
    </StrictMode>

)


