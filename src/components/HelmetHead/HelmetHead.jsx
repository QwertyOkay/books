import { Helmet } from 'react-helmet-async';

const TITLE = 'Books Project';

function HelmetHead() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      {/* <meta name="description" content={CONTENT} /> */}
    </Helmet>
  );
}

export default HelmetHead;
