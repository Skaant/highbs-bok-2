import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: '7 ERAS, une histoire en sept actes (+ un ?) | ' + data.title,
    description: "En réalité, ce que l'HIGHBS-BOK c'est raconter l'histoire des ZUMS. La ZUMS SAGA décrit le départ des ZUMS de leur planète, TERA, leur conquête de l'univers et leur fixation dans le HOL-ADIN, le tout-un.",
    content: `7 eras`
  })