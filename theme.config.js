const YEAR = new Date().getFullYear();

export default {
  darkMode: false,
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © HackOS.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};
