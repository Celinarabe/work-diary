// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Home from "../components/Home";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ChakraProvider>
      <Home />
    </ChakraProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});
