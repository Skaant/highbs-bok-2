import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: '7 ERAS, une histoire en sept actes (+ un ?) | ' + data.title,
    description: "En réalité, ce que l'HIGHBS-BOK c'est raconter l'histoire des ZUMS. La ZUMS SAGA décrit le départ des ZUMS de leur planète, TERA, leur conquête de l'univers et leur fixation dans le HOL-ADIN, le tout-un.",
    content: `<div id="seven-eras">
    <div class="container content-container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <h1>
            7
            <span class="lexic text-laser">ERAS</span>
          </h1>
          <p>Les sept actes de l'histoire des
            <span class="lexic text-laser">ZUMS</span></p>
          <p>Vous suivez le narrateur dans son exploration de toutes les époques
            marquantes de l'épopée des ZUMS à travers l'espace et le temps.</p>
          <p>De la mise au point du HOL-ONG, le réseau de conscience collective,
            jusqu'au siège de la dernière ville de l'univers par les forces du chaos;
            découvrez les idées les plus folles sur l'avenir, la nature et le sens de toutes choses.</p>
        </div>
      </div>
      ${
        data.eras.map((era, index) =>
          
          `
        <div class="row">
          <div class="col-12 col-lg-8">
            <h2 class="mb-3">
              ERA ${
                index === 0 ? '??' : index
              } : ${ era.name }
            </h2>
            <p>${ era.summary }</p>
          </div>
        </div>`)
            .join('\n')
      }
    </div>
  </div>`
  })