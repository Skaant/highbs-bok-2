import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'Jusqu\'au tout-un ! Le livre du motif absolu | ' + data.title,
    description: 'L\'HIGHBS-BOK contient toute l\'histoire des ZUMS, ces singes intelligents, conscients d\'eux-même et cultivés, qui sont allés jusqu\'au bord de l\'univers et sont revenus.',
    content: `<div id="home">
    <div class="d-flex justify-content-center">
      <img class="position-absolute w-100" id="top-image" src="/assets/images/hb-banner.svg"/>
    </div>
    <div class="container-lg position-relative content-container">
      <div class="row">
        <div class="col-12">
          <h1>Le livre du motif absolu</h1>
          <p>Jusqu'au
            <span class="bg-gold">tout-un</span>
            !
        </div>
      </div>
      <div class="row bg-gold-light">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">
            Téléchargez gratuitement le livret démo (5 chapitres / 14)
            du premier volume de l'<span class="lexic">HIGHBS-BOK</span> !</h2>
          <p>
            Bientôt disponible entièrement illustrée, au format électronique
            ou papier; découvrez les premiers chapitres de la palpitante épopée
            des ZUMS à travers l'espace.
          </p>
          <p>
            Cliquez <a href="/assets/HIGHBS-BOK 1 - livret démo.pdf">sur ce lien</a>,
            pour télécharger le livret démo :D
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">
            Un livre pour l'Illumination</h2>
          <p>
            Alors que j'explorais le monde de l'esprit,
            mes yeux se sont posés sur les brumes dorées
            les plus proches de l'<span class="lexic text-gold">HIGHBS</span>.
            <br/>
            Mais, une fois revenu, ni ma mémoire, ni ma bouche,
            ne savaient l'exprimer.</p>
          <p>
            <b>Les idées étaient trop hautes perchées</b>,
            je n'avais pas de mots.
            <br/>
            Il m'a fallu trouver les motifs,
            et les images pour pouvoir en parler,
            t'en parler.</p>
          <p>
            C'est pourquoi,
            afin de dévoiler un peu plus ces montagnes
            de vertus et de perfection,
            j'ai assemblé l'<span class="lexic text-laser">HIGHBS-BOK</span>.</p>
        </div>
      </div>
      <div class="row justify-content-end"><div class="col-12 col-lg-8">
        <h2 class="mb-3">
          La grande histoire
          des <span class="lexic">ZUMS</span>
        </h2>
        <p>Notre monde de formes ne sert-il pas juste de support à
          la dérivation du motif absolu ? C'est ce que croient les ZUMS.</p>
        <p>
          Pour se faire comprendre, l'<span class="lexic text-laser">HIGHBS-BOK</span>
          raconte la saga des
          <span class="lexic text-laser">ZUMS</span>
          , ces singes à la culture trés évoluée qui ont
          remplis l'espace et atteint chaque recoin de l'univers.</p>
        <p>
          C'est la façon dont ils ont su mettre de côtés leurs
          aspirations individuelles pour reconnaître l'immanence
          du <span class="lexic text-gold">HOL-ADIN</span>
          , sa supériorité, son absoluité.
          <br/>
          Et comment ils l'ont finalement atteint.</p>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">
            7 époques, 
            <a href="/7-eras">7 <span class="lexic text-laser">ERAS</span></a>
            pour conquérir l'infini et revenir
          </h2>
          <p>
            Un manifeste optimiste en sept périodes
            pour un avenir profondément intégré à la nature,
            profondément tourné vers <b>la fixation du tout dans l'harmonie éternelle</b>.
          <p>
            Depuis leurs débuts sur <span class="lexic text-laser">TERA</span>,
            les <span class="lexic text-laser">ZUMS</span> ont traversé
            d'innombrables péripéties à travers des ères de temps parfois
            longue comme l'infini.</p>
          <p>Pour suivre au mieux leur adaptation,
            l'<span class="lexic text-laser">HIGHBS-BOK</span>
          <p>
            Cette histoire a déjà été raconté d'innombrables fois.
            Dans les livres, par la voix,
            dans les mille motifs qui composent le patrimoine de notre humanité.
            <br/>
            Puisses cette forme contribuer à percer quelques nuages.</p>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">Ouvrir le livre</h2>
          <p>Ce site, le <b>reflet changeant</b> de l'
          <span class="lexic text-laser">HIGHBS-BOK</span>
          sur les vagues de nos esprits.</p>
        <p>
          Je l'ai découpé en sept périodes, elles-même découpées en plusieurs sections de plusieurs pages.</p>
        <p>
          Mais au fond, le plan de ce livre tu le connais : il est à l'intérieur de toi.</p>
        <p>
          Je te tends un miroir, tu es libre de le jeter.</p>
        <h3 class="mt-4">
          <a href="/0/1/1">Commencez à lire (<span class="lexic text-laser">ERA</span> ?? : <span class="title">L'éveilleur</span>)</a>
        </h3>
        <h3>
          <a href="/7-eras">Sommaire (7 <span class="lexic text-laser">ERAS</span>)</a>
        </h3>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="mb-3">Mises-à-jour récentes</h2>
          <p>
            Je suis en vie, le livre aussi. L'
            <span class="lexic text-laser">HIGHBS-BOK</span>
            est régulièrement mis à jour, et j'essaie de notifier ses changements ici.</p>
          <ul>
            <li>
              <b>Passage du code source du projet sur le framework
                <a href="https://github.com/Skaant/motif.js">\`motif.js\`</a></b></li>
            <li>
              Amélioration des URLs des sections
                (ERA, chapitres) et des pages pour être plus lisibles.</li>
            <li>
              Intégration du storyboard de Mai 2020
                (scan en cours de transfert sur
                <a href="https://imrok.fr">imrok.fr</a>).</li>
            <li>
              Amélioration des balises <i>title</i> et
                méta description pour un contenu
                plus cohérent, toujours basé sur
                les données de la page ou section.</li>
          </ul>
        </div>
      </div>
    </div>`
  })