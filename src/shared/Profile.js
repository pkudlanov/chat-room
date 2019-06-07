import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class Profile extends Component {
    render() {
        const dom = this.renderDOM();

        if(!this.props.user) {
            return dom;
        }

        const button = dom.querySelector('button');

        button.addEventListener('click', () => {
            auth.signOut();
        });

        return dom;
    }
    renderTemplate() {
        const user = this.props.user;

        if(!user){
            return /*html*/ `
                <div></div>
            `;
        }

        const profilePic = user.photoURL || '../../assets/profile-placeholder.png';

        return /*html*/ `
            <div class="profile">
                <img src="${profilePic}" alt="Profile pic">
                <p>Pavel Kudlanov</p>
                <button>Sign Out</button>
            </div>
        `;
    }
}

export default Profile;