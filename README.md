# Steam API Frontend

https://tkalkulator.vercel.app/

## Overview
This repository is the frontend for the Steam API integration. It is built using **Nuxt2** and **VueBootstrap** to provide a smooth user experience while managing users and their game achievements. The application displays the latest games played along with their achievements and provides a dedicated game page showing all achievements, categorized as achieved or not achieved.

## Features
- User authentication and profile management.
- Display of the latest games played with their corresponding achievements.
- Individual game pages listing all achievements, distinguishing between achieved and not achieved.
- Responsive UI built with **VueBootstrap**.
- API integration with Steam for fetching user and game data.
- **Axios** for handling API requests.
- **Notifications** to inform users about updates and achievements.

## Technologies Used
- **Nuxt.js (Nuxt2)** – Vue.js framework for server-side rendering and routing.
- **VueBootstrap** – Bootstrap components for Vue.js to enhance UI.
- **Axios** – For API requests to fetch Steam user and game data.
- **Vuex** – State management for user data and game progress.
- **Notifications** – Integrated to enhance user experience with alerts and messages.

## Project Setup
### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ThiagoFragaK/StFront
   ```
2. Navigate to the project directory:
   ```sh
   cd StFront
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Project
For development:
```sh
npm run dev
```
For production build:
```sh
npm run build
npm run start
```

## Folder Structure
```
steam-api-frontend/
│── components/         # Reusable Vue components
│── layouts/            # Nuxt layouts
│── pages/              # Nuxt pages (User Profile, Game Page, etc.)
│── store/              # Vuex store for state management
│── static/             # Static assets
│── plugins/            # Plugins (e.g., Axios configuration, Notifications)
│── nuxt.config.js      # Nuxt configuration file
│── package.json        # Project dependencies and scripts
```

## API Integration
The application integrates with the **Steam API** to fetch user and game data. Key API endpoints used:
- **Get Owned Games**: Fetches the list of games owned by a user.
- **Get Recently Played Games**: Retrieves the user's most recently played games.
- **Get Player Achievements**: Retrieves achievements for a specific game.

## Contributions
Feel free to contribute by submitting issues or pull requests. Follow the standard Git workflow:
1. Fork the repository
2. Create a new branch
3. Make changes and commit
4. Push to your fork
5. Submit a pull request

## License
This project is licensed under [MIT License](LICENSE).

---
For any questions or support, please open an issue or contact the repository maintainer.

