import Component from '../Component.js';
import RemoveRoom from './RemoveRoom.js';
import { chatRoomsDB } from '../services/firebase.js';

class RoomListItem extends Component {
    render() {
        const dom = this.renderDOM();
        const chatRoomObj = this.props.chatRoom;
        const chat = chatRoomsDB.child(chatRoomObj.key);

        const removeButton = new RemoveRoom({
            removeRoom: () => {
                chat.remove();
            } 
        });

        dom.appendChild(removeButton.render());

        return dom;
    }
    renderTemplate() {
        const chatRoomObj = this.props.chatRoom;
        const key = chatRoomObj.key;
        const name = chatRoomObj.name;

        return /*html*/ `
            <div>
                <a href="./chat.html?key=${key}">
                    <li>${name}</li>
                </a>
            </div>
        `;
    }
}

export default RoomListItem;