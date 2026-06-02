import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// GET ALL REVIEWS

export const getAllReviews = createAsyncThunk(
    "review/getAllReviews",
    async (_, thunkAPI) => {
        try {
            const response = await api.get("/review");

            return response.data.reviews;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch reviews"
            );
        }
    }
);

const reviewSlice = createSlice({
    name: "review",

    initialState: {
        reviews: [],
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(getAllReviews.pending, (state) => {
                state.loading = true;
            })

            .addCase(getAllReviews.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.reviews = action.payload;
            })

            .addCase(getAllReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default reviewSlice.reducer;