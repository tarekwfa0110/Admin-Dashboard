# Admin Dashboard

A modern, feature-rich admin dashboard built with React, TypeScript, and Material-UI.

## Features

- 🎨 Modern and responsive UI with Material-UI
- 📊 Interactive charts and data visualization with Nivo
- 📅 Calendar integration with FullCalendar
- 📱 Responsive design for all screen sizes
- 🔒 Authentication and authorization
- 🌐 RESTful API integration
- 📈 Data grid for efficient data management
- 🎭 Dark/Light theme support
- 🔍 Search functionality
- 📱 Mobile-friendly navigation

## Tech Stack

- React 18
- TypeScript
- Material-UI
- React Query for data fetching
- Zustand for state management
- React Router for navigation
- Axios for API calls
- Vite for build tooling
- Vitest for testing
- ESLint + Prettier for code quality
- Husky + lint-staged for git hooks

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/admin-dashboard.git
   cd admin-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Copy the environment file and update it with your values:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
src/
├── components/        # Reusable components
├── pages/            # Page components
├── services/         # API services
├── store/            # State management
├── hooks/            # Custom hooks
├── utils/            # Utility functions
├── types/            # TypeScript types
├── styles/           # Global styles
└── App.tsx          # Root component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

The project uses Vitest for testing. Run tests with:

```bash
npm test
# or
yarn test
```

## Deployment

The project is configured for deployment on Vercel. Simply push to the main branch to trigger a deployment.

## Code Quality

- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks
- lint-staged for running checks on staged files

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI for the component library
- Nivo for the charting library
- FullCalendar for the calendar component

---

## 🚀 Live Demo

[Visit the live admin dashboard here](<add-your-deployed-link-here>)

---

## 📸 Features

- **Interactive Charts**: Dynamic charts and graphs powered by **Nivo** for clear data visualization.
- **User-Friendly UI**: Built with **MUI** components for a clean and consistent user interface.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Dark/Light Mode**: Toggle between dark and light themes for better user experience.
- **Data Management**: Organized sections for managing users, analytics, and settings.
- **Fast Performance**: Lightweight and optimized for speed using modern React libraries.

---

## 🛠️ Built With

- **React**: Component-based front-end library for building UI.
- **MUI (Material UI)**: Pre-styled React components for consistent design.
- **Nivo Charts**: Interactive and customizable charts for data visualization.
- **Tailwind CSS**: Utility-first CSS framework for responsive and modern styling.
- **React Router**: For smooth page navigation and routing.

---
