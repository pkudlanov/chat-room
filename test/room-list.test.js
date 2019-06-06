import RoomList from '../src/home/RoomList.js';

const test = QUnit.test;

QUnit.module('RoomList Component');

const rooms = {
    jkslh: {
        key: 'klsa32dsnk328y',
        name: 'World Wonders',
        owner: '5Wljc7SudhXWgYb7tUa8lNE7rn62'
    },
    wienl: {
        key: '29jlni02761njl',
        name: 'Human Built Wonders',
        owner: '5Wljc7SudhXWgYb7tUa8lNE7rn62'
    }
};

test('RoomList renders list of chatRooms correctly for a single chat', assert => {
    // arrange
    const chatRoomsObj = rooms;
    const chatRoomsArr = Object.values(chatRoomsObj);

    //console.log(chatRooms, 'chatRooms object');
    
    const expected = /*html*/ `
        <ul>
            <a href="./chat.html?key=klsa32dsnk328y"><li>World Wonders</li></a>
        </ul>
    `;

    // act
    const roomList = new RoomList({ chatRoomsArr });
    const result = roomList.renderTemplate();

    // assert
    assert.htmlEqual(result, expected);
});

test('RoomList renders list of chatRooms correctly for mulitple chats', assert => {
    // arrange
    const chatRooms = rooms;

    console.log(chatRooms, 'chatRooms object');
    
    const expected = /*html*/ `
        <ul>
            <a href="./chat.html?key=klsa32dsnk328y"><li>World Wonders</li></a>
            <a href="./chat.html?key=29jlni02761njl"><li>Human Built Wonders</li></a>
        </ul>
    `;

    // act
    const roomList = new RoomList({ chatRooms });
    const result = roomList.renderTemplate();

    // assert
    assert.htmlEqual(result, expected);
});

