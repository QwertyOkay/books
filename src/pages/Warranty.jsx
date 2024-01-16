import { useEffect } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import WarrantyContent from 'components/InfoPagesContent/WarrantyContent';

function Warranty() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <WarrantyContent />
        </Container>
      </Section>
    </main>
  );
}

export default Warranty;
