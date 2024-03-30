import "./portfolio.css";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 15",
      id: 14,
      image: {
        public_id: "1706285511679-xe7r9t",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285511679-xe7r9t",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
      _id: "65b3d9c8d017f6b49c778ca7",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 14",
      id: 15,
      image: {
        public_id: "1706285468702-igx05q",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285468702-igx05q",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
      _id: "65b3d99dd017f6b49c778c86",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 13",
      id: 13,
      image: {
        public_id: "1706285431821-3lfg2r",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285431821-3lfg2r",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
      _id: "65b3d978d017f6b49c778c67",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 12",
      id: 12,
      image: {
        public_id: "1706285416017-wra7swm",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285416017-wra7swm",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
      _id: "65b3d969d017f6b49c778c4a",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 11",
      id: 11,
      image: {
        public_id: "1706285405228-98liol",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285405228-98liol",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
      _id: "65b3d95dd017f6b49c778c2f",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 10",
      id: 10,
      image: {
        public_id: "1706285393568-zl9mcc",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285393568-zl9mcc",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs "],
      _id: "65b3d952d017f6b49c778c16",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 9",
      id: 9,
      image: {
        public_id: "1706285378965-91vbk",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285378965-91vbk",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
      _id: "65b3d943d017f6b49c778bff",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 8",
      id: 8,
      image: {
        public_id: "1706285368529-zdr5fl",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285368529-zdr5fl",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs  ", " Mern ", " CSS"],
      _id: "65b3d938d017f6b49c778bea",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 7",
      id: 7,
      image: {
        public_id: "1706285357884-3ja6sw",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285357884-3ja6sw",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs   ", " CSS"],
      _id: "65b3d92ed017f6b49c778bd7",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 6",
      id: 6,
      image: {
        public_id: "1706285347449-dniw0h",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285347449-dniw0h",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: [" Nextjs ", " Mern ", " CSS"],
      _id: "65b3d923d017f6b49c778bc6",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 5",
      id: 5,
      image: {
        public_id: "1706285323287-nt3ya3",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285323287-nt3ya3",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Mern ", " CSS"],
      _id: "65b3d8fed017f6b49c778ba9",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 4",
      id: 4,
      image: {
        public_id: "1706284852474-gh2ng",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706284852474-gh2ng",
      },
      description:
        "lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
      _id: "65b3d734313a9b09a24a14a3",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 3",
      id: 3,
      image: {
        public_id: "1706284839761-ckccdj",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706284839761-ckccdj",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
      _id: "65b3d728313a9b09a24a1498",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 2",
      id: 2,
      image: {
        public_id: "1706284824843-56iakg",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706284824843-56iakg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS ", " TailwindCSS"],
      _id: "65b3d719313a9b09a24a148f",
      enabled: true,
    },
    {
      liveurl: "#",
      githuburl: "#",
      title: "Project 1",
      id: 1,
      image: {
        public_id: "1706284812399-jr7rqj",
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706284812399-jr7rqj",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
      _id: "65b3d70d313a9b09a24a1488",
      enabled: true,
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Cases</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.image.url} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.githuburl}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.liveurl}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
