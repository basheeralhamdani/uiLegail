import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Sidebar from './Sidebar';
import { ThemeContext } from '../../contexts/ThemeContext';

// Mock the ThemeContext
const mockToggleTheme = jest.fn();
const mockThemeContextValue = {
  theme: 'light',
  toggleTheme: mockToggleTheme,
};

describe('Sidebar', () => {
  test('renders sidebar with correct title and navigation links', () => {
    render(
      <BrowserRouter>
        <ThemeContext.Provider value={mockThemeContextValue}>
          <Sidebar />
        </ThemeContext.Provider>
      </BrowserRouter>
    );

    // Check if the title is rendered
    expect(screen.getByText('Legail AI')).toBeInTheDocument();
    expect(screen.getByText('Legal Automation Suite')).toBeInTheDocument();

    // Check if navigation links are rendered
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Clients')).toBeInTheDocument();
    expect(screen.getByText('Templates')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();

    // Check if the links have correct href attributes
    expect(screen.getByRole('link', { name: /Dashboard/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Clients/i })).toHaveAttribute('href', '/clients');
    expect(screen.getByRole('link', { name: /Templates/i })).toHaveAttribute('href', '/templates');
    expect(screen.getByRole('link', { name: /Settings/i })).toHaveAttribute('href', '/settings');
  });

  test('toggles theme when the theme toggle button is clicked', async () => {
    render(
      <BrowserRouter>
        <ThemeContext.Provider value={mockThemeContextValue}>
          <Sidebar />
        </ThemeContext.Provider>
      </BrowserRouter>
    );

    const themeToggleButton = screen.getByRole('button', { name: /Toggle Theme/i });
    await userEvent.click(themeToggleButton);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  test('displays moon icon when theme is light', () => {
    render(
      <BrowserRouter>
        <ThemeContext.Provider value={{ ...mockThemeContextValue, theme: 'light' }}>
          <Sidebar />
        </ThemeContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('theme-toggle-moon')).toBeInTheDocument();
    expect(screen.queryByTestId('theme-toggle-sun')).not.toBeInTheDocument();
  });

  test('displays sun icon when theme is dark', () => {
    render(
      <BrowserRouter>
        <ThemeContext.Provider value={{ ...mockThemeContextValue, theme: 'dark' }}>
          <Sidebar />
        </ThemeContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('theme-toggle-sun')).toBeInTheDocument();
    expect(screen.queryByTestId('theme-toggle-moon')).not.toBeInTheDocument();
  });
});
