import {fetchWeatherData, weatherSlice} from '../weatherSlice';

describe('weatherSlice', () => {
  it('should set loading state when fetchWeatherData is pending', () => {
    const state = weatherSlice.reducer(undefined, fetchWeatherData.pending());
    expect(state.loading).toBe('pending');
  });

  it('should set weatherData when fetchWeatherData is fulfilled', () => {
    const payload = {current: {temp_c: 20}, location: {name: 'Paris'}};
    const state = weatherSlice.reducer(
      undefined,
      fetchWeatherData.fulfilled(payload, 'weather', 'Paris'),
    );

    expect(state.weatherData).toEqual(payload);
    expect(state.loading).toBe('succeeded');
  });

  it('should set error state when fetchWeatherData is rejected', () => {
    const state = weatherSlice.reducer(undefined, fetchWeatherData.rejected());
    expect(state.loading).toBe('failed');
    expect(state.error).toBe(true);
  });
});
