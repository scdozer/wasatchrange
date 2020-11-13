import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import ImageContent from "../components/PageLayouts/ImageContent"
import ContentImage from "../components/PageLayouts/ContentImage"
import FullButton from "../components/PageLayouts/FullButton"
import Full from "../components/PageLayouts/Full"

const IndexPage = ({ data }) => {
  const { pageLayouts } = data.wpPage.pageLayouts
  const { pageheading, pagesubheading } = data.wpPage.pageHeader
  const isVideo = !!data.wpPage.pageHeader.headerbackgroundvideo
  const backgroundUrl = data.wpPage.pageHeader.headerbackgroundvideo
    ? data.wpPage.pageHeader.headerbackgroundvideo.mediaItemUrl
    : data.wpPage.pageHeader.headerbackgroundimage.mediaItemUrl
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
        pageLayouts.map(section => {
          const typeName = section.__typename

          switch (typeName) {
            case "WpPage_Pagelayouts_PageLayouts_Imagecontent":
              return <ImageContent key={section.id} {...section} />

            case "WpPage_Pagelayouts_PageLayouts_Contentimage":
              return <ContentImage key={section.id} {...section} />

            case "WpPage_Pagelayouts_PageLayouts_Fullwithbutton":
              return <FullButton key={section.id} {...section} />

            case "WpPage_Pagelayouts_PageLayouts_Fullcontent":
              return <Full key={section.id} {...section} />

            default:
              return <p>You done busted it.</p>
          }
        })}
    </>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query GET_HOME_PAGE {
    wpPage(id: { eq: "cG9zdDoyMA==" }) {
      pageLayouts {
        pageLayouts {
          ... on WpPage_Pagelayouts_PageLayouts_Imagecontent {
            rightcontent
            leftimage {
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
`
