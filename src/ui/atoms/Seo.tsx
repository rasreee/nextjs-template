import Head from 'next/head';

export interface SeoProps {
  title: string;
  description: string;
  lang?: string;
  keywords?: string;
  meta?: Array<{
    name: string;
    content: string;
  }>;
}

export const Seo: React.FC<SeoProps> = ({ title, description, keywords, meta }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://jangitori.co/" />
      {meta &&
        meta.length > 0 &&
        meta.map(({ name, content }) => <meta name={name} content={content} key={name} />)}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
};
