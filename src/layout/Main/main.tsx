type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <main role="main">{children}</main>;
};

export default Main;
