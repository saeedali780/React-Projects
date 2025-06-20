# 🍽️ Foodie - Recipe Discovery Platform

A modern, responsive web application for discovering and exploring delicious recipes from around the world. Built with React, Vite, and powered by the Spoonacular API.

![Foodie App](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple?style=for-the-badge&logo=vite)
![API](https://img.shields.io/badge/Spoonacular-API-orange?style=for-the-badge)

## ✨ Features

### 🎯 Core Functionality
- **Recipe Search**: Search thousands of recipes with real-time results
- **Category Browsing**: Explore recipes by meal type (Breakfast, Lunch, Dinner, Desserts, Drinks)
- **Cuisine Categories**: Browse recipes by world cuisines (Italian, Indian, Chinese, etc.)
- **Recipe Details**: View detailed recipe information, ingredients, and instructions
- **Responsive Design**: Perfect experience on desktop, tablet, and mobile devices

### 🌙 Dark/Light Mode
- **Theme Toggle**: Switch between light and dark themes with a single click
- **Persistent Preference**: Your theme choice is saved automatically
- **System Preference**: Automatically detects your system theme preference
- **Smooth Transitions**: Elegant animations when switching themes

### 🎨 Dynamic Banner
- **Slideshow**: Rotating recipe images every 2 seconds
- **Dynamic Titles**: Recipe titles change with each image
- **API Integration**: Real recipe images from Spoonacular API
- **Smooth Transitions**: Fade effects for elegant image switching

### 👥 Team Section
- **Personal Photos**: Real team member photos in the About section
- **Professional Layout**: Clean, modern team presentation
- **Responsive Grid**: Adapts to different screen sizes

## 🚀 Technologies Used

- **Frontend**: React 18.2.0, Vite 5.0.0
- **Styling**: CSS3 with CSS Variables for theming
- **API**: Spoonacular Recipe API
- **Routing**: React Router DOM
- **Icons**: Font Awesome 6.0.0
- **State Management**: React Context API
- **Build Tool**: Vite with HMR

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Food-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API Key**
   - Get your free API key from [Spoonacular](https://spoonacular.com/food-api)
   - Update the `API_KEY` constant in the components that use it:
     - `src/components/Banner.jsx`
     - `src/components/Categories.jsx`
     - `src/components/Breakfast.jsx`
     - `src/components/Lunch.jsx`
     - `src/components/Dinner.jsx`
     - `src/components/Desserts.jsx`
     - `src/components/Drinks.jsx`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Enjoy exploring delicious recipes!

## 📁 Project Structure

```
Food-App/
├── public/
│   ├── assets/
│   │   ├── mypic.png          # CEO photo
│   │   ├── hanzala.jpeg       # Head Chef photo
│   │   └── hamza.jpeg         # Content Director photo
│   └── favicon.svg            # Custom food-themed favicon
├── src/
│   ├── components/
│   │   ├── About.jsx          # About page with team section
│   │   ├── Banner.jsx         # Dynamic banner with slideshow
│   │   ├── Categories.jsx     # Cuisine categories
│   │   ├── Breakfast.jsx      # Breakfast recipes
│   │   ├── Lunch.jsx          # Lunch recipes
│   │   ├── Dinner.jsx         # Dinner recipes
│   │   ├── Desserts.jsx       # Dessert recipes
│   │   ├── Drinks.jsx         # Drink recipes
│   │   ├── Footer.jsx         # Footer with category links
│   │   ├── Navbar.jsx         # Navigation with theme toggle
│   │   ├── ThemeToggle.jsx    # Dark/light mode toggle
│   │   └── ...                # Other components
│   ├── context/
│   │   └── ThemeContext.jsx   # Theme management
│   ├── styles/
│   │   └── theme.css          # Global theme variables
│   ├── App.jsx                # Main app component
│   └── main.jsx               # App entry point
└── package.json
```

## 🎯 Key Features Explained

### Dynamic Banner System
- Fetches 10 random recipes from Spoonacular API
- Displays images in a 2-second slideshow
- Shows corresponding recipe titles
- Smooth fade transitions between images

### Category Pages
- **Breakfast**: Morning meal recipes
- **Lunch**: Midday meal recipes  
- **Dinner**: Evening meal recipes
- **Desserts**: Sweet treats and desserts
- **Drinks**: Beverages and cocktails

### Theme System
- CSS Variables for consistent theming
- Context API for state management
- Local storage for preference persistence
- System preference detection

## 🔧 Available Scripts

- `npm run dev` - Start development server
-npm run build `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Team

- **Saeed Ali** - Founder & CEO
- **Hanzala Memon** - Head Chef
- **Hamza Raza** - Content Director

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need support, please open an issue in the repository.

---

**Made with ❤️ by the Foodie Team**
