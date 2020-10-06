import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'ERA ' + data.era.index
      + ' | ' + data.title,
    description: '...',
    content: `era`
  })