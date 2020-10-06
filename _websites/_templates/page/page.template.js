import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: data.page.title
      + ' (ERA ' + data.era.index
      + ', chapitre ' + (data.chapter.index + 1)
      + ', page ' + (data.page.index + 1)
      + ') | ' + data.title,
    description: data.page.description,
    content: `<div id="${ data.page.id }">
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
          <li class="breadcrumb-item">
            <a href="/era-${ data.era.index }/${
                  data.chapter.index + 1 }-${ data.chapter.id }">
              Chapitre ${ data.chapter.index + 1}. ${ data.chapter.title }</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Page ${ data.page.index + 1}.</li>
        </ol>
      </nav>
      <h1>${ data.page.title }</h1>
      <p>${ data.page.content }</p>
    </div>
  </div>
    `
  })