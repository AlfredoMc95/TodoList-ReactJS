import {
  Box,
  Checkbox,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { bgColor3 } from "../../constants/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";

const Note = () => {
  const [edit, setEdit] = useState(false);
  const editOn = `${edit ? "inline-blcok" : "none"}`;
  const editOff = `${edit ? "none" : "inline-blcok"}`;

  return (
    <>
      <Paper
        sx={{
          backgroundColor: bgColor3,
          my: 2,
          p: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Checkbox
          sx={{
            display: editOff,
            "&.Mui-checked": {
              color: "gray",
            },
          }}
        />
        <Typography sx={{ display: editOff }}>Texto</Typography>
        <TextField
          sx={{ display: editOn, width: "100%" }}
          name="text"
          placeholder="Add a note"
          required
          type="text"
          variant="filled"
          //value={email}
          //onChange={(e) => setEmail(e.target.value)}
        />
        <Box>
          <IconButton
            sx={{ display: editOn }}
            type="button"
            aria-label="search"
          >
            <DoneIcon />
          </IconButton>
          <IconButton
            sx={{ display: editOff }}
            type="button"
            aria-label="search"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{ display: editOff }}
            type="button"
            aria-label="search"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    </>
  );
};

export default Note;
