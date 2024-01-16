import { Helmet } from 'react-helmet-async';

const TITLE = 'HB.com';

function HelmetHead() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      {/* <meta name="description" content={CONTENT} /> */}
    </Helmet>
  );
}

export default HelmetHead;
