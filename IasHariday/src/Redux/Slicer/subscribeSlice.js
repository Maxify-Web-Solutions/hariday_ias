import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// Subscribe Newsletter

export const subscriberUser = createAsyncThunk(
    "subscriber/subscriberUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.post(
                "/subscribers/subscribe",
                data
            );

            return response.data;
        } catch (error) {
            console.log("ERROR DATA =>", error.response?.data);

            return rejectWithValue(
                error.response?.data || {
                    message: "Something went wrong",
                }
            );
        }
    }
);

const subscribeSlice = createSlice({
    name: "subscribe",

    initialState: {
        loading: false,
        success: false,
        message: "",
        error: null,
    },

    reducers: {
        clearSubscriberState: (state) => {
            state.loading = false;
            state.success = false;
            state.message = "";
            state.error = null;
        },
    },

    extraReducers: (builder) => {

        builder

            .addCase(subscriberUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(subscriberUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
            })

            .addCase(subscriberUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload?.message || "Subscription failed";
            });
    },
});

export const { clearSubscriberState } = subscribeSlice.actions;
export default subscribeSlice.reducer;