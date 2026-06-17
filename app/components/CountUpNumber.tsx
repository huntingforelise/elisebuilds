"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type CountUpNumberProps = {
  value: number;
  className?: string;
  duration?: number;
};

export const CountUpNumber = ({
  value,
  className,
  duration = 1500,
}: CountUpNumberProps) => {
  const [currentValue, setCurrentValue] = useState(1);
  const [popKey, setPopKey] = useState(0);
  const hasAnimatedRef = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const timeoutRefs = useRef<Array<number>>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || value <= 1) {
      hasAnimatedRef.current = true;
      return;
    }

    const element = elementRef.current;

    if (!element || hasAnimatedRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        hasAnimatedRef.current = true;
        const stepDelay = duration / (value - 1);

        for (let nextValue = 2; nextValue <= value; nextValue += 1) {
          const timeoutId = window.setTimeout(
            () => {
              setCurrentValue(nextValue);
              setPopKey((key) => key + 1);
            },
            stepDelay * (nextValue - 1),
          );
          timeoutRefs.current.push(timeoutId);
        }
        observer.disconnect();
      },
      { threshold: 0.8 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      timeoutRefs.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutRefs.current = [];
    };
  }, [duration, shouldReduceMotion, value]);

  const displayValue = shouldReduceMotion ? value : currentValue;

  return (
    <span
      key={popKey}
      ref={elementRef}
      className={`count-up-pop inline-block min-w-[1.2ch] text-center ${className ?? ""}`}
    >
      {displayValue}
    </span>
  );
};
