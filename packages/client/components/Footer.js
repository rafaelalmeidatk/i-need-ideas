const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>I Need Ideas!</strong> by{' '}
        <a href="https://github.com/rafaelalmeidatk">Rafael Almeida</a>. Check the source code{' '}
        <a href="https://github.com/rafaelalmeidatk/i-need-ideas">here</a>.
      </p>
    </div>

    <style jsx>{`
      .footer {
        flex: 1 1 auto;
        padding: 2.5rem 1.5rem 3.2rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }
    `}</style>
  </footer>
);

export default Footer;
