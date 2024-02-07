import React from "react";
import { __experimentalGrid as Grid } from "@wordpress/components";
import { Form, MyPdf } from "./Components";
import { useSettings } from "./data/context";

const Main = () => {
  const { formData } = useSettings();

  return (
    <Grid
      columns={2}
      templateColumns="3fr 1fr"
      style={{ marginLeft: -1.5, marginRight: -1.5, height: "100vh" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MyPdf {...formData} />
      </div>
      <Form />
    </Grid>
  );
};

export default Main;
