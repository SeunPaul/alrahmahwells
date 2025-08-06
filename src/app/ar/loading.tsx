export default function ArabicLoading() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-light to-secondary-light flex items-center justify-center relative overflow-hidden"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-primary-dark rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="mb-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white/30 rounded-full"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">
            جاري تحميل آبار الرحمة
          </h2>
          <p className="text-white/80 text-sm">
            نحضر المياه النظيفة للمجتمعات...
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}
