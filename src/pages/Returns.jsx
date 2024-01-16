import { useEffect } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import ReturnsContent from 'components/InfoPagesContent/ReturnsContent';

function Returns() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <ReturnsContent />
        </Container>
      </Section>
    </main>
  );
}

export default Returns;
