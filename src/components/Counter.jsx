import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useInView } from "framer-motion";

const parse = (value) => {
  const match = value.match(/^(\D*)(\d+)(?:\s*-\s*(\d+))?(.*)$/);
  if (!match) return null;
  const [, prefix, first, second, suffix] = match;
  return { prefix, first: Number(first), second: second ? Number(second) : null, suffix };
};

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const Counter = ({ value, duration = 1400 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = useMemo(() => parse(value), [value]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return undefined;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const next = Math.min((now - start) / duration, 1);
      setProgress(easeOut(next));
      if (next < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, duration, parsed]);

  if (!parsed) return <span ref={ref}>{value}</span>;

  const first = Math.round(parsed.first * progress);
  const second = parsed.second === null ? null : Math.round(parsed.second * progress);

  return (
    <span ref={ref}>
      {parsed.prefix}
      {first}
      {second === null ? "" : `-${second}`}
      {parsed.suffix}
    </span>
  );
};

Counter.propTypes = {
  value: PropTypes.string.isRequired,
  duration: PropTypes.number,
};

export default Counter;
