import { useEffect, useState } from "react";

export function Timer() {
  const [timeMs, setTimeMs] = useState<number>(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeMs(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <div >
      <span>{timeMs}</span>
    </div>
  );
}

export default Timer;
