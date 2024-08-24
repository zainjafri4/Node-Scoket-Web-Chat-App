# Web Chat Application with Node.js & Socket.io

This project is a real-time web chat application built with Node.js and Socket.io, designed to facilitate instant messaging between users. It includes essential features such as user authentication, real-time communication, and persistent storage, making it a scalable and secure solution for chat applications.

## Features

- **Real-Time Messaging:** 
  Utilized Socket.io for real-time, bidirectional communication between clients and the server, enabling users to send and receive messages instantly.
  
- **User Authentication:**
  Integrated JWT (JSON Web Tokens) for secure user authentication and authorization, ensuring that only authorized users can access chat functionalities.
  
- **Persistent Storage:** 
  Implemented MongoDB to store chat messages and user data, ensuring reliable data persistence and retrieval.
  
- **Scalability and Performance:** 
  Optimized the application to efficiently handle multiple concurrent connections and large volumes of messages, ensuring seamless performance.

## Technologies Used

- **Node.js:** Backend runtime environment.
- **Express.js:** Web framework for routing and middleware management.
- **Socket.io:** For real-time communication between the client and server.
- **MongoDB:** NoSQL database for data storage and management.
- **JWT:** For secure user authentication and session management.
- **Docker:** Containerization of the application for consistent deployment.
- **Nodemailer:** (If email functionalities are included).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zainjafri4/Node-Socket-Web-Chat-App
   ```

2. Navigate to the project directory:

   ```bash
   cd Node-Socket-Web-Chat-App
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add necessary environment variables (e.g., database connection strings, JWT secret, etc.).

5. Start the application:

   ```bash
   npm start
   ```

6. Access the application at `http://localhost:5000`.

## Usage

- **User Registration & Login:** Register new users and manage secure login with JWT.
- **Real-Time Chat:** Engage in real-time messaging with other authenticated users.
- **Message History:** View previous chat messages stored in MongoDB.

---

## Skills

- **Node.js**
- **JavaScript**
- **MongoDB**
- **Socket.io**
- **API Development**
- **REST APIs**
- **Web Development**
