import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Review from "./ReviewForm";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useEffect } from "react";

export default function DetailForm() {

  const {
    name,
    setName,
    age,
    setAge,
    dob,
    setDob,
    medicineName,
    setMedicineName,
    startDate,
    setStartDate,
    document_user_id,
    setDocumentUserId,
    dailyDosageCount,
    setDailyDosageCount,
    dailyOccurrence,
    setDailyOccurrence,
    user_id,
    setUserId
  } = useContext(AppContext);
  const loggedInUserId= sessionStorage.getItem("loggedInUserId");
  console.log(loggedInUserId);
  setUserId(loggedInUserId);
  console.log(startDate)
  console.log(dob)
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];
  const [currentTime, setCurrentTime] = useState(new Date());
  const handleTimeChange = (index, newTime) => {
    const updatedTimes = [...dailyOccurrence];
    updatedTimes[index] = newTime;
    setDailyOccurrence(updatedTimes);
  };
useEffect(()=>{
  setDob(formattedToday);
  setStartDate(formattedToday)
},[]);
  const addNewTime = () => {
    setDailyOccurrence([...dailyOccurrence, ""]);
  };

  const removeTime = (index) => {
    const updatedTimes = [...dailyOccurrence];
    updatedTimes.splice(index, 1);
    setDailyOccurrence(updatedTimes);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="patientName"
            name="patientName"
            label="Patient's Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="patientAge"
            name="patientAge"
            label="Patient's Age"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date of Birth"
            type="date"
            defaultValue={formattedToday}
            fullWidth
            autoComplete="Date Of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="medicineName"
            name="medicineName"
            label="Medicine Name *"
            fullWidth
            variant="standard"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="startingDate"
            name="startingDate"
            label="Starting Date"
            type="date"
            defaultValue={formattedToday}
            fullWidth
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dailydosage"
            name="dailydosage"
            label="Daily Dosage Count"
            fullWidth
            variant="standard"
            value={dailyDosageCount}
            onChange={(e) => setDailyDosageCount(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            {dailyOccurrence.map((time, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <TextField
                  required
                  id={`time-${index}`}
                  name={`time-${index}`}
                  type="time"
                  value={time}
                  fullWidth
                  variant="standard"
                  InputProps={{ inputProps: { step: 60 } }} // Set step to 1 minute
                  onChange={(event) =>
                    handleTimeChange(index, event.target.value)
                  }
                />
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon
                    fontSize="inherit"
                    onClick={() => removeTime(index)}
                  />
                </IconButton>
              </div>
            ))}
            <Button
              style={{ marginRight: "130px" }}
              variant="outlined"
              onClick={addNewTime}
            >
              Add Time
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </React.Fragment>
  );
}
