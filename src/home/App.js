import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from './AddRoom.js';
import RoomList from './RoomList.js';
import { chatRoomsDB } from '../services/firebase.js';

class App extends Component {
    render(){
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Group Chat' });
        dom.prepend(header.render());

        const addRoom = new AddRoom();
        main.appendChild(addRoom.render());

        const roomList = new RoomList({ chatRooms: [] });
        main.appendChild(roomList.render());

        chatRoomsDB.on('value', snapshot => {
            const value = snapshot.val();
            const chatRooms = value ? Object.values(value) : [];
            roomList.update({ chatRooms });
        });


        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <h1>Hey yoooo</h1>
                </main>
            </div>
        `;
    }
}

export default App;