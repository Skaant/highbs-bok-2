import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: '7 ERAS, une histoire en sept actes (+ un ?) | ' + data.title,
    description: "En réalité, ce que l'HIGHBS-BOK c'est raconter l'histoire des ZUMS. La ZUMS SAGA décrit le départ des ZUMS de leur planète, TERA, leur conquête de l'univers et leur fixation dans le HOL-ADIN, le tout-un.",
    content: `<div id="seven-eras">
    <div class="d-flex justify-content-center position-absolute w-100">
      <img id="top-image" src="/assets/images/7-eras.svg" style="margin-top: calc(10vw + 10vh); width: 100vh;">
    </div>
    <div class="container position-relative">
      <h1>
        7
        <span class="lexic text-laser">ERAS</span>
      </h1>
      <p>Les sept actes de l'histoire des
        <span class="lexic text-laser">ZUMS</span></p>
        ${
          data.book.sections.map((era, index) =>
            
            `
          <h2>
            <a href="/era-${ index }">
              ERA ${
                index === 0 ? '??' : index
              } : ${ era.title }</a>
          </h2>
          <p>${ era.description }</p>
          ${ era.sections
            ? `
          <ol>
            ${
              era.sections.map((chapter, jndex) =>
                
                `
            <li>
              <a href="/era-${ index }/${
                jndex + 1 }-${ chapter.id }">
                ${ chapter.title }</a>
            </li>`)
            }
          </ol>
          `

            : ''
          }
          `)
            .join('\n')
        }
    </div>
  </div>`
  })