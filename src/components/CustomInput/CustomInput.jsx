import { useState, useEffect } from "react";
import styles from "./CustomInput.module.css";

export default function CustomInput({prompt, setPrompt}) {

  const [h, setH] = useState(26);
  useEffect(()=>{
    const count = (prompt.match(/\n/g) || []).length;
    if(h > 100) return;
    setH(12 * count + 26);
  }, [prompt]);

  return (
    <div className={styles.container}>
      <div className={styles.promptContainer}>
        <textarea id="prompt-textarea" style={{height: h}} tabindex="0" rows="1" maxLength={255} placeholder="Message CatChat…" onChange={(e)=>setPrompt(e.target.value)}></textarea>
        <div className={styles.promptBTNContainer}>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 20" fill="none" style={{color: "black"}}><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
