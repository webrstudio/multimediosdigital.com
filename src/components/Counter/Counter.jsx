"use client";
import { animate } from "motion";
import { useEffect, useState } from "react";

function formatNumber(value) {
  if (value >= 1000) {
    return (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + "K";
  }
  return value;
}

export const Counter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      easing: "ease-out",
      onUpdate: (latest) => {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.cancel();
  }, [from, to, duration]);

  return (
    <span style={{ fontSize: "48px", fontWeight: "bold" }}>
      {formatNumber(count)}
    </span>
  )
};
