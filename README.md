# Password-Generator
Password Generator is a web app that creates strong, secure passwords. Users can set length, include uppercase, lowercase, numbers, and symbols. It shows password strength visually and lets you copy with one click. Built with HTML, CSS, JavaScript, and Font Awesome for icons.


Features

Generate random passwords of desired length.

Include uppercase letters, lowercase letters, numbers, and symbols.

Password strength indicator:

Weak 🔴

Medium 🟡

Strong 🟢

Copy password to clipboard with a single click.

Responsive and visually appealing UI using CSS and Font Awesome icons.


Technologies Used

HTML5 – Structure of the web page.

CSS3 – Styling and animations.

JavaScript (ES6) – Logic for password generation and interactivity.

Font Awesome – Icons for copy button and generate key button.

Code Explanation

Password Generation Logic:

Combines selected character sets based on checkboxes.

Generates a password of the desired length randomly.

Password Strength Feedback:

Shows weak, medium, or strong based on the number of selected character sets.

Visual feedback is displayed via a colored bar.

Copy to Clipboard:

Uses navigator.clipboard.writeText() to copy the generated password.

Changes the icon to a checkmark briefly after copying.
