
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import styles from "./Search.module.css";

export function Search () {
  const query = useQuery()
  const search = query.get("search")

  const [searchText, setsearchText] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    setsearchText(search || "")
  }, [search])
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText)
  }
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e)=> setsearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          {" "}
          <FaSearch size={20} />{" "}
        </button>
      </div>
    </form>
  );
};
