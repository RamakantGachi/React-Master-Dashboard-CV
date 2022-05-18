import { Grid, Paper, styled } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

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

function Home() {
  const router = useRouter();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item onClick={() => router.push("/dashboard/")}>CRM</Item>
        </Grid>
        <Grid item xs={6}>
          <Item onClick={() => router.push("/dashboard/")}>SAP</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
