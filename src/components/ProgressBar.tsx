import { useEffect, useState } from "react";

interface ProgressBarProps {
  targetProgress?: number;
  label?: string;
}

const ProgressBar = ({ targetProgress = 73, label = "Development Progress" }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(targetProgress);
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetProgress]);

  return (
    <div className="w-full max-w-md mx-auto">
      {label && (
        <div className="text-muted-foreground text-sm mb-2 text-center">
          {label}
        </div>
      )}
      
      <div className="relative">
        {/* Background track */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          {/* Animated progress fill */}
          <div
            className="h-full bg-gradient-orange rounded-full transition-all duration-2000 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-glow opacity-60"></div>
          </div>
        </div>
        
        {/* Progress percentage */}
        <div className="absolute -top-8 text-primary font-bold text-sm cosmic-glow"
             style={{ left: `${Math.max(progress - 5, 0)}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;