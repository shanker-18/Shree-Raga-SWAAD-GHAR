# Setting Up Environment Variables in Render

This guide explains how to set up the required environment variables for both the backend API and frontend services in Render.

## Required Environment Variables

### Backend API Service

The following environment variables need to be set for the backend API service (`shree-raga-swaad-ghar-api`):

| Variable | Description | Example |
|----------|-------------|--------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://username:password@cluster.mongodb.net/database` |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | `service_abcdefg` |
| `VITE_EMAILJS_TEMPLATE_WAREHOUSE` | EmailJS warehouse template ID | `template_warehouse_123` |
| `VITE_EMAILJS_TEMPLATE_CUSTOMER` | EmailJS customer template ID | `template_customer_456` |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key | `your_public_key_here` |
| `VITE_WAREHOUSE_EMAIL` | Warehouse email address | `shreeraagaswaadghar@gmail.com` |
| `PORT` | Port for the server to listen on (optional) | `10000` |

### Frontend Service

The following environment variables need to be set for the frontend service (`shree-raga-swaad-ghar-frontend`):

| Variable | Description | Example |
|----------|-------------|--------|
| `VITE_API_URL` | URL of the backend API service | `https://shree-raga-swaad-ghar-api.onrender.com` |

## Setting Up Environment Variables in Render

1. **Log in to your Render account** at [render.com](https://render.com)

2. **For the Backend API Service:**
   - Navigate to your `shree-raga-swaad-ghar-api` service
   - Click on the "Environment" tab
   - Add each environment variable by clicking "Add Environment Variable"
   - Enter the key and value for each variable listed in the Backend API Service table above
   - Click "Save Changes"

3. **For the Frontend Service:**
   - Navigate to your `shree-raga-swaad-ghar-frontend` service
   - Click on the "Environment" tab
   - Add the `VITE_API_URL` environment variable
   - Set its value to the URL of your deployed backend API service
   - Click "Save Changes"

4. **Redeploy Your Services:**
   - After setting up the environment variables, you may need to manually trigger a redeploy
   - Go to the "Manual Deploy" section and click "Deploy latest commit"

## Verifying Environment Variables

To verify that your environment variables are correctly set up:

1. **For the Backend API:**
   - Check the logs in the Render dashboard
   - Look for any error messages related to missing environment variables
   - Test the API endpoints using a tool like Postman or curl

2. **For the Frontend:**
   - Open the deployed frontend in a browser
   - Test the order placement functionality
   - Check the browser console for any error messages

## Troubleshooting

If you encounter issues with environment variables:

1. **Check for typos** in the variable names
2. **Verify the values** are correct and properly formatted
3. **Ensure the backend URL** is accessible from the frontend
4. **Check the logs** in the Render dashboard for any error messages
5. **Redeploy the services** after making changes to environment variables

## Security Considerations

- Environment variables in Render are encrypted at rest and in transit
- Never commit sensitive environment variables to your Git repository
- Consider using Render's secret files feature for more complex configurations