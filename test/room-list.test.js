import RoomList from '../src/home/RoomList.js';

const test = QUnit.test;

QUnit.module('RoomList Component');

const chatRooms = {
    jkslh: {
        key: 'klsa32dsnk328y',
        name: 'World Wonders',
        owner: '5Wljc7SudhXWgYb7tUa8lNE7rn62'
    },
    wienl: {
        key: '29jlni02761njl',
        name: 'Human Build Wonders',
        owner: '5Wljc7SudhXWgYb7tUa8lNE7rn62'
    }
};

test('RoomList renders list of chatRooms correctly for a single chat', assert => {
    // arrange
    const chat = chatRooms[0];

    const expected = /*html*/ `
        <ul>
            <a href="./chat.html?key=klsa32dsnk328y"><li>World Wonders</li></a>
        </ul>
    `;

    // act
    const result = new RoomList({ chat });

    // assert
    assert.htmlEqual(result, expected);
});