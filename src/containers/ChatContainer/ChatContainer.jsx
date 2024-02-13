import { useEffect, useState } from "react";
import styles from "./ChatContainer.module.css";

//Components
import Navbar from "../../components/Navbar/Navbar";
import Chat from "../../components/Chat/Chat";
import CustomInput from "../../components/CustomInput/CustomInput";
import Footer from "../../components/Footer/Footer";

export default function ChatContainer() {
    const [prompt, setPrompt] = useState("");
    const [chats, setChats] = useState([]);

    // add a new chat object
    const addPrompt = () => {
        const message = prompt;
        const newPrompt = { id: chats.length + 1, message: prompt };
        setChats([...chats, newPrompt]);
        setPrompt("");
    };
    const addChat = () => {
        const newChat = { id: chats.length + 1, message: `Meow Meow` };
        setChats([...chats, newChat]);
    };

    useEffect(() => {
        const lastMessage = chats[chats.length - 1];
        if(!lastMessage) return;
        if(lastMessage.id % 2 == 1)
            addChat();
    }, [chats.length, chats[chats.length - 1]]);

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles.chatContainer}>
                {
                    chats.map(chat => (
                        <Chat key={chat.id} text={chat.message} isUser={chat.id % 2 == 1}/>
                    ))
                }
            </div>
            <div className={styles.inputContainer}>
                <CustomInput prompt={prompt} setPrompt={setPrompt} sendEvent={addPrompt} />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
