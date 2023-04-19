type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyH2({ children, className }: Props) {
  return (
    <h2
      className={`${className} scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0`}
    >
      {children}
    </h2>
  );
}
