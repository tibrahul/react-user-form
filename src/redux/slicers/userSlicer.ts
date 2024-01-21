import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser } from '../../@types/user'

type UserState = {
  user: TUser[]
}

const initialState: UserState = {
  user: [{
    id: 1, "firstName": "mm", "lastName": "mm", "email": "siddharthmr@gmail.com", "phoneNumber": "9876543211", "dob": "2000-01-22", "gender": "Male", "address": [{ "streetAddress": "nn", "city": "nn", "state": "n", "postalCode": "n", "country": "n" }, { "streetAddress": "nn", "city": "nn", "state": "n", "postalCode": "n", "country": "n" }]
  }, { id: 2, "firstName": "mm", "lastName": "mm", "email": "siddharthmr@gmail.com", "phoneNumber": "9876543211", "dob": "2000-01-22", "gender": "Male", "address": [{ "streetAddress": "nn", "city": "nn", "state": "n", "postalCode": "n", "country": "n" }] }]
}

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TUser>) {
      state.user = [...state.user, { ...action.payload, id: state.user.length + 1 }]
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
