import styles from "./Sidebar.module.css";

//images
import userLogo from "../../assets/icons/user.png";
import chatCatLogo from "../../assets/icons/logo.png";

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <button className={styles.newChatBTN}>
                    <img className={styles.logo} src={chatCatLogo} alt="chat cat logo" />
                    <p className={styles.text}>New chat</p>
                </button>
                <button className={styles.userBTN}>
                <img className={styles.logo} src={userLogo} alt="chat cat logo" />
                    <p className={styles.text}>User</p>
                </button>
            </div>
        </div>
    )
}
