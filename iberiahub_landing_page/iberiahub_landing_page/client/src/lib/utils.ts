import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define custom keyframes for CSS animations
export const glowPulse = {
  '0%, 100%': { filter: 'drop-shadow(0 0 10px currentColor)' },
  '50%': { filter: 'drop-shadow(0 0 25px currentColor)' }
};

export const fadeIn = {
  '0%': { opacity: '0' },
  '100%': { opacity: '1' }
};

export const glitch = {
  '0%, 100%': { transform: 'translate(0)' },
  '10%': { transform: 'translate(-5px, -5px)' },
  '20%': { transform: 'translate(5px, 5px)' },
  '30%': { transform: 'translate(-5px, 5px)' },
  '40%': { transform: 'translate(5px, -5px)' },
  '50%': { transform: 'translate(0)' }
};

export const float = {
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-20px)' }
};

// Helper for smooth scrolling
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
