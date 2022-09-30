import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import starshipsApi from "../services/starshipsApi";


export const fetchAsyncStarships = createAsyncThunk(
    "starships/fetchAsyncStarships",
    async (page) => {
        const response = await starshipsApi.get(
            `?page=${page}`
        );
        return response.data;        
    }
);

export const fetchAsyncStarshipsShowDetail = createAsyncThunk(
    "starships/fetchAsyncStarshipsShowDetail",
    async (id) => {
        const response = await starshipsApi.get(`/${id}`);
        return response.data;
    }
);

export const fetchAsyncStarshipsSearch = createAsyncThunk(
    "starships/fetchAsyncStarshipsSearch",
    async (term) => {
        const response = await starshipsApi.get(
            `?search=${term}`
        );
        return response.data;
    }
);

const initialState = {
    starships: {},
    shows: {},
    searchStarships: {},
};

const starshipsSlice = createSlice({
    name: "starships",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAsyncStarships.pending]: () => {
            console.log("Pending...");
        },
        [fetchAsyncStarships.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            const {results: newResults, ...rest} = payload
            state.starships = {...state.starships, ...rest}           
            state.starships.results = (state?.starships?.results || []).concat(newResults)            
        },
        [fetchAsyncStarships.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncStarshipsShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
        },
        [fetchAsyncStarshipsSearch.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, searchStarships: payload };
        },
    },
});

export const getAllStarships = (state) => state.starships.starships;
export const getShowsStarship = (state) => state.starships.shows;
export const getSearchStarships = (state) => state.starships.searchStarships;
export default starshipsSlice.reducer;