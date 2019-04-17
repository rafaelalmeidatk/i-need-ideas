const Header = () => (
  <header>
    <h1>I Need Ideas!</h1>
    <h2>
      Do you want to build something but are out of ideas? Need some
      inspiration?
      <br />
      Here are some ideas to help you!
    </h2>
    <style jsx>{`
      header {
        text-align: center;
        padding: 0 0.5rem;
      }
      h1 {
        padding-top: 2rem;
        font-family: 'Roboto Slab', serif;
        font-weight: bold;
        font-size: 4.3em;
        color: rgba(0, 0, 0, 0.9);
      }
      h2 {
        margin-top: 0.5rem;
      }
    `}</style>
  </header>
);

export default Header;
