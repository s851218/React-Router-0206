import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const api = "https://api.unsplash.com/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumPhoto() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${api}/${id}?client_id=${accessId}`);
      setPhoto(res.data);
    })();
  }, [id]);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          navigate(-1);
        }}
      >
        回到上一頁
      </button>
      這是單張圖片 {id}
      <p>{photo.description}</p>
      <img
        src={photo?.urls?.small}
        className="img-fluid"
        alt={photo.description}
      />
    </div>
  );
}
