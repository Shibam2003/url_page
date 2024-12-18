import React from "react";
import Url_encoding from "./components/url_encoding";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <header className="w-full bg-white shadow-md">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="text-xl font-bold">Spam Analyser</div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              Shibam Chakraborty
            </button>
          </nav>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 leading-tight mb-4">
            URL Encoding and Decoding: Simplify <br /> Data Transmission, Ensure
            Accuracy
          </h1>
          <p className="text-gray-600 text-center max-w-xl mb-8">
            Learn how URL encoding and decoding play a vital role in secure and
            accurate data transmission. Our in-depth guide explains the process
            of encoding special characters, decoding URLs, and their
            significance in ensuring seamless communication between servers and
            browsers. Stay informed and enhance your web development or
            cybersecurity skills today!
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600">
            User Guidelines
          </button>
        </main>
      </div>
      <Url_encoding />
    </>
  );
};

export default App;
