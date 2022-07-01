import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height = '100vh'
            projectId = '359c8da4-dc65-4d3e-bfa6-72bff4bade92'
            userName = 'javascriptmastery'
            userSecret = '123123'
        />
    );
}

export default App;