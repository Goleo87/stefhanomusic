function About() {
  return (
    <div className="biography">
      <h2>Portfolio</h2>
      <div className="bio">
      <p>
        I am a Developer and Audiovisual Producer based in Germany. I am a creative person with a passion for technology and art, I have experience in photography, video editing, and audiovisual production. I have worked in different projects such as short films, music, videos, and podcasts. and recently I have been working on web development projects during my studies at Digital Career Institute in Germany.
        </p>
      <p>
         Experience in HTML, CSS, JavaScript, React, Node.js and Git. I have knowledge in Hardware, Software: Windows, Linux, Adobe Creative Suite, Premiere Pro, Photoshop, Audition, Illustrator After Effects, Vegas, DaVinci, Filmora, etc.
        </p>
      </div>

      {/* GitHub Projects Section */}
      <h3>Projects in Development</h3>
      <div className="github-projects">
        
        <div className="project-card1">
          {/* Project 1 */}
          <a
            href="https://goleo87.github.io/PalazzoMazziotiBookingApp/"
            target="_blank"
          >
            <img src="./Palazzo.png" alt="Project 1" />
          </a>
          <button>
            <a
              href="https://github.com/Goleo87/PalazzoMazziotiBookingApp.git"
              target="_blank"
            >
              View on GitHub
            </a>
          </button>
        </div>
        <div className="project-card1">
          {/* Project 2 */}
          <a
            href="https://random-picker-app-rgm2.onrender.com/"
            target="_blank"
          >
            <img src="./pickerapp.png" alt="Project 1" />
          </a>
          <button>
            <a
              href="https://github.com/Goleo87/Random-Picker-App.git"
              target="_blank"
            >
              View on GitHub
            </a>
          </button>
        </div>
        <div className="project-card1">
          {/* Project 3 */}
          <a
            href="https://goleo87.github.io/diariodelhostil/intro.html"
            target="_blank"
          >
            <img src="./iconopicyoutube.jpg" alt="Project 1" />
          </a>
          <button>
            <a
              href="https://github.com/Goleo87/diariodelhostil.git"
              target="_blank"
            >
              View on GitHub
            </a>
          </button>
        </div>
      </div>

      {/* Audiovisual Projects Section */}
      <h3>Production & Audiovisual Projects</h3>
      <div className="audiovisual-projects">
      <div className="video-container">
          {/* Video 3 */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cgpHopYHyRw?si=cU5unmXx_DeeEfIh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <button>
            <a href="https://www.youtube.com/watch?v=cgpHopYHyRw" target="_blank">
              View on YouTube
            </a>
          </button>

        </div>
        
        <div className="video-container">
          {/* Video 1 */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ZcTmOTSIW20?si=64-po2Np9-uDVGQx"
            title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
            allowfullscreen
          ></iframe>
          <button>
            <a href="https://www.youtube.com/@DiariodelHostil" target="_blank">
              View on YouTube
            </a>
          </button>
        </div>
        <div className="video-container">
          {/* Video 2 */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/sPjQZeuE8pk?si=QxRTUM-f6b1uK1E-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
            allowfullscreen
          ></iframe>
          <button>
            <a
              href="https://www.youtube.com/channel/UCxu6mVIxWzKi2XFEmVJ7b4w"
              target="_blank"
            >
              View on YouTube
            </a>
          </button>
        </div>
        <div className="video-container">
          {/* Video 3 */}
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/eANHBrdjyhE?si=dEuHEPORh3mhifar" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
          <button>
            <a href="https://www.youtube.com/@DiariodelHostil" target="_blank">
              View on YouTube
            </a>
          </button>

        </div>
        <div className="video-container">
          {/* Video 3 */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fsndZ7BaX90?si=wIC7LJsUOWHrArnc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
          <button>
            <a href="https://www.youtube.com/@danydeutsch" target="_blank">
              View on YouTube
            </a>
          </button>

        </div>
        <div className="video-container">
          {/* Video 3 */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/D2jLj8p0trM?si=2xoC7bhGVJDGYbys" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
          <button>
            <a href="https://www.youtube.com/@arkosolar2801" target="_blank">
              View on YouTube
            </a>
          </button>

        </div>
        


  
      </div>
    </div>
  );
}

export default About;
