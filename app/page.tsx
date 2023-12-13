import './globals.css';

export default function Home() {
  return (
    <div className="flex justify-center mt-16">
      <div className="max-w-screen-md">
        <h1 className="font-roboto_slab text-3xl underline decoration-accent">hi!</h1>
        <p className="font-inconsolata mt-4">
          Welcome to my corner of the internet! My name is{' '}
          <a className="font-bold underline decoration-accent">Roy Lee</a> and this is where I dump
          my thoughts and share what I've been working on.
        </p>
        <p className="font-inconsolata mt-4">
          I'm most interested in software engineering and machine learning, and am still trying to
          find an area to focus on in the vast domain of Computer Science. I currently study
          Computer Science @{' '}
          <a className="font-bold underline decoration-accent" href="https://www.ubc.ca/">
            The University of British Columbia
          </a>
          , where I'm coming off of 1 year of co-op and entering my 4th year, w/ 1 more year to go.
        </p>
        <p className="font-inconsolata mt-4">
          I'm also looking for an internship for the summer of 2024! Previously, I've worked on
          full-stack software engineering @{' '}
          <a className="font-bold underline decoration-accent" href="https://www.sap.com/">
            SAP
          </a>
          .
        </p>
        <p className="font-inconsolata mt-4">
          Beep-booping aside, I like to feed my family and friends my newest recipe, hit birdies on
          the court, build keyboards and PCs, and scratch my competitive itch w/ collegiate esports.
          Ask me about any of these!
        </p>
        <p className="font-inconsolata mt-4">
          If you're looking to chat, shoot me an{' '}
          <a
            className="font-bold underline decoration-accent"
            href="mailto:lee9uanlin@gmail.com"
            target="_blank"
            rel="noopener"
          >
            email
          </a>
          . If you're looking for my beep-booping, check out my{' '}
          <a
            className="font-semibold underline decoration-accent"
            href="https://github.com/9uanlin"
          >
            GitHub
          </a>
          . If you're interested in my cooking, take a look at my{' '}
          <a className="font-bold underline decoration-accent" href="">
            menu
          </a>
          . If you want to see someone getting rowdy, click{' '}
          <a
            className="font-bold underline decoration-accent"
            href="https://clips.twitch.tv/TsundereBlazingChoughPraiseIt"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
