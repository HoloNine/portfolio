type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
} & React.SVGProps<SVGSVGElement>;

const Arrow = (props: ArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5 15 2.083-2.083M15 5H7.5M15 5v7.5M15 5l-5.417 5.417"
    />
  </svg>
);
export default Arrow;
