import React from 'react';

export const BackgroundGradientAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
      {children}
    </div>
  );
}; 