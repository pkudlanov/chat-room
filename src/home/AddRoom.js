import Component from '../Component.js';
import { chatRoomsDB, auth } from '../services/firebase.js';

class AddRoom extends Component {
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        
        
        form.addEventListener('submit', () => {
            console.log(input.value, 'input');
            const roomRef = chatRoomsDB.push();
            const room = {
                key: roomRef.key,
                owner: auth.currentUser.uid,
                name: input.value
            };
            event.preventDefault();

            roomRef.set(room).then(() => {
                form.reset();
            });
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form id="chat-form">
                <label for="name-input">Chatroom Name</label>
                <input name="name-input" type="text" placeholder="Name">
                <button>Make Room</button>
            </form>
        `;
    }
}

export default AddRoom;
