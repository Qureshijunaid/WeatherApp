jest.mock('@react-native-community/netinfo', () => {
    return {
      fetch: jest.fn(() => Promise.resolve({ isConnected: true })),
      addEventListener: jest.fn(() => jest.fn()),
    };
  });
  