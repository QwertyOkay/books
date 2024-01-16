import { useEffect } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import AboutContent from 'components/InfoPagesContent/AboutContent';

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <AboutContent />
        </Container>
      </Section>
    </main>
  );
}

export default About;
