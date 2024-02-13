import styles from "./Sidebar.module.css";

//images
import userLogo from "../../assets/icons/user.png";
import chatCatLogo from "../../assets/icons/logo.png";

export default function Sidebar() {
    const handleRefresh = () => {
        window.location.reload();
    };
    const openLink = () => {
        window.open('https://github.com/UUinc', '_blank');
    };
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <button className={styles.newChatBTN} onClick={handleRefresh}>
                    <img className={styles.logo} src={chatCatLogo} alt="chat cat logo" />
                    <p className={styles.text}>New chat</p>
                </button>
                <button className={styles.userBTN} onClick={openLink}>
                    <img className={styles.logo} src={userLogo} alt="chat cat logo" />
                    <p className={styles.text}>User</p>
                </button>
            </div>
        </div>
    )
}
