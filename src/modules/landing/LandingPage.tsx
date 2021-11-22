import { Headline, Seo } from '@atoms';

const LandingPage = () => {
  return (
    <>
      <Seo
        title="iJan"
        description="Your go-to commercial and residential cleaning service provider in the state of Georgia."
      />
      <Headline>iJan</Headline>
      <section>
        <p>Best commercial and residential cleaning service provider in the state of Georgia.</p>
        <p>Here are some of our satisfied clients from the past two decades:</p>
      </section>
    </>
  );
};

export default LandingPage;
