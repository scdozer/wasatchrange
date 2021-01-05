import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Gallery from "../components/PageLayouts/Gallery";
import ImageContent from "../components/PageLayouts/ImageContent";
import ContentImage from "../components/PageLayouts/ContentImage";
import FullButton from "../components/PageLayouts/FullButton";
import Full from "../components/PageLayouts/Full";

const Page = ({ data }) => {
  const { pageLayouts } = data.wpPage.pageLayouts;
  const { pageheading, pagesubheading } = data.wpPage.pageHeader;
  const isVideo = !!data.wpPage.pageHeader.headerbackgroundvideo;
  const backgroundUrl = data.wpPage.pageHeader.headerbackgroundvideo
    ? data.wpPage.pageHeader.headerbackgroundvideo.mediaItemUrl
    : data.wpPage.pageHeader.headerbackgroundimage.mediaItemUrl;

  return (
    <>
      <Hero
        content={{
          url: backgroundUrl,
          heading: pageheading,
          subheading: pagesubheading,
        }}
        isVideo={isVideo}
      />
      {pageLayouts &&
        pageLayouts.map((section) => {
          const typeName = section.__typename;
          switch (typeName) {
            case "WpPage_Pagelayouts_PageLayouts_Imagecontent":
              return (
                <div className="block">
                  <ImageContent key={section.id} {...section} />
                </div>
              );

            case "WpPage_Pagelayouts_PageLayouts_Contentimage":
              return (
                <div className="block">
                  <ContentImage key={section.id} {...section} />
                </div>
              );

            case "WpPage_Pagelayouts_PageLayouts_Fullwithbutton":
              return (
                <div className="block">
                  <FullButton key={section.id} {...section} />
                </div>
              );

            case "WpPage_Pagelayouts_PageLayouts_Fullcontent":
              return (
                <div className="block">
                  <Full key={section.id} {...section} />
                </div>
              );

            case "WpPage_Pagelayouts_PageLayouts_Gallery":
              return (
                <div className="block">
                  <Gallery key={section.id} {...section} />
                </div>
              );

            default:
              return <p>You done busted it.</p>;
          }
        })}
    </>
  );
};

export default Page;

export const pageQuery = graphql`
  query GET_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      pageLayouts {
        pageLayouts {
          ... on WpPage_Pagelayouts_PageLayouts_Imagecontent {
            rightcontent
            leftimage {
              altText
              mediaItemUrl
            }
          }
          ... on WpPage_Pagelayouts_PageLayouts_Gallery {
            images {
              altText
              mediaItemUrl
            }
          }
          ... on WpPage_Pagelayouts_PageLayouts_Fullcontent {
            content
          }
          ... on WpPage_Pagelayouts_PageLayouts_Fullwithbutton {
            buttonlink
            buttontitle
            content
          }
          ... on WpPage_Pagelayouts_PageLayouts_Contentimage {
            rightimage {
              altText
              mediaItemUrl
            }
            leftcontent
          }
        }
      }
      pageHeader {
        pageheading
        pagesubheading
        headerbackgroundimage {
          altText
          mediaItemUrl
        }
        headerbackgroundvideo {
          altText
          mediaItemUrl
        }
      }
    }
  }
`;
