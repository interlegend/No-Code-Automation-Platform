import * as React from 'react';
import { getBezierPath } from '@xyflow/react';

// Custom connection line that handles bottom handles that are offset 6px below the node.
export default function CustomConnectionLine({
  fromX,
  fromY,
  toX,
  toY,
  fromHandle,
  toHandle,
  connectionLineStyle,
}) {
  // Adjust Y coordinate when the handle is one of the bottom offsets.
  const adjustY = (y, handle) =>
    handle === 'bottom_left' || handle === 'bottom_right' ? y + 6 : y;

  const sourceY = adjustY(fromY, fromHandle);
  const targetY = adjustY(toY, toHandle);

  // Build the Bezier path for the line.
  const path = getBezierPath({
    sourceX: fromX,
    sourceY: sourceY,
    targetX: toX,
    targetY: targetY,
  });

  // Default visual style (old‑design dashed line).
  const defaultStyle = {
    stroke: '#a1a1aa',
    strokeWidth: 3,
    strokeDasharray: '5,5',
  };

  // Merge any style passed from React Flow with our defaults.
  const mergedStyle = { ...defaultStyle, ...connectionLineStyle };

  return (
    <svg style={{ overflow: 'visible' }}>
      <path d={path} {...mergedStyle} fill="none" />
      <circle
        cx={toX}
        cy={toY}
        r={3}
        fill="#fff"
        stroke={mergedStyle.stroke}
        strokeWidth={1.5}
      />
    </svg>
  );
}
