import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function ControlRating({ rating, name, size, readOnly }) {
  const [value, setValue] = useState(rating);

  return (
    <Box>
      <Rating
        readOnly={readOnly}
        precision={0.5}
        name={name}
        value={value}
        size={size}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
export default ControlRating;
