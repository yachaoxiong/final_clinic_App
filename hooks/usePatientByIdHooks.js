import React,{ useEffect, useState } from 'react'
import { getPatientById } from '../services/patientServices'
import { StoreContext } from '../store/store'

export default function usePatientByIdHooks(patientId) {
  const { isRefreshing } = React.useContext(StoreContext)
  const [patient, setPatient] = useState()

  useEffect(() => {
    getPatientById(patientId).then((response) => {
      setPatient(response)
      console.log("response", response)
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [isRefreshing])

  return patient
}
//


