import { useState, useCallback } from 'react';
import Navbar from './../components/Navbar';
import ShortenForm from './../components/ShortenForm';
import DashboardStats from '../components/DashboardStats';
import UrlList from './../components/UrlList';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUrlCreated = useCallback(() => {
  setRefreshKey((prev) => prev + 1);
}, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ShortenForm onSuccess={handleUrlCreated} />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardStats />
      </div>

      {/* URL List Section */}
      <div id="urls" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UrlList refresh={refreshKey} />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">SnapLink</h3>
              <p className="text-sm text-slate-500">
                Fast, secure URL shortening built with Spring Boot & React.
              </p>
            </div>

            <p className="text-sm text-slate-600">
              Crafted with ❤️ by{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Aman Pratap Singh
              </span>
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                URL Shortening
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Analytics
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                QR Codes
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}