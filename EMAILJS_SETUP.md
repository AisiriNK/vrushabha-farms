# EmailJS Template Setup Guide

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (starts with `service_`)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Name it: `contact_form_template`
4. Use the template below:

---

## Email Template Content

**Template Name:** `contact_form_template`

### Email Subject:
```
New Contact Form Submission from {{user_name}}
```

### Email Content (HTML):
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
        .header { background-color: #5a7a2e; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: white; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
        .label { font-weight: bold; color: #5a7a2e; margin-bottom: 5px; }
        .value { color: #555; }
        .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>From Vrushabha Farms Website</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">{{user_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">{{user_email}}</div>
            </div>
            
            <div class="field">
                <div class="label">Phone:</div>
                <div class="value">{{user_phone}}</div>
            </div>
            
            <div class="field">
                <div class="label">Message:</div>
                <div class="value">{{message}}</div>
            </div>
            
            <div class="footer">
                <p>This is an automated email from Vrushabha Farms contact form.</p>
                <p>Received on: {{date}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## Step 4: Template Variables

Your contact form sends these variables (from `Contact.tsx`):
- `user_name` - Customer's name
- `user_email` - Customer's email
- `user_phone` - Customer's phone (optional)
- `message` - Customer's message

Use `{{variable_name}}` in your template to insert these values.

---

## Step 5: Get Your Template ID

1. After creating the template, click on it to view details
2. Copy the **Template ID** (starts with `template_`)
3. Add it to your `.env.local`:

```env
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxxx
```

---

## Step 6: Get Your Public Key

1. Go to **Account** settings
2. Look for **Public Key** section
3. Copy it
4. Add it to your `.env.local`:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

---

## Step 7: Test Your Template

1. Fill out the contact form on your website
2. Check your email inbox for the test message
3. Adjust the template styling if needed

---

## Troubleshooting

**Not receiving emails?**
- Verify Service ID, Template ID, and Public Key are correct
- Check spam/junk folder
- Ensure your email service is properly connected in EmailJS

**Variables not showing?**
- Make sure field names in the form match template variables exactly
- Use `{{variable_name}}` format (with double curly braces)

---

## Complete `.env.local` Example

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_WHATSAPP_NUMBER=919999999999999
VITE_RAZORPAY_KEY_ID=rzp_test_1DP5mmOlF5G5ag
```
