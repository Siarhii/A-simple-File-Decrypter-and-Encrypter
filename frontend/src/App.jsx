import React, { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <Link to="/" className="nav-button-link">
          <button
            className={`nav-button ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Encrypt
          </button>
        </Link>

        <Link to="/decrypt" className="nav-button-link">
          <button
            className={`nav-button ${
              location.pathname === "/decrypt" ? "active" : ""
            }`}
          >
            Decrypt
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="content-area">
        <Routes>
          <Route path="/" element={<EncryptPage />} />
          <Route path="/decrypt" element={<DecryptPage />} />
        </Routes>
      </div>
    </div>
  );
};

function EncryptPage() {
  const [password, setPassword] = useState("");
  const [files, setFiles] = useState([]);
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleEncryption = async () => {
    if (!password || files.length === 0) {
      setStatus({
        type: "error",
        message: "Please fill in all fields before proceeding",
      });
      return;
    }

    setIsEncrypting(true);
    try {
      const outputDir = await window.go.main.App.GetCurrentDirectory();

      const encryptedFilePath = await window.go.main.App.EncryptFiles(
        files,
        password,
        outputDir
      );

      setStatus({
        type: "success",
        message: `Files successfully encrypted and saved to: ${encryptedFilePath}`,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.toString(),
      });
    } finally {
      setIsEncrypting(false);
    }
  };

  const handleFileSelect = async () => {
    try {
      const selectedFiles = await window.go.main.App.SelectFiles();
      if (selectedFiles) {
        setFiles(selectedFiles);
      }
    } catch (error) {
      console.error("Error selecting files:", error);
      setStatus({
        type: "error",
        message: "Error selecting files",
      });
    }
  };

  return (
    <div className="page-container">
      <h1>Encrypt Files</h1>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="password-input"
        />
      </div>

      <div>
        <label>Files to Encrypt</label>
        <div className="input-group">
          <input
            type="text"
            value={files.join(", ")}
            readOnly
            placeholder="No files selected"
          />
          <button onClick={handleFileSelect}>Browse</button>
        </div>
      </div>

      <button
        className="button"
        onClick={handleEncryption}
        disabled={isEncrypting || !password || files.length === 0}
      >
        {isEncrypting ? "Encrypting..." : "Encrypt Files"}
      </button>

      {status.message && (
        <div className={`status ${status.type}`}>{status.message}</div>
      )}
    </div>
  );
}

function DecryptPage() {
  const [password, setPassword] = useState("");
  const [encryptedFile, setEncryptedFile] = useState("");
  const [outputDir, setOutputDir] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleDecryption = async () => {
    if (!password || !encryptedFile || !outputDir) {
      setStatus({
        type: "error",
        message: "Please fill in all fields before proceeding",
      });
      return;
    }

    setIsDecrypting(true);
    try {
      await window.go.main.App.DecryptAndExtractCapsule(
        encryptedFile,
        outputDir,
        password
      );
      setStatus({
        type: "success",
        message: "Time capsule successfully decrypted!",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.toString(),
      });
    } finally {
      setIsDecrypting(false);
    }
  };

  const handleFileSelect = async () => {
    try {
      const file = await window.go.main.App.SelectEncryptedFile();
      if (file) {
        setEncryptedFile(file);
      }
    } catch (error) {
      console.error("Error selecting file:", error);
      setStatus({
        type: "error",
        message: "Error selecting file",
      });
    }
  };

  const handleDirSelect = async () => {
    try {
      const dir = await window.go.main.App.SelectOutputFolder();
      if (dir) {
        setOutputDir(dir);
      }
    } catch (error) {
      console.error("Error selecting directory:", error);
      setStatus({
        type: "error",
        message: "Error selecting directory",
      });
    }
  };

  return (
    <div className="page-container">
      <h1>Decrypt Files</h1>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="password-input"
        />
      </div>

      <div>
        <label>Encrypted File</label>
        <div className="input-group">
          <input
            type="text"
            value={encryptedFile}
            readOnly
            placeholder="No file selected"
          />
          <button onClick={handleFileSelect}>Browse</button>
        </div>
      </div>

      <div>
        <label>Output Directory</label>
        <div className="input-group">
          <input
            type="text"
            value={outputDir}
            readOnly
            placeholder="No directory selected"
          />
          <button onClick={handleDirSelect}>Browse</button>
        </div>
      </div>

      <button
        className="button"
        onClick={handleDecryption}
        disabled={isDecrypting || !password || !encryptedFile || !outputDir}
      >
        {isDecrypting ? "Decrypting..." : "Decrypt Files"}
      </button>

      {status.message && (
        <div className={`status ${status.type}`}>{status.message}</div>
      )}
    </div>
  );
}

export default App;
