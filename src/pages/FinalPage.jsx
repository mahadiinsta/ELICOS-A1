import { Box } from '@mui/material'
import { useContext } from 'react'
import { FormContext } from '../App'
import CustomDatePicker from '../components/Inputs/CustomDatePicker'
import CustomSignature from '../components/Inputs/CustomSignature'
import CustomTextField from '../components/Inputs/CustomTextField'

const FinalPage = () => {
  const [
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
  ] = useContext(FormContext)
  return (
    <Box sx={{ padding: '20px 0px 40px 0px' }}>
      <p className="general-text-light">
        This SWMS has been developed in consultation with the relevant employer
        and workers on site. I have read the above SWMS and I understand its
        contents. I confirm that I have the skills and training, including
        relevant certification to conduct the task as described. I agree to
        comply with safety requirements within this SWMS including risk control
        measures, safe work instructions and Personal Protective Equipment as
        described. I will refrain from tasks for which I do not have the
        appropriate skills, training or certification and inform the site
        foreperson / Furlong Management immediately.
      </p>
      <br />
      <br />
      <CustomTextField label="Name" name="name1" />
      <CustomSignature
        label="signature"
        name="signature1"
        signature={signature1}
        setSignature={setSignature1}
      />
      <CustomDatePicker name="date_1" />
      <CustomTextField label="Name" name="nam2" />
      <CustomSignature
        label="signature"
        name="signatur2"
        signature={signature2}
        setSignature={setSignature2}
      />
      <CustomDatePicker name="date_2" />
      <CustomTextField label="Name" name="nam3" />
      <CustomSignature
        label="signature"
        name="signatur3"
        signature={signature3}
        setSignature={setSignature3}
      />
      <CustomDatePicker name="date_3" />
    </Box>
  )
}

export default FinalPage
