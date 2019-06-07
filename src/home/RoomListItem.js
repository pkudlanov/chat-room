import Component from '../Component.js';
import RemoveRoom from './RemoveRoom.js';
import { chatRoomsDB, auth } from '../services/firebase.js';

class RoomListItem extends Component {
    render() {
        const dom = this.renderDOM();
        const chatRoomObj = this.props.chatRoom;
        const chat = chatRoomsDB.child(chatRoomObj.key);
        const currentUser = auth.currentUser.uid;
        const chatCreator = chatRoomObj.owner;
        
        console.log(currentUser, 'user');
        console.log(chatCreator, 'creator');
        
        const removeButton = new RemoveRoom({
            removeRoom: () => {
                chat.remove();
            } 
        });
        
        if(currentUser === chatCreator) {
            dom.appendChild(removeButton.render());
        }



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