const Layout = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `}</style>
  </div>
);

export default Layout;
