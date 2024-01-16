import { useEffect } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import PrivacyContent from 'components/InfoPagesContent/PrivacyContent';

function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <PrivacyContent />
        </Container>
      </Section>
    </main>
  );
}

export default Privacy;
