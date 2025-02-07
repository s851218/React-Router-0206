import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../components/List";

const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumLayout() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${api}?client_id=${accessId}&query=animal`);
      const { results } = res.data;
      setList(results);
    })();
  }, []);

  return (
    <div className="row">
      <div className="col-4">
        左側選單列表
        <div className="mb-3">
          <Link to="search">搜尋頁面</Link>
        </div>
        <List list={list} />
      </div>
      <div className="col-8">
        <Outlet context={list} />
      </div>
    </div>
  );
}
