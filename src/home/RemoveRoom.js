import Component from '../Component.js';

class RemoveRoom extends Component {
    render() {
        const button = this.renderDOM();
        
        button.addEventListener('click', () => {
            this.props.removeRoom();
        });

        return button;
    }
    renderTemplate() {
        return /*html*/ `
            <button>Remove Chat</button>
        `;
    }
}

export default RemoveRoom;