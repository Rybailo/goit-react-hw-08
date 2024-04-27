import AppBar from "./AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
