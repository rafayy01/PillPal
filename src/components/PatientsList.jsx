import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_ENDPOINTS } from './ApiEndpoints'
import DeleteIcon from '@mui/icons-material/Delete'
import { ToastContainer, toast } from 'react-toastify'
import "../App.css"
const columns: GridColDef[] = [
  { field: 'document_user_id', headerName: 'Document Id', width: 150 },
  {
    field: 'name',
    headerName: 'Full name',
    width: 150,
    editable: true,
    headerClassName: 'bold-header',
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 150,
    editable: true,
    headerClassName: 'bold-header',
  },
  {
    field: 'dob',
    headerName: 'Date of Birth',
    type: 'String',
    width: 110,
    editable: true,
    headerClassName: 'bold-header',
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    description: 'This column has a value of Start Date.',
    sortable: false,
    width: 160,
    headerClassName: 'bold-header',
  },
  {
    field: 'dailyOccurence',
    headerName: 'Daily Occurence',
    description: 'This column has a value of Daily Occurence.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => {
      const dailyOccurences = params.row.dailyOccurrence || []
      return dailyOccurences.join(', ') // Display the array as a comma-separated string
    },
    headerClassName: 'bold-header',
  },
  {
    field: 'dailyDosageCount',
    headerName: 'Daily Dosage Count',
    description: 'This column has a value of Daily Dosage Count',
    sortable: false,
    width: 160,
    headerClassName: 'bold-header',
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 160,
    headerClassName: 'bold-header',
  }
]

export default function PatientsList () {
  const [rows, setRows] = useState([])
  console.log('ROWS', rows)
  var handleDelete = (params: GridValueGetterParams) => {
    // Perform deletion logic here
    const rowId = params.row.document_user_id
    const deletePatient = API_ENDPOINTS.deletePatient
    const deletePatientUrl = `${process.env.REACT_APP_API_BASE_URL}${deletePatient}?documentId=${rowId}`
    axios
      .delete(deletePatientUrl)
      .then(res => {
        if (res) {
          toast.success(res.data, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
          })
          setRows(prevRows =>
            prevRows.filter(row => row.document_user_id !== rowId)
          )
        }
      })
      .catch(err =>
        toast.error(err.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      )
  }

  useEffect(() => {
    const loggedInUserId = sessionStorage.getItem("loggedInUserId");
    const getAllPatients = API_ENDPOINTS.getAllPatients
    const getAllPatientsUrl = `${process.env.REACT_APP_API_BASE_URL}${getAllPatients}`
    axios
      .get(getAllPatientsUrl)
      .then(res => {
        const matchedRecord = res.data.filter(user=> user.user_id == loggedInUserId);
        console.log(matchedRecord)
        setRows(matchedRecord)})
      .catch(err => console.log(err.message))
  }, [])
  return (
    <>
    <ToastContainer />

    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns.map(column => {
          if (column.field === 'action') {
            return {
              ...column,
              renderCell: (params: GridValueGetterParams) => (
                <DeleteIcon
                  sx={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => handleDelete(params)}
                >
                  Delete
                </DeleteIcon>
              )
            }
          }
          return column
        })}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={row => row.document_user_id}
      />
    </Box>
    </>

  )
}
