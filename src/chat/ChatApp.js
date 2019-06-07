import Component from '../Component.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>Getting There</div>
        `;
    }
}

export default ChatApp;