import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('Profile');

test('Renders profile from template', assert => {
    const user = {
        displayName: 'Pavel Kudlanov',
        photoURL: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?w968'
    };

    const expected = /*html*/ `
        <div class="profile">
            <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?w968" alt="Profile pic">
            <p>Pavel Kudlanov</p>
            <button>Sign Out</button>
        </div>
    `;

    const profile = new Profile({ user });

    const rendered = profile.renderTemplate();

    assert.equal(rendered, expected);
});

test('Default picture with no URL', assert => {
    const user = {
        displayName: 'Pavel Kudlanov',
        photoURL: null
    };

    const expected = /*html*/ `
        <div class="profile">
            <img src="../../assets/profile-placeholder.png" alt="Profile pic">
            <p>Pavel Kudlanov</p>
            <button>Sign Out</button>
        </div>
    `;

    const profile = new Profile({ user });

    const rendered = profile.renderTemplate();

    assert.equal(rendered, expected);
});

test('Renders profile with just an empty div', assert => {
    const user = null;

    const expected = /*html*/ `
        <div></div>
    `;

    const profile = new Profile({ user });

    const rendered = profile.renderTemplate();

    assert.equal(rendered, expected);
});