import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class Header extends Component {
    render(){
        const dom = this.renderDOM();

        auth.onAuthStateChanged(user => {
            if(user){
                console.log(user);
            }
        });

        return dom;
    }
    renderTemplate() {
        const title = this.props.title || document.title;
        return /*html*/ `
            <header>
                <h1>${title}</h1>
            </header>
        `;
    }
}

export default Header;