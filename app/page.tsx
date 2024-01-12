import './globals.css';

export default function Home() {
  return (
    <div className="flex justify-center mt-16">
      <div className="max-w-screen-md">
        <h1 className="font-roboto_slab text-3xl underline decoration-accent">hi!</h1>
        <p className="font-inconsolata mt-4 leading-tight">
          Welcome to my corner of the internet! My name is{' '}
          <a className="font-bold underline decoration-accent">Roy Lee</a> and this is where I dump
          my thoughts and share what I've been working on.
        </p>
        <p className="font-inconsolata mt-4 leading-tight">
          I'm interested in{' '}
          <a className="font-bold underline decoration-accent">software engineering</a> and{' '}
          <a className="font-bold underline decoration-accent">machine learning</a>, and sometimes I
          like to fry my brain with algorithms. I currently study{' '}
          <a className="font-bold underline decoration-accent">Computer Science</a> @{' '}
          <a className="font-bold underline decoration-accent" href="https://www.ubc.ca/">
            The University of British Columbia
          </a>
          , where I'm coming off of 1 year of co-op and entering my 4th year.
        </p>
        <p className="font-inconsolata mt-4 leading-tight">
          I'm also looking for an internship for the summer of 2024! Previously, I've worked on
          full-stack software engineering @{' '}
          <a className="font-bold underline decoration-accent" href="https://www.sap.com/">
            SAP
          </a>
          .
        </p>
        <p className="font-inconsolata mt-4 leading-tight">
          Beep-booping aside, I like to feed my family and friends my newest recipe, hit birdies on
          court, build PCs, and scratch my competitive itch w/ collegiate esports. Ask me about any
          of these!
        </p>
        <p className="font-inconsolata mt-4 leading-tight">
          I also really really really like bread &#127838;
        </p>
        <p className="font-inconsolata mt-4 leading-tight">
          If you're looking to chat, shoot me an{' '}
          <a
            className="font-bold underline decoration-accent"
            href="mailto:royee.lee09@gmail.com"
            target="_blank"
            rel="noopener"
          >
            email
          </a>
          . If you're looking for my beep-booping, check out my{' '}
          <a
            className="font-semibold underline decoration-accent"
            href="https://github.com/royee-lee"
          >
            GitHub
          </a>
          . If you're interested in my cooking, take a look at my{' '}
          <a className="font-bold underline decoration-accent" href="">
            menu (WIP)
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

        <h2 className="font-roboto_slab text-xl underline decoration-accent mt-4">Notes</h2>
        <p className="font-inconsolata mt-4 leading-tight">
          This is still a WIP - I'll be adding bits here and there when I can get a breather from
          homework. There's a lot I want to add and write about but my Advanced Algorithms and
          Machine Learning and Data Mining classes are basically my life right now. Thanks for
          checking my site out and look forward to some cool projects in the future!
        </p>
        <p className="font-inconsolata mt-4 leading-tight">
          P.S. Sorry mobile viewers, I haven't fixed the CSS yet :{'('}
        </p>
      </div>
    </div>
  );
}
