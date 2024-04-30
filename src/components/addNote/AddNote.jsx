import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddNote = () => {
  return (
    <>
      <IconButton
        sx={{ display: "block", ml: "auto" }}
        type="button"
        aria-label="search"
      >
        <AddCircleIcon />
      </IconButton>
    </>
  );
};

export default AddNote;
