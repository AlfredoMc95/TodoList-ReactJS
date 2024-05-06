import { TextField } from "@mui/material";

const Input = ({ value, handleChange }) => {
  return (
    <>
      <TextField
        sx={{ width: "100%" }}
        name="text"
        placeholder="Add a note"
        required
        type="text"
        variant="filled"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
