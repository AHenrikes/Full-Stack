// A comp that renders search input for person list
const Filter = ({ value, onChange }: any) => (
  <>
    filter shown with: <input placeholder='Search' value={value} onChange={onChange} />
  </>
);

export default Filter
