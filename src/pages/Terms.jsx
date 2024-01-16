import { useEffect } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import TermsContent from 'components/InfoPagesContent/TermsContent';

function Terms() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <TermsContent />
        </Container>
      </Section>
    </main>
  );
}

export default Terms;
