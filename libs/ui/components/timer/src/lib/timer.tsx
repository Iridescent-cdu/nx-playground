import { useEffect, useState } from "react";

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour12: false,
  timeStyle: "medium",
})

const timeStyle = {
  fontFamily: "'Digital-7 Mono',monospace",
  fontSize: '48px',
  color: 'black',
  padding: '20px'
}
export function Timer({ color }: { color: string }) {
  const [timeMs, setTimeMs] = useState<number>(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeMs(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <div>
      <span style={{ ...timeStyle, color }}>{timeFormatter.format(timeMs)}</span>
    </div >
  );
}

export default Timer;
