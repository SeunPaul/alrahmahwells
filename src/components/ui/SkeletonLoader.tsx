interface SkeletonLoaderProps {
  type?: "text" | "image" | "card" | "button";
  lines?: number;
  className?: string;
}

export default function SkeletonLoader({
  type = "text",
  lines = 3,
  className = "",
}: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case "text":
        return (
          <div className="space-y-3">
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className={`h-4 bg-gray-200 rounded animate-pulse ${
                  index === 0
                    ? "w-3/4"
                    : index === lines - 1
                    ? "w-1/2"
                    : "w-full"
                }`}
              ></div>
            ))}
          </div>
        );

      case "image":
        return (
          <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
        );

      case "card":
        return (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="space-y-2 mb-4">
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="w-1/3 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        );

      case "button":
        return (
          <div className="w-24 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        );

      default:
        return null;
    }
  };

  return <div className={`${className}`}>{renderSkeleton()}</div>;
}
