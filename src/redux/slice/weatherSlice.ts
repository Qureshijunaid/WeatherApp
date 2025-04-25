import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeatherForecast } from '../../services/weatherService';

interface InitialState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: boolean;
  weatherData: any;
}

const initialState: InitialState = {
  loading: 'idle',
  error: false,
  weatherData: null,
};

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await getWeatherForecast(city);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch weather data');
    }
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
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
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = true;
      });
  },
});

export default weatherSlice.reducer;