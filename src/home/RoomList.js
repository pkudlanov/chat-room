import Component from '../Component.js';
import RoomListItem from './RoomListItem.js';

class RoomList extends Component {
    render() {
        const dom = this.renderDOM();

        const chatRooms = this.props.chatRoomsArr;
        //const chatRoomsArr = Object.values(chatRoomsObj);

        console.log(chatRooms, 'chatRoooooommmmlsjsljskl');

        // if(!chatRoomsArr[0]){
        //     return dom;
        // }

        chatRooms.forEach(chatRoom => {
            const chatRoomItem = new RoomListItem({ chatRoom });
            dom.appendChild(chatRoomItem.render());
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <ul></ul>
        `;
    }
}

export default RoomList;