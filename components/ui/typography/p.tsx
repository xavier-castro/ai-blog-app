type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyP({ children, className }: Props) {
  return (
    <p
      className={`${className} leading-7 [&:not(:first-child)]:mt-6`}
    >
      {children}
    </p>
  );
}
