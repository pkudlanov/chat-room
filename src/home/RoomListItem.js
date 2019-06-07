import Component from '../Component.js';
import { chatRoomsDB } from '../services/firebase.js';

class RoomListItem extends Component {
    render() {
        const dom = this.renderDOM();
        const chatRoomObj = this.props.chatRoom;

        const chat = chatRoomsDB.child(chatRoomObj.key);

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            chat.remove();
        });

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
                <button>Remove List</button>
            </div>
        `;
    }
}

export default RoomListItem;