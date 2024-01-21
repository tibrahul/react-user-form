import { ChangeEvent } from "react"

export type TAddress = {
  streetAddress: string
  city: string
  state: string
  postalCode: string
  country: string
}

export type TUser = {
  id?: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  dob: string
  gender: string
  address: TAddress[]
}

