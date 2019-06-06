import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from './AddRoom.js';
import RoomList from './RoomList.js';

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