import { useMemo } from "react";
import { generateQrMatrix } from "./qrEncoder";

/**
 * Renders a QR code for `value` as an inline, responsive SVG.
 * No external dependency — the matrix comes from ./qrEncoder.
 */
export default function EmployeeQRCode({ value, size = 148, title = "QR code" }) {
  const matrix = useMemo(() => {
    try {
      return generateQrMatrix(value);
    } catch {
      return null;
    }
  }, [value]);

  if (!matrix) return null;

  const modules = matrix.length;
  const quiet = 4; // required quiet zone, in modules
  const dim = modules + quiet * 2;

  // One path for every dark module keeps the SVG small and crisp at any size.
  const path = matrix
    .flatMap((row, r) =>
      row.map((on, c) => (on ? `M${c + quiet} ${r + quiet}h1v1h-1z` : null))
    )
    .filter(Boolean)
    .join("");

  return (
    <svg
      viewBox={`0 0 ${dim} ${dim}`}
      width={size}
      height={size}
      role="img"
      aria-label={title}
      shapeRendering="crispEdges"
      className="emp-qr-svg"
    >
      <rect width={dim} height={dim} fill="#ffffff" />
      <path d={path} fill="#16314F" />
    </svg>
  );
}
