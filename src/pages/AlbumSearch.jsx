import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import List from "../components/List";

const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export function AlbumSearch() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (search !== "") {
      (async () => {
        const res = await axios.get(
          `${api}?client_id=${accessId}&query=${search}`
        );
        const { results } = res.data;
        setList(results);
      })();
    }
  }, [search]);

  useEffect(() => {
    setSearch(searchParams.get("query"));
  }, [searchParams]);

  return (
    <>
      <div>這是搜尋頁面</div>
      {search}
      <input
        type="text"
        className="form-control"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setSearchParams({ query: e.target.value });
          }
        }}
      />
      <List list={list} />
    </>
  );
}
