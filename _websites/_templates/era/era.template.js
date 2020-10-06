import showdown from 'showdown'
import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => {

  const { era } = data

  const converter = new showdown.Converter({
    simpleLineBreaks: true
  })
  
  return layoutFragment(
    data,
    {
      title: 'ERA ' + (era.index === 0 ? '??' : era.index)
        + ' : ' + era.title
        + ' | ' + data.title,
      description: era.description,
      content: `<div id="${ era.id }">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Accueil</a></li>
            <li class="breadcrumb-item">
              <a href="/7-eras">7 ERAS</a></li>
            <li class="breadcrumb-item" active" aria-current="page">
              <a href="/era-${ era.index }">
              ERA ${ era.index === 0 ? '??' : era.index }. ${
                era.title }</a></li>
          </ol>
        </nav>
        <h1>
          <span class="lexic text-laser">ERA</span>
          ${ era.index === 0 ? '??' : era.index } :
          ${ era.title }
        </h1>
        <p>${ era.description }</p>
        ${ converter.makeHtml(era.content) }
        ${
          era.sections
            ? era.sections.map((chapter, index) =>
            
              `
          <h2>
            <a href="/era-${ era.index }/${
              index + 1 }-${ chapter.id }">
              Chapitre ${ index + 1 } : ${ chapter.title }</a>
          </h2>
          <p>${ chapter.description }</p>
          ${ chapter.pages
            ? `
          <ul class="list-unstyled">
            ${
              chapter.pages.map((page, jndex) =>
                
                `
            <li>
              <h3>
                <a href="/era-${ index }/${
                  index + 1 }-${ chapter.id }/${
                  jndex + 1 }-${ page.id }">
                  Page ${ jndex + 1 } : ${ page.title }</a>
              </h3>
            </li>`)
            }
          </ul>
            `

            : ''
          }
          `)
              .join('\n')

          : ''
        }
      </div>
    </div>
      `
    })
}