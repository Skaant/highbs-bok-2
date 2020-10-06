import showdown from 'showdown'
import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => {
  
  const { era, chapter } = data

  const converter = new showdown.Converter({
    simpleLineBreaks: true
  })
  
  return layoutFragment(
    data,
    {
      title: chapter.title
        + ' (ERA ' + era.index
        + ', chapitre ' + (chapter.index + 1)
        + ') | ' + data.title,
      description: chapter.description,
      content: `<div id="${ era.id }">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Accueil</a></li>
            <li class="breadcrumb-item">
              <a href="/7-eras">7 ERAS</a></li>
            <li class="breadcrumb-item">
              <a href="/era-${ era.index }">
              ERA ${ era.index === 0 ? '??' : era.index }. ${
                era.title }</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Chapitre ${ chapter.index + 1}.</li>
          </ol>
        </nav>
        <h1>${ chapter.title }</h1>
        <p>${ chapter.description }</p>
        ${ converter.makeHtml(chapter.content) }
        ${
          chapter.pages
            ? chapter.pages.map((page, index) =>
            
              `
          <h2>
            <a href="/era-${ era.index }/${
              chapter.index + 1 }-${ chapter.id }/${
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
}