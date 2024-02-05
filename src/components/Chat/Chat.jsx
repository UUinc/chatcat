import styles from "./Chat.module.css";

export default function Chat({text}) {
  return (
    <div>
      <div style={{ whiteSpace: 'pre-line' }}>{text}</div>
    </div>
  )
}
