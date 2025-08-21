interface LogoProps {
    fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
    onClick?: () => void;
    textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}

export default function Logo({ fontSize, onClick, textSize }: LogoProps) {
  return (
    <h1
          className={`font-jaro font-bold transition-colors cursor-pointer font-${fontSize} text-${textSize}`}
          style={{ color: "var(--text-primary)" }}
          onClick={onClick}
    >
      SNIPLY
    </h1>
  );
}