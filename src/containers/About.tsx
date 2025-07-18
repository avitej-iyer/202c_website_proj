import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>

          </p>I'm a Master's Computer Science Student at Penn State university! I'm always interested in learning new technologies and frameworks, and am motivated by personal projects!
          <p>
            I'm currently learning TypeScript and frontend developement
            and exploring bioinformatic applications of LLMs for my research!
          </p>
          <p>
            When I'm not working, you can usually find me <Link href="https://www.instagram.com/liftsbyavi/" target="_blank" className='text-accent'>in the gym</Link>, playing the guitar, on the badminton court or just reading a book in a park (weather permitting, of course).
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper >
  ) : (
    <></>
  );
};

export default About;
