import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";


// ================= CREATE CONTACT =================
export const createContact = createAsyncThunk(
    "contact/createContact",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post("/contact-us/create", formData);

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || {
                    message: "Something went wrong",
                }
            );
        }
    }
);

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        loading: false,
        success: false,
        error: null,
        message: "",
        contact: null,
    },

    reducers: {
        clearContactState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
            state.message = "";
        },
    },

    extraReducers: (builder) => {
        builder

            // CREATE CONTACT
            .addCase(createContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(createContact.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.contact = action.payload.data;
                state.message = action.payload.message;
            })

            .addCase(createContact.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload?.message || "Failed to submit";
            });
    },
});

export const { clearContactState } = contactSlice.actions;
export default contactSlice.reducer;