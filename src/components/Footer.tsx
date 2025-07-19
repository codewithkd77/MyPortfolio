
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-lg font-bold">
              Kuldeepsinh<span className="text-primary">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Android Developer & DevOps Enthusiast
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>© {year} Kuldeepsinh Rathod. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
