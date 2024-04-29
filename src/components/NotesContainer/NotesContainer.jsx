import { Paper } from "@mui/material";
import { bgColor2 } from "../../constants/colors";
import Note from "../Note/Note";

const NotesContainer = () => {
  return (
    <>
      <Paper
        sx={{
          backgroundColor: bgColor2,
          my: 2,
          p: 4,
          overflowY: "auto",
          maxHeight: 500,
        }}
      >
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </Paper>
    </>
  );
};

export default NotesContainer;
