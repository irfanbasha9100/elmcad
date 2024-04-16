import { configureStore } from '@reduxjs/toolkit'
import emailReducer  from '../features/counter/counterSlice'
const appStore = configureStore({
    reducer:{
        email: emailReducer
    }
})

export default appStore;