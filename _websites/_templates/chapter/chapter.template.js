import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: data.chapter.title
      + ' (ERA ' + data.era.index
      + ', chapitre ' + (data.chapter.index + 1)
      + ') | ' + data.title,
    description: data.chapter.description,
    content: `<div id="${ data.era.id }">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Accueil</a></li>
          <li class="breadcrumb-item">
            <a href="/7-eras">7 ERAS</a></li>
          <li class="breadcrumb-item">
            <a href="/era-${ data.era.index }">
            ERA ${ data.era.index === 0 ? '??' : data.era.index }. ${
              data.era.title }</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Chapitre ${ data.chapter.index + 1}.</li>
        </ol>
      </nav>
      <h1>${ data.chapter.title }</h1>
      <p>${ data.chapter.description }</p>
      <p>${ data.chapter.content }</p>
      ${
        data.chapter.pages
          ? data.chapter.pages.map((page, index) =>
          
            `
        <h2>
          <a href="/era-${ data.era.index }/${
            data.chapter.index + 1 }-${ data.chapter.id }/${
            index + 1 }-${ page.id }">
            Page ${ index + 1 } : ${ page.title }</a>
        </h2>
        `)
            .join('\n')

        : ''
      }
    </div>
  </div>
    `
  })