import websitePageMotif from 'motifs-js/_motifs/website-page/website-page.motif.js'
import websiteFolderMotif from 'motifs-js/_motifs/website-folder/website-folder.motif.js'
import homeTemplate from '../../../_templates/home/home.template.js'
import aboutTemplate from '../../../_templates/about/about.template.js'
import sevenErasTemplate from '../../../_templates/seven-eras/seven-eras.template.js'
import eraTemplate from '../../../_templates/era/era.template.js'

export default (
  data,
  options
) => ({
  '': websitePageMotif.shape(
    homeTemplate,
    data
  ),
  'about': websitePageMotif.shape(
    aboutTemplate,
    data
  ),
  '7-eras': websiteFolderMotif.shape({
    '': websitePageMotif.shape(
      sevenErasTemplate,
      data
    ),
    ...data.book.sections.reduce(
      (acc, era) => ({
        ...acc,
        [era.id]: websitePageMotif.shape(
          eraTemplate,
          {
            data,
            era
          }
        )
      }),
      {}
    )
  })
})