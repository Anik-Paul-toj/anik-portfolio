// EmailJS Configuration
// To set up EmailJS:
// 1. Create account at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the values below

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your EmailJS public key
  SERVICE_ID: 'YOUR_SERVICE_ID',         // Replace with your service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',       // Replace with your template ID
};

// Email template should include these variables:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{subject}} - email subject
// {{message}} - email message
// {{to_email}} - your email (trojanik003@gmail.com)
