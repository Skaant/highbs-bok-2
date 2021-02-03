import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'Palette couleurs de l\'HIGHBS-BOK | ' + data.title,
    description: "Les couleurs ont cette vertu de pouvoir, comme les mots, s'assembler en langage.",
    content: `<div id="colors">
    <div class="container content-container">
      <img class="w-100 col-12 p-0 position-absolute"
          style="top: 0; left: 0; z-index: -1"
          src="/assets/images/hb-rivers.svg"/>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h1>
            Les couleurs de l'
            <span class="lexic">HIGHBS-BOK</span>
          </h1>
          <p>
            Pour nous permettre de mieux lire cet univers visuel,
            j'utilise un code couleur qui, comme
            <a href="/glossaire">le glossaire</a> pour les mots,
            définit un ensemble de significations.</p>
          <p>Voici les concordances couleur-définition,
            par ordre d'apparition dans l'<span class="lexic">HIGHBS-BOK</span> :</p>
          <table class="table bg-white">
            ${
              data.colors.map(color =>
          
          `
        <tr>
          <td>
            <span class="badge rounded-pill w-100"
                style="background-color: ${ color.h }">
              &nbsp;</span>
          </td>
          <td>
            ${ color.summary }
          </td>
        </tr>`)
            .join('\n')
            }
          </table>
        </div>
      </div>
    </div>
  </div>`
  })