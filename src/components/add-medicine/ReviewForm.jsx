import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { AppContext } from "../AppContext";
import { useContext } from "react";


export default function Review() {
   const {
     name,
     age,
     dob,
     medicineName,
     startDate,
     document_user_id,
     medicineDuration,
     dailyDosageCount,
     dailyOccurrence,
   } = useContext(AppContext);
   console.log(dailyOccurrence)
   console.log(startDate)
   function convertTo12HourFormat(time24) {
     const [hours, minutes] = time24.split(":");
     const date = new Date(0, 0, 0, hours, minutes);

     let period = "AM";
     if (date.getHours() >= 12) {
       period = "PM";
     }

     const hours12 = date.getHours() % 12 || 12;
     const formattedTime = `${hours12}:${minutes} ${period}`;
     return formattedTime;
   }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Patient's Details
      </Typography>
      <List disablePadding>
        <ListItem key={name} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Name"} />
          <Typography variant="body2">{name}</Typography>
        </ListItem>
        <ListItem key={age} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Age"} />
          <Typography variant="body2">{age}</Typography>
        </ListItem>
        <ListItem key={dob} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Date of Birth"} />
          <Typography variant="body2">{dob}</Typography>
        </ListItem>
        <ListItem key={medicineName} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Medicine Name"} />
          <Typography variant="body2">{medicineName}</Typography>
        </ListItem>
        <ListItem key={startDate} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Starting Date"} />
          <Typography variant="body2">{startDate}</Typography>
        </ListItem>
        <ListItem key={dailyDosageCount} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Daily Dosage Count"} />
          <Typography variant="body2">{dailyDosageCount}</Typography>
        </ListItem>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Selected Dosage Time
        </Typography>
        {dailyOccurrence.map((time) => (
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary={"Selected Time"} />
            <Typography variant="body2">{convertTo12HourFormat(time)}</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
