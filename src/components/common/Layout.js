import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { SidebarContext } from '../../contexts/SidebarContext';
import NotificationsPanel from '../features/notifications/NotificationsPanel';
import { AuthContext } from '../../contexts/AuthContext';

const Layout = ({ children }) => {
  const { isSidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (location.pathname.startsWith('/case-ai-canvas') || location.pathname.startsWith('/case-review')) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(!mobile);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, [location.pathname, setSidebarVisible]);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <div className="flex h-screen bg-background-color dark:bg-dark-background-color">
      {/* Static sidebar for desktop */}
      <div className={`hidden md:flex flex-shrink-0 ${isSidebarVisible ? 'w-64' : 'w-0'} transition-all duration-300`}>
        <Sidebar className="w-64" />
      </div>

      {/* Mobile sidebar with overlay */}
      {isMobile && isSidebarVisible && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleSidebar}></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-900">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Close sidebar</span>
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            {isMobile && (
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 mr-4"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
            )}
            {/* Global Search Bar Placeholder */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for clients, matters, documents..."
                className="w-full md:w-96 p-2 pl-10 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative">
            <button
              type="button"
              className="p-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 mr-4"
              onClick={toggleNotifications}
            >
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a1 1 0 00-2 0v.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <NotificationsPanel isOpen={isNotificationsOpen} onClose={toggleNotifications} />
            {/* Auth buttons/profile */}
            <AuthControls />
          </div>
        </header>
        <main className={`flex-1 overflow-y-auto ${location.pathname === '/case-ai-canvas' || location.pathname.startsWith('/client-intake') ? 'p-0' : 'p-8'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

const AuthControls = () => {
  const { user, logout } = useContext(AuthContext);
  if (user) {
    return (
      <div className="flex items-center space-x-3">
        <div className="text-sm">{user.name || user.email}</div>
        <button className="px-3 py-1 border rounded text-sm" onClick={logout}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-3">
      <Link to="/login" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Sign in</Link>
      <Link to="/signup" className="px-3 py-1 border rounded text-sm">Sign up</Link>
    </div>
  );
};
