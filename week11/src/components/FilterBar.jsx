function FilterBar({ categories, activeFilter, onSelectFilter }) {
  return (
    <div className="project-filters" role="group" aria-label="Filter projects by technology">
      {categories.map((category) => (
        <button
          className="project-filter-button"
          type="button"
          key={category}
          aria-pressed={activeFilter === category}
          onClick={() => onSelectFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
