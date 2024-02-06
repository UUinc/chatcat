import { useState, useEffect } from "react";
import styles from "./CustomInput.module.css";

export default function CustomInput({prompt, setPrompt}) {
  const [h, setH] = useState(26);
  const [count, setCount] = useState(0);

  const onChangeInput = (e)=>{
    const newCount = (e.target.value.match(/\n/g) || []).length;
    if(count > 10 && count <= newCount) return;
    setPrompt(e.target.value);
  }

  useEffect(()=>{
    setCount((prompt.match(/\n/g) || []).length);
    console.log(count);
    if(count > 8) return;
    setH(26 * count + 26);
  }, [prompt]);

  return (
    <div className={styles.container}>
      <div className={styles.promptContainer}>
        <textarea id="prompt-textarea" style={{height: h}} tabIndex="0" rows="1" placeholder="Message CatChat…" onChange={onChangeInput}></textarea>
        <div className={styles.promptBTNContainer}>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 20" fill="none" style={{color: "black"}}><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
