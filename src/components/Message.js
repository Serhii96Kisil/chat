import "./Message.scss";
import { connect } from "react-redux";

export function Component({ index, text }) {
    return (
        <p className="Message" index={index}>
            {text}
        </p>
    );
}

const mapStateToProps = (state) => ({
    data: state.message,
});

export const Message = connect(mapStateToProps)(Component);
