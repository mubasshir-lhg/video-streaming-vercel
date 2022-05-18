import React, { useState } from "react";
import {
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import BoxContainer from "../components/BoxContainer/BoxContainer";
import EditorCard from "../components/Cards/EditorCard/EditorCard";
import PageHeader from "../components/PageHeader/PageHeader";
import BasicSelect from "../components/Select/Select";
import { editorData } from "../_mockup/Editor";

const options = ["Newest", "Oldest"];
const Editor = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [data,setData]=useState(editorData);
  const doSomething = () => {};

  const allCheckHandler = () => {
    const prevChecked=isChecked;
    setIsChecked((prevValue) => !prevValue);
    const updatedData=data.map((obj=>({
      ...obj,
      check:prevChecked?false:true
    })));
    setData(updatedData)
  };

  const individualCheckHandler=(id)=>{
    let updatedData=data.map((obj)=>obj.id===id?{...obj,check:!obj.check}:{...obj});
    setData(updatedData)
  }
  return (
    <Box>
      <PageHeader title="Editor" />
      <BoxContainer>
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Grid item xs={1}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="purple" onClick={allCheckHandler} />}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={2}>
            <BasicSelect
              options={options}
              onClick={doSomething}
              placeholder="Actions"
            />
          </Grid>
          <Grid item xs={4} md={5} lg={7}></Grid>
          <Grid
            item
            xs={5}
            md={4}
            lg={2}
            alignSelf="right"
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            <Box mr={1}>Views :</Box>
            <BasicSelect options={options} onClick={doSomething} />
          </Grid>
        </Grid>
        <Box>
          {data?.map((value, index) => (
            <Box key={index}>
              <EditorCard 
              value={value}
              individualCheckHandler={individualCheckHandler}
              />
            </Box>
          ))}
        </Box>
      </BoxContainer>
    </Box>
  );
};

export default Editor;
