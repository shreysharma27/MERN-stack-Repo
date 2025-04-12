import React, { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState("");

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold mb-2">1. TextUpdater</h2>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded w-full"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-lg font-semibold">You typed: {text}</p>
    </div>
  );
}

// 2. TextInputForm Component
function TextInputForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", input);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold mb-2">2. Form Submit</h2>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

// 3. UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="max-w-sm p-4 bg-white rounded shadow-md border border-gray-200 mb-4">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

// 4. CustomButton Component
function CustomButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold mb-2">4. Custom Button</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
}

// 5. LoginForm Component
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md p-4 border rounded shadow bg-gray-50 mb-4">
      <h2 className="text-xl font-bold mb-4">5. Login Form</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          className="w-full border border-gray-300 p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}

// App Component to render all above
export default function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">
      <TextUpdater />
      <TextInputForm />
      <UserCard name="Jane Doe" email="jane@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}
