import PAGE from '../../../../kami.js/_shrine/website/_shrine/page/page.kami.js'
import FOLDER from '../../../../kami.js/_shrine/folder/folder.kami.js'
import homeTemplate from '../../../_templates/home/home.template.js'
import aboutTemplate from '../../../_templates/about/about.template.js'
import sevenErasTemplate from '../../../_templates/seven-eras/seven-eras.template.js'
import eraTemplate from '../../../_templates/era/era.template.js'
import chapterTemplate from '../../../_templates/chapter/chapter.template.js'
import pageTemplate from '../../../_templates/page/page.template.js'

export default (
  scope,
  data,
  options
) => ([
  /** / */
  PAGE.create(
    homeTemplate,
    data,
    scope,
    options
  ),
  /** /about */
  FOLDER.create(
    scope,
    'about',
    folderScope => ([
      /** /about/ */
      PAGE.create(
        aboutTemplate,
        data,
        folderScope,
        options
      )
    ])
  ),
  /** /7-eras */
  FOLDER.create(
    scope,
    '7-eras',
    folderScope => ([
      /** /7-eras/ */
      PAGE.create(
        sevenErasTemplate,
        data,
        folderScope,
        options
      )
    ])
  ),
  
  // ERAS : ERA-i
  ...data.book.sections.map((_era, index) => {

    const era = {
      ..._era,
      index
    }
        
    /** /era-:index */
    FOLDER.create(
      scope,
      'era-' + index,
      folderScope => ([

        /** /era-:index/ */
        PAGE.create(
          eraTemplate,
          {
            ...data,
            era
          },
          folderScope,
          options
        ),

        // CHAPTERS : ERA-i/j-<id>
        ...(era.sections
          ? era.sections.map((_chapter, index) => {

            const chapter = {
              ..._chapter,
              index
            }
            
            FOLDER.create(
              folderScope,
              (index + 1) + '-'
                + (chapter.id || 'chapitre'),
              folderScope => ([

                PAGE.create(
                  chapterTemplate,
                  {
                    ...data,
                    era,
                    chapter
                  },
                  folderScope,
                  options
                ),

                ...(chapter.pages
                  ? chapter.pages.map((page, index) =>
                  
                    FOLDER.create(
                      folderScope,
                      (index + 1) + '-'
                        + page.id,
                      folderScope => ([

                        PAGE.create(
                          pageTemplate,
                          {
                            ...data,
                            era,
                            chapter,
                            page: {
                              ...page,
                              index
                            }
                          },
                          folderScope,
                          options
                        )
                      ])
                    ))

                  : [])
              ])
            )
          })

          : [])
      ])
    )
  }),
])