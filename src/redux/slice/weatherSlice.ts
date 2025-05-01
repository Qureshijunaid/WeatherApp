import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeatherForecast } from '../../services/weatherService';

interface InitialState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: boolean;
  errorMessage: string | null;
  weatherData: any;
}

const initialState: InitialState = {
  loading: 'idle',
  error: false,
  errorMessage: null,
  weatherData: null,
};

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await getWeatherForecast(city);
      const apiCity = response?.data?.location?.name;

      // Compare lowercase trimmed names
      if (apiCity?.toLowerCase().trim() !== city.toLowerCase().trim()) {
        return rejectWithValue(`Exact match not found for "${city}"`);
      }

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
        state.errorMessage = null;
        state.weatherData = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = false;
        state.errorMessage = null;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = true;
        state.errorMessage = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;