import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        {/* Header component can be included here */}
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer>
        {/* Footer component can be included here */}
      </footer>
    </div>
  );
};

export default Layout;