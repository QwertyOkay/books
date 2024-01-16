import { useEffect } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import ContactContent from 'components/InfoPagesContent/ContactContent';

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <ContactContent />
        </Container>
      </Section>
    </main>
  );
}

export default Contact;
