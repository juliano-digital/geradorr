import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    ...pathnames.map((path, index) => {
      const fullPath = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
      return { label, path: fullPath };
    }),
  ];

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-bg/50 border-b border-ice/5 px-5 sm:px-8 md:px-10 lg:px-16 py-3">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={breadcrumb.path} className="flex items-center gap-2">
                {index > 0 && <ChevronRight size={14} className="text-ice/30" />}
                
                {isLast ? (
                  <span className="text-ice/70 font-medium">
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    to={breadcrumb.path}
                    className="text-ice/50 hover:text-volt transition-colors duration-200 flex items-center gap-1"
                  >
                    {index === 0 && <Home size={14} />}
                    {breadcrumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
