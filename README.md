# super-ngs
Full-stack portfolio website

## Technologies
- Angular 18.2.0
- Express 5.1.0
- Firebase (Hosting, App Hosting, Real-Time Database)

## Setup Instructions

### Install Node and NPM
* Install node v22

### Install angular CLI
* Install angular CLI v18 globally

### Create a new firebase project
* Create a new firebase project using the console or command-line
* Initialize Hosting, App Hosting, Realtime Database, and optionally App Check
* Set App Hosting to initialize from super-ngs-backend directory

### Add a custom domain
* Procure your custom domain using a service like SquareSpace
* Link firebase hosting to the custom domain

### Setup MailerSend
* Create a new MailerSend account
* Setup the domain information
* Have your domain verified and join the Hobby plan

### Generate keys
* Generate a new Google Cloud service worker key from the console
* Generate a new MailerSend API key from the website

### Set secrets in Google Cloud console using SecretsManager
* Set `API_KEY` secret  to the generated ApiKey for your app
* Set `SERVICE_ACCOUNT_KEY` secret to a generated Service Account Key from Google Cloud Console
* Set `MAILER_SEND_KEY` secret to a generated MailerSend API key
* (Optional) Set Google Cloud Secret `SITE_KEY` to the public site key (See reCAPTCHA)

### reCAPTCHA (Optional)
* Generate a reCAPTCHA key pair through Google Console (site and secret)
* Register backend app with reCAPTCHA using secret key

### Setup Database
* Create `configuration` table
* Set `configuration.email-from` to the email to use for sending with MailerSend
* Set `configuration.email-name` to your name or optional placeholder name
* Set `configuration.email-to` to your email address
* Create `public` table
* Set `public.bio` to a string biographical description of you
* Set `public.headshot` to a url of the headshot image you want to use
* Set `public.headline` to a json object of the form `{name: string, title: string, linkedin: string, github: string}`
* Set `public.test` to a test message to use
* Fill in `experiences`, `projects`, and `skills` tables

### Setup frontend environments
* Create a `environment.ts`, `environment.dev.ts`, and `environment.prd.ts` in the `src/app/environments` folder
* Set API_URL environment variable to point to where your backend is being hosted in App Hosting or localhost

### Build the app
* Use `ng build --configuration=production` to generate a production build

### Upload to firebase
* If configured, firebase will automatically deploy from a git push to a specified deploy branch
* If not configured, use `firebase deploy` command