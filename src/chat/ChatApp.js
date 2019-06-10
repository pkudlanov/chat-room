import Component from '../Component.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <ol>
                        <li>
                            <h3>Bill Nye</h3>
                            <img src="../../assets/profile-placeholder.png">
                        </li>
                        <li>
                            <span>
                                <h3>George Barkley</h3>
                                <img src="../../assets/profile.jpg">
                            </span>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        </li>
                        <li>
                            <h3>Bill Nye</h3>
                            <img src="../../assets/profile-placeholder.png">
                        </li>
                        <li>
                            <h3>George Barkley</h3>
                            <img src="../../assets/profile.jpg">
                        </li>
                    </ol>
                    <input class="message" type="text" placeholder="What would you like to say?">
                </main>
            </div>
        `;
    }
}

export default ChatApp;