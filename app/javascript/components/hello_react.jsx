// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "#fee9c1",
      },
    },
  },
  colors: {
    brand: {
      100: "#fee9c1",
      900: "#314344",
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ChakraProvider>
      <Home />
    </ChakraProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});
