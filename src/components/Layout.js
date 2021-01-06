import React from "react";
import { Body } from "../styles/globalStyles";
import SEO from "../components/Seo/Seo";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/styles.css";
import Header from "./Header";
import Footer from "./Footer";

const duration = 0.3;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
};

const Layout = (props) => {
  const { children } = props;
  console.log({ props });
  return (
    <>
      <SEO title={props.data.wpPage.title} />
      <Body>
        <Header />
        <AnimatePresence>
          <motion.main
            key={
              typeof window !== `undefined`
                ? window.location.href
                : Math.random(0, 1000)
            }
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </Body>
    </>
  );
};

export default Layout;
