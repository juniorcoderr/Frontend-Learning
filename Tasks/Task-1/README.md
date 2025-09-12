# 🌗 Theme Toggle Page (Light & Dark Mode)

This is a simple responsive webpage with a **theme toggle** feature using only **HTML** and **CSS** — no JavaScript used!

## ✅ Features

- 🌞 Light Mode & 🌙 Dark Mode and 🖥️ System Theme Detection using pure CSS
- Responsive layout with three sections:
  - Left Sidebar
  - Main Content
  - Right Sidebar
- Automatically adapts to user's system theme preference using prefers-color-scheme
- Manual override using radio buttons (Light / Dark / System)
- Modern CSS (:has() selector) — no JS required
- Google Fonts (Roboto)
- CSS Variables for easy theme switching
- Flexbox layout for desktop view, and column layout on mobile

## 📁 Project Structure

```

project-folder/
│
├── index.html         # Main HTML file
├── style.css          # CSS file with theme toggle logic
└── README.md          # You're reading it!

```

## 🧠 How It Works

- Three hidden `<input type="radio">` buttons are used for theme selection.
- Labels act as clickable buttons to manually switch between Light, Dark, or System mode.
- If "System" is selected, CSS uses the `@media (prefers-color-scheme: dark)` media query to detect the user's OS theme.
- CSS Variables (`--header-bg`, `--text-color`, etc.) define all the theme colors.
- Layout uses Flexbox for multi-column design and adapts with media queries for smaller screens.

## 📱 Responsive Design

- Desktop: 3-column layout using Flexbox
- Mobile: Stacks into a single column using media queries

## 🛠️ Built With

- HTML5
- CSS3 (with custom properties/variables)
- Google Fonts (Roboto)

## 🙌 Credits

Made by Vinayak Yadav (juniorcoderr)
