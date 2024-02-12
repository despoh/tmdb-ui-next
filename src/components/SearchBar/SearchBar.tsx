import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SearchBar.module.scss";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(errorMsg){
      setErrorMsg("");
    }
    
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();


    if(input.length === 0){
      setErrorMsg("Please enter a keyword")
      return;
    }

    router.push(`/search?query=${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
      <input
        placeholder="Search for a movie or tv show"
        className={styles.input}
        value={input}
        onChange={handleOnInputChange}

      />
      <button className={styles.button} type="submit">
        Search
      </button>
      </div>
      <div className={styles.msg}>{errorMsg}</div>
    </form>
  );
};

export default SearchBar;
