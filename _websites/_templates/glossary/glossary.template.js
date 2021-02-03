import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'Glossaire des termes spécifiques à l\'HIGHBS-BOK | ' + data.title,
    description: "Que signifie HIGHBS ? ZUMS ou encore ERAS ? "
      + "Des termes spéciaux pour partir sur une base imaginative vierge.",
    content: `<div id="glossary">
    <div class="container content-container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <h1>
            Les termes spécifiques à
            <span class="lexic">HIGHBS-BOK</span>
          </h1>
          <p>
            Quelques mots écrits en majuscule se baladent dans
            l'<span class="lexic">HIGHBS-BOK</span>, et pour cause :
            ce sont des concepts propres à l'univers !
            Mais rassurez-vous, la plupart sont très transparents ;)</p>
          <p>Voici les termes par ordre alphabétique :</p>
          <table class="table">
      ${
        Object.entries(data.glossary)
          .map(([ key, value ]) =>
          
          `
        <tr id="${ key }">
          <td>
            <b>${ key }</b>
          </td>
          <td>
            ${ value }
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