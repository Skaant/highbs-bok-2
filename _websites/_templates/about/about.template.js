import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'A propos, quel est le sens de ce site ? | ' + data.title,
    description: "Parce qu'il est écrit en ABS-LANG, qu'il en définit la structure, autant que sa structure est définie par l'ABS-LANG; vous devez avoir quelques questions sur l'emploi ou l'origine de ce livre ...",
    content: `<div id="eras">
    <div class="d-flex justify-content-center">
      <img class="position-absolute" id="top-image" src="/assets/images/highbs-to-hol-adin.svg" style="min-width: 800px"/>
    </div>
    <div class="container position-relative">
      <h1>À propos</h1>
      <p>Quel est le sens de ce site ?</p>
      <h2 class="mb-3">Est-ce à moi de répondre ?</h2>
      <h2 class="mb-3">Spéculer sur un avenir positif</h2>
      <h2 class="mb-3">La question de la fin de l'univers</h2>
      <h2 class="mb-3">Comment l'utiliser ?</h2>
      <h2 class="mb-3">La question du
        <span class="lexic text-laser">PSIK</span>
      </h2>
      <h2 class="mb-3">Pour qui ? Pourquoi ?</h2>
    </div>
  </div>`
  })