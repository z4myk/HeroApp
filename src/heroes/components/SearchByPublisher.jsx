import React, { memo } from "react";
import { useHeroes } from "../hooks/useHeroes";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

export const SearchByPublisher = memo(({ setReset }) => {
  const { getPublishers } = useHeroes();
  const publishers = getPublishers();

  return (
    <>
      <Accordion
        allowMultiple
        className="animate__animated animate__lightSpeedInRight"
      >
        <AccordionItem className="finder">
          <h2>
            <AccordionButton className="bg-light">
              <Box flex="1" textAlign="center" fontSize="4xl">
                <h1 className="titulosFind animate__animated animate__lightSpeedInRight my-2 mb-2 text-primary">
                  Find By Publisher
                </h1>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {publishers?.map((publisher) => (
              <button
                className="m-1 btn btn-light"
                key={publisher}
                onClick={setReset}
              >
                <Link to={`/${publisher}`}>{publisher}</Link>
              </button>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <hr />
    </>
  );
});
