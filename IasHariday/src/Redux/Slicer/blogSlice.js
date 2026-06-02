import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// GET ALL BLOGS

export const getAllBlogs = createAsyncThunk(
    "blog/getAllBlogs",
    async (_, thunkAPI) => {
        try {
            const response = await api.get("/blogs/all");

            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch blogs"
            );
        }
    }
);

// GET SINGLE BLOG

export const getSingleBlog = createAsyncThunk(
    "blog/getSingleBlog",
    async (id, thunkAPI) => {
        try {
            const response = await api.get(`/blogs/${id}`);

            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch blog"
            );
        }
    }
);

const blogSlice = createSlice({
    name: "blog",

    initialState: {
        blogs: [],
        singleBlog: null,
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(getAllBlogs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload;
            })

            .addCase(getAllBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // GET SINGLE BLOG

            .addCase(getSingleBlog.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getSingleBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.singleBlog = action.payload;
            })

            .addCase(getSingleBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default blogSlice.reducer;