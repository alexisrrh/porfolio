import { useEffect, useRef, useState } from "react";

const ROLES = ["FULL STACK", "FRONTEND", "BACKEND"];

export default function RotatingRole({ shouldReduceMotion = false }) {
  const [text, setText] = useState(ROLES[0]);
  const roleIndexRef = useRef(0);
  const timeoutRef = useRef();

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    let mounted = true;
    let phase = "hold";
    let charIndex = ROLES[0].length;
    roleIndexRef.current = 0;

    const schedule = (delay) => {
      timeoutRef.current = window.setTimeout(tick, delay);
    };

    const tick = () => {
      if (!mounted) return;

      const currentRole = ROLES[roleIndexRef.current];

      if (phase === "hold") {
        phase = "delete";
        schedule(58);
        return;
      }

      if (phase === "delete") {
        charIndex -= 1;
        setText(currentRole.slice(0, Math.max(charIndex, 0)));

        if (charIndex <= 0) {
          roleIndexRef.current = (roleIndexRef.current + 1) % ROLES.length;
          phase = "type";
          schedule(170);
          return;
        }

        schedule(46);
        return;
      }

      const nextRole = ROLES[roleIndexRef.current];
      charIndex += 1;
      setText(nextRole.slice(0, charIndex));

      if (charIndex >= nextRole.length) {
        phase = "hold";
        schedule(1950);
        return;
      }

      schedule(82);
    };

    schedule(2100);

    return () => {
      mounted = false;
      window.clearTimeout(timeoutRef.current);
    };
  }, [shouldReduceMotion]);

  return (
    <span className="relative inline-grid min-w-[8.6ch]" aria-hidden="true">
      <span className="invisible col-start-1 row-start-1">FULL STACK</span>
      <span className="col-start-1 row-start-1">
        {shouldReduceMotion ? ROLES[0] : text}
        {!shouldReduceMotion && (
          <span className="ml-1 inline-block h-[0.82em] w-[0.06em] translate-y-[0.08em] animate-pulse rounded-full bg-cyan-200/80 shadow-[0_0_14px_rgba(34,211,238,0.65)]" />
        )}
      </span>
    </span>
  );
}
