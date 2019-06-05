import Component from '../Component.js';

class RoomList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul>
                <a href="./chat.html?key=klsa32dsnk328y"><li>World Wonders</li></a>
            </ul>
        `;
    }
}

export default RoomList;