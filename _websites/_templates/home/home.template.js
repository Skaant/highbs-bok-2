import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'DO HOL-ADIN ! Pour le Tout-Un ! | ' + data.title,
    description: 'L\'HIGHBS-BOK contient toute l\'histoire des ZUMS, ces singes intelligents, conscients d\'eux-même et cultivés, qui sont allés jusqu\'au bord de l\'univers et sont revenus.',
    content: `<div id="home">
    <div class="d-flex justify-content-center">
      <img class="position-absolute" id="top-image" src="/assets/images/highbs-to-hol-adin.svg"/>
    </div>
    <div class="container position-relative">
      <div class="row">
        <div class="col-12 col-md-8">
          <h1>
            <span class="lexic text-laser">DO</span>
            <span><span class="lexic text-gold">HOL-ADIN</span></span> !
          </h1>
          <p>Jusqu'au tout-un !</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-8">
          <h2 class="mb-3">
            <span class="lexic text-laser">HIGHBS-BOK</span>
            , l'absolu livre des motifs
          </h2>
          <p>Une histoire pour illustrer les concepts les plus haut perchés.</p>
          <p>Mes yeux se sont posés sur l'<span class="lexic text-laser">HIGHBS-BOK</span>
            , mais, une fois revenu, ni ma mémoire, ni ma bouche,
            ne savaient l'exprimer.</p>
          <p>Personne n'a ouvert la brêche, elle l'a toujours été.</p>
          <p>Il nous faut parler directement le langage des idées, et tenter de dévoiler ce qui est au-delà des formes.</p>
        </div>
      </div>
      <div class="row justify-content-end"><div class="col-12 col-md-8">
        <h2 class="mb-3">
          Le grand <span class="lexic text-gold">HOL-ADIN</span>
          des <span class="lexic text-laser">ZUMS</span>
        </h2>
        <p>
          Une histoire pour raconter l'épopée des
          <span class="lexic text-laser">ZUMS</span>
          à travers l'univers, jusqu'au
          <span class="lexic text-gold">HOL-ADIN</span>
          : le tout-un.</p>
        <p>
          Je vais te raconter une histoire qui m'a été raconté à d'innombrables reprises par le passé :
          dans les livres, par la voix, dans les mille motifs qui composent le patrimoine de notre humanité.</p>
        <p>
          Ce que je raconte, c'est la saga des
          <span class="lexic text-laser">ZUMS</span>
          , ces singes à la culture trés évoluée qui ont
          remplis l'espace et atteint chaque recoin de l'univers.</p>
        <p>
          C'est la façon dont ils ont su mettre de côtés leurs aspirations individuelles pour reconnaître l'immanence
          du <span class="lexic text-gold">HOL-ADIN</span>
          , sa supériorité, son absoluité.</p>
        <p>
          Et comment ils l'ont finalement atteint.</p>
      </div>
      <div class="row">
        <div class="col-12 col-md-8">
          <h2 class="mb-3">
            <a href="/7-eras">7 <span class="lexic text-laser">ERAS</span></a>
            pour conquérir l'infini et revenir
          </h2>
          <p>
            Une histoire en sept actes pour une proposition optimiste, en harmonie avec le nature et jusqu'à la fin des temps.</p>
          <p>
            Une vision pour le présent et l'avenir de tous les êtres vivants.</p>
          <p>
            Une saga au delà des images, répétées depuis des milliers de générations
            et pour les millions de milliards de générations à venir.</p>
          <p>
            Notre coeur, notre âme, notre lueur.</p>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-12 col-md-8">
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
        <div class="col-12 col-md-8">
          <h2 class="mb-3">Mises-à-jour récentes</h2>
          <p>
            Je suis en vie, le livre aussi. L'
            <span class="lexic text-laser">HIGHBS-BOK</span>
            est régulièrement mis à jour, et j'essaie de notifier ses changements ici.</p>
          <ul>
            <li>
              Rajout d'un niveau intermédiaire entre
              <span class="lexic text-laser">ERA</span> et page : section</li>
            <li>
              Chaque niveau de groupement (
              <span class="lexic text-laser">ERA</span>
              , section, page) aura sa page indivudelle dédiée</li>
            <li>Avancées sur les pages 1, 2, 3 (
              <span class="lexic text-laser">ERA</span>
              ??, section 1)</li>
            <li>
              Avancées sur tous les titres d'
              <span class="lexic text-laser">ERAS</span>
              , sections et pages</li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-12 col-md-8">
          <h2 class="mb-3">Roadmap</h2>
          <p>Une liste non-exhaustive du contenu et des fonctionnalités envisagés.</p>
          <ul>
            <li>
              Transfert du storyboard de Mai 2020 en architecture de la trame des
              <span class="lexic text-laser">ERAS</span></li>
          </ul>
        </div>
      </div>
    </div>`
  })