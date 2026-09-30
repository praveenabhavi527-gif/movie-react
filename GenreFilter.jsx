export default function GenreFilter({ genres = [], selected, onSelect }) {
  return (
    <div className="genres" role="group" aria-label="Filter by category">
      <button className={!selected ? "chip active" : "chip"} onClick={() => onSelect("")}>
        All
      </button>
      {genres.map((g) => (
        <button
          key={g.id}
          className={String(g.id) === selected ? "chip active" : "chip"}
          onClick={() => onSelect(String(g.id))}
        >
          {g.name}
        </button>
      ))}
    </div>
  );
}
