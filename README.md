# fireBaseTask

# Firebase CRUD Operations

This project provides a simple API to interact with Firebase Firestore for performing CRUD (Create, Read, Update, Delete) operations on user data. The project uses Firebase as the database, and the API is built with Node.js, Express, and Firebase SDK.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://npmjs.com/) (comes with Node.js)

## Installation

1. Clone this repository to your local machine:

   git clone https://github.com/your-username/firebase-crud-operations.git
   cd firebase-crud-operations

Install the required dependencies:
npm install

Configure your Firebase credentials in the project:

Create a .env file in the root directory of the project and add the following:

FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id

You can get these credentials from your Firebase Console.

Once you have configured the .env file, you can start the server using:
npm run dev
This will start the server with nodemon and auto-reload on file changes.
API Endpoints

Here are the available API endpoints for managing users in Firebase Firestore:

1. Create a User
Endpoint: POST /users
Description: Creates a new user in the Firestore collection.
Request Body: The data of the user you want to create (e.g., name, email).
Example:

{
  "name": "John Doe",
  "email": "john.doe@example.com"
}

2. Get All Users
Endpoint: GET /users
Description: Fetches all the users from the Firestore collection.
Response:
{
  "status": 1,
  "msg": "Data fetched successfully",
  "data": [
    {
      "id": "document_id_1",
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    ...
  ]
}

3. Update a User
Endpoint: PUT /users
Description: Updates an existing user based on the provided id.
Request Body:
id: The document ID of the user to be updated.
Other fields to update (e.g., name, email).
Example:

{
  "id": "document_id_1",
  "name": "John Updated",
  "email": "john.updated@example.com"
}

4. Delete a User
Endpoint: DELETE /users
Description: Deletes a user from Firestore based on the provided id.
Request Body:
id: The document ID of the user to be deleted.
Example:

{
  "id": "document_id_1"
}

