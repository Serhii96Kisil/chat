import { Layout, Space } from "antd";
import "./styles/Layout.scss";
import "./components/index";
import { ChatList, ActiveRoom } from "./components";
import { LoginBtn, AddChatComp } from "./buttons";

const { Header, Footer, Sider, Content } = Layout;

function App() {
    return (
        <div>
            <Space className="appWrap" direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
                <Layout>
                    <Header className="headerStyle">
                        <div className="headerStyleContainer">
                            <div className="Title">My Chat</div>
                            <LoginBtn />
                        </div>
                    </Header>
                    <Layout className="mainContent">
                        <Sider theme="light" className="siderStyle" breakpoint={"xs"}>
                            <div>
                                <div className="YourChats">Your Chats</div>
                                <AddChatComp />
                                <ChatList />
                            </div>
                        </Sider>
                        <Content className="contentStyle">
                            <ActiveRoom />
                        </Content>
                    </Layout>
                    <Footer className="footerStyle">Это я сделал</Footer>
                </Layout>
            </Space>
        </div>
    );
}

export default App;
