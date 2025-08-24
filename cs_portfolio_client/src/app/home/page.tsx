import ProtectedRoute from '@/components/ProtectedRoute';

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            HomePage
          </h1>
        </div>
      </div>
    </ProtectedRoute>
  );
}
