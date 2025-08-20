interface dividerProps {
    className?: string;
}

export default function Divider({ className }: dividerProps) {
  return <div className={`border-t ${className}`}></div>;
}