import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { App } from '../../../client/components';
import fs from 'fs';
import path from 'path';

import configureStore from '../../../client/common/functions/configureStore';

export const indexFile = fs.readFileSync(
  path.resolve(process.cwd(), 'assets/index.html'),
  'utf8',
);

export default (req, res, state) => {
    const store = configureStore(state);
    const html = renderToString(
        <StaticRouter context={{}} location={req.url}>
            <Provider store={store}>
              <App />
            </Provider>
        </StaticRouter>
    );

  const { title, meta, link } = Helmet.renderStatic();

  return indexFile
    .replace('<!-- ::HELMET:: -->', [title, meta, link].map(it => it.toString()).join(''))
    .replace('<!-- ::APP:: -->', html)
    .replace(
      '<!-- ::DATA:: -->',
      `<script>window.__PRELOADED_STATE__=${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}</script>`,
    );

    // return (`
    //         <!DOCTYPE html>
    //         <html lang="en">
    //         <head>
    //             <meta charset="UTF-8">
    //             <meta name="viewport" content="width=device-width, initial-scale=1">
    //             <title>Some title</title>
    //             <link rel="stylesheet" href="/css/main.css">
    //             <script>
    //                 window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
    //             </script>
    //            <script src="/bundle.js" defer></script>
    //         </head>
    //         <body>
    //
    //             <div id="root">${html}</div>
    //
    //         </body>
    //         </html>
    //     `);
};