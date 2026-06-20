import React from 'react';

export default function AscendText({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`animate-ascend ${className}`}>{children}</div>;
}
