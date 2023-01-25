import { useState } from "react";

const Checkbox = () => {
  const [value, setValue] = useState(false);

  return (
    <>
      <input type="checkbox" onClick={() => setValue(!value ? true : false)} /> Test
      <p>{!value ? "Unchecked" : "Checked"}</p>
    </>

  );

};

export default Checkbox;