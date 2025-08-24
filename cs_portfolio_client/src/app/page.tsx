'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import '@/styles/pages.css';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        router.replace('/home');
      } else {
        router.replace('/login');
      }
    }
  }, [isAuthenticated, loading, router]);

  return (
    <div className="main-page-container">
      <div className="main-page-content">
        <h1 className="main-page-title">
          {loading ? 'Loading...' : 'Redirecting...'}
        </h1>
        <div className="main-page-spinner"></div>
      </div>
    </div>
  );
}
