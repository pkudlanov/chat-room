import Component from '../Component.js';

class RoomListItem extends Component {
    // render() {
    //     const dom = this.renderDOM;
    //     return dom;
    // }
    renderTemplate() {
        // const chatRoomObj = this.props.chatRoom;
        // const key = chatRoomObj.key;

        console.log('keyyyyyy');

        return /*html*/ `
            <a href="./chat.html?key=ahioen29sj">
                <li>World Wonders</li>
            </a>
        `;
    }
}

export default RoomListItem;