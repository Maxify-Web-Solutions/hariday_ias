import { configureStore } from '@reduxjs/toolkit'
import getCourseReducer from './Slicer/courseSlice'
import getFacultyReducer from './Slicer/facultySlice'
import getReviewReducer from './Slicer/reviewSlice'
import getBlogReducer from './Slicer/blogSlice'
import contactReducer from './Slicer/contactSlice'
import subscribeReducer from './Slicer/subscribeSlice'

export const store = configureStore({
    reducer: {
        course: getCourseReducer,
        faculty: getFacultyReducer,
        review: getReviewReducer,
        blog: getBlogReducer,
        contact: contactReducer,
        subscribe: subscribeReducer
    }
})