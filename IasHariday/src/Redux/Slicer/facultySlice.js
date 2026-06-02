import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// GET ALL FACULTY

export const getAllFaculty = createAsyncThunk(
    "faculty/getAllFaculty",
    async (_, thunkAPI) => {
        try {
            const response = await api.get("/faculty/all");

            return response.data.faculties;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch faculty"
            );
        }
    }
);

const facultySlice = createSlice({
    name: "faculty",

    initialState: {
        faculties: [],
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(getAllFaculty.pending, (state) => {
                state.loading = true;
            })

            .addCase(getAllFaculty.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.faculties = action.payload;
            })

            .addCase(getAllFaculty.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default facultySlice.reducer;