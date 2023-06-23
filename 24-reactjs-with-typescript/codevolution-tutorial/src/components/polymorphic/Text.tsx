import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const CustomText = <E extends React.ElementType = 'div'>({
  color,
  size,
  children,
  as,
  ...rest
}: TextProps<E>) => {
  const Component = as || 'div';
  return (
    <Component className={`class-with-${size}-${color}`} {...rest}>
      {children}
    </Component>
  );
};

export default CustomText;
