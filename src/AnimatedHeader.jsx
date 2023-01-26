import React from "react";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper d-inline-flex flex-row w-auto">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedHeader = (props) => {
  // Framer Motion variant object, for controlling animation
  const defaultAnim = {
    hidden: {
      y:"-100%",
      color: "#b1c5ad",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, delay:0.25}
    },
    visible: {
      y:0,
      color: "#b6ec8d",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75, delay:1.25 }
    }
  };

  const item2 = {
    hidden: {
      opacity:0,
      color: "#b1c5ad",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      opacity:1,
      color: "#b6ec8d",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
    <Tag >
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index} 
          >
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={props.animType === "opacity" ? item2 : props.animType === "custom" ? props.customAnim : defaultAnim}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

export default AnimatedHeader;