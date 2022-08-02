import { configureStore } from '@reduxjs/toolkit'
import userstore from './userstore';

export default configureStore({
  reducer: {
    lists: userstore
  }
})