import "./css/preferencesTypeAhead.css";

export default function PreferencesTypeAhead({
  suggestions,
  datasetType,
  clickHandler,
}) {
  return (
    <ul className="type-ahead-container">
      {suggestions.map((suggestion) => (
        <li
          key={suggestion}
          className="type-ahead-item"
          data-type={datasetType}
          data-value={suggestion}
          onClick={(e) => clickHandler(e)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}
