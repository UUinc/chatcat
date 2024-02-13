import styles from "./Chat.module.css";

//Images
import User from "../../assets/icons/user.png";
import Cat from "../../assets/icons/cat.png";

export default function Chat({text, isUser}) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={ isUser ? User : Cat} alt={isUser ? "user image" : "chat cat logo"}/>
        <p>{isUser ? "You" : "ChatCat"}</p>
      </div>
      <div className={styles.message} style={{ whiteSpace: 'pre-line' }}>{text}</div>
    </div>
  )
}
