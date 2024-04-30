import { Box, Paper } from "@mui/material";
import { bgColor1, bgColor2, bgColor3 } from "../../constants/colors";
import Note from "../Note/Note";
import AddNote from "../addNote/AddNote";

const NotesContainer = () => {
  return (
    <>
      <Paper
        sx={{
          backgroundColor: bgColor2,
          my: 2,
          p: 4,
        }}
      >
        <AddNote />
        <Box
          sx={{
            overflowY: "auto",
            maxHeight: 500,
            my: 1,
            px: 2,
            scrollbarWidth: "thin",
            scrollbarColor: `${bgColor1} ${bgColor3}`,
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: bgColor3,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: bgColor1,
              borderRadius: "5px",
            },
          }}
        >
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </Box>
      </Paper>
    </>
  );
};

export default NotesContainer;
