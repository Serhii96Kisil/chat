import { connect } from "react-redux";
import { DeleteItemBtn } from "../buttons/DeleteItemBtn";
import "./ChatList.scss";
import "../buttons/DeleteItemBtn.scss";

function Component({ chatList }) {
    return (
        <div className="chatList">
            {chatList.map((item, index) => (
                <div className="chatElement" key={index}>
                    <div className="chatElementText">
                        {item.name}
                        <br />
                        {item.phone}
                    </div>
                    <DeleteItemBtn />
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    chatList: state.chatList,
});

export const ChatList = connect(mapStateToProps)(Component);
