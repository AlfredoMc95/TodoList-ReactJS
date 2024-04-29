import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import { bgColor2, text } from "../../constants/colors";

const SearchBar = () => {
  return (
    <>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: bgColor2,
          my: 2,
          px: 2,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: text }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton type="button" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
