import './../globals.css';

export default function Footer() {
  return (
    <footer className="fixed left-0 bottom-0 w-full p-8 pb-8 border-t border-t-4 border-accent bg-white text-black2 font-inconsolata text-center">
      <p>
        <a
          className="p-4 hover:underline decoration-accent"
          href="/files/resume.pdf"
          target="_blank"
          rel="noopener"
        >
          [Résumé]
        </a>
        <a
          className="p-4 hover:underline decoration-accent"
          href="mailto:royee.lee09@gmail.com"
          target="_blank"
          rel="noopener"
        >
          [Email]
        </a>
        <a
          className="p-4 hover:underline decoration-accent"
          href="https://github.com/royee-lee"
          target="_blank"
          rel="noopener"
        >
          [GitHub]
        </a>
        <a
          className="p-4 hover:underline decoration-accent"
          href="https://www.linkedin.com/in/royee"
          target="_blank"
          rel="noopener"
        >
          [LinkedIn]
        </a>
      </p>
    </footer>
  );
}
