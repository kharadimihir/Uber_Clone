# Uber Clone

This repository contains the backend implementation of the Uber Clone project, built using Node.js, Express, and MongoDB. The project supports user and rider registration, login, profile management, and logout functionalities.

---

## Features

### For Users:
- **Register User**: Allows new users to register with their first name, last name, email, and password.
- **Login User**: Users can log in with their registered credentials to receive a token for authentication.
- **User Profile**: Fetches the user profile based on the token provided.
- **Logout User**: Invalidates the current token, ensuring secure logout.

### For Riders:
- **Register Rider**: Allows new riders to register with details like full name, email, password, and vehicle information (color, plate, capacity, and vehicle type).
- **Login Rider**: Riders can log in with their registered credentials to receive a token for authentication.
- **Rider Profile**: Fetches the rider profile based on the token provided.
- **Logout Rider**: Invalidates the current token, ensuring secure logout.

---

## Technologies Used
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose for ORM)
- **Authentication**: JWT (JSON Web Tokens) with token blacklisting for added security
- **Validation**: express-validator
- **Password Management**: bcrypt for hashing passwords
- **Environment Variables**: dotenv

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kharadimihir/Uber_Clone.git
   cd Uber_Clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_mongodb_connection_string
   JWT_SECRET_TOKEN=your_jwt_secret
   PORT=your_port_number
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The app will run on `http://localhost:<PORT>`.

---

## API Endpoints

### Users
| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| POST   | `/users/register` | Register a new user         |
| POST   | `/users/login`    | Login an existing user      |
| GET    | `/users/profile`  | Get user profile (auth)     |
| GET    | `/users/logout`   | Logout the user (auth)      |

### Riders
| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| POST   | `/riders/register` | Register a new rider         |
| POST   | `/riders/login`    | Login an existing rider      |
| GET    | `/riders/profile`  | Get rider profile (auth)     |
| GET    | `/riders/logout`   | Logout the rider (auth)      |

---

## Folder Structure

```
Uber_Clone/
├── controllers/      # Controllers for handling logic
├── middlewares/      # Middleware for authentication
├── models/           # MongoDB models (User, Rider, BlacklistingTokens)
├── routes/           # API routes
├── services/         # Service layer for business logic
├── db/               # Database connection
├── .env.example      # Example environment variables
├── app.js            # Express app setup
├── server.js         # Entry point of the application
└── README.md         # Project documentation
```

---

## Additional Notes

- **Token Blacklisting**: Ensures invalidated tokens cannot be reused.
- **Vehicle Information for Riders**: Riders must provide details about their vehicle during registration.
- **Field Validation**: All endpoints are validated using express-validator to ensure data integrity.

---

## Contributions
Contributions are welcome! Please fork this repository and create a pull request with your changes.

---

## License
This project is licensed under the MIT License. Feel free to use it as you wish.

---

## Author
[Mihir Kharadi](https://github.com/kharadimihir)

