# Deploying to Render

This guide provides step-by-step instructions for deploying the Shree Raga SWAAD GHAR application on Render.com.

## Prerequisites

1. A [Render](https://render.com) account
2. Your code pushed to GitHub (already completed on the `deployment` branch)
3. MongoDB Atlas account with a database set up
4. EmailJS account with templates configured

## Deployment Steps

### 1. Deploy Using Render Blueprint (Recommended)

The easiest way to deploy both the frontend and backend is using the Render Blueprint feature with the `render.yaml` file:

1. Log in to your [Render Dashboard](https://dashboard.render.com/)
2. Click on "New" and select "Blueprint"
3. Connect to your GitHub repository if not already connected
4. Select the `shanker-18/Shree-Raga-SWAAD-GHAR` repository
5. Choose the `deployment` branch
6. Render will detect the `render.yaml` file and show the services to be created
7. Click "Apply" to create both services
8. Set up the environment variables as described in `RENDER_ENV_SETUP.md`

### 2. Manual Deployment (Alternative)

If you prefer to deploy the services manually:

#### Backend API Service

1. Log in to your [Render Dashboard](https://dashboard.render.com/)
2. Click on "New" and select "Web Service"
3. Connect to your GitHub repository
4. Configure the service:
   - **Name**: `shree-raga-swaad-ghar-api`
   - **Environment**: `Node`
   - **Region**: Choose a region close to your users
   - **Branch**: `deployment`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free (or choose a paid plan for production)
5. Click "Create Web Service"
6. Set up the environment variables as described in `RENDER_ENV_SETUP.md`

#### Frontend Service

1. In your Render Dashboard, click on "New" and select "Static Site"
2. Connect to your GitHub repository
3. Configure the service:
   - **Name**: `shree-raga-swaad-ghar-frontend`
   - **Region**: Choose the same region as your backend
   - **Branch**: `deployment`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Add Environment Variable**: `VITE_API_URL` with the URL of your backend service
4. Click "Create Static Site"

## Monitoring Deployment

1. After creating the services, Render will automatically start the deployment process
2. You can monitor the deployment progress in the "Events" tab of each service
3. Check for any build or runtime errors in the logs

## Testing the Deployment

Once both services are deployed:

1. Visit your frontend URL (e.g., `https://shree-raga-swaad-ghar-frontend.onrender.com`)
2. Test the following functionality:
   - Browse products and categories
   - Add items to cart
   - Complete the checkout process
   - Verify that order confirmation emails are sent

## Troubleshooting

### Common Issues

1. **Backend API not accessible from frontend**:
   - Check that the `VITE_API_URL` is correctly set in the frontend service
   - Verify that the backend service is running
   - Check for CORS issues in the browser console

2. **MongoDB connection errors**:
   - Verify that the `MONGODB_URI` is correctly set
   - Ensure that your MongoDB Atlas cluster is accessible from Render
   - Check if you need to whitelist Render's IP addresses in MongoDB Atlas

3. **Email sending failures**:
   - Verify all EmailJS environment variables are correctly set
   - Check the backend logs for any email-related errors
   - Test the email functionality using the `test-email.js` script locally

4. **Build failures**:
   - Check the build logs for errors
   - Ensure all dependencies are correctly specified in `package.json`
   - Verify that the build commands are correct

### Getting Help

If you encounter issues that you cannot resolve:

1. Check the [Render documentation](https://render.com/docs)
2. Review the logs in the Render dashboard
3. Contact Render support through their help center

## Post-Deployment

After successful deployment:

1. Set up a custom domain (optional)
2. Configure SSL certificates (automatically handled by Render)
3. Set up monitoring and alerts
4. Consider upgrading to paid plans for production use

## Updating Your Application

To update your application after making changes:

1. Push your changes to the `deployment` branch
2. Render will automatically detect the changes and redeploy
3. Monitor the deployment process in the Render dashboard

## Conclusion

Your Shree Raga SWAAD GHAR application should now be successfully deployed on Render. The frontend and backend services are connected, and users can place orders with email notifications being sent to both the warehouse and customers.