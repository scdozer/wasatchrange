import styled from "styled-components";

export const Masonry = styled.div`
  width: 100%;
  height: auto;
`;

export const Brick = styled.div`
  width: 22%;
  margin: 10px;
  float: left;
  display: inline-block;
  height: 250px;
  background: cover;
  background-size: 100%;
  repeat: none;
`;

// /* Masonry on tablets */
// @media only screen and (min-width: 768px) and (max-width: 1023px) {
//     .masonry {
//       column-count: 2;
//     }
//   }

//   /* Masonry on big screens */
//   @media only screen and (min-width: 1024px) {
//     .desc {
//       font-size: 1.25em;
//     }

//     .intro {
//       letter-spacing: 1px;
//     }

//     .masonry {
//       column-count: 3;
//     }
//   }
