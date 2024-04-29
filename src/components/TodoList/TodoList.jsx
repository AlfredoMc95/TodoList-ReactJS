import { Box } from "@mui/material";
import { bgColor1 } from "../../constants/colors";
import Tittle from "../Title/Tittle";
import SearchBar from "../SearchBar/SearchBar";
import NotesContainer from "../NotesContainer/NotesContainer";

const TodoList = () => {
  return (
    <>
      <Box
        sx={{
          p: { xs: 2, md: 5 },
          backgroundColor: bgColor1,
          width: { xs: "90%", md: "50%" },
          mx: "auto",
          my: 4,
          borderRadius: 2,
        }}
      >
        <SearchBar />
        <Tittle title={"To do List"} />
        <NotesContainer />
      </Box>
    </>
  );
};

export default TodoList;
