import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SearchBar.module.scss";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${input}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        placeholder="Search for a movie or tv show"
        className={styles.input}
        value={input}
        onChange={handleOnInputChange}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
