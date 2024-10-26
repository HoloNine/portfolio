type LogoProps = {
  className?: string;
  style?: React.CSSProperties;
} & React.SVGProps<SVGSVGElement>;

const Logo = (props: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"var(--space--48)"}
    height={"var(--space--48)"}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="currentColor"
      d="M38.96 10.662 19.795 22.858a1 1 0 0 0 .23 1.795l27.005 8.711a1 1 0 0 0 1.243-1.302l-7.84-20.907a1 1 0 0 0-1.473-.493Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M28 15 16.042 6.721a1 1 0 0 0-1.501.46L1.78 39.991A1 1 0 0 0 3.038 41.3L33 31"
    />
  </svg>
);
export default Logo;
