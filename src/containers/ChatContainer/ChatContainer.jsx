import { useState } from "react";
import styles from "./ChatContainer.module.css";

//Components
import Navbar from "../../components/Navbar/Navbar";
import Chat from "../../components/Chat/Chat";
import CustomInput from "../../components/CustomInput/CustomInput";
import Footer from "../../components/Footer/Footer";

export default function ChatContainer() 
{
    const [prompt, setPrompt] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles.chatContainer}>
                <Chat text={prompt}/>
            </div>
            <div className={styles.inputContainer}>
                <CustomInput prompt={prompt} setPrompt={setPrompt}/>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
