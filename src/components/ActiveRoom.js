import { connect } from "react-redux";
import { MessageForm, Message } from "./index";
import { DeleteItemBtn } from "../buttons";
import "./ActiveRoom.scss";

function Component({ ChatMessages }) {
    return (
        <div className="ActiveRoom">
            <div className="ActiveRoomHeader">
                <DeleteItemBtn />
            </div>
            <div className="ActiveRoomMain">
                {ChatMessages[1].map((item, index) => (
                    <Message text={item} index={index} />
                ))}
            </div>
            <MessageForm />
        </div>
    );
}

const mapStateToProps = (state) => ({
    ChatMessages: state.ChatMessages,
});

export const ActiveRoom = connect(mapStateToProps)(Component);
