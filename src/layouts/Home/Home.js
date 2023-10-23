import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import GoEco1 from 'assets/GoEco-1.png';
import GoEco2 from 'assets/GoEco-2.png';
import Rp2 from 'assets/rp-2.png';
import HireMe1 from 'assets/hireme-1.png';
import HireMe2 from 'assets/hireme-2.png';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import { Timeline } from './Timeline';
import { TimelineExp } from './TimelineExp';

const disciplines = [
  'Team Player',
  'Problem Solver',
  'Adaptive Learner',
  'Agile Enthusiast',
  'Tech Geek',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const timeline = useRef();
  const timelineExp = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      timeline,
      timelineExp,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Developer"
        description="Portfolio of Tharindu Samarakkon — a web developer with a passion for 
        crafting seamless experiences, emphasizing motion, accessibility, and exceptional UX in both front-end and back-end development."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Timeline
        id="timeline"
        sectionRef={timeline}
        visible={visibleSections.includes(timeline.current)}
      />
      <TimelineExp
        id="timelineExp"
        sectionRef={timelineExp}
        visible={visibleSections.includes(timelineExp.current)}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Research Project Management Tool"
        description="Advanced research management tool developed using MERN. Facilitated seamless collaboration between research supervisors and students, streamlining the research process."
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [Rp2, Rp2],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="HIREME - Worker Hiring Android App"
        description="Java-based Android app 'Hire Me', enabling seamless hiring of workers across diverse domains. Users can easily find and engage skilled workers, while workers can register and showcase their availability, streamlining the hiring process."
        buttonText="View project"
        buttonLink="/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [HireMe1, HireMe1],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [HireMe2, HireMe2],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Event Management System"
        description="Event Management System using the MERN stack, allowing users to effortlessly plan events and rent necessary equipment. This platform revolutionizes event coordination, offering a user-friendly interface for streamlined planning and execution."
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Go Eco"
        description="GoEco – a React Native app dedicated to advancing the UN 12th Sustainable Development Goal. Seamlessly integrate eco-conscious practices into your daily routine, effortlessly saving water, fuel, electricity, and reducing food waste."
        buttonText="View project"
        buttonLink="/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [GoEco1, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [GoEco2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
