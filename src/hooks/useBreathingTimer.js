import { useState, useEffect, useRef, useCallback } from "react";

const CIRCUMFERENCE = 879.6;

export const useBreathingTimer = (phases) => {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(phases[0].duration * 1000);
  const [isActive, setIsActive] = useState(false);

  const intervalRef = useRef(null);
  const wakeLockRef = useRef(null);
  const TICK_INTERVAL = 50;

  useEffect(() => {
    setCurrentPhaseIndex(0);
    setTimeLeft(phases[0].duration * 1000);
    setIsActive(false);
  }, [phases]);

  useEffect(() => {
    let isMounted = true;
    const requestWakeLock = async () => {
      try {
        if ("wakeLock" in navigator && isActive) {
          wakeLockRef.current = await navigator.wakeLock.request("screen");
          if (!isMounted) {
            wakeLockRef.current.release();
            wakeLockRef.current = null;
          }
        }
      } catch (err) {
        console.warn("Wake lock request failed", err);
      }
    };
    if (isActive) requestWakeLock();
    return () => {
      isMounted = false;
      if (wakeLockRef.current !== null) {
        wakeLockRef.current.release();
        wakeLockRef.current = null;
      }
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - TICK_INTERVAL;
        if (next <= 0) {
          const nextIndex = (currentPhaseIndex + 1) % phases.length;
          setCurrentPhaseIndex(nextIndex);
          return phases[nextIndex].duration * 1000;
        }
        return next;
      });
    }, TICK_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [isActive, currentPhaseIndex, phases]);

  const start = useCallback(() => {
    setCurrentPhaseIndex(0);
    setTimeLeft(phases[0].duration * 1000);
    setIsActive(true);
  }, [phases]);

  const stop = useCallback(() => setIsActive(false), []);

  const restart = useCallback(() => {
    setCurrentPhaseIndex(0);
    setTimeLeft(phases[0].duration * 1000);
    setIsActive(true);
  }, [phases]);

  const currentPhase = phases[currentPhaseIndex] || phases[0];
  const secondsLeft = Math.max(0, Math.ceil(timeLeft / 1000));

  const progress = 1 - timeLeft / (currentPhase.duration * 1000);
  let offset = CIRCUMFERENCE;
  if (currentPhase.ringMode === "grow")
    offset = CIRCUMFERENCE - CIRCUMFERENCE * progress;
  if (currentPhase.ringMode === "hold") offset = 0;
  if (currentPhase.ringMode === "shrink") offset = CIRCUMFERENCE * progress;

  return {
    phaseName: currentPhase.name,
    phaseClass: currentPhase.className,
    secondsLeft,
    offset,
    isActive,
    start,
    stop,
    restart,
  };
};
