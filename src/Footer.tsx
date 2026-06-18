import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-gradient-to-t from-gray-900 to-primary/20 text-center text-sm text-indigo-300">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/share/1AVWidzRfR/ "
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-neutral transition duration-300"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}