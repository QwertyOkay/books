import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import Image from 'assets/images/text-block.jpg';
import styles from './TextBlock.module.scss';

function TextBlock({ title }) {
  return (
    <Section>
      <Container>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.contentWrap}>
          <div className={styles.imageWrap}>
            <img src={Image} alt="outdoor camping" />
          </div>
          <div className={styles.textWrap}>
            <p>
              Step into the heart-pounding rhythm of music history with HB.com,
              your ultimate haven for all things "Rush." As ardent fans of the
              legendary band, we've transformed our passion into a roaring
              symphony of merchandise that pays homage to the iconic music and
              the spirit it embodies.
            </p>
            <p>
              HB.com's journey is a melody woven with threads of musical
              devotion. It began with a single note – the desire to celebrate
              the sonic brilliance of "Rush." From that note, we've composed a
              symphony of merchandise that echoes the spirit of "Rush" in every
              stitch and design.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default TextBlock;
