import Component from '../Component.js';
import Header from '../shared/Header.js';

class App extends Component {
    render(){
        const dom = this.renderDOM();

        const header = new Header({ title: 'Group Chat' });
        dom.prepend(header.render());

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