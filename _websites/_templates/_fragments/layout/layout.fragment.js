export default (
  data,
  {
    title,
    description,
    content
  }) => `<!DOCTYPE html>
<html lang=${ data.lang }>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="${ description }">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>${ title }</title>
    <link rel="icon" type="image/svg+xml" href="/assets/images/highbs.svg">
    <link href="/assets/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <nav class="navbar navbar-expand-md z-depth-0 pt-2 mb-4 py-3">
      <a class="navbar-brand text-laser ml-2" href="/" style="font-size: 1.75rem">
        <span class="lexic text-laser">HIGHBS-BOK</span>
        <img src="/assets/images/highbs.svg" style="height: 32px">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-menu" aria-controls="collapsible-menu" aria-expanded="false" aria-label="Afficher le menu">
        <span class="text-laser fas fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsible-menu">
        <ul class="navbar-nav flex-row justify-content-end ml-auto mt-2 mt-md-0">
          <li class="nav-item mt-0 mr-2">
            <a class="text-laser" href="/7-eras">
              7
              <span class="lexic text-laser">ERAS</span>
            </a>
          </li>
          ·
          <li class="nav-item mt-0 ml-2 mr-3">
            <a class="text-laser" href="/about">
              À propos</a>
          </li>
        </ul>
      </div>
    </nav>
    ${ content }
    <script src="/assets/jquery-3.5.1.slim.min.js"></script>
    <script src="/assets/app.js"></script>
  </body>
</html>`