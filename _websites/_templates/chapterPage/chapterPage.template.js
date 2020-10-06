import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'Page ' + (data.page.index + 1)
      + ' | ' + data.title,
    description: '...',
    content: `chapter page`
  })