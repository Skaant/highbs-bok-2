import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'Explorez l\'univers de l\'HIGHBS-BOK | ' + data.title,
    description: "Ce n'est pas une encyclopédie, mais voici quelques clés pour améliorer sa lecture de l'HIGHBS-BOK.",
    content: `<div id="eras">
    <div class="container content-container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <h1>L'univers de l'<span class="lexic">HIGHBS-BOK</span></h1>
          <p>Quelques pages pour en savoir plus :</p>
          <ul>
            <li>
              <a href="/7-eras">
                7
                <span class="lexic">ERAS</span>
              </a>, les sept périodes de l'histoire des <span class="lexic">ZUMS</span>,
            </li>
            <li>
              <a href="/glossaire">Le glossaire</a>
              des termes spécifiques à l'<span class="lexic">HIGHBS-BOK</span>,</li>
            <li>
              <a href="/couleurs">Les couleurs</a>
              utilisées dans les illustrations.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
  })