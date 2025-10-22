import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Component = () => {
  const text = "START\u00A0\u00A0\u00A0HERE\u00A0\u00A0\u00A0NOW\u00A0\u00A0\u00A0";

  return (
    <div className="border p-3 rounded-full border-dotted border-yellow-400">
    <Button
      className="relative w-[300px] h-[300px] rounded-full overflow-hidden p-0 grid place-content-center bg-yellow-400"
    >
      <p
        className="absolute inset-0 text-6xl font-black text-black tracking-wider"
        style={{
          animation: "text-rotation 8s linear infinite",
          position: "absolute",
          inset: 0,
        }}
      >
        {Array.from(text).map((char, i) => (
          <span
            key={i}
            style={{ 
              position: "absolute",
              inset: "30px",
              transform: `rotate(${(360 / text.length) * i}deg)`,
              transformOrigin: "50% 50%",
              userSelect: "none",
              display: "inline-block",
              fontSize: "2.8rem",
              fontWeight: "900",
              color: "black",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>

      <div className="relative w-[120px] h-[120px] rounded-full text-yellow-400 flex items-center justify-center overflow-hidden">
        <img
          src="/svg/brake.svg"
          alt="Brake"
          className="absolute w-28 h-28"
          style={{ 
            transform: "translate(0, 0)",
            animation: "icon-rotation 4s linear infinite"
          }}
        />
        <img
          src="/svg/brake.svg"
          alt="Brake"
          className="absolute w-28 h-28"
          style={{ 
            transform: "translate(-150%, 150%)",
            animation: "icon-rotation 4s linear infinite"
          }}
        />
      </div>

      <style jsx>{`
        @keyframes text-rotation {
          to {
            rotate: 360deg;
          }
        }
        @keyframes icon-rotation {
          to {
            rotate: -360deg;
          }
        }
        p {
          animation: text-rotation 8s linear infinite;
        }
        span {
          user-select: none;
        }
      `}</style>
    </Button>
    </div>
  );
}
