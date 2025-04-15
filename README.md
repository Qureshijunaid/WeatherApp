🌤️ Weather App

A sleek and modern React Native Weather Application that allows users to search for real-time weather conditions by city. It features a dark UI, smooth animations, and persistent state management.

🚀 Features
🔍 Search weather by city name

🌡️ View current temperature and weather condition

🌅 Display additional metrics: wind speed, humidity, UV index, sunrise, and sunset

🎨 Beautiful dark theme UI

📦 State persistence using Redux + MMKV

✅ Unit tested with Jest and Testing Library

⚡ Fast and responsive experience with Lottie animations

---

## 📁 Folder Structure

| Folder / File                              | Description                                 |
| ------------------------------------------ | ------------------------------------------- |
| `weatherApp/`                              | Root folder                                 |
| `src/`                                     | Main source folder                          |
| `src/components/`                          | Reusable UI components                      |
| `src/components/ErrorCard.tsx`             | Error display component                     |
| `src/components/LoaderComponent.tsx`       | Lottie loading animation                    |
| `src/components/NoDataInformationCard.tsx` | Message when no data is available           |
| `src/components/SearchBarComponent.tsx`    | Input for city search                       |
| `src/components/WeatherCardComponent.tsx`  | Displays current weather                    |
| `src/screens/`                             | Application screens                         |
| `src/screens/WelcomeScreen.tsx`            | Home screen with search and weather display |
| `src/redux/`                               | Redux-related files                         |
| `src/redux/slice/`                         | Redux slices (actions & reducers)           |
| `src/constant/`                            | Constants like API keys and weather codes   |
| `src/assets/`                              | Images, icons, Lottie animations            |
| `src/theme.ts`                             | Global styling and theme configuration      |
| `tests/`                                   | Jest unit tests for components              |
| `App.tsx`                                  | Entry point of the application              |
| `babel.config.js`                          | Babel compiler configuration                |
| `jest.config.js`                           | Jest testing framework configuration        |

---

🧩 Architecture

This app uses a clean Redux-based architecture:

Redux Toolkit for global state management

redux-persist + MMKV for offline storage and rehydration

Lottie + react-native-reanimated for smooth animations

Axios for weather API integration

TypeScript for improved code quality and type safety

🛠️ Getting Started

---

## 🚀 How to Run the Project

### **1. Clone the Repository**

```sh
 git clone https://github.com/Qureshijunaid/WeatherApp.git
```

```sh
 cd WeatherApp
```

### **2. Install Dependencies**

```sh
yarn install
```

### **3. Replace your weather api key **

Inside the constant file replace weatherAPIKey and baseurl

### **4. Run the Metro Bundler**

```sh
yarn start
```

### **5. Run on an Emulator or Physical Device**

#### **For Android**

```sh
yarn android
```

#### **For iOS**

```sh
yarn ios
```

---

## 🛠️ Running Test Cases

### **1. Run Jest Tests**

```sh
yarn test
```

### **2. Debug Jest Issues**

If there are any test failures, try clearing caches:

```sh
yarn start --reset-cache
yarn jest --clearCache
yarn test
```

---

## 📝 Additional Notes

- This project uses **TypeScript** for type safety.
- Jest and `@testing-library/react-native` are used for unit testing components.
- **react-native-linear-gradient** and **Lottie** provide animations and styling.
- Redux-persist with **MMKV** enables efficient local storage.

---

## 📌 Future Enhancements

- Implement dark mode support
- Add multi-day weather forecast
- Improve test coverage with integration tests

---

## 👨‍💻 Author

**Junaid Qureshi**

Enjoy coding! 🚀
