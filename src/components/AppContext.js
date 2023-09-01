import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
   const [name, setName] = useState("");
   const [age, setAge] = useState(0);
   const [dob, setDob] = useState();
   const [medicineName, setMedicineName] = useState();
   const [startDate, setStartDate] = useState();
   const [document_user_id, setDocumentUserId] = useState();
   const [dailyDosageCount, setDailyDosageCount] = useState();
   const [dailyOccurrence, setDailyOccurrence] = useState([]);
   const [user_id,setUserId]= useState("");
  // ... other states

  return (
    <AppContext.Provider
      value={{
        name,setName,age,setAge,dob,setDob,medicineName,setMedicineName,startDate,setStartDate,document_user_id,setDocumentUserId,
        dailyDosageCount,setDailyDosageCount,dailyOccurrence,setDailyOccurrence,user_id,setUserId
        // ... other state and setter pairs
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
