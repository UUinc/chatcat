import styles from './App.module.css';

//Containers
import Sidebar from './containers/Sidebar/Sidebar';
import ChatContainer from './containers/ChatContainer/ChatContainer';

function App() {

  return (
    <div className={styles.container}>
      <Sidebar />
      <ChatContainer />
    </div>
  )
}

export default App
