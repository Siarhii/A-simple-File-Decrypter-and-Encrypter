# 🚀 File Encryption and Decryption App

![GitHub stars](https://img.shields.io/github/stars/your-username/your-repo-name?style=social)  
![License](https://img.shields.io/github/license/your-username/your-repo-name)  
![GitHub issues](https://img.shields.io/github/issues/your-username/your-repo-name)  
![GitHub last commit](https://img.shields.io/github/last-commit/your-username/your-repo-name)

A simple and secure desktop application built with **Wails** (Go + React) for encrypting and decrypting files. Perfect for protecting sensitive data with a user-friendly interface.

---

## 📋 Features

- **🔒 File Encryption**: Encrypt one or more files with a password.
- **🔓 File Decryption**: Decrypt files using the correct password.
- **🖥️ Cross-Platform**: Works on Windows, macOS, and Linux.
- **🎨 Clean UI**: Built with React for a modern and responsive experience.

---

## 🛠️ Technologies Used

- **Frontend**: React (with React Router for navigation)
- **Backend**: Go (for encryption/decryption logic)
- **Framework**: Wails (for building desktop apps with Go and React)
- **Styling**: Plain CSS

---

## 🎨 Screenshots

### 🔐 Encrypt Page

![Encrypt Page Screenshot](SS/encryptSS.png)

### 🔓 Decrypt Page

![Decrypt Page Screenshot](SS/decryptSS.png)

---

## 🛠️ Installation

### Option 1: Precompiled Binary

Download the executable: **[file-encryptor.exe](./build/bin/Desktop.exe)**

### Option 2: Build From Source

Follow these steps to clone and build the app locally:

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project folder
cd your-repo-name

# Install frontend dependencies
cd frontend
npm install

# Build the app (requires Go and Wails)
wails build

# Run the application
./Desktop.exe

💡 Usage
🔐 Encrypt Files
Open the app and navigate to the Encrypt tab.

Enter a password.

Select one or more files to encrypt.

Click Encrypt Files to start the process.

🔓 Decrypt Files
Open the app and navigate to the Decrypt tab.

Enter the password used during encryption.

Select the encrypted file.

Choose an output directory for the decrypted files.

Click Decrypt Files to start the process.

🚧 Roadmap and Progress
✅ Working encryption and decryption functionality

✅ Clean and responsive UI

✅ Cross-platform support

⬜ Add file compression before encryption

⬜ Implement advanced encryption algorithms

⬜ Add cloud storage integration

🛡️ Security
Password Protection: Files are encrypted with a user-provided password.

Local Processing: All encryption/decryption happens locally on your machine.

👥 Contributors
Your Name - Developer

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check the issues page.

🌟 Show Your Support
If you like this project, give it a ⭐️ and share it with others!

Recent Updates:

Added file encryption and decryption functionality

Improved UI for better user experience

Cross-platform support for Windows, macOS, and Linux
```
