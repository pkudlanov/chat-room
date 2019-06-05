import Component from '../Component.js';

class RoomList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul>
                <a><li>World Wonders</li></a>
                <a><li>Human Built Wonders</li></a>
            </ul>
        `;
    }
}

export default RoomList;