## Getting Started To Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Getting Started To API

## Usage

Running JSON Server Locally
This project uses JSON Server to simulate a local REST API. Follow these steps to run it:

Make sure you are in the project folder in your terminal.

Run the following command to start JSON Server and provide your JSON as the database.

```bash
npx json-server --watch db.json --port 3001
```

## Example Data
The db.json file contains example data in JSON format that is used in the application. The data represents a list of users with their details.
```bash
{
  "users": [
    {
      "id": 1,
      "name": "Carlos Martinez",
      "gender": "Male",
      "country": "Mexico",
      "state": "CDMX",
      "avatar": "avatar_1"
    },
    // ... other users ...
  ]
}
```
