import Component from '../Component.js';
//import { chatRoomsDB } from '../services/firebase.js';

class RoomListItem extends Component {
    // render() {
    //     // const dom = this.renderDOM;
    //     ///const chatRoom = this.props.chatRoom;

    //     //chatRoomsDB.key

    //     // const userChatRoom = chatRoomsDB;

    //     // userChatRoom.set({

    //     // });

    //     // return dom;
    // }
    renderTemplate() {
        const chatRoomObj = this.props.chatRoom;
        const key = chatRoomObj.key;
        const name = chatRoomObj.name;

        return /*html*/ `
            <a href="./chat.html?key=${key}">
                <li>${name}</li>
            </a>
        `;
    }
}

export default RoomListItem;