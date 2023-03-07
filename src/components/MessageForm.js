import { connect } from "react-redux";
import { Button, Input, Space } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./MessageForm.scss";

const { TextArea } = Input;

function Component({ data, setData }) {
    return (
        <div className="MassageFormWrapp">
            <TextArea
                className="MassageFormTextArea"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Write your message"
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
            <Space wrap>
                <Button className="MessageButton" type="primary" shape="circle" icon={<SendOutlined />} />
            </Space>
        </div>
    );
}

const mapStateToProps = (state) => ({
    data: state.message,
});

const mapDispatchToProps = (dispatch) => ({
    setData: (newValue) =>
        dispatch({
            type: "CREATE_MESSAGE",
            payload: newValue,
        }),
});

export const MessageForm = connect(mapStateToProps, mapDispatchToProps)(Component);
