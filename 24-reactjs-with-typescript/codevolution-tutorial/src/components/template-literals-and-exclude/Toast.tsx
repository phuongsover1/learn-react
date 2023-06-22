import React from 'react';

/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top"
 * | "center-bottom" | "right-center" | "right-top" | "right-bottom"
 *
 */

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type PositionType = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center';
};

const Toast = ({ position }: PositionType) => {
  return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
