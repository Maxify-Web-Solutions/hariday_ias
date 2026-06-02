import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// GET ALL COURSES

export const getAllCourses = createAsyncThunk(
    "course/getAllCourses",
    async (_, thunkAPI) => {
        try {
            console.log("GET ALL COURSE API HIT");

            const response = await api.get("/course/all");

            return response.data.courses;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch courses"
            );
        }
    }
);

// GET SINGLE COURSE

export const getSingleCourse = createAsyncThunk(
    "course/getSingleCourse",
    async (id, thunkAPI) => {
        try {
            const response = await api.get(`/course/${id}`);

            return response.data.course;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch course"
            );
        }
    }
);

// SLICE

const courseSlice = createSlice({
    name: "course",

    initialState: {
        courses: [],
        singleCourse: null,
        loading: false,
        error: null,
    },

    reducers: {
        clearCourseError: (state) => {
            state.error = null;
        },

        clearSingleCourse: (state) => {
            state.singleCourse = null;
        },
    },

    extraReducers: (builder) => {
        builder

            // GET ALL COURSES
            .addCase(getAllCourses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getAllCourses.fulfilled, (state, action) => {
                state.loading = false;
                state.courses = action.payload;
            })

            .addCase(getAllCourses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // GET SINGLE COURSE
            .addCase(getSingleCourse.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getSingleCourse.fulfilled, (state, action) => {
                state.loading = false;
                state.singleCourse = action.payload;
            })

            .addCase(getSingleCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export const { clearCourseError, clearSingleCourse } = courseSlice.actions;
export default courseSlice.reducer;