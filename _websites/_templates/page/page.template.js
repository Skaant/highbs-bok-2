import showdown from 'showdown'
import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => {

  const { era, chapter, page } = data

  const converter = new showdown.Converter({
    simpleLineBreaks: true
  })
  
  return layoutFragment(
    data,
    {
      title: page.title
        + ' (ERA ' + era.index
        + ', chapitre ' + (chapter.index + 1)
        + ', page ' + (page.index + 1)
        + ') | ' + data.title,
      description: page.description,
      content: `<div id="${ page.id }">
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
            <li class="breadcrumb-item">
              <a href="/era-${ era.index }/${
                    chapter.index + 1 }-${ chapter.id }">
                Chapitre ${ chapter.index + 1}. ${ chapter.title }</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Page ${ page.index + 1}.</li>
          </ol>
        </nav>
        <h1>${ page.title }</h1>
        ${ converter.makeHtml(page.content) }
      </div>
    </div>
      `
    })
}