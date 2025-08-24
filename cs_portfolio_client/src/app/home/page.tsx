import ProtectedRoute from '@/components/ProtectedRoute';
import '@/styles/pages.css';

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div className="home-page-container">
        <div className="home-page-content">
          <h1 className="home-page-title">
            HomePage
          </h1>
        </div>
      </div>
    </ProtectedRoute>
  );
}
