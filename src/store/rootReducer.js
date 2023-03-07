const initialState = {
    Message: "",
    chatList: [
        {
            id: "1",
            name: "test",
            phone: +380978235448,
        },
    ],
    ChatMessages: {
        1: [
            "hello",
            "bitch",
            "It`s me",
            "hello",
            "bitch",
            "It`s me",
            "hello",
            "bitch",
            "It`s me",
            "hello",
            "bitch",
            "It`s me",
            "hello",
            "bitch",
            "It`s me",
            "hello",
            "bitch",
            "It`s me",
            "hello",
            "bitch",
            "It`s me",
            "hello",
            "bitch",
            "It`s me",
            "hello",
            "bitch",
            "It`s me",
        ],
        // 2: ["Hi", "This is second chat"],
    },
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "MESSAGE_LIST": {
            return {
                ...state,
                ChatMessages: action.payload,
            };
        }
        case "CHAT_LIST": {
            return {
                ...state,
                chatList: action.payload,
            };
        }
        case "CREATE_MESSAGE": {
            return {
                ...state,
                Message: action.payload,
            };
        }
        case "DELETE_CHAT": {
            return {
                ...state,
                chatList: action.payload,
            };
        }
        case "OPEN_CHAT": {
            return {
                ...state,
                openChatList: action.payload,
            };
        }
        default:
            return state;
    }
}
