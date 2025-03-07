import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import express from "express";
import { App } from "./App";

const app = express();

app.get(/(.*)/, async (req, res) => {
  // fetch any data your page needs
  // const data = await preparePageData(req.path, req.query);
  const data = {};

  // render your React app
  const html = ReactDOMServer.renderToString(
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.SSR_DATA = ${JSON.stringify(data)}`,
          }}
        />
      </head>
      <body>
        <div id="root">
          <App data={data} />
        </div>
        <script src="/index.js" />
      </body>
    </html>
  );

  // send the rendered HTML back to the client
  res.status(200).send(html);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
