import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const NavItem = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-primary-color text-white'
          : 'text-text-color-light hover:bg-gray-100 dark:hover:bg-gray-800'
      }`
    }
  >
    {icon}
    {children}
  </NavLink>
);

const Sidebar = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const iconClasses = "h-6 w-6 mr-3";

  const dashboardIcon = (
    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );

  const clientsIcon = (
    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const templatesIcon = (
    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const settingsIcon = (
      <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
  );

  return (
    <aside className={`w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col flex-shrink-0 ${className}`}>
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Legail AI
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Legal Automation Suite
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        <NavItem to="/" icon={dashboardIcon}>Dashboard</NavItem>
        <NavItem to="/clients" icon={clientsIcon}>Clients</NavItem>
        <NavItem to="/templates" icon={templatesIcon}>Templates</NavItem>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
        <NavItem to="/settings" icon={settingsIcon}>Settings</NavItem>
        
        <button
          id="theme-toggle"
          type="button"
          onClick={toggleTheme}
          className="text-text-color-light hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none rounded-lg text-sm p-2.5 w-full text-left flex items-center"
        >
          {theme === 'dark' ? (
            <svg id="theme-toggle-sun" data-testid="theme-toggle-sun" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 5.05A1 1 0 006.465 3.636l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM3 11a1 1 0 100-2H2a1 1 0 100 2h1zM8 16a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
            </svg>
          ) : (
            <svg id="theme-toggle-moon" data-testid="theme-toggle-moon" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          )}
          <span>Toggle Theme</span>
        </button>

        <div className="flex items-center px-2.5">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i.pravatar.cc/150?u=attorney"
            alt="Attorney Avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Jane Doe, Esq.
            </p>
            <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View Profile</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;