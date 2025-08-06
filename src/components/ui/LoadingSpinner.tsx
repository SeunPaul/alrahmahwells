interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  text = "Loading...",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative mb-4">
        <div
          className={`${sizeClasses[size]} border-4 border-primary-light/30 rounded-full`}
        ></div>
        <div
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-primary-light border-t-transparent rounded-full animate-spin`}
        ></div>
      </div>
      {text && (
        <p className={`${textSizes[size]} text-primary-dark font-medium`}>
          {text}
        </p>
      )}
    </div>
  );
}
