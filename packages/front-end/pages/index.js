import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Button, Textbox, Panel } from "components";

export default function Home() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  let [totalCheck, setTotalCheck] = useState(0);

  const handleSubmit = () => {
    setList([...list, search]);
    setSearch("");
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (value) => {
    if (value) {
      setTotalCheck(totalCheck + 1);
    } else {
      setTotalCheck(totalCheck - 1);
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <div>
          <h1>To Do Test</h1>
          <div className={styles.inputContainer}>
            <Textbox
              placeholder={"Feed the 🐶"}
              type={"text"}
              onChange={handleInputChange}
              value={search}
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
          {list.length > 0 && (
            <Panel
              onClick={(e) => {
                handleClick(e.target.checked);
              }}
              title={"List"}
              ListItem={list}
              totalCheck={totalCheck}
            ></Panel>
          )}
        </div>
      </div>
    </div>
  );
}
