// A comp that renders search input for person list
const Filter = ({ value, onChange }: any) => (
  <div style={{ display: "grid", placeContent: "center",  gridAutoFlow: "column", paddingTop: "32px", paddingBottom: "32px", gap: "32px" }}>
    Find Country : <input placeholder='Search' value={value} onChange={onChange} />
  </div>
);

export default Filter
