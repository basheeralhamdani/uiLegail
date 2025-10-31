import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const Sidebar = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <aside className={`w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col flex-shrink-0 ${className}`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          LexiFlow AI
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Legal Automation Suite
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        <NavLink
          to="/"
          className="flex items-center px-4 py-2 rounded-md"
          activeClassName="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold"
        >
          <svg
            className="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Dashboard
        </NavLink>

        <NavLink
          to="/clients"
          className="flex items-center px-4 py-2 rounded-md"
          activeClassName="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold"
        >
          <svg
            className="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Clients
        </NavLink>

        <NavLink
          to="/templates"
          className="flex items-center px-4 py-2 rounded-md"
          activeClassName="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold"
        >
          <svg
            className="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Templates
        </NavLink>
      </nav>

      {/* Footer / Theme toggle */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <button
          id="theme-toggle"
          type="button"
          onClick={toggleTheme}
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5 mb-4 w-full text-left flex items-center"
        >
          {theme === 'dark' ? (
            <svg
              id="theme-toggle-sun"
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 5.05A1 1 0 006.465 3.636l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM3 11a1 1 0 100-2H2a1 1 0 100 2h1zM8 16a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
              ></path>
            </svg>
          ) : (
            <svg
              id="theme-toggle-moon"
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>
          )}
          <span>Toggle Theme</span>
        </button>

        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i.pravatar.cc/150?u=attorney"
            alt="Attorney Avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Jane Doe, Esq.
            </p>
            <button
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >Settings</button
            >
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;