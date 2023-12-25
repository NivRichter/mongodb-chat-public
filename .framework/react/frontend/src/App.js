import './App.css';
import Chatbot, {
    FloatingActionButtonTrigger,
    ModalView,
} from "mongodb-chatbot-ui";

function App() {
    return (
        <div className="App">
            <h1>
                MongoDB AI Assistant
            </h1>
            <Chatbot serverBaseUrl={`${process.env.REACT_APP_BACKEND_URL}/api/v1`}>
                <FloatingActionButtonTrigger text="My MongoDB AI"/>
                <ModalView
                    initialMessageText="Welcome to MongoDB Movie Expert AI Assistant. What can I help you with?"
                    initialMessageSuggestedPrompts={[
                        "Can you name a movie with a storyline set in Antartica?",
                        "What was the name of the movie with the superhero that could shrink himself?",
                    ]}
                />
            </Chatbot>




        </div>
    );
}


export default App;