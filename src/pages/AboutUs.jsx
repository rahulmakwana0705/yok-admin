import { Helmet } from 'react-helmet-async';

import AboutUs from 'src/sections/AboutUs/AboutUs';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> YOK </title>
      </Helmet>

      <AboutUs />
    </>
  );
}
