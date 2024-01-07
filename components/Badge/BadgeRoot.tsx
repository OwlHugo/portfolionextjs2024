'use client'
export function BadgeRoot({ children, className = '' }) {
    return <div className={`flex my-2 ${className}`}>{children}</div>;
  }