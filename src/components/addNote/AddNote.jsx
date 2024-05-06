import { Box, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Input from "../Input/Input";
import { useContext, useState } from "react";
import { ItemsContext } from "../../Context/ItemsContext";

const AddNote = () => {
  const [todos, setTodos] = useContext(ItemsContext);
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: note,
      completed: false,
    };

    console.log("Nuevo todo a agregar:", newTodo);

    setTodos([...todos, newTodo]);
    setNote("");
  }

  function handleChange(e) {
    const value = e.target.value;

    setNote(value);
  }

  return (
    <>
      <Box
        sx={{ px: 2, display: "flex", justifyContent: "space-between", gap: 1 }}
      >
        <Input value={note} handleChange={handleChange} />
        <IconButton type="button" aria-label="search" onClick={handleSubmit}>
          <AddCircleIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default AddNote;
