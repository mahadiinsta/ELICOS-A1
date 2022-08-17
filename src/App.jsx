import { Box, Typography } from '@mui/material'
import { createContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import MultistepForm from './components/MultistepForm/MultistepForm'

export const FormContext = createContext()
const ZOHO = window.ZOHO

function App() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm()
  const result = []
  const [signature1, setSignature1] = useState('')
  const [signature2, setSignature2] = useState('')
  const [signature3, setSignature3] = useState('')
  const [zohoInitialized, setZohoInitialized] = useState(false)
  const [entity, setEntity] = useState('')
  const [entityId, setEntityId] = useState('')

  useEffect(() => {
    const loadZoho = async () => {
      ZOHO.embeddedApp.on('PageLoad', function (data) {
        // setEntity(data.Entity)
        // setEntityId(data.EntityId)
        console.log(data)
      })
      const zohoLoaded = ZOHO.embeddedApp
        .init()
        .then(() => setZohoInitialized(true))
    }
    loadZoho()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      ZOHO.CRM.META.getFields({ Entity: 'Leads' }).then(function (data) {
        console.log('data', data)
      })

      ZOHO.CRM.API.getRecord({
        Entity: 'Leads',
        RecordID: '1915689000037526018',
      }).then(function (data) {
        console.log(data)
      })
    }
    fetchData()
    // if (zohoInitialized && entity !== '' && entityId !== '') {
    //   fetchData()
    // }
  }, [zohoInitialized, entity, entityId])

  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: '30px auto 0px auto',
        border: '1px solid #d6d6d6',
        boxShadow: '0 0px 3px #e1e1e1',
        borderRadius: '2px',
        bgcolor: 'white',
      }}
    >
      <Box
        sx={{
          padding: '10px 0px',
          backgroundColor: '#494949',
          color: '#fff',
          width: '100%',
        }}
      >
        <Typography variant="h5" sx={{ml: 2}}>
        _ELICOS A1
        </Typography>
      </Box>

      <FormContext.Provider
        value={[
          control,
          result,
          register,
          handleSubmit,
          watch,
          signature1,
          setSignature1,
          signature2,
          setSignature2,
          signature3,
          setSignature3,
        ]}
      >
        <Box sx={{ padding: '0px 30px 20px 30px', minHeight: '700px' }}>
          <MultistepForm />
        </Box>
      </FormContext.Provider>
    </Box>
  )
}

export default App
