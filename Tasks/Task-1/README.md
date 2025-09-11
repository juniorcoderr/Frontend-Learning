# 🌗 Theme Toggle Page (Light & Dark Mode)

This is a simple responsive webpage with a **theme toggle** feature using only **HTML** and **CSS** — no JavaScript used!

## ✅ Features

- 🌞 Light Mode & 🌙 Dark Mode toggle using a checkbox
- Responsive layout with three sections:
  - Left Sidebar
  - Main Content
  - Right Sidebar
- Google Fonts (Roboto)
- CSS Variables for easy theme switching
- Pure CSS solution using `:checked` pseudo-selector
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

- A hidden `<input type="checkbox">` is used to toggle themes.
- When checked, it activates dark mode by updating CSS variables.
- CSS variables control background and text colors across the layout.
- Layout is handled using `display: flex` and made responsive with media queries.

## 📱 Responsive Design

- Desktop: 3-column layout using Flexbox
- Mobile: Stacks into a single column using media queries

## 🛠️ Built With

- HTML5
- CSS3 (with custom properties/variables)
- Google Fonts (Roboto)

## 🙌 Credits

Made by Vinayak Yadav (juniorcoderr)
