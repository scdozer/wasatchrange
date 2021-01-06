import React from "react";
import Helmet from "react-helmet";

function SEO({ lang, title, description }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: title,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `keywords`,
          content: `Utah Flight School, Utah Flight Instructor, Utah Flight Instruction, Flight Instruction, Flight School, Utah Flight School`,
        },
      ]}
      title={title}
      titleTemplate={`${title} | Wasatch Range Aviation`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  title: `Wasatch Range Aviation | UTAH`,
  description: `Utah Flight Training and Instruction`,
};

export default SEO;
