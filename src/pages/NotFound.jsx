import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return <div>這是不存在的頁面，3 秒後轉至首頁...</div>;
}
