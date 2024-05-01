import React from "react";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Opps!</h1>
      <p>Sorry, </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
