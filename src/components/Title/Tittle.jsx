import { Paper, Typography } from "@mui/material";
import { bgColor2, text } from "../../constants/colors";

const Tittle = ({ title = "Titulo" }) => {
  return (
    <div>
      <Paper sx={{ backgroundColor: bgColor2, p: 2 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.5rem", md: "3rem" },
            color: text,
            userSelect: "none",
          }}
        >
          {title}
        </Typography>
      </Paper>
    </div>
  );
};

export default Tittle;
