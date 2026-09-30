import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce.js";

export default function SearchBar({ initial = "", onSearch }) {
  const [text, setText] = useState(initial);
  const debounced = useDebounce(text, 500);

  useEffect(() => {
    if (debounced.trim() !== initial) onSearch(debounced.trim());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  return (
    <input
      className="search"
      type="search"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Search movies by title"
      aria-label="Search movies"
    />
  );
}
