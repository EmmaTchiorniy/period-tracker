import { useEffect, useState } from "react";


interface QuoteRotatorProps {
  quotes: string[];
}

export default function QuoteRotator({ quotes }: QuoteRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 15000); 

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
      <div className="p-4 max-w-xs text-center rounded-lg"
           style={{ backgroundColor: "#f5f5f5", color: "#333", borderRadius: "10px", height: "80px", width: "100%", fontSize: "11px", paddingTop: '36px', textAlign: 'right' }}>
        <p>{quotes[currentIndex]}</p>
      </div>
  );
}