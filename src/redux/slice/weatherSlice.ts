import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import apiClient from '../../api/apiClient';
import constant from '../../constant/constant';

// initial state interface
interface InitialState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: boolean;
  weatherData: any;
}

// initial state will be get defined here
const initialState: InitialState = {
  loading: 'idle',
  error: false,
  weatherData: null,
};

// fetch weather data
export const fetchWeatherData: any = createAsyncThunk(
  'weather',
  async (city: string, {rejectWithValue}) => {
    try {
      const response = await apiClient.get(
        `forecast.json?q=${city}&days=1&key=${constant.weatherAPIKey}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// passenger slice
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  // to handle state based reducers
  reducers: {},
  // to handle api based reducers
  extraReducers: builder => {
    builder
      .addCase(fetchWeatherData.pending, state => {
        state.loading = 'pending';
        state.error = false;
        state.weatherData = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeatherData.rejected, state => {
        state.loading = 'failed';
        state.error = true;
      });
  },
});

export const {} = weatherSlice.actions;
export default weatherSlice.reducer;
