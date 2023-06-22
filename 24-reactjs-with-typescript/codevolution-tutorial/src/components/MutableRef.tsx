import React, { useEffect, useRef, useState } from 'react';

const MutableRef = () => {
  const [timer, setTimer] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() =>
      setTimer(timer => timer + 1)
    );

    return () => stopTimer();
  }, []);
  return (
    <div>
      HookTimer - {timer} -{' '}
      <button onClick={() => stopTimer()}>Stop Timer </button>
    </div>
  );
};

export default MutableRef;