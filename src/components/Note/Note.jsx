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

const Note = ({ item, onDelete }) => {
  const [edit, setEdit] = useState(false);
  const editOn = `${edit ? "inline-blcok" : "none"}`;
  const editOff = `${edit ? "none" : "inline-blcok"}`;

  const [noteTitle, setNoteTitle] = useState(item.title || "");

  const toggleEdit = () => setEdit((prevEdit) => !prevEdit);

  const handleUpdateTitle = () => {
    item.title = noteTitle; // Asignar el nuevo título
    toggleEdit(); // Salir del modo de edición
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(item.id); // Llama a la función de eliminar pasando el ID de la nota
    }
  };

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
          checked={item.completed}
        />
        <Typography sx={{ display: editOff }}>{item.title}</Typography>
        <TextField
          sx={{ display: editOn, width: "100%" }}
          name="text"
          placeholder=""
          type="text"
          variant="filled"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <Box>
          <IconButton
            sx={{ display: editOn }}
            type="button"
            aria-label="search"
            onClick={handleUpdateTitle}
          >
            <DoneIcon />
          </IconButton>
          <IconButton
            sx={{ display: editOff }}
            type="button"
            aria-label="search"
            onClick={toggleEdit}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{ display: editOff }}
            type="button"
            aria-label="search"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    </>
  );
};

export default Note;
