import { Grid, Menu, MenuItem, Paper, styled } from "@mui/material";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DATA from "../../config/data.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#307fe2",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  cursor: "context-menu",
  height: "100px",
  border: "2px solid #307fe2",
  fontSize: "1.25rem",
  fontWeight: "bold",

  //position:"absolute",
}));

function DashCard({ title }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleMenu = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <Grid item xs>
      <Item onMouseEnter={handleMenu}>
        {title === "SALES" && <CrisisAlertIcon />}
        {title === "SERVICES" && <CarRepairIcon />}
        {title === "SPARES" && <MiscellaneousServicesIcon />}
        &nbsp;
        {title}
      </Item>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            maxHeight: 200,
            width: "50ch",
          },
        }}
      >
        {DATA[title].map((item, id) => {
          // console.log(item)
          return (
            <MenuItem
              key={id}
              onClick={() =>
                router.push("/dashboard/" + title + "/" + item.url)
              }
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Grid>
  );
}

export default DashCard;
