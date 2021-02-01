**Built on [`kami.js`](https://github.com/Skaant/kami.js) !**
  
*[24 KAMIS](#kamis-glossary)
on 10/7/2020, 4:47:53 PM*

# highbs-bok-2

> Absolute book of patterns' sources.

![The HIGHBS pictogram](/_websites/default/_assets/images/highbs.svg)

### Table of content

* [KAMIS glossary](#kamis-glossary)

## KAMIS' glossary
    
* [*-BOOK](#-book) : Book

  * [*-BOOK-EXTRACT](#-book-extract) : Extract, Fragment, Atom

  * [*-BOOK-IMAGE](#-book-image) : Image, Picture, Illustration, Scan

  * [*-BOOK-PAGE](#-book-page) : Page

  * [*-BOOK-SECTION](#-book-section) : Section, Chapter, Part
* [*-COMMAND](#-command) : Command
* [*-DOC](#-doc) : Documentation
* [*-FILE](#-file) : File
* [*-FOLDER](#-folder) : Folder
* [*-GET](#-get) : Accesser, Obtain, Hydrater
* [*-INSTANCE](#-instance) : Instance
* [*-KAMI](#-kami) : Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva
* [*-LANG](#-lang) : Language
* [*-PANTHEON](#-pantheon) : Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven
* [*-PROP](#-prop) : Property, Characteristics, Attribute
* [*-README](#-readme) : README

  * [*-README-SECTION](#-readme-section) : Section
* [*-ШRᛏGHN](#-shrine) : Shrine
* [*-SPEC](#-spec) : Specification
* [*-UTIL](#-util) : Utility
* [*-WAY](#-way) : Method, Action, Operation, Function
* [*-WEBSITE](#-website) : Website

  * [*-WEBSITE-PAGE](#-website-page) : Page, Website page
* [*-WIKI](#-wiki) : Wiki

## `*-book`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-BOOK** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Book,
* [fr] Livre.

### Description

**ORDERED COLLECTION OF WRITINGS**

A BOOK content is made of smaller [KAMIS](#kami)/bricks :

* [BOOK-SECTIONS](#book-section),
  which split BOOK content in chapters or sub-sections;
  
* [BOOK-PAGES](#book-page),
  actually representing a scanned sheet of paper,
  but could also hold expected BOOK page outcome;
  
* [BOOK-EXTRACTS](#book-extract),
  which hold an atomic fragment of BOOK content.
  
**Note that BOOK is a top-level section
with just some specific meta-data.**

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `regExp`
* `get`
* `provision`

### Occurences

**Count : 1.**

Matching regular expression :

`/^\/_data(.*)\/([\w|\-]*)\/([\w|\-]*)\.book\.js/`.

* [`/_data/highbs-bok/highbs-bok.book.js`](/_data/highbs-bok/highbs-bok.book.js)


## `*-book-extract`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-BOOK-EXTRACT** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Extract, Fragment, Atom,
* [fr] Extrait, Fragment, Atome.

### Description

**BOOK EXTRACT**

A FRAGMENT is the smallest unit of [BOOK](#book) content.

It can be included inside a [SECTION](#section),
a [PAGE](#page) or directly on the BOOK root.

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 0.**

Matching regular expression :

`/\/_extracts\/(.*)\/(.*)\.extract\.js/`.




## `*-book-image`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-BOOK-IMAGE** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Image, Picture, Illustration, Scan,
* [fr] Image, Illustration, Numérisation.

### Description

**BOOK VISUAL CONTENT**

Usually bound to a [WEBSITE-PAGE](#website-page) page,
BOOK-IMAGES are given in a [BOOK-SECTION](#book-section),
a [BOOK-EXTRACT](#book-extract) or in a [BOOK-PAGE](#book-page).

When the BOOK-PAGE, BOOK-EXTRACT or BOOK-SECTION is retrieved,
scoped BOOK-IMAGES are copied to the destination WEBSITE-PAGE folder.

### Properties

**Count: 5.**

* `id`
* `names`
* `description`
* `regExp`
* `copy`

### Occurences

**Count : 21.**

Matching regular expression :

`/\.(png|jpg|svg)$/`.

* [`/kami.js/logo.svg`](/kami.js/logo.svg)
* [`/kami.js/_shrine/kami/kami.picto.svg`](/kami.js/_shrine/kami/kami.picto.svg)
* [`/kami.js/_shrine/lang/lang.picto.svg`](/kami.js/_shrine/lang/lang.picto.svg)
* [`/kami.js/_shrine/prop/prop.picto.svg`](/kami.js/_shrine/prop/prop.picto.svg)
* [`/kami.js/_shrine/readme/readme.picto.svg`](/kami.js/_shrine/readme/readme.picto.svg)
* [`/kami.js/_shrine/shrine/shrine.picto.svg`](/kami.js/_shrine/shrine/shrine.picto.svg)
* [`/kami.js/_shrine/util/util.picto.svg`](/kami.js/_shrine/util/util.picto.svg)
* [`/_build/assets/images/7-eras.svg`](/_build/assets/images/7-eras.svg)
* [`/_build/assets/images/highbs-to-hol-adin.svg`](/_build/assets/images/highbs-to-hol-adin.svg)
* [`/_build/assets/images/highbs.svg`](/_build/assets/images/highbs.svg)
* [`/_build/assets/images/hol-adin.svg`](/_build/assets/images/hol-adin.svg)
* [`/_build/era-3/1-spores-de-conscience/1-nouvelles-branches-sur-grand-arbre/kolos-seed-vessels.jpg`](/_build/era-3/1-spores-de-conscience/1-nouvelles-branches-sur-grand-arbre/kolos-seed-vessels.jpg)
* [`/_build/era-5/1-champ-dix-mille-joyaux/contraction-era-schema.jpg`](/_build/era-5/1-champ-dix-mille-joyaux/contraction-era-schema.jpg)
* [`/_build/era-5/2-l-angk/contraction-era-schema.jpg`](/_build/era-5/2-l-angk/contraction-era-schema.jpg)
* [`/_build/era-5/contraction-era-schema.jpg`](/_build/era-5/contraction-era-schema.jpg)
* [`/_data/highbs-bok/_sections/era-3/_sections/1-spores-de-conscience/_pages/1/_images/kolos-seed-vessels.jpg`](/_data/highbs-bok/_sections/era-3/_sections/1-spores-de-conscience/_pages/1/_images/kolos-seed-vessels.jpg)
* [`/_data/highbs-bok/_sections/era-5/_images/contraction-era-schema.jpg`](/_data/highbs-bok/_sections/era-5/_images/contraction-era-schema.jpg)
* [`/_websites/default/_assets/images/7-eras.svg`](/_websites/default/_assets/images/7-eras.svg)
* [`/_websites/default/_assets/images/highbs-to-hol-adin.svg`](/_websites/default/_assets/images/highbs-to-hol-adin.svg)
* [`/_websites/default/_assets/images/highbs.svg`](/_websites/default/_assets/images/highbs.svg)
* [`/_websites/default/_assets/images/hol-adin.svg`](/_websites/default/_assets/images/hol-adin.svg)


## `*-book-page`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-BOOK-PAGE** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Page,
* [fr] Page.

### Description

**PHYSICAL CONTENT FRAGMENT**

PAGE can hold [SECTIONS](#section)
and [EXTRACTS](#extracts).

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `regExp`
* `get`
* `provision`

### Occurences

**Count : 14.**

Matching regular expression :

`/\/_pages\/(.*)\/(.*)\.page\.js/`.

* [`/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/_pages/1/1.page.js)
* [`/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/_pages/2/2.page.js`](/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/_pages/2/2.page.js)
* [`/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/_pages/3/3.page.js`](/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/_pages/3/3.page.js)
* [`/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/_pages/4/4.page.js`](/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/_pages/4/4.page.js)
* [`/_data/highbs-bok/_sections/era-1/_sections/1-singes-tristes-singes-libres/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-1/_sections/1-singes-tristes-singes-libres/_pages/1/1.page.js)
* [`/_data/highbs-bok/_sections/era-2/_sections/1-grand-arbre/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-2/_sections/1-grand-arbre/_pages/1/1.page.js)
* [`/_data/highbs-bok/_sections/era-3/_sections/1-spores-de-conscience/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-3/_sections/1-spores-de-conscience/_pages/1/1.page.js)
* [`/_data/highbs-bok/_sections/era-4/_sections/1-piliers-de-la-religion/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-4/_sections/1-piliers-de-la-religion/_pages/1/1.page.js)
* [`/_data/highbs-bok/_sections/era-4/_sections/2-fin-de-toute-chose/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-4/_sections/2-fin-de-toute-chose/_pages/1/1.page.js)
* [`/_data/highbs-bok/_sections/era-5/_sections/1-champ-dix-mille-joyaux/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-5/_sections/1-champ-dix-mille-joyaux/_pages/1/1.page.js)
* [`/_data/highbs-bok/_sections/era-5/_sections/1-champ-dix-mille-joyaux/_pages/2/2.page.js`](/_data/highbs-bok/_sections/era-5/_sections/1-champ-dix-mille-joyaux/_pages/2/2.page.js)
* [`/_data/highbs-bok/_sections/era-5/_sections/2-l-angk/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-5/_sections/2-l-angk/_pages/1/1.page.js)
* [`/_data/highbs-bok/_sections/era-6/_sections/1-etres-de-lumiere/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-6/_sections/1-etres-de-lumiere/_pages/1/1.page.js)
* [`/_data/highbs-bok/_sections/era-7/_sections/1-geode-adamai/_pages/1/1.page.js`](/_data/highbs-bok/_sections/era-7/_sections/1-geode-adamai/_pages/1/1.page.js)


## `*-book-section`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-BOOK-SECTION** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Section, Chapter, Part,
* [fr] Section, Chapitre, Partie.

### Description

**BOOK SUB-DIVISION**

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `regExp`
* `get`
* `provision`

### Occurences

**Count : 18.**

Matching regular expression :

`/^\/_data\/(.*)\/_sections\/(.*)\/(.*)\.section\.js/`.

* [`/_data/highbs-bok/_sections/era-0/era-0.section.js`](/_data/highbs-bok/_sections/era-0/era-0.section.js)
* [`/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/le-narrateur.section.js`](/_data/highbs-bok/_sections/era-0/_sections/1-le-narrateur/le-narrateur.section.js)
* [`/_data/highbs-bok/_sections/era-1/era-1.section.js`](/_data/highbs-bok/_sections/era-1/era-1.section.js)
* [`/_data/highbs-bok/_sections/era-1/_sections/1-singes-tristes-singes-libres/singes-tristes-singes-libres.section.js`](/_data/highbs-bok/_sections/era-1/_sections/1-singes-tristes-singes-libres/singes-tristes-singes-libres.section.js)
* [`/_data/highbs-bok/_sections/era-2/era-2.section.js`](/_data/highbs-bok/_sections/era-2/era-2.section.js)
* [`/_data/highbs-bok/_sections/era-2/_sections/1-grand-arbre/grand-arbre.section.js`](/_data/highbs-bok/_sections/era-2/_sections/1-grand-arbre/grand-arbre.section.js)
* [`/_data/highbs-bok/_sections/era-3/era-3.section.js`](/_data/highbs-bok/_sections/era-3/era-3.section.js)
* [`/_data/highbs-bok/_sections/era-3/_sections/1-spores-de-conscience/spores-de-conscience.section.js`](/_data/highbs-bok/_sections/era-3/_sections/1-spores-de-conscience/spores-de-conscience.section.js)
* [`/_data/highbs-bok/_sections/era-4/era-4.section.js`](/_data/highbs-bok/_sections/era-4/era-4.section.js)
* [`/_data/highbs-bok/_sections/era-4/_sections/1-piliers-de-la-religion/piliers-de-la-religion.section.js`](/_data/highbs-bok/_sections/era-4/_sections/1-piliers-de-la-religion/piliers-de-la-religion.section.js)
* [`/_data/highbs-bok/_sections/era-4/_sections/2-fin-de-toute-chose/fin-de-toute-chose.section.js`](/_data/highbs-bok/_sections/era-4/_sections/2-fin-de-toute-chose/fin-de-toute-chose.section.js)
* [`/_data/highbs-bok/_sections/era-5/era-5.section.js`](/_data/highbs-bok/_sections/era-5/era-5.section.js)
* [`/_data/highbs-bok/_sections/era-5/_sections/1-champ-dix-mille-joyaux/champ-dix-mille-joyaux.section.js`](/_data/highbs-bok/_sections/era-5/_sections/1-champ-dix-mille-joyaux/champ-dix-mille-joyaux.section.js)
* [`/_data/highbs-bok/_sections/era-5/_sections/2-l-angk/l-angk.section.js`](/_data/highbs-bok/_sections/era-5/_sections/2-l-angk/l-angk.section.js)
* [`/_data/highbs-bok/_sections/era-6/era-6.section.js`](/_data/highbs-bok/_sections/era-6/era-6.section.js)
* [`/_data/highbs-bok/_sections/era-6/_sections/1-etres-de-lumiere/etres-de-lumiere.section.js`](/_data/highbs-bok/_sections/era-6/_sections/1-etres-de-lumiere/etres-de-lumiere.section.js)
* [`/_data/highbs-bok/_sections/era-7/era-7.section.js`](/_data/highbs-bok/_sections/era-7/era-7.section.js)
* [`/_data/highbs-bok/_sections/era-7/_sections/1-geode-adamai/geode-adamai.section.js`](/_data/highbs-bok/_sections/era-7/_sections/1-geode-adamai/geode-adamai.section.js)


## `*-command`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-COMMAND** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Command,
* [fr] Commande.

### Description

**KAMI WAYS CLI INTERFACE**

Basically, a command bind a [`way`](#way) method
to match [`KAMI`](#kami) CLI entrypoint syntax.

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 4.**

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/_props\/_commands\/(.*)\/(.*).command.js/`.

* [`/kami.js/_shrine/kami/_props/_commands/create/create.command.js`](/kami.js/_shrine/kami/_props/_commands/create/create.command.js)
* [`/kami.js/_shrine/kami/_props/_commands/test/test.command.js`](/kami.js/_shrine/kami/_props/_commands/test/test.command.js)
* [`/kami.js/_shrine/readme/_props/_commands/build/build.command.js`](/kami.js/_shrine/readme/_props/_commands/build/build.command.js)
* [`/kami.js/_shrine/website/_props/_commands/build/build.command.js`](/kami.js/_shrine/website/_props/_commands/build/build.command.js)


## `*-doc`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-DOC** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Documentation,
* [fr] Documentation.

### Description

**TOP-LEVEL DOCUMENTATION KAMI**

DOC is composed of few sub-KAMIS :
* [README](#readme),
* [WIKI](#wiki),
* [WEBSITE](#website).

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `*-file`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-FILE** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] File,
* [fr] Fichier.

### Description

**File meta-data**

*Pattern should later be extended depending on
the file extension.*

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `create`
* `get`
* `copy`


## `*-folder`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-FOLDER** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Folder,
* [fr] Dossier.

### Description

**Folder meta-data**

Folder is represented by :
* Its `scope`, the path between project root
  and desired folder location,
* Its `name`, an unique identifier in its scope,
* Its `tree`, an object representing folders and
  files hierarchy inside top-level folder
  (a complex concept to define).


### Properties

**Count: 7.**

* `id`
* `names`
* `description`
* `create`
* `copy`
* `clear`
* `_specs`


## `*-get`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-GET** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Accesser, Obtain, Hydrater,
* [fr] Accesseur, Obtenir, Hydrateur.

### Description

**INSTANCE ACCESSERS**

GET is currently an abstract pattern
which may be implemented on sufficent
occurence rate and generic logics.

GET can declined on KAMI's occurences purposes :
* Access and update folders and files content,
* Import ESM modules,
* Access and update data from databases.

In any case, an object instance is created to
represent the actual occurence.

In the case of folders and files,
a regular expression is used for matching.


### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 7.**

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/_ways\/get\/get.way.js/`.

* [`/kami.js/_shrine/book/_shrine/page/_ways/get/get.way.js`](/kami.js/_shrine/book/_shrine/page/_ways/get/get.way.js)
* [`/kami.js/_shrine/book/_shrine/section/_ways/get/get.way.js`](/kami.js/_shrine/book/_shrine/section/_ways/get/get.way.js)
* [`/kami.js/_shrine/book/_ways/get/get.way.js`](/kami.js/_shrine/book/_ways/get/get.way.js)
* [`/kami.js/_shrine/file/_ways/get/get.way.js`](/kami.js/_shrine/file/_ways/get/get.way.js)
* [`/kami.js/_shrine/instance/_ways/get/get.way.js`](/kami.js/_shrine/instance/_ways/get/get.way.js)
* [`/kami.js/_shrine/kami/_ways/get/get.way.js`](/kami.js/_shrine/kami/_ways/get/get.way.js)
* [`/kami.js/_shrine/readme/_ways/get/get.way.js`](/kami.js/_shrine/readme/_ways/get/get.way.js)


## `*-instance`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-INSTANCE** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Instance,
* [fr] Instance.

### Description

**INDIVIDUAL OF ONE OR MULTIPLE KAMIS**

Instances are occurence of a [KAMI](#kami) (pattern).

They usually :
* Can be retrieved through [`<kami>.get`] way,
* Can be created through [`<kami>.create`] way,
* Can be tested through [`<kami>.test`] way,
* *(Not implemented) Can get updated and deleted*.

[KAMIS](#kami) (`<...>.kami.js`) are instances of KAMI-KAMI.

**KAMI-KAMI is an instance of itself !**

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `get`


## `*-kami`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-KAMI** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva,
* [fr] Concept, Idée, Mot, Motif, Esprit, Dieu, Ange, Deva.

### Description

**The KAMI of KAMIS.**

Kami are "enlived" patterns, making them
not only **generative** but also **evolutive**
in a similar way classes and objects are.

### Properties

**Count: 13.**

* `id`
* `names`
* `description`
* `regExp`
* `flavour`
* `_commands`
* `create`
* `get`
* `cli`
* `test`
* `specs`
* `_specs`
* `ave`

### Occurences

**Count : 24.**

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/(.*).kami.js/`.

* [`/kami.js/_shrine/book/book.kami.js`](/kami.js/_shrine/book/book.kami.js)
* [`/kami.js/_shrine/book/_shrine/extract/extract.kami.js`](/kami.js/_shrine/book/_shrine/extract/extract.kami.js)
* [`/kami.js/_shrine/book/_shrine/image/image.kami.js`](/kami.js/_shrine/book/_shrine/image/image.kami.js)
* [`/kami.js/_shrine/book/_shrine/page/page.kami.js`](/kami.js/_shrine/book/_shrine/page/page.kami.js)
* [`/kami.js/_shrine/book/_shrine/section/section.kami.js`](/kami.js/_shrine/book/_shrine/section/section.kami.js)
* [`/kami.js/_shrine/command/command.kami.js`](/kami.js/_shrine/command/command.kami.js)
* [`/kami.js/_shrine/doc/doc.kami.js`](/kami.js/_shrine/doc/doc.kami.js)
* [`/kami.js/_shrine/file/file.kami.js`](/kami.js/_shrine/file/file.kami.js)
* [`/kami.js/_shrine/folder/folder.kami.js`](/kami.js/_shrine/folder/folder.kami.js)
* [`/kami.js/_shrine/get/get.kami.js`](/kami.js/_shrine/get/get.kami.js)
* [`/kami.js/_shrine/instance/instance.kami.js`](/kami.js/_shrine/instance/instance.kami.js)
* [`/kami.js/_shrine/kami/kami.kami.js`](/kami.js/_shrine/kami/kami.kami.js)
* [`/kami.js/_shrine/lang/lang.kami.js`](/kami.js/_shrine/lang/lang.kami.js)
* [`/kami.js/_shrine/pantheon/pantheon.kami.js`](/kami.js/_shrine/pantheon/pantheon.kami.js)
* [`/kami.js/_shrine/prop/prop.kami.js`](/kami.js/_shrine/prop/prop.kami.js)
* [`/kami.js/_shrine/readme/readme.kami.js`](/kami.js/_shrine/readme/readme.kami.js)
* [`/kami.js/_shrine/readme/_shrine/section/section.kami.js`](/kami.js/_shrine/readme/_shrine/section/section.kami.js)
* [`/kami.js/_shrine/shrine/shrine.kami.js`](/kami.js/_shrine/shrine/shrine.kami.js)
* [`/kami.js/_shrine/spec/spec.kami.js`](/kami.js/_shrine/spec/spec.kami.js)
* [`/kami.js/_shrine/util/util.kami.js`](/kami.js/_shrine/util/util.kami.js)
* [`/kami.js/_shrine/way/way.kami.js`](/kami.js/_shrine/way/way.kami.js)
* [`/kami.js/_shrine/website/website.kami.js`](/kami.js/_shrine/website/website.kami.js)
* [`/kami.js/_shrine/website/_shrine/page/page.kami.js`](/kami.js/_shrine/website/_shrine/page/page.kami.js)
* [`/kami.js/_shrine/wiki/wiki.kami.js`](/kami.js/_shrine/wiki/wiki.kami.js)

### Flavour

At the very beginning,
KAMI-KAMI **said itself**, to be
brought to existence.

Soon after, it started to speak out other KAMIS,
which were instantly brought to existence too, following
a pure nodal self-organization.

For the generation to proceed, KAMI-KAMI first had to
split itself in two : the KAMI concept and the
KAMI individual. The class and the instance.

It was also about genericity and specificity.
And, at the end, dualism.

KAMI-KAMI had to become a KAMI like the others KAMIS.
It needed to be processed the same way to ensure
genericity.

But its specifity, the secrets of its generative powers, remained
absent of other KAMIS. This was the key of peace.

By doing so, KAMI-KAMI shared the same common nature,
**the pattern**, to all of its creations [the kamis],
letting them freely **extend and implement** its
highly abstract powers.


## `*-lang`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-LANG** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Language,
* [fr] Langage.

### Properties

**Count: 2.**

* `id`
* `names`


## `*-pantheon`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-PANTHEON** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven,
* [fr] Panthéon, Sanctuaire primordial, Valhalla, Mont Olympe, Acropole, Paradis.

### Description

**SHRINE OF PRIMORDIAL KAMIS**

There lies the most abstract and/or transverse [KAMIS](#kami),
the angels and last steps upon the One.

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 1.**

Matching regular expression :

`/kami.js\/_shrine$/`.

* [`/kami.js/_shrine`](/kami.js/_shrine)


## `*-prop`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-PROP** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Property, Characteristics, Attribute,
* [fr] Propriété, Caractéristque, Attribut.

### Description

`_props` folders contains
[kami](#kami)'s properties content.

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `*-readme`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-README** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] README,
* [fr] README.

### Description

**GITHUB README**

README instance occurs once by [PROJECT](#project),
in the `/_readme folder`.

Specific PROJECT's README [SECTIONS](#sections) are
located in `/_readme/_sections`,
genercis are located in `/kami.js/_shrine/readme/_sections`.

README is a component of [DOC](#-doc).

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `get`
* `build`
* `_commands`


## `*-readme-section`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-README-SECTION** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Section,
* [fr] Section.

### Description

**README SECTION**

SECTIONS are made of :
* Text content,
* Imbricated SECTIONS.

In fact, README is the top-level SECTION.

### Properties

**Count: 5.**

* `id`
* `names`
* `description`
* `regExp`
* `create`

### Occurences

**Count : 3.**

Matching regular expression :

* `/^\/_readme\/_sections\/(.*)\/(.*)\.section.js/`,
* `/\/_shrine\/readme\/_sections\/(.*)\/(.*)\.section.js/`.

* [`/kami.js/_shrine/readme/_sections/kami/kami.section.js`](/kami.js/_shrine/readme/_sections/kami/kami.section.js)
* [`/kami.js/_shrine/readme/_sections/kamis_glossary/kamis_glossary.section.js`](/kami.js/_shrine/readme/_sections/kamis_glossary/kamis_glossary.section.js)
* [`/_readme/_sections/1_intro/intro.section.js`](/_readme/_sections/1_intro/intro.section.js)


## `*-shrine`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-ШRᛏGHN** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Shrine,
* [fr] Sanctuaire.

### Properties

**Count: 4.**

* `id`
* `names`
* `create`
* `regExp`

### Occurences

**Count : 4.**

Matching regular expression :

`/(.*)\/_shrine$/`.

* [`/kami.js/_shrine`](/kami.js/_shrine)
* [`/kami.js/_shrine/book/_shrine`](/kami.js/_shrine/book/_shrine)
* [`/kami.js/_shrine/readme/_shrine`](/kami.js/_shrine/readme/_shrine)
* [`/kami.js/_shrine/website/_shrine`](/kami.js/_shrine/website/_shrine)


## `*-spec`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-SPEC** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Specification,
* [fr] Spécification.

### Description

**KAMIS' TEST MATERIAL**

In `kami.js` we currently distinguish two
categories of specifications :

* **Instances SPECS**, which target every
  instances of a KAMI (hold by the KAMI),
* **Specific SPECS**, which target a single
  instance of a KAMI (hold by the instance).

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 3.**

Matching regular expression :

`/(.*)\/(.*)\/_props\/(_specs|specs)\/(.*)\/(.*).spec.js/`.

* [`/kami.js/_shrine/kami/_props/specs/props/props.spec.js`](/kami.js/_shrine/kami/_props/specs/props/props.spec.js)
* [`/kami.js/_shrine/kami/_props/_specs/regExp/regExp.spec.js`](/kami.js/_shrine/kami/_props/_specs/regExp/regExp.spec.js)
* [`/kami.js/_shrine/website/_props/_specs/regExp/regExp.spec.js`](/kami.js/_shrine/website/_props/_specs/regExp/regExp.spec.js)


## `*-util`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-UTIL** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Utility,
* [fr] Utilitaire.

### Description

`_utils` folders are nothing more than
the place very specific snippets of code are put.

Utility are usually consumed by same scope-level modules.

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `*-way`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-WAY** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Method, Action, Operation, Function,
* [fr] Méthode, Action, Opération, Fonction.

### Description

**KAMI POWERS**

Ways are KAMI's methods
(... actions, functions, operations).

It differs with [prop](#prop) in its type,
which is necessarely `function`.

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `*-website`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-WEBSITE** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Website,
* [fr] Site internet.

### Description

**KAMI.JS DOCUMENTATION WEBSITE**

WEBSITE is a [DOC](#doc) component.

### Properties

**Count: 8.**

* `id`
* `names`
* `regExp`
* `regExpMapping`
* `description`
* `build`
* `_commands`
* `_specs`

### Occurences

**Count : 1.**

Matching regular expression :

`/^\/_websites\/(.*)\/(.*).website.js/`.

* [`/_websites/default/default.website.js`](/_websites/default/default.website.js)


## `*-website-page`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-WEBSITE-PAGE** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Page, Website page,
* [fr] Page, Page de site internet.

### Description

TEMPLATE x DATA x URL

A page binds the following three elements :
* A template which render conditionnaly
  on specific data,
* Data to be consumed by the template,
* An path to be render
  (which will in time be used as its url).


### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `create`


## `*-wiki`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON-WIKI** belongs to the PANTHEON of KAMIS.

It is known as :

* [en] Wiki,
* [fr] Wiki.

### Description

**KAMI.JS' GITHUB WIKI**

WIKI is a component of [DOC](#doc).

### Properties

**Count: 3.**

* `id`
* `names`
* `description`
