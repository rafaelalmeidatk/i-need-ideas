const Button = ({ children, negative, ...props }) => (
  <button type="button" className={negative ? 'negative' : ''} {...props}>
    {children}

    <style jsx>{`
      button {
        position: relative;

        padding: 8px 15px;
        background-color: #000;
        color: #fff;
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        outline: none;
        background-clip: padding-box !important;

        cursor: pointer;
        border: none;
        border-radius: 18px;

        box-shadow: 0 2px 35px 2px rgba(0, 0, 0, 0.3), 0 1px 10px 0 rgba(0, 0, 0, 0.1);
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.96), #333);
        top: 0px;
        transition: top 0.1s ease, box-shadow 0.1s ease;
      }

      button.negative {
        background: #fff;
        color: rgba(0, 0, 0, 0.85);
      }

      button:hover {
        top: -2px;
        box-shadow: 0 4px 40px 2px rgba(0, 0, 0, 0.4), 0 3px 25px 0 rgba(0, 0, 0, 0.1);
      }

      button:focus {
        box-shadow: 0 0 0 3px #03a9f47d, 0 2px 35px 2px rgba(0, 0, 0, 0.3),
          0 1px 10px 0 rgba(0, 0, 0, 0.1);
      }
    `}</style>
  </button>
);

export default Button;
