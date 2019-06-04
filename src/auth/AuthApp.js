import Component from '../Component.js';

class AuthApp extends Component {
    render() {
        
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <p>Please Sign In</p>
                    <div id="firebase-auth-container"></div>
                </main>
            </div>
        `;
    }
}

export default AuthApp;