import * as React from "react";
import Grid from "@mui/material/Grid";
//import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DatePicker from "./DatePicker";
import { useState } from "react";
// import { useState } from "react";
//import ButtonGroup from '@mui/material/ButtonGroup';
//import Button from '@mui/material/Button';
//import TimePicker from '@mui/lab/TimePicker';
import TimePicker from '@mui/material/TimePicker';


export default function MedicineForm() {
    const [dailyRoutine, setDailyRoutine] = useState(4);
    const [patName, setPatName]= useState("PatientName");
    const [patAge, setPatAge]= useState("PatientAge");
    const [MedName, setMedName]= useState("MedicineName");
    const [Days, setDays]= useState("NumDays");
    // console.log(dailyRoutine);
    // console.log(patName)
//      const currentTime = new Date();
//  const hours = currentTime.getHours(10);
//  const minutes = currentTime.getMinutes();
//  const seconds = currentTime.getSeconds();

  return (
    <React.Fragment>
      <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PatientName"
            name="Patient Name"
            label="Patient's Name"
            fullWidth
            autoComplete=""
            onChange={(e)=> 
            {
              setPatName(e.target.value);
              console.log(patName)
            }}
            value={PatName}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PatientName"
            name="Patient Age"
            label="Patient's Age"
            fullWidth
            autoComplete=""
            variant="standard"
             onChange={(e)=> 
            {
              setPatAge(e.target.value);
              console.log(patAge)
            }}
            value={PatAge}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker label="Date of Birth" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="medicine"
            name="Medicine Name"
            label="Medicine Name"
            fullWidth
            autoComplete=""
            variant="standard"
             onChange={(e)=> 
            {
              setMedName(e.target.value);
              console.log(MedName)
            }}
            value={MedName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker label="Starting Date" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numberofDays"
            name="numberDays"
            label="Number of Days"
            fullWidth
            autoComplete=""
            variant="standard"
             onChange={(e)=> 
            {
              setDays(e.target.value);
              console.log(Days)
            }}
            value={Days}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dailyRoutine"
            name="dailyRoutine"
            label="Daily Routine"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dailyDosage"
            name="dailyDosage"
            label="Daily Dosage"
            fullWidth
            autoComplete=""
            variant="standard"
            // onChange={(e)=> setDailyRoutine(e.target.value)}
            // value={dailyRoutine}
          />
        </Grid>
       
        
          <Grid item xs={12}>
            
            <TimePicker
           label='Controlled picker'
              value={`${hours}:${minutes}:${seconds}`}
            //  onChange={newValue => setValue(newValue)}
                  />  
  
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
