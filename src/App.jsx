import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let chars = "";
    if (includeUpper) chars += upper;
    if (includeLower) chars += lower;
    if (includeNumber) chars += numbers;
    if (includeSymbol) chars += symbols;

    if (!chars) {
      alert("Please select at least one character type.");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * chars.length);
      result += chars[randIndex];
    }

    setPassword(result);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
        🔐 Password Generator
      </h2>

      {/* Password Length */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password Length: <span className="font-bold text-blue-600">{length}</span>
        </label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
      </div>

      {/* Character Options */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
            id="upper"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="upper" className="ml-2 text-sm text-gray-700">
            Include Uppercase
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
            id="lower"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="lower" className="ml-2 text-sm text-gray-700">
            Include Lowercase
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumber}
            onChange={() => setIncludeNumber(!includeNumber)}
            id="number"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="number" className="ml-2 text-sm text-gray-700">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeSymbol}
            onChange={() => setIncludeSymbol(!includeSymbol)}
            id="symbol"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="symbol" className="ml-2 text-sm text-gray-700">
            Include Symbols
          </label>
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Generate Password
      </button>

      {/* Output Field */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Generated Password
        </label>
        <input
          type="text"
          value={password}
          readOnly
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100 text-gray-800"
          placeholder="Your password will appear here"
        />
        <button
          onClick={copyToClipboard}
          className="mt-2 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900 text-sm"
        >
          Copy to Clipboard
        </button>
      </div>
    </div>

   
  );
};

export default PasswordGenerator;
