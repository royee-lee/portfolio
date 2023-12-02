import './../globals.css';

export default function Footer() {
  return (
    <footer className="fixed left-0 bottom-0 w-full p-8 pb-8 border-t border-t-4 border-accent bg-black2 text-white font-inconsolata text-center">
      <p>
        <a
          className="p-4 hover:underline decoration-accent"
          href="resume.pdf"
          target="_blank"
          rel="noopener"
        >
          [Résumé]
        </a>
        <a
          className="p-4 hover:underline decoration-accent"
          href="mailto:lee9uanlin@gmail.com"
          target="_blank"
          rel="noopener"
        >
          [Email]
        </a>
        <a
          className="p-4 hover:underline decoration-accent"
          href="https://github.com/9uanlin"
          target="_blank"
          rel="noopener"
        >
          [GitHub]
        </a>
        <a
          className="p-4 hover:underline decoration-accent"
          href="https://www.linkedin.com/in/9uanlin"
          target="_blank"
          rel="noopener"
        >
          [LinkedIn]
        </a>
      </p>
    </footer>
  );
}
