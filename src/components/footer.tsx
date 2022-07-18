import React from "react";
import "./Footer.css";

export default function Footer(): JSX.Element {
  return (
    <>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
      <footer className="footer">
        <p>Fierement propulsée par Mahamat Annour Doutoum ©2010-2022.</p>
        <p>Code licensed under an MIT-style License.</p>
        <p>Documentation licensed under CC BY 4.0.</p>
        <p>Version 0.0.1.</p>
      </footer>
    </>
  );
}
