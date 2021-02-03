import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'A propos, quel est le sens de ce site ? | ' + data.title,
    description: "Comme il écrit, abstrait; vous devez avoir quelques questions sur l'emploi ou l'origine de ce livre ...",
    content: `<div id="eras">
    <div class="container content-container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <h1>À propos</h1>
          <p>Quel est le sens de ce projet ?</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">Est-ce à moi de répondre ?</h2>
          <p>
            Je suis une génétique exposée à un quart de siècle
            d'expériences, de lectures et d'aventures.</p>
          <p>
            Au cours de ces années, le contenu (idées) que j'ai consommé
            à commencer à ressortir pour en former du "nouveau"
            (digestion / recyclage).
            D'abord balbutiant, la vie c'est apprendre à peaufiner son
            art : l'expression de son interiorité.</p>
          <p>
            Donc au final, **consommez et dites-moi quel est le
            sens de projet**.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">Spéculer sur un avenir positif</h2>
          <p>
            Beaucoup de de science-fiction décrit
            des guerres, des apocalypses, des intrigues.</p>
          <p>
            Moi j'en ai un peu marre parce qu'on m'a dit à
            l'auto-école de regarder le bout de la route pour
            rester dessus.
            Et là voilà le bout de la route qu'on me donne.</p>
          <p>
            Donc je tente, sans prétention, d'imaginer un
            univers où l'équivalent des humains vivent une
            véritable utopie, prise en plus dans un processus
            d'amélioration continuer.</p>
          <p>
            <i>Au fond, je pense qu'on va s'en sortir grâce à
            notre imagination.</i></p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">La question de la fin de l'univers</h2>
          <p>
            On a des idées sur la création de l'univers.
            Quelques idées sur sa fin aussi.
          </p>
          <p>
            Vaguement physique, méta-physique oui,
            dans cette histoire j'invente une "fin" de l'univers
            **où le tout se résorbe en un**.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">Comment l'utiliser ?</h2>
          <p>Le plus simple est de le lire</p>
          <p>
            On peut également utiliser les images,
            pour mettre en relation (ou non) le texte.
          </p>
          <p>
            Ensuite plusieurs manières de lire :
            <ul>
              <li>Rapidement "sans comprendre",</li>
              <li>Suivre l'histoire,</li>
              <li>Ouvrir une page au hasard pour y
                prendre ce qu'il y a à prendre.</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">La question du
            <span class="lexic">PSIK</span>
          </h2>
          <p>
            Je ne fait pas la promotion de tous les PSIK.</p>
          <p>
            En leurs âme et conscience, tous ont leurs PSIKS,
            tous ont leurs pratiques.
            Tant que cela ne me cause pas de tort, qui
            suis-je pour juger ?</p>
          <p>
            Maintenant j'ai quelques prédilections :
            la lecture, la méditation, le sport et
            420 blaze it mate.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">Pour qui ? Pourquoi ?</h2>
          <p>
            Pour les philosophes : ceux qui aiment penser.</p>
          <p>
            Pour ceux qui n'ont pas froid au troisième oeil.
            Qui cherchent la vérité qui n'est ni vérité ni pas vérité.</p>
          <p>
            Aussi pour tous ceux qui veulent se laisser
            aller dans un flot d'idées <b>pour en générer de nouvelles</b>
            (re-blaze it m8).</p>
          <p>
            Donc pour se divertir tout en recevant des idées
            très très abstraites.
            Attention ;)</p>
        </div>
      </div>
    </div>
  </div>`
  })