import { Box, Checkbox, IconButton, Paper, Typography } from "@mui/material";
import { bgColor3 } from "../../constants/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = () => {
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
            "&.Mui-checked": {
              color: "gray",
            },
          }}
        />
        <Typography>Texto</Typography>
        <Box>
          <IconButton type="button" aria-label="search">
            <EditIcon />
          </IconButton>
          <IconButton type="button" aria-label="search">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    </>
  );
};

export default Note;
