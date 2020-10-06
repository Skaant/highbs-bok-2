import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'A propos, quel est le sens de ce site ? | ' + data.title,
    description: "Parce qu'il est écrit en ABS-LANG, qu'il en définit la structure, autant que sa structure est définie par l'ABS-LANG; vous devez avoir quelques questions sur l'emploi ou l'origine de ce livre ...",
    content: `about`
  })