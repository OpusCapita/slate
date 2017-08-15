## [v0.21.2-08-15-2017-1](https://github.com/OpusCapita/slate/compare/v0.21.2...v0.21.2-08-15-2017-1) (Tue, 15 Aug 2017 14:27:11 GMT)
 - Update version (Kirill Volkovich <volkovich@scand.com>, f9b9640)

## [v0.21.2](https://github.com/OpusCapita/slate/compare/v0.21.2...v0.21.2) (Wed, 09 Aug 2017 19:16:12 GMT)
 - Add "publish-release" scirpt to package.json (Kirill Volkovich <volkovich@scand.com>, 1ed2625)
 - Added @opuscapita/npm-scripts (Kirill Volkovich <volkovich@scand.com>, 4d311c9)
 - Prefix package name with @opuscapit scope (Kirill Volkovich <volkovich@scand.com>, e0f8bb4)
 - Changed package name to "slate-opuscapita-<date>-<build-number>" (Kirill Volkovich <volkovich@scand.com>, ce77727)
 - Replace Array.prototype.find via local "find" method implementation (Kirill Volkovich <volkovich@scand.com>, 8d7f144)
 - Convert "for ... of" loops to simple "for(;;)"; Array.find => filter (Kirill Volkovich <volkovich@scand.com>, 7ff90e2)
 - Add .editorconfig (Kirill Volkovich <volkovich@scand.com>, 671ad8d)
 - Convert "for ... of" loops to simple "for(;;)" (Kirill Volkovich <volkovich@scand.com>, e4a791a)

## [v0.21.2](https://github.com/OpusCapita/slate/compare/v0.21.1...v0.21.2) (Wed, 09 Aug 2017 19:16:12 GMT)
 - 0.21.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 18f41e7)
 - Merge branch 'cdd-master' (207f459 e0d9936, d7a82e8)
 - alphabetize package.json scripts (Ian Storm Taylor <ian@ianstormtaylor.com>, 207f459)
 - Speed up getting blocks at a range
    
    Old implementation was far too slow if a selection included many nodes.
    The performance hit occurred when converting each and every text node
    into a block.  This is now avoided by using the same logic as
    getTextsAtRangeAsArray for getBlocksAtRangeAsArray, but using blocks
    directly. (jacobbloomCDD <jacob@collaborativedrug.com>, e0d9936)
 - Remove instanceOf checks to allow Slate objects to be identifiable across module instances (#930)
    
    * putting in the correct type pseudo-symbols
    
    * getting the pseudo symbols everywhere that the instance of's are
    
    * Making Ian's suggestions on checking types with static methods
    
    * cleaning up leftover hard checks
    
    * adding in slate proptypes, cleaning up unneeded whitespace
    
    * updating documentation, moving keys to prototypes finally, al tests passing
    
    * organizing types, prop-types, more succint type names
    
    * eslint fix
    
    * fixing model-types bug, changing proptype names (Ryan Yurkanin <me@ryanyurkan.in>, 3eb72a8)
 - Refactor render arrow functions (#969) (Hans-Wilhelm Warlo <hw@warlo.no>, 469d8b3)
 - update prosemirror description in readme (Ian Storm Taylor <ian@ianstormtaylor.com>, f89f0f8)
 - update prosemirror description in docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 5d25699)
 - update prosemirror comparison in readme (Ian Storm Taylor <ian@ianstormtaylor.com>, c59ca56)

## [v0.21.1](https://github.com/OpusCapita/slate/compare/v0.21.0...v0.21.1) (Tue, 01 Aug 2017 16:47:28 GMT)
 - 0.21.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 85fce2d)
 - Fix for HTML pasting not working in IE (#882)
    
    * imported babel-polyfill to make examples run in IE
    
    * Fix for HTML pasting not working in IE
    
    * Revert "imported babel-polyfill to make examples run in IE"
    
    This reverts commit a8405075d6a44de8cae8092e3773829b56dadd93.
    
    * Refactored and corrected comments of fix: HTML pasting not working in IE
    
    * Removed handleData and tuned getTransferData call of fix: HTML pasting not working in IE (Phil Mahlero <phil@mahlero.com>, 6a2de0a)
 - Remove unneeded check. (#961)
    
    Even if the el.tagName is a span, it will fall through to the child
    text node so the check is unneeded. (Zach Schneider <zach@schneid.io>, 78bb150)
 - Upgrade react-frame-component. (#962)
    
    Gets rid of warning in dev about directly accessing `React.PropTypes` (Zach Schneider <zach@schneid.io>, 56fa2c4)
 - adding forced-layout-example (#954) (Ryan Yurkanin <me@ryanyurkan.in>, af84cf2)
 - Reckon with inconsistencies between parse5 and native DOMParser (#952) (Zach Schneider <zach@schneid.io>, f8b103d)
 - Omit version on gzip size badge (#947)
    
    I noticed that the file size badge didn't change when Cheerio was removed in 0.21.0. Because I stupidly pinned it to version 0.19.0 😳  - this will now always show the gzip size of the latest release (Conor Cussell <conorcussell@users.noreply.github.com>, 1e3cdaf)
 - update issue template and contributing docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 3eebb71)
 - add reboo editor to resources (Ian Storm Taylor <ian@ianstormtaylor.com>, 6123985)
 - add showcase to resources (Ian Storm Taylor <ian@ianstormtaylor.com>, 1a01c6f)

## [v0.21.0](https://github.com/OpusCapita/slate/compare/v0.20.7...v0.21.0) (Thu, 20 Jul 2017 16:51:24 GMT)
 - 0.21.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, f376911)
 - update changelog (Ian Storm Taylor <ian@ianstormtaylor.com>, 8003117)
 - Replace cheerio with parse5 (#934)
    
    * Replace cheerio with parse5
    
    * Convert to dependency injection for HTML parser
    * Add options.domParser to HTML serializer
    * Fallback to native DOMParser if present and no option provided
    * Error if no DOM parser is available (option or native)
    * Update tests to pass parse5 as config option
    
    * Update test so it passes.
    Cheerio interprets `<p><hr /></p>` as one `p` node with a child `hr`
    node, but both parse5 and native DOMParser interpret it as 3 nodes: a
    blank `p` node, `hr` node, and second blank `p` node. Update test
    expectation to match new API.
    
    * Remove cheerio-esque compatibility conversion.
    
    * Use `application/xml` in native DOMParser
    Using `text/html` causes it to wrap the fragment in html, body, etc
    
    * Change error message to single line.
    Was inserting an undesired newline char
    
    * Add documentation for new `domParser` option to html serializer
    Also boyscout missing documentation for `defaultBlockType` option
    
    * Rename `domParser` option to `parseHtml`
    Rename the option to make it clearer what it does, since it accepts a
    function and not a `DOMParser` analogue object. (Zach Schneider <zach@schneid.io>, 4bbf748)

## [v0.20.7](https://github.com/OpusCapita/slate/compare/v0.20.6...v0.20.7) (Thu, 20 Jul 2017 16:41:28 GMT)
 - 0.20.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, cf85c6e)
 - Rename History.md to Changelog.md (Ian Storm Taylor <ian@ianstormtaylor.com>, 55dcd70)
 - Allow HTMLSerializer to deserialize an empty doc (#915)
    
    * Allow HTML serializer to deserialize an empty document
    
    This specially handles the case where the HTML is empty.
    
    Test by running:
    ```
    const html = new HTML()
    html.deserialize('')
    ```
    
    Closes #539
    
    * Use defaultBlockType in HTML serializer
    
    * Add test case for deserialising empty string
    
    * Use fixtures (Conor Cussell <conorcussell@users.noreply.github.com>, 30f1a9e)

## [v0.20.6](https://github.com/OpusCapita/slate/compare/v0.20.5...v0.20.6) (Wed, 12 Jul 2017 19:59:05 GMT)
 - 0.20.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, a1d4de3)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (b5761a1 c0d82c0, c2ff412)
 - improve mark handling performance for large selections (#926) (Shawn Erquhart <shawn@erquh.art>, c0d82c0)

## [v0.20.5](https://github.com/OpusCapita/slate/compare/v0.20.4...v0.20.5) (Wed, 12 Jul 2017 15:56:20 GMT)
 - 0.20.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, b5761a1)
 - Allow drop events on void nodes (#921)
    
    * Allow drop events on void nodes
    
    Text will be inserted in next non-void text node
    
    * Fix linting errors
    
    * Fixed formatting (mjadobson <mjadobson@gmail.com>, 37ba8e9)
 - Fix Edge Drag & Drop Issues (#923)
    
    * Fix Edge doctype warning
    
    * Remove getData() calls in onDragOver
    
    Access to data within ondragover is prohibited
    
    * Handle Edge errors accessing `dataTransfer.dropEffect`
    
    * Work around Edge not supporting custom data in drag events
    
    If unable to use `setData()` with custom type, then uses JSON obj to store data in 'text/plain'
    
    * Fix more Edge errors
    
    Edge sometimes throws 'NotSupportedError' whena accessing `items` property on `dataTransfer`
    
    * Fix linting errors
    
    * Fix formatting (mjadobson <mjadobson@gmail.com>, 31c7559)
 - Add `data` field to editor `State`. (#830)
    
    * Add `data` field to editor `State`.
    Plugins can use it to store their own internal state.
    
    * Remove `serialize` and `deserialize` plugin methods.
    
    * Add operation to set `data` on a state.
    
    * Add `setDataOperation` tests.
    
    * Remove the possibility to use keys different from strings.
    Add `preserveData` option to `raw.serialize`.
    Rewrite `set-data` test exploiting the new option. (AlbertHilb <alberthilbert@gmail.com>, 17cfde6)
 - Add property "isEmpty" (#863)
    
    * Add property isEmpty to State
    
    * Update hovering menu example
    
    * Document isEmpty
    
    * Improve perf of isEmpty with @Soreine 's suggestion
    
    * Fix return of isEmpty (Samy Pessé <samypesse@gmail.com>, 74bf684)
 - Ignore Void nodes onClick in read-only (#908)
    
    * Ignore Void nodes onClick in read-only
    
    * Sort prop types alphabetically (Nicolas Gaborit <soreine.plume@gmail.com>, 4e01f80)
 - Fix dragging text in the editor (#884)
    
    * Fix dragging text in the editor
    
    * Only use transfer type "node" when dragging a void node
    
    * Move onDropNode to core plugin (Samy Pessé <samypesse@gmail.com>, 0746582)
 - Fix image drop in example (#919)
    
    * Fix image drop in example
    
    Dropped images were being inserted at previous selection rather than drop target.
    
    * Fix linting errors (mjadobson <mjadobson@gmail.com>, e81f4e2)
 - enable source maps during development (#916) (Shawn Erquhart <shawn@erquh.art>, ccb7a23)
 - Issue with the Overriding Defaults example. (#914)
    
    I tried using the exact code from the example to be met by errors.
    
    The order of arguments in the function example is wrong, it should be use the API described in the [docs](https://docs.slatejs.org/reference/plugins/plugin.html#onbeforeinput).
    
    ```
    Function onBeforeInput(event: Event, data: Object, state: State, editor: Editor) => State || Void
    ``` (Eamon Taaffe <eamontaaffe@gmail.com>, e66adf1)
 - Fix "Auto-Markdown" Doc Link (#906)
    
    Fixes the auto markdown preview link in the list of examples (Michael McCombie <michael@michaelm.cc>, 9161961)
 - Update README.md (#905)
    
    Fixed some doc links. (Joshua Li <joshua.r.li.98@gmail.com>, 17b1a45)

## [v0.20.4](https://github.com/OpusCapita/slate/compare/v0.20.3...v0.20.4) (Thu, 22 Jun 2017 16:11:22 GMT)
 - 0.20.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5d8a9b9)
 - Add example of using plugin.render to /examples/plugins (#890) (Conor Cussell <conorcussell@users.noreply.github.com>, a3a7949)
 - Updated findDOMNode function (#892)
    
    Newer implementations of findDOMNode take the node to find as the argument, not the key of the node (Dylan Phelan <dtphelan1@gmail.com>, c7f14e1)
 - Don't mutate `path` array, use instead a copy. (#894) (AlbertHilb <alberthilbert@gmail.com>, b6fc165)

## [v0.20.3](https://github.com/OpusCapita/slate/compare/v0.20.2...v0.20.3) (Sat, 10 Jun 2017 17:56:50 GMT)
 - 0.20.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 13160a9)
 - When the parameter passed to `isInEditor` is a text node use its parent instead (#857)
    
    * When the parameter passed to `isInEditor` is a text node use its parent
    for the check.
    
    * Don't reuse `target` parameter. Add details to the comment. (AlbertHilb <alberthilbert@gmail.com>, 56e568d)
 - Clear scroll timer when component unmount (#867) (pa-nam <namnm@pascaliaasia.com>, b967cf7)
 - Fix selection after transform.wrapInline (#872)
    
    * Add failing test for wrapInline
    
    * Adapt tests for wrap-twice and whole-block
    
    * Adapt transform to move selection correctly
    
    * Fix lint errors
    
    * Use keys in yaml (Samy Pessé <samypesse@gmail.com>, 57da8da)
 - Move condition about onBeforeChange (#878) (Samy Pessé <samypesse@gmail.com>, 54d204b)

## [v0.20.2](https://github.com/OpusCapita/slate/compare/v0.20.1...v0.20.2) (Tue, 30 May 2017 20:17:47 GMT)
 - 0.20.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, b4883ea)
 - Fix missing isAltKey (#855) (Leon Koole <koole@users.noreply.github.com>, b654185)
 - Wrap scrolling logic in setTimeout (#847)
    
    The native selection will be updated after componentDidMount or componentDidUpdate.
    Use setTimeout to queue scrolling to the last when the native selection has been updated to the correct value. (pa-nam <namnm@pascaliaasia.com>, 890d790)
 - Ignore comments in Html deserializer (#856) (Kelly Joseph Price <kellyjosephprice@gmail.com>, 53542cb)
 - Documenting node's getFurther* functions (#845)
    
    I remembered coming across these functions and then didn't find them in the docs. So, here they are now! (Anuj <oyeanuj@users.noreply.github.com>, c26f2dc)
 - Minor update to Saving to Database doc (#831) (Mike Hearn <github@mikehearn.net>, 4013d0b)
 - Docs improvements suggestions (#801)
    
    * Fix typo
    
    * Make it clearer that addMark has changed too (Asaf Katz <asf.ktz@gmail.com>, 06c54bd)
 - Local examples url update (#822)
    
    * Update url when testing locally
    
    When attempting to mess around locally I could never get anything to update. Sure enough I was looking in the wrong place and had missed the `/dev.html` on the end of my url.
    
    Here's to hoping no one else struggles with this again.
    
    * Update Readme.md (Alex Zajac <AverageZ@users.noreply.github.com>, da1210d)

## [v0.20.1](https://github.com/OpusCapita/slate/compare/v0.20.0...v0.20.1) (Wed, 17 May 2017 17:24:00 GMT)
 - 0.20.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 579e12e)
 - fix html serializer to not deserialize children when null (Ian Storm Taylor <ian@ianstormtaylor.com>, ac07cfd)

## [v0.20.0](https://github.com/OpusCapita/slate/compare/v0.19.30...v0.20.0) (Wed, 17 May 2017 16:16:07 GMT)
 - 0.20.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 190071c)
 - add support for skipping elements in html serializer, closes #821 (Ian Storm Taylor <ian@ianstormtaylor.com>, c260725)

## [v0.19.30](https://github.com/OpusCapita/slate/compare/v0.19.29...v0.19.30) (Wed, 10 May 2017 05:30:06 GMT)
 - 0.19.30 (Ian Storm Taylor <ian@ianstormtaylor.com>, e363f88)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (12bbb63 873f1b1, 77277cc)
 - fix *ByTypeAsArray node methods to always return arrays (Ian Storm Taylor <ian@ianstormtaylor.com>, 12bbb63)
 - Fix json (#798)
    
    Remove comma (Dae-Ho Kim <oh3vci@gmail.com>, 873f1b1)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, cb03f02)

## [v0.19.29](https://github.com/OpusCapita/slate/compare/v0.19.28...v0.19.29) (Sat, 06 May 2017 00:46:38 GMT)
 - 0.19.29 (Ian Storm Taylor <ian@ianstormtaylor.com>, 0a9ef10)
 - allow memoization without arguments for faster lookups (#796) (Ian Storm Taylor <ian@ianstormtaylor.com>, 7a5dfe6)

## [v0.19.28](https://github.com/OpusCapita/slate/compare/v0.19.27...v0.19.28) (Fri, 05 May 2017 18:53:07 GMT)
 - 0.19.28 (Ian Storm Taylor <ian@ianstormtaylor.com>, c7cc980)
 - Add tests for plugins (#792)
    
    * Add tests for plugins
    
    The first test fails because the rules property of plugins doesn't work
    as expected.
    
    * Fix plugins tes (Max Stoiber <contact@mxstbr.com>, 142ba2b)
 - improve perf delaying conversion to immutable objects (#794) (Ian Storm Taylor <ian@ianstormtaylor.com>, d7fa54a)

## [v0.19.27](https://github.com/OpusCapita/slate/compare/v0.19.26...v0.19.27) (Fri, 05 May 2017 16:02:50 GMT)
 - 0.19.27 (Ian Storm Taylor <ian@ianstormtaylor.com>, 3889c37)
 - fix schema normalizing to merge into history (Ian Storm Taylor <ian@ianstormtaylor.com>, a17d707)

## [v0.19.26](https://github.com/OpusCapita/slate/compare/v0.19.25...v0.19.26) (Fri, 05 May 2017 00:17:10 GMT)
 - 0.19.26 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5bde3b3)
 - `moveNode` operation fix (#782)
    
    * Fix `moveNode` operation.
    When `parent` is an ancestor of `target` and the index of `node` is
    less than the index of the ancestor of `target` with the same depth
    of `node`, removing `node` changes the path to `target`.
    As consequence of that, `newPath` needs to be adjusted.
    
    * Add test.
    
    * Improve code. (AlbertHilb <alberthilbert@gmail.com>, e396941)
 - fix large document example imports (Ian Storm Taylor <ian@ianstormtaylor.com>, 526d162)
 - refactor examples, upgrade dependencies (Ian Storm Taylor <ian@ianstormtaylor.com>, 13a99a9)

## [v0.19.25](https://github.com/OpusCapita/slate/compare/v0.19.24...v0.19.25) (Thu, 04 May 2017 22:57:03 GMT)
 - v0.19.25 (Ian Storm Taylor <ian@ianstormtaylor.com>, a3f7f9b)
 - fix void copying to attach to the right dom element (Ian Storm Taylor <ian@ianstormtaylor.com>, 8208633)

## [v0.19.24](https://github.com/OpusCapita/slate/compare/v0.19.23...v0.19.24) (Thu, 04 May 2017 22:30:58 GMT)
 - 0.19.24 (Ian Storm Taylor <ian@ianstormtaylor.com>, 75c76a6)

## [v0.19.23](https://github.com/OpusCapita/slate/compare/v0.19.22...v0.19.23) (Thu, 04 May 2017 22:14:17 GMT)
 - 0.19.23 (Ian Storm Taylor <ian@ianstormtaylor.com>, c9644a5)
 - Add firstOnly prop to Placeholder (#765)
    
    * Adding firstOnly prop to Placeholder
    
    Partly addresses #737
    
    * Updating placeholder logic to check for parent only if firstOnly is set to true
    
    * removing extra newlines
    
    * simplifying shouldComponentUpdate condition (Anuj <oyeanuj@users.noreply.github.com>, 7b358b4)
 - rename issue template (Ian Storm Taylor <ian@ianstormtaylor.com>, 503fde5)
 - Copy void (#788)
    
    * Fix getFragmentAtRange to not return early when selection is in void node or collapsed
    
    * Detecting when cut or copy is made in a void node, and not returning early
    
    * Checking if text exists before using it for cut/copy
    
    * Moving inVoidNode check to onCutOrCopy
    
    as per @ianstormtaylor note.
    
    * If/else for dom operations when copying text vs void node
    
    * Adding fragment span to the contents
    
    * more work on copy-pasting void nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 94e0e62)
 - Address doc suggestion in #644 (#760)
    
    * Address doc suggestion in #644
    
    * Move doc update to FAQ instead (Anuj <oyeanuj@users.noreply.github.com>, a338b36)
 - Clarifying insertTextByKey description (#778)
    
    As per #775 (Anuj <oyeanuj@users.noreply.github.com>, 9250baa)
 - Documenting node's 'getFirstText' & 'getLastText' (#779)
    
    Noticed a couple of useful functions I found useful that weren't documented. Also, fixed a couple of broken links. (Anuj <oyeanuj@users.noreply.github.com>, fb6f3d5)

## [v0.19.22](https://github.com/OpusCapita/slate/compare/v0.19.21...v0.19.22) (Thu, 04 May 2017 02:45:52 GMT)
 - 0.19.22 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5258b38)
 - fix selection handling for changing tabs, and inside embedded inputs, closes #749 (Ian Storm Taylor <ian@ianstormtaylor.com>, 29c67fd)
 - fix to restrict window blur/focus handling, closes #773 (Ian Storm Taylor <ian@ianstormtaylor.com>, 0fcb953)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (2e3b294 cb98408, f212ea3)
 - remove warn throwing since console.warn includes callsites now (Ian Storm Taylor <ian@ianstormtaylor.com>, 2e3b294)
 - Update defining-custom-block-nodes.md (#776) (Brian Kabiro <briankigondu@gmail.com>, cb98408)

## [v0.19.21](https://github.com/OpusCapita/slate/compare/v0.19.20...v0.19.21) (Mon, 01 May 2017 18:23:49 GMT)
 - 0.19.21 (Ian Storm Taylor <ian@ianstormtaylor.com>, 460498b)
 - update table example to make scope clearer (Ian Storm Taylor <ian@ianstormtaylor.com>, 78fefa1)
 - Fixed the link to comparisons, which was broken (#769) (tashburn <tashburn@users.noreply.github.com>, 9cf24b6)
 - fix error when dragging void nodes without selection, closes #757 (Ian Storm Taylor <ian@ianstormtaylor.com>, 26777b4)
 - fix to depend on prop-types for react 15.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 17ea3ed)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (2eea02a 79275d4, bdc6d0f)
 - fix to maintain focus on switching tabs, closes #756 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2eea02a)
 - update issue template (Ian Storm Taylor <ian@ianstormtaylor.com>, e855ed5)
 - Add "data-key" to root div for the whole document (#759)
    
    * Add "data-key" to div for the whole document
    
    * Fix unit tests for rendering (Samy Pessé <samypesse@gmail.com>, 79275d4)
 - add an issue template (Ian Storm Taylor <ian@ianstormtaylor.com>, 4cd1dde)
 - add note to document documentation (#755)
    
    can perhaps spare some time from someone else wondering about this: https://github.com/ianstormtaylor/slate/issues/746 (Max <max.huttunen@gmail.com>, f787b68)
 - Fix typo in plugin.md (#753) (Rocky Meza <rockymeza@gmail.com>, 3ca977e)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 8cb3379)
 - cleanup readme, move comparisons to external doc, closes #727 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1471e08)
 - add yarn.lock file (Ian Storm Taylor <ian@ianstormtaylor.com>, 8e37ea7)
 - fix benchmarks, closes #686 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1241b5c)
 - disable grammarly, closes #733 (Ian Storm Taylor <ian@ianstormtaylor.com>, a98b687)
 - Add a badge for gzip size (#748) (Conor Cussell <conorcussell@users.noreply.github.com>, f31220c)
 - fix example links in Readme (#745) (jatins <shridhar.jatin@gmail.com>, 310b281)
 - Clarify instructions for plugin preventing default behavior (#740) (Anuj <oyeanuj@users.noreply.github.com>, 51f1a2f)
 - Changed hotkey for code block in the walkthrough due to lack of support hotkey ⌘-C in Chrome on Mac (#741) (eden lane <edencore@gmail.com>, eb03bd8)

## [v0.19.20](https://github.com/OpusCapita/slate/compare/v0.19.19...v0.19.20) (Thu, 20 Apr 2017 01:38:55 GMT)
 - 0.19.20 (Ian Storm Taylor <ian@ianstormtaylor.com>, cd8ed4c)
 - Revert "Remove space after first char when copying from Slate (#716)" (#736)
    
    This reverts commit 3e573453a8c5d92963d3f290fb7266f66e2a6b78. (Per-Kristian Nordnes <per.kristian.nordnes@gmail.com>, 7d0f7d0)

## [v0.19.19](https://github.com/OpusCapita/slate/compare/v0.19.18...v0.19.19) (Wed, 19 Apr 2017 16:18:03 GMT)
 - 0.19.19 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1421f28)
 - feat: Add extendSelection utility (#730)
    
    * feat: Add extendSelection util
    
    * Shims the native `Selection.extend` method if not available with a simplistic shim by @tyler-johnson
    * Fixes IE10+ as they don't support the native method
    
    * Linting fixes
    
    * Linting fix (Craig Michael Thompson <craig@craigsworks.com>, 1e2bd62)
 - feat: Add findClosestNode utility (#728)
    
    * feat: Add findClosestNode utlity
    
    * A light shim utility that wraps the functionality of the native `closest` method
    * IE11 and Edge don't support the `closest` method on nodes
    * For those browsers that don't support it, we shim it with a shim taken from MDN
    
    * Linting fixes
    
    * Remove extra semi-colons as per lint guidelines (Craig Michael Thompson <craig@craigsworks.com>, c36537c)
 - feat: Add ES6 polyfill to examples page (#729)
    
    * feat: Add ES6 polyfill to examples page
    
    * Fixes issue with IE11 simply not displaying anything on load due to missing `Symbol` shim
    
    * Move script to the bottom before build.prod.js file (Craig Michael Thompson <craig@craigsworks.com>, f39c432)
 - update gitbook intro (Ian Storm Taylor <ian@ianstormtaylor.com>, 6f9e8bc)
 - fix examples links (Ian Storm Taylor <ian@ianstormtaylor.com>, 5ce7f3d)

## [v0.19.18](https://github.com/OpusCapita/slate/compare/v0.19.17...v0.19.18) (Sun, 16 Apr 2017 22:34:46 GMT)
 - 0.19.18 (Ian Storm Taylor <ian@ianstormtaylor.com>, 3ad8c99)

## [v0.19.17](https://github.com/OpusCapita/slate/compare/v0.19.16...v0.19.17) (Wed, 12 Apr 2017 04:45:53 GMT)
 - 0.19.17 (Ian Storm Taylor <ian@ianstormtaylor.com>, a481581)
 - fix block warning for void nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 2b75499)
 - Keep selection while applying Transform.unwrapNodeByKey (#717)
    
    Transforms should be applied in an order so that the selection is
    preserved. This replaces "remove --> insert" with "move --> remove".
    
    Close #670 (Victor Pontis <vpontis@gmail.com>, 2f29697)
 - Remove space after first char when copying from Slate (#716)
    
    Right now if you copy "This thing" from Slate and paste
    into a plain text app you will get "T his thing" because
    Slate is making the first character a data holding span.
    
    This diff makes the data containing span empty to eliminate
    this extra space.
    
    Closes #562 (Victor Pontis <vpontis@gmail.com>, 3e57345)
 - Update .npmignore (Ian Storm Taylor <ian@ianstormtaylor.com>, 5c7e31b)
 - speed up decorator examples (Ian Storm Taylor <ian@ianstormtaylor.com>, 50593f9)

## [v0.19.16](https://github.com/OpusCapita/slate/compare/v0.19.15...v0.19.16) (Mon, 03 Apr 2017 16:34:05 GMT)
 - 0.19.16 (Ian Storm Taylor <ian@ianstormtaylor.com>, d24dffc)
 - use refs for div component instead findDOMNode (#708) (Aliaksei Simanchyk <Rebulus@users.noreply.github.com>, 7794ebe)
 - Fix forgotten props 'block' for Leaf (#707) (Aliaksei Simanchyk <Rebulus@users.noreply.github.com>, affb2eb)

## [v0.19.15](https://github.com/OpusCapita/slate/compare/v0.19.14...v0.19.15) (Sun, 02 Apr 2017 22:48:29 GMT)
 - 0.19.15 (Ian Storm Taylor <ian@ianstormtaylor.com>, 7b4beff)
 - change normalize logic to use mutable objects for performance (Ian Storm Taylor <ian@ianstormtaylor.com>, f81e52a)

## [v0.19.14](https://github.com/OpusCapita/slate/compare/v0.19.13...v0.19.14) (Sun, 02 Apr 2017 22:04:36 GMT)
 - 0.19.14 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1fb04f6)
 - a handful of performance improvements (#705)
    
    * update large example
    
    * pass block down to <Text> for performance, closes #700
    
    * add get-ranges benchmark
    
    * optimize getRanges(), closes #699
    
    * add serialization benchmarks
    
    * optimize Raw.deserializeRanges() by computing marks once, closes #701
    
    * change .merge calls to .set for performance
    
    * change updateDescendant() to use getAncestors() for memoization
    
    * change getPath() to use getAncestors() for memoization
    
    * switch getTexts() and friends to use arrays while iterating
    
    * rename split-block benchmark
    
    * update benchmark compare script (Ian Storm Taylor <ian@ianstormtaylor.com>, 059ee96)
 - add more to docs intro (Ian Storm Taylor <ian@ianstormtaylor.com>, 8687fac)

## [v0.19.13](https://github.com/OpusCapita/slate/compare/v0.19.12...v0.19.13) (Thu, 30 Mar 2017 18:15:06 GMT)
 - 0.19.13 (Ian Storm Taylor <ian@ianstormtaylor.com>, ea4ecb2)
 - add markdown example, fix selection handling with decorators (Ian Storm Taylor <ian@ianstormtaylor.com>, 2743348)

## [v0.19.12](https://github.com/OpusCapita/slate/compare/v0.19.11...v0.19.12) (Thu, 30 Mar 2017 16:58:30 GMT)
 - 0.19.12 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1ec92f2)
 - fix re-rendering of last text nodes, closes #682 (Ian Storm Taylor <ian@ianstormtaylor.com>, 8af2026)

## [v0.19.11](https://github.com/OpusCapita/slate/compare/v0.19.10...v0.19.11) (Thu, 30 Mar 2017 16:46:53 GMT)
 - 0.19.11 (Ian Storm Taylor <ian@ianstormtaylor.com>, 4e81f4a)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, b0adb92)
 - fix check-lists example (Ian Storm Taylor <ian@ianstormtaylor.com>, ef81dc8)
 - Rewrite `CheckListItem` component. Only the area we really want to be editable (#696)
    
    must lie inside contenteditable elements. (AlbertHilb <alberthilbert@gmail.com>, f1b1478)
 - When editor contains nested editable elements, in some situations, (#693)
    
    the focus goes to those elements. In firefox, this causes issues
    with keyboard navigation and therefore it must be prevented. (AlbertHilb <alberthilbert@gmail.com>, 83a94f0)
 - If editor contains nested editable components and the native selection enters (#692)
    
    one of these, focus moves from the `Content` DOM element to the new active
    element but editor doesn't really lose focus and selection must not be blurred. (AlbertHilb <alberthilbert@gmail.com>, 11de44a)
 - Fix mismatched event parameter. (#694) (AlbertHilb <alberthilbert@gmail.com>, 8a81d73)

## [v0.19.10](https://github.com/OpusCapita/slate/compare/v0.19.9...v0.19.10) (Thu, 30 Mar 2017 04:43:12 GMT)
 - 0.19.10 (Ian Storm Taylor <ian@ianstormtaylor.com>, f80951a)
 - change selection updating logic to happen at the top-level, closes #662 (Ian Storm Taylor <ian@ianstormtaylor.com>, 6198708)

## [v0.19.9](https://github.com/OpusCapita/slate/compare/v0.19.8...v0.19.9) (Wed, 29 Mar 2017 17:03:11 GMT)
 - 0.19.9 (Ian Storm Taylor <ian@ianstormtaylor.com>, fccca74)
 - fix getPoint to work around in-editable content (Ian Storm Taylor <ian@ianstormtaylor.com>, 392fd75)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 3c49ca8)

## [v0.19.8](https://github.com/OpusCapita/slate/compare/v0.19.7...v0.19.8) (Tue, 28 Mar 2017 16:58:40 GMT)
 - 0.19.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2c584f3)
 - add check list example (Ian Storm Taylor <ian@ianstormtaylor.com>, 30c2b20)
 - use correct localStorage method for setting content (#684) (Conor Cussell <conorcussell@users.noreply.github.com>, 6333275)
 - Fixed autocorrect causing dupe text (#655)
    
    * Refactored out `getPoint` from components/content to utils so as to make it more reusable.
    
    * Fixed autocorrect causing dupe text. (#540)
    
    During autocorrection (in iOS’s Safari), `onSelect` event is triggered after `onBeforeInput` event.
    The plugins/core updates the state during `onBeforeInput` event, thus causing selection triggered by autocorrect to be lost/overridden.
    This behaviour caused dupe text bug during autocorrection.
    
    To overcome this issue, we try to query the selection and conditionally fix out of sync cases with an additional transform before inserting the text.
    
    * Removes Content#getPoint and use the new utility function instead.
    
    * Renames local variable nextTransform to transform.
    
    * Describe the solution to the autocorrect issue in a more descriptive manner. (Stan Chang Khin Boon <khinboon@gmail.com>, a28075e)
 - Fix a typo in walkthroughs/saving-to-a-database (#681)
    
    intial → initial (Prayag Verma <prayag.verma@gmail.com>, 3d96d2a)

## [v0.19.7](https://github.com/OpusCapita/slate/compare/v0.19.6...v0.19.7) (Thu, 23 Mar 2017 01:51:53 GMT)
 - 0.19.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, dcdcab2)
 - fix data transfer type checking, closes #680 (Ian Storm Taylor <ian@ianstormtaylor.com>, afb54f2)

## [v0.19.6](https://github.com/OpusCapita/slate/compare/v0.19.5...v0.19.6) (Wed, 22 Mar 2017 06:18:43 GMT)
 - 0.19.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5cc2133)
 - Perf get blocks (#678)
    
    * improve perf of getBlocks and getInlines
    
    * add getBlocksByType, getInlinesByType, fix getMarksByType (Ian Storm Taylor <ian@ianstormtaylor.com>, d8812a7)

## [v0.19.5](https://github.com/OpusCapita/slate/compare/v0.19.4...v0.19.5) (Wed, 22 Mar 2017 05:35:02 GMT)
 - 0.19.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, f432aac)
 - improve perf on marks functions on nodes (#677)
    
    * refactor benchmarks, add get-marks benchmarks
    
    * fix benchmark running
    
    * cleanup benchmarks
    
    * switch getMarks implementation, add getMarksByType (Ian Storm Taylor <ian@ianstormtaylor.com>, 579d741)
 - Refactor benchmarks (#675)
    
    * first stab
    
    * refactor to nanobench
    
    * refactor to matcha
    
    * use hand-rolled comparison logic, ugh
    
    * update threshold
    
    * remove unused dependencies
    
    * remove benchmarks from travis ci (Ian Storm Taylor <ian@ianstormtaylor.com>, 6ab686a)
 - Fix getFragmentAtRange to not return early when selection is in void node or collapsed (#673) (Anuj <oyeanuj@users.noreply.github.com>, 14193c3)
 - change getMarks to return an ordered set (#672) (Ian Storm Taylor <ian@ianstormtaylor.com>, 376eada)

## [v0.19.4](https://github.com/OpusCapita/slate/compare/v0.19.3...v0.19.4) (Tue, 21 Mar 2017 18:31:59 GMT)
 - 0.19.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 8f7cf95)
 - fix data transfer files support, closes #669 (Ian Storm Taylor <ian@ianstormtaylor.com>, 8e2dce1)
 - Remove warning in getFragmentAtRange for node (#652) (#657)
    
    * remove warning in getFragmentAtRange for node (#652)
    
    * fix typo (Aliaksei Simanchyk <Rebulus@users.noreply.github.com>, 21c6762)
 - use pageXOffset instead of scrollX for ie support (#664) (Tyler Johnson <tyler@tylerjohnson.me>, 0f59ef6)
 - added onFocus, and docs. fixes #650 (#666)
    
    * added onFocus, and docs. fixes #650
    
    * sorted prop types declarations alphabetically (yāλu <yalu@users.noreply.github.com>, 5ce7d16)
 - add the deserialize normalize option to the docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 812c881)

## [v0.19.3](https://github.com/OpusCapita/slate/compare/v0.19.2...v0.19.3) (Mon, 06 Mar 2017 00:56:50 GMT)
 - 0.19.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 381cc8d)
 - add ability to not normalize on state creation (Ian Storm Taylor <ian@ianstormtaylor.com>, eb48540)
 - Clarify usage of plugin.render (#649) (Anuj <oyeanuj@users.noreply.github.com>, cc26e6c)

## [v0.19.2](https://github.com/OpusCapita/slate/compare/v0.19.1...v0.19.2) (Sun, 05 Mar 2017 02:29:11 GMT)
 - 0.19.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 8f38891)
 - fix getting index for inline node in unwrapInlineAtRange, fixes #620 (#648) (Aliaksei Simanchyk <Rebulus@users.noreply.github.com>, 698a88a)

## [v0.19.1](https://github.com/OpusCapita/slate/compare/v0.19.0...v0.19.1) (Fri, 03 Mar 2017 21:17:24 GMT)
 - 0.19.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 54ecb63)
 - remove renderPortal from the docs, prepping for removal (Ian Storm Taylor <ian@ianstormtaylor.com>, 5d28516)
 - fix how we check if running in browser, fixes #609 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1d8aa81)
 - fix getPoint in case of switching between editors, closes #570 (Ian Storm Taylor <ian@ianstormtaylor.com>, 26a67c5)

## [v0.19.0](https://github.com/OpusCapita/slate/compare/v0.18.0...v0.19.0) (Fri, 03 Mar 2017 20:52:28 GMT)
 - 0.19.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 99a8753)
 - refactor node methods, memoize more, update history (Ian Storm Taylor <ian@ianstormtaylor.com>, c316a4b)
 - Methods missed in upgrade 0.17 (#645) (Anuj <oyeanuj@users.noreply.github.com>, 5c33387)

## [v0.18.0](https://github.com/OpusCapita/slate/compare/v0.17.4...v0.18.0) (Fri, 03 Mar 2017 02:21:54 GMT)
 - 0.18.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, b8543b5)
 - rename plugin.render to renderPortal, and add plugin.render (Ian Storm Taylor <ian@ianstormtaylor.com>, 2a5d3ee)
 - docs: Delete dangling } (#642) (Kyle Kelley <rgbkrk@gmail.com>, fa4f9df)
 - Fix typo: cummulative -> cumulative (#643) (Anuj <oyeanuj@users.noreply.github.com>, 1d8c814)
 - Fix typo on installing Slate documentation (#638) (Victor Pontis <vpontis@gmail.com>, 16d8496)
 - fix moveTo, and add select and deselect to docs, fixes #640 (Ian Storm Taylor <ian@ianstormtaylor.com>, c518d55)

## [v0.17.4](https://github.com/OpusCapita/slate/compare/v0.17.3...v0.17.4) (Wed, 01 Mar 2017 03:10:14 GMT)
 - 0.17.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 647723b)
 - change selectAll to not focus, and add docs (Ian Storm Taylor <ian@ianstormtaylor.com>, d70f35f)
 - Add functionality and test-case for selectAll (#637)
    
    * Add functionality and test-case for selectAll
    
    * Update to use moveToRange (Victor Pontis <vpontis@gmail.com>, 77f939d)

## [v0.17.3](https://github.com/OpusCapita/slate/compare/v0.17.2...v0.17.3) (Tue, 28 Feb 2017 23:28:08 GMT)
 - 0.17.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, d426874)
 - fix caching logic for onDocumentChange and onSelectionChange, fixes #614 #553 #538 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1511d9f)

## [v0.17.2](https://github.com/OpusCapita/slate/compare/v0.17.1...v0.17.2) (Tue, 28 Feb 2017 22:54:10 GMT)
 - 0.17.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 93c34f6)
 - fix scrolling to selection (Ian Storm Taylor <ian@ianstormtaylor.com>, d796224)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 7a6bd25)
 - add more Gitbook plugins to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 962961a)
 - update auto-replace in the readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 92ef585)
 - fix linting (Ian Storm Taylor <ian@ianstormtaylor.com>, d8f3e70)

## [v0.17.1](https://github.com/OpusCapita/slate/compare/v0.17.0...v0.17.1) (Tue, 28 Feb 2017 17:13:23 GMT)
 - 0.17.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 37d295c)
 - add `autoFocus` support (Ian Storm Taylor <ian@ianstormtaylor.com>, 6a92f93)

## [v0.17.0](https://github.com/OpusCapita/slate/compare/v0.16.28...v0.17.0) (Mon, 27 Feb 2017 21:41:35 GMT)
 - 0.17.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 84ce16b)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 414188b)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 7b2ff73)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, faa1247)
 - refactor the Selection model, deprecating old methods (#631)
    
    * refactor Selection, deprecating old methods
    
    * fix a few more things
    
    * introduce an alternative for moveToOffsets
    
    * add edge methods for move{start/end}OffsetTo
    
    * fix selection return value
    
    * fix deprecation warnings
    
    * refactor transforms to make auto-generating easier
    
    * refactor and deprecate selection transforms
    
    * remove deprecation warnings from tests
    
    * fix deprecation warnings in examples (Ian Storm Taylor <ian@ianstormtaylor.com>, 64b1e54)

## [v0.16.28](https://github.com/OpusCapita/slate/compare/v0.16.27...v0.16.28) (Sat, 25 Feb 2017 22:00:50 GMT)
 - 0.16.28 (Ian Storm Taylor <ian@ianstormtaylor.com>, 208fcb5)
 - fix content proptype (Ian Storm Taylor <ian@ianstormtaylor.com>, dfe403e)
 - add release badge to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 9f5a0c1)

## [v0.16.27](https://github.com/OpusCapita/slate/compare/v0.16.26...v0.16.27) (Sat, 25 Feb 2017 21:42:52 GMT)
 - 0.16.27 (Ian Storm Taylor <ian@ianstormtaylor.com>, f2ac9fa)
 - first stab at plugin rendering (#629) (Ian Storm Taylor <ian@ianstormtaylor.com>, 2ebfb24)
 - fix linting (Ian Storm Taylor <ian@ianstormtaylor.com>, 8f92ec6)
 - Image example: fix delete bug. Fixes #625 (#628)
    
    As void-nodes now can be deleted, use a schema rule to normalize the document, and insert a paragraph when empty. Delete old "onDocumentChange" handler. (Per-Kristian Nordnes <per.kristian.nordnes@gmail.com>, c456c9d)
 - tighten linting rules (Ian Storm Taylor <ian@ianstormtaylor.com>, c3578d1)

## [v0.16.26](https://github.com/OpusCapita/slate/compare/v0.16.25...v0.16.26) (Sat, 25 Feb 2017 01:23:28 GMT)
 - 0.16.26 (Ian Storm Taylor <ian@ianstormtaylor.com>, e0f5997)
 - Fix bug where last char of inline node couldn't be selected with keyboard (#626)
    
    Fix bug where first char of inline node couldn't be selected with keyboard (Per-Kristian Nordnes <per.kristian.nordnes@gmail.com>, 0cfd106)

## [v0.16.25](https://github.com/OpusCapita/slate/compare/v0.16.24...v0.16.25) (Fri, 24 Feb 2017 02:37:15 GMT)
 - 0.16.25 (Ian Storm Taylor <ian@ianstormtaylor.com>, 4f04d48)
 - Fix issue with scrollTo (#623)
    
    I realized I made a mistake in the scrollWindow function I was calculating the scrollBy position incorrectly. I decided to just switch to scrollTo instead of scrollBy
    
    Also I was getting an issue where the `getBoundingClientRect().bottom` of one of my wrapper was incorrect when the height changed via newline or deletion. I'm not entirely sure why but I noticed that if I used wrapperRect.top + wrapper.offsetHeight it gave the correct bottom so I swapped to use that instead. Let me know if there's any issue with these changes.
    
    Also I'm wondering is there anyway to add tests for these changes? I'm not too familiar with testing for scroll (Kenneth Truong <kenneth.e.truong@gmail.com>, b1ef5bc)

## [v0.16.24](https://github.com/OpusCapita/slate/compare/v0.16.23...v0.16.24) (Thu, 23 Feb 2017 23:08:47 GMT)
 - 0.16.24 (Ian Storm Taylor <ian@ianstormtaylor.com>, d1aec53)
 - Allow document to have no nodes when deleting a single void-block. Partially fixes #505 (#622) (Per-Kristian Nordnes <per.kristian.nordnes@gmail.com>, 86cbb0d)

## [v0.16.23](https://github.com/OpusCapita/slate/compare/v0.16.22...v0.16.23) (Thu, 23 Feb 2017 23:04:31 GMT)
 - 0.16.23 (Ian Storm Taylor <ian@ianstormtaylor.com>, 86f4844)
 - Fix jumpy scroll behaviour (#607)
    
    * Fix jumpy scroll behaviour
    
    I'm not sure if this is the best fix for the issue (I would have liked it to allow the browser to deal with moving the cursor into view.) but for now I think this is better than what it was before. I tried to imitate what chrome was doing when the cursor was out of view. (Except when it was partially in view but I decided to just keep it simple)
    
    This basically checks the cursor's position and if it isn't in view it'll move the cursor into the middle of the view.
    
    Fixes #279
    Fixes #589
    
    * Subtract Height (Kenneth Truong <kenneth.e.truong@gmail.com>, 92194f1)

## [v0.16.22](https://github.com/OpusCapita/slate/compare/v0.16.21...v0.16.22) (Thu, 23 Feb 2017 16:54:32 GMT)
 - 0.16.22 (Ian Storm Taylor <ian@ianstormtaylor.com>, c0daa27)
 - Fix behaviour where deleteBackward/Forward on empty block deleted the void block above/below (#618) (Per-Kristian Nordnes <per.kristian.nordnes@gmail.com>, a67a93d)
 - Fix typo: 'Charaters' => 'Characters' (#619) (Anuj <oyeanuj@users.noreply.github.com>, 2bd5bc3)

## [v0.16.21](https://github.com/OpusCapita/slate/compare/v0.16.20...v0.16.21) (Thu, 23 Feb 2017 01:50:35 GMT)
 - 0.16.21 (Ian Storm Taylor <ian@ianstormtaylor.com>, 9b5581c)
 - fix moveToRangeOf, collapseToStart/EndOf (Ian Storm Taylor <ian@ianstormtaylor.com>, bf4e99f)

## [v0.16.20](https://github.com/OpusCapita/slate/compare/v0.16.19...v0.16.20) (Wed, 22 Feb 2017 23:28:29 GMT)
 - 0.16.20 (Ian Storm Taylor <ian@ianstormtaylor.com>, 469a5fe)
 - pass in context properties to mark components, fixes #617 (Ian Storm Taylor <ian@ianstormtaylor.com>, 8294ec9)

## [v0.16.19](https://github.com/OpusCapita/slate/compare/v0.16.18...v0.16.19) (Wed, 22 Feb 2017 00:00:27 GMT)
 - 0.16.19 (Ian Storm Taylor <ian@ianstormtaylor.com>, 9d92f24)
 - Selection: fix deprecated code call (#613) (Per-Kristian Nordnes <per.kristian.nordnes@gmail.com>, 6804ec1)

## [v0.16.18](https://github.com/OpusCapita/slate/compare/v0.16.17...v0.16.18) (Fri, 17 Feb 2017 18:59:14 GMT)
 - 0.16.18 (Ian Storm Taylor <ian@ianstormtaylor.com>, f8fe5aa)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (259e151 a5550ad, fef384b)
 - remove the preventDefault call on void nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 259e151)
 - Merge branch 'AlbertHilb-HiddenCaret' (77ffcaa ea9920d, dce2c78)
 - style fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, ea9920d)
 - Various fixes for selections (#610)
    
    * transforms/on-selection: fix deprecation warnings
    
    * Check for selection with selection.isCollapsed (not .rangeCount) (Per-Kristian Nordnes <per.kristian.nordnes@gmail.com>, a5550ad)
 - add preventDefault to all examples (Ian Storm Taylor <ian@ianstormtaylor.com>, 77ffcaa)
 - Prevent an unexpected ampersand (#604) (Michael Plotke <bdjnks@gmail.com>, da10eae)
 - Don't rely on CSS positioning to hide text caret inside `Void` `Inline` nodes,
    instead make it invisible setting spacer `color` property to `transparent`.
    In Chrome, replace zero-with space with hair space to avoid graphics glitches.
    Update tests. (Raffaele De Feo <alberthilbert@gmail.com>, 85b901a)

## [v0.16.17](https://github.com/OpusCapita/slate/compare/v0.16.16...v0.16.17) (Tue, 14 Feb 2017 02:23:57 GMT)
 - 0.16.17 (Ian Storm Taylor <ian@ianstormtaylor.com>, e0be76a)
 - fix html serializer default block type logic (Ian Storm Taylor <ian@ianstormtaylor.com>, 44303dc)
 - Allow setting a defaultBlockType as object for HTML serializer (#595)
    
    * Allow setting a defaultBlockType as object for HTML serializer
    
    * Add test for html deserializer default block as object
    
    * Code enhancement/compacting (Per-Kristian Nordnes <per.kristian.nordnes@gmail.com>, add174e)

## [v0.16.16](https://github.com/OpusCapita/slate/compare/v0.16.15...v0.16.16) (Tue, 14 Feb 2017 01:19:38 GMT)
 - 0.16.16 (Ian Storm Taylor <ian@ianstormtaylor.com>, 0430efc)
 - update dev deps for react 15.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, aa1c3ac)

## [v0.16.15](https://github.com/OpusCapita/slate/compare/v0.16.14...v0.16.15) (Tue, 14 Feb 2017 01:03:50 GMT)
 - 0.16.15 (Ian Storm Taylor <ian@ianstormtaylor.com>, 386f750)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (e4bca60 0c18052, b5e1d16)
 - fix to re-resolve plugins when placeholder props change, closes #601 (Ian Storm Taylor <ian@ianstormtaylor.com>, e4bca60)
 - Eliminate duplicates in getBlocksAtRange (#600) (Nicolas Gaborit <soreine.plume@gmail.com>, 0c18052)
 - Fix case in spellCheck (#592) (Kenneth Truong <kenneth.e.truong@gmail.com>, 8214641)
 - Add props “autoCorrect” to editor and content. (#596)
    
    This allow user to turn off predictive text input on iOS thus mitigating #540… (Stan Chang Khin Boon <khinboon@gmail.com>, 3a23c21)
 - update the react-frame-aware-selection-plugin (Ian Storm Taylor <ian@ianstormtaylor.com>, e1ea15a)
 - Fix deleteAtRange with nested blocks (#594)
    
    * Add failing test for backspace in a nested block
    
    * Fix deleteAtRange
    
    * Move to test to delete-at-range
    
    * Use and improve getHighestOnlyChildParent (Nicolas Gaborit <soreine.plume@gmail.com>, 17a014d)

## [v0.16.14](https://github.com/OpusCapita/slate/compare/v0.16.13...v0.16.14) (Tue, 07 Feb 2017 20:28:29 GMT)
 - 0.16.14 (Ian Storm Taylor <ian@ianstormtaylor.com>, 7517dff)
 - Merge branch 'fix-word-char-deletes' (40478a3 cab29ca, 303b107)
 - fix deleteing by word or character (Ian Storm Taylor <ian@ianstormtaylor.com>, cab29ca)
 - . (Ian Storm Taylor <ian@ianstormtaylor.com>, 30c6a01)
 - Fix deleteCharBackwardAtRange
    
    When we have nested inlines in startBlock, startOffset will point to the wrong character. So, i think that using startText will be correct here. (Evgeniy Kuvshinov <kib357@outlook.com>, e4589a0)

## [v0.16.13](https://github.com/OpusCapita/slate/compare/v0.16.12...v0.16.13) (Tue, 07 Feb 2017 18:10:22 GMT)
 - 0.16.13 (Ian Storm Taylor <ian@ianstormtaylor.com>, 40478a3)
 - fix tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 99bae0e)
 - update void spacer to hide the cursor better in inlines (Ian Storm Taylor <ian@ianstormtaylor.com>, a836a34)
 - Set the `display` ccs property of the void inline wrappers to `inline-block`.
    Update tests. (Raffaele De Feo <alberthilbert@gmail.com>, 4f439ab)

## [v0.16.12](https://github.com/OpusCapita/slate/compare/v0.16.11...v0.16.12) (Tue, 07 Feb 2017 01:31:06 GMT)
 - 0.16.12 (Ian Storm Taylor <ian@ianstormtaylor.com>, d44f7e2)
 - added `toRaw` option to Html and Plain serializers, fixes #583 #584 (Ian Storm Taylor <ian@ianstormtaylor.com>, a7f6584)
 - Fixing Readme and API docs (#579)
    
    * Fix typo
    
    just a minor typo in the docs!
    
    * Fix typo in API docs
    
    * Update focus-blur example readme to reflect the correct example
    
    * Remove extra newline
    
    * Correct Readme on the plugins example as well
    
    * Correct readme for RTL example
    
    * Fix own typo.
    
    * Adding a Readme for the tables example (Anuj <oyeanuj@users.noreply.github.com>, 44cef94)

## [v0.16.11](https://github.com/OpusCapita/slate/compare/v0.16.10...v0.16.11) (Tue, 31 Jan 2017 18:25:45 GMT)
 - 0.16.11 (Ian Storm Taylor <ian@ianstormtaylor.com>, e1b7a71)
 - Add data property to `document`. (#572)
    
    * Add data property to `document`.
    Add `setDocumentDataOperation' to set document data.
    Change `Raw` serializer to take into account the document `data` property.
    Update docs and tests.
    
    * Make `setNode` operation working with document node.
    Rewrite `setDocumentdataOperation` using `setNode`.
    
    * Make 'setNodeByKey' working also with document node.
    
    * Get rid of `setDocumentDataOperation`. (AlbertHilb <alberthilbert@gmail.com>, ca1e0d8)
 - Removing unnecessary word (#571) (Josh Duff <me@JoshDuff.com>, 9adfc63)
 - Add significant whitespace to fix headers on npm (#569) (Josh Duff <me@JoshDuff.com>, 62c16e9)
 - Fix typo (#564)
    
    just a minor typo in the docs! (Anuj <oyeanuj@users.noreply.github.com>, 4fd1905)

## [v0.16.10](https://github.com/OpusCapita/slate/compare/v0.16.9...v0.16.10) (Thu, 19 Jan 2017 01:34:00 GMT)
 - 0.16.10 (Ian Storm Taylor <ian@ianstormtaylor.com>, cd885fd)
 - Add props "tabIndex" and "role" (#552)
    
    * Add prop "tabIndex" to editor
    
    * Add prop "role"
    
    * Typo
    
    * Adapt rendering tests (Samy Pessé <samypesse@gmail.com>, 98995e7)

## [v0.16.9](https://github.com/OpusCapita/slate/compare/v0.16.8...v0.16.9) (Sun, 01 Jan 2017 01:12:28 GMT)
 - 0.16.9 (Ian Storm Taylor <ian@ianstormtaylor.com>, ef238b6)
 - Update nodes on `readOnly` editor property change (#544)
    
    * Propagate `readOnly` editor property to node components.
    Update nodes when `readOnly` changes.
    
    * Add a comment describing the reason of the check.
    
    * Move down the `readOnly` status change check. (AlbertHilb <alberthilbert@gmail.com>, 31f6f08)
 - Updated examples to add GitHub and Docs link + some styling. (#531) (Sunny Hirai <thesunny@gmail.com>, 189af27)
 - Reloading the page now also reloads the CSS. (#532) (Sunny Hirai <thesunny@gmail.com>, dbef33a)
 - Added `state` as a property to Transform in the documentation (#526)
    
    * Updates docs/reference/models/transform.md
    
    Auto commit by GitBook Editor
    
    * Updates docs/reference/models/transform.md
    
    Auto commit by GitBook Editor (Sunny Hirai <thesunny@gmail.com>, 5cf11f7)
 - Improve `examples` so that code changes propagate to browser (#527)
    
    * Updated examples/dev.html so that the script would reload on a page refresh
    
    * Made watch:examples verbose so we know when watchify has finished its work. (Sunny Hirai <thesunny@gmail.com>, d56c0d8)
 - Updates docs/reference/models/transform.md (#525)
    
    Auto commit by GitBook Editor (Sunny Hirai <thesunny@gmail.com>, d309514)

## [v0.16.8](https://github.com/OpusCapita/slate/compare/v0.16.7...v0.16.8) (Mon, 12 Dec 2016 20:06:33 GMT)
 - 0.16.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1dbfea4)
 - change offset key logic to never throw when not found (Ian Storm Taylor <ian@ianstormtaylor.com>, 98dade9)
 - refactor data transfer to be less complex, closes #498 (#519) (Ian Storm Taylor <ian@ianstormtaylor.com>, 4e177e4)

## [v0.16.7](https://github.com/OpusCapita/slate/compare/v0.16.6...v0.16.7) (Sat, 10 Dec 2016 02:12:08 GMT)
 - 0.16.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, a5dc3b7)
 - cleanup lots of selection code, get tests passing again (Ian Storm Taylor <ian@ianstormtaylor.com>, 59b31fb)
 - fix selection methods resolution of isBackward, closes #512 (Ian Storm Taylor <ian@ianstormtaylor.com>, 36bd59b)

## [v0.16.6](https://github.com/OpusCapita/slate/compare/v0.16.5...v0.16.6) (Fri, 09 Dec 2016 23:20:16 GMT)
 - 0.16.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, 9dde2e5)
 - update normalization logic to account for new children (Ian Storm Taylor <ian@ianstormtaylor.com>, 4b64515)

## [v0.16.5](https://github.com/OpusCapita/slate/compare/v0.16.4...v0.16.5) (Fri, 09 Dec 2016 20:46:35 GMT)
 - 0.16.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 78a83fa)
 - add on-select behavior test (Ian Storm Taylor <ian@ianstormtaylor.com>, 71befd0)
 - Add the `Stack` concept (#513)
    
    * trying to get testing in browser to work
    
    * add the "stack" concept
    
    * remove old things from package.json
    
    * minor fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, ad2642a)

## [v0.16.4](https://github.com/OpusCapita/slate/compare/v0.16.3...v0.16.4) (Thu, 08 Dec 2016 18:40:11 GMT)
 - 0.16.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, e080e5a)
 - Add unwrapNodeByKey (#509)
    
    * Add separate splitNodeOperation in two different op
    
    * Add transform unwrapNodeByKey
    
    * Add tests for unwrapNodeByKey
    
    * Add test for undo of unwrapNodeByKey
    
    * Support normalize option
    
    * Handle last/first sibling case
    
    * Document new unwrapNodeByKey transform (Nicolas Gaborit <soreine.plume@gmail.com>, ed03959)
 - update error message (Ian Storm Taylor <ian@ianstormtaylor.com>, 36670d0)
 - change zero-width spaces to use data attributes for consistency (Ian Storm Taylor <ian@ianstormtaylor.com>, 5808e64)

## [v0.16.3](https://github.com/OpusCapita/slate/compare/v0.16.2...v0.16.3) (Thu, 08 Dec 2016 04:47:25 GMT)
 - 0.16.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2e797ae)
 - fix void rendering tests (Ian Storm Taylor <ian@ianstormtaylor.com>, bd44acb)
 - fix offset key finding logic to account for nested voids (Ian Storm Taylor <ian@ianstormtaylor.com>, c53315f)

## [v0.16.2](https://github.com/OpusCapita/slate/compare/v0.16.1...v0.16.2) (Wed, 07 Dec 2016 23:23:26 GMT)
 - 0.16.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, ee4ac6c)
 - rename data-slate-content to data-slate-editor (Ian Storm Taylor <ian@ianstormtaylor.com>, d0ccfac)
 - update transforms tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 48411c7)
 - fix style (Ian Storm Taylor <ian@ianstormtaylor.com>, 6822e8b)
 - Added `call` to Transforms (#503)
    
    * Added call method to Transforms to enable calling of custom transforms
    
    * Fixed spacing (Sunny Hirai <thesunny@gmail.com>, 479ab24)
 - Revert jest (#507)
    
    * remove debugger
    
    * switch back to mocha
    
    * remove jest config from package.json
    
    * remove old browser test support files
    
    * remove unnecessary assert-json helper (Ian Storm Taylor <ian@ianstormtaylor.com>, 1f60d4c)
 - Add an attribute to uniquely identify divs used to render `content` component (#470)
    
    * Add `data-slate-content` attribute to the divs used to render `content` components.
    Use that attribute to uniquely identify them.
    Update test expected results.
    
    * Fix lint complaints. (AlbertHilb <alberthilbert@gmail.com>, a1638dd)
 - add schema reference to docs sidebar (Ian Storm Taylor <ian@ianstormtaylor.com>, 7756be9)
 - remove debugger (Ian Storm Taylor <ian@ianstormtaylor.com>, 4a513dc)
 - update tests to use jest and be async, closes #495 (#502)
    
    * update tests to use jest and be async, closes #495
    
    * add read-metadata for perf and fragments (Ian Storm Taylor <ian@ianstormtaylor.com>, 55fd064)
 - Add a GitHub link as icon in the docs (#501) (Nicolas Gaborit <soreine.plume@gmail.com>, 2fa0968)
 - Merge pull request #500 from ianstormtaylor/refactor-environment-detection
    
    refactor environment detection, remove unused deps (35bb694 18ef447, 34990c9)
 - refactor environment detection, remove unused deps (Ian Storm Taylor <ian@ianstormtaylor.com>, 18ef447)

## [v0.16.1](https://github.com/OpusCapita/slate/compare/v0.16.0...v0.16.1) (Sat, 03 Dec 2016 01:04:30 GMT)
 - 0.16.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 35bb694)
 - fix dom selection normalizing for void nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 0c12e95)

## [v0.16.0](https://github.com/OpusCapita/slate/compare/v0.15.18...v0.16.0) (Sat, 03 Dec 2016 00:18:27 GMT)
 - 0.16.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 6d576b0)
 - add history (Ian Storm Taylor <ian@ianstormtaylor.com>, 05d1521)
 - Merge pull request #494 from ianstormtaylor/text-around-inline
    
    Fix to always have text nodes around inline nodes (d6b771b e0a46ad, a20f32a)
 - fix selecting around inlines with option on macs (Ian Storm Taylor <ian@ianstormtaylor.com>, e0a46ad)
 - fix deleting forward and backward around inlines (Ian Storm Taylor <ian@ianstormtaylor.com>, a1a8c7f)
 - got rest of inline tests passing (Ian Storm Taylor <ian@ianstormtaylor.com>, 5b2d2ff)
 - fix lots of tests with inline behavior (Ian Storm Taylor <ian@ianstormtaylor.com>, 8096761)
 - fix selection behavior around inline nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 9c81ed9)
 - Merge branch 'fix/483' of https://github.com/SamyPesse/slate into fix-empty-inline (d6b771b 909e7d3, 73cf5fe)
 - fix docs sidebar (Ian Storm Taylor <ian@ianstormtaylor.com>, d6b771b)
 - update docs sidebar (Ian Storm Taylor <ian@ianstormtaylor.com>, 352ad1d)
 - Adapt tests for schema (Samy Pessé <samypesse@gmail.com>, 909e7d3)
 - Fix condition in core rule to add test around all inlines (Samy Pessé <samypesse@gmail.com>, 8738b0a)
 - Adapt schema to add empty text nodes around all inlines (Samy Pessé <samypesse@gmail.com>, bfc05b5)

## [v0.15.18](https://github.com/OpusCapita/slate/compare/v0.15.17...v0.15.18) (Fri, 02 Dec 2016 18:17:10 GMT)
 - 0.15.18 (Ian Storm Taylor <ian@ianstormtaylor.com>, 7f79deb)
 - Merge pull request #488 from SamyPesse/fix/484
    
    Fix #484: implement wrapInlineByKey and allow wrap of inline void in wrapInline (07b39a6 174595b, bf857ff)
 - Merge pull request #481 from aunsuwijak/bug/base64-serialize-node
    
    Add options to Base64 serializeNode (7814964 68a4f23, 07b39a6)
 - Add options params to Base64 deserialize, deserializeNode and serialize method (Suwijak Chaipipat <ppnk2537@gmail.com>, 68a4f23)
 - Add extra text nodes (Samy Pessé <samypesse@gmail.com>, 174595b)
 - Add extra text nodes (Samy Pessé <samypesse@gmail.com>, 671c568)
 - Remove comment (Samy Pessé <samypesse@gmail.com>, db6dfa0)
 - Remove comment (Samy Pessé <samypesse@gmail.com>, 9000067)
 - fix node methods that didnt normalize keys, closes #489 (Ian Storm Taylor <ian@ianstormtaylor.com>, 7814964)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, f7c1e80)
 - Merge pull request #487 from wmertens/patch-1
    
    Mention slate-drop-or-paste-images in plugins (7b2babe a17f7dc, bdb2769)
 - Merge pull request #485 from GitbookIO/remove-lodash
    
    Remove lodash dependency (b79b249 dbe747a, 7b2babe)
 - Implement "wrapInlineByKey" and use it in "wrapInlineAtRange" (Samy Pessé <samypesse@gmail.com>, 797b58e)
 - Mention slate-drop-or-paste-images in plugins (Wout Mertens <Wout.Mertens@gmail.com>, a17f7dc)
 - Add failing unit test (Samy Pessé <samypesse@gmail.com>, 238ed2b)
 - Remove lodash dependency (Soreine <soreine.plume@gmail.com>, dbe747a)
 - Add options to Base64 serializeNode (Suwijak Chaipipat <ppnk2537@gmail.com>, 8cd8391)

## [v0.15.17](https://github.com/OpusCapita/slate/compare/v0.15.16...v0.15.17) (Fri, 02 Dec 2016 03:56:39 GMT)
 - 0.15.17 (Ian Storm Taylor <ian@ianstormtaylor.com>, b79b249)
 - fix for non-br void nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, c137b94)

## [v0.15.16](https://github.com/OpusCapita/slate/compare/v0.15.15...v0.15.16) (Fri, 02 Dec 2016 03:26:03 GMT)
 - 0.15.16 (Ian Storm Taylor <ian@ianstormtaylor.com>, 47d0e68)
 - allow for passing default block type to html serializer (Ian Storm Taylor <ian@ianstormtaylor.com>, 35b97b7)

## [v0.15.15](https://github.com/OpusCapita/slate/compare/v0.15.14...v0.15.15) (Fri, 02 Dec 2016 01:36:18 GMT)
 - 0.15.15 (Ian Storm Taylor <ian@ianstormtaylor.com>, 0365325)
 - add support for isShift on paste (Ian Storm Taylor <ian@ianstormtaylor.com>, 9d51258)

## [v0.15.14](https://github.com/OpusCapita/slate/compare/v0.15.13...v0.15.14) (Thu, 01 Dec 2016 23:54:43 GMT)
 - 0.15.14 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2fefd02)
 - fix to nudge selection outside of inline nodes, closes #349 (Ian Storm Taylor <ian@ianstormtaylor.com>, 4c79d68)

## [v0.15.13](https://github.com/OpusCapita/slate/compare/v0.15.12...v0.15.13) (Thu, 01 Dec 2016 23:18:26 GMT)
 - 0.15.13 (Ian Storm Taylor <ian@ianstormtaylor.com>, 6d93af8)
 - fix for normalizing selections in empty blocks (Ian Storm Taylor <ian@ianstormtaylor.com>, 3a432a5)
 - remove debugger (Ian Storm Taylor <ian@ianstormtaylor.com>, 77d6aa2)
 - refactor <Leaf> updateSelection (Ian Storm Taylor <ian@ianstormtaylor.com>, b8850d1)
 - fix offset calculations and splitting near inlines (Ian Storm Taylor <ian@ianstormtaylor.com>, efd884b)
 - refactor core schema rules (Ian Storm Taylor <ian@ianstormtaylor.com>, 623b1f1)
 - update style (Ian Storm Taylor <ian@ianstormtaylor.com>, a4db914)
 - Merge pull request #465 from thesunny/fix-opt-shift-up-and-down
    
    Fix for OPTION-SHIFT-UP and OPTION-SHIFT-DOWN (2a355af f83ed35, a45765b)
 - fix normalization of selection from node and offset, closes #440 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2a355af)
 - update onSelect docs with note about onSelectionChange, closes #467 (Ian Storm Taylor <ian@ianstormtaylor.com>, e37d1b2)
 - Merge pull request #471 from inyono/patch-2
    
    fix wrong link in docs (989795e 9d3677e, dc78406)
 - fix wrong link in docs (Jonas Keinholz <jonas@keinholz.com>, 9d3677e)
 - Added fix for OPT-UP and OPT-DOWN on Firefox (Sunny Hirai <thesunny@gmail.com>, f83ed35)
 - Fixed linting errors (Sunny Hirai <thesunny@gmail.com>, fc7e715)
 - Fix for OPTION-SHIFT-UP and OPTION-SHIFT-DOWN (Sunny Hirai <thesunny@gmail.com>, 645e001)

## [v0.15.12](https://github.com/OpusCapita/slate/compare/v0.15.11...v0.15.12) (Wed, 30 Nov 2016 01:35:51 GMT)
 - 0.15.12 (Ian Storm Taylor <ian@ianstormtaylor.com>, 989795e)
 - Merge pull request #453 from skogsmaskin/master
    
    Avoid deprecation warnings in node.getNextBlock and node.getPreviousBlock (52e7d63 580fc1f, b06aafa)
 - Merge pull request #462 from ianstormtaylor/add-reset-key
    
    add resetKeyGenerator util (b5f155a 74a3b51, 52e7d63)
 - add resetKeyGenerator docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 74a3b51)
 - Merge pull request #461 from ianstormtaylor/add-delete-transforms
    
    Add delete transforms (4854d11 60a0337, b5f155a)
 - add resetKeyGenerator util (Ian Storm Taylor <ian@ianstormtaylor.com>, 450ffc9)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, 60a0337)
 - add ctrl-d and ctrl-h handling, closes #332 (Ian Storm Taylor <ian@ianstormtaylor.com>, ea2f704)
 - update k key handler in core plugin (Ian Storm Taylor <ian@ianstormtaylor.com>, 2b10e27)
 - add char, word, line delete transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 1fd2757)
 - Use key, not node object on getNextText and getPreviousText to avoid deprecation issues in node.getNextBlock and node.getPreviousBlock (Per-Kristian Nordnes <per.kristian.nordnes@gmail.com>, 580fc1f)

## [v0.15.11](https://github.com/OpusCapita/slate/compare/v0.15.10...v0.15.11) (Wed, 30 Nov 2016 00:25:11 GMT)
 - 0.15.11 (Ian Storm Taylor <ian@ianstormtaylor.com>, 4854d11)
 - add test for joining forward on inline voids (Ian Storm Taylor <ian@ianstormtaylor.com>, ff5e67e)
 - fix to always opt for the furthest text node at an offset (Ian Storm Taylor <ian@ianstormtaylor.com>, 083df2d)
 - fix to avoid splitting for inline voids too (Ian Storm Taylor <ian@ianstormtaylor.com>, ecf320e)

## [v0.15.10](https://github.com/OpusCapita/slate/compare/v0.15.9...v0.15.10) (Tue, 29 Nov 2016 20:39:14 GMT)
 - 0.15.10 (Ian Storm Taylor <ian@ianstormtaylor.com>, 155b1aa)
 - cleanup logging, fix inline void selection (Ian Storm Taylor <ian@ianstormtaylor.com>, bfbbd6d)
 - fix to default document.nodes to an immutable list, closes #460 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2c7be1d)
 - more emoji (Ian Storm Taylor <ian@ianstormtaylor.com>, 0dd3dee)
 - fix saving to a database example, closes #455 (Ian Storm Taylor <ian@ianstormtaylor.com>, 8bb92ae)
 - update docs sidebar (Ian Storm Taylor <ian@ianstormtaylor.com>, c6bf80d)
 - update utils docs (Ian Storm Taylor <ian@ianstormtaylor.com>, b393969)
 - update node and utils docs (Ian Storm Taylor <ian@ianstormtaylor.com>, bf99d48)
 - add utils reference (Ian Storm Taylor <ian@ianstormtaylor.com>, d925940)
 - add browser and device support to faq, closes #446 (Ian Storm Taylor <ian@ianstormtaylor.com>, 919d4b5)
 - remove old `prevState` logic from transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 1c396c1)
 - update large document example (Ian Storm Taylor <ian@ianstormtaylor.com>, d99f9b6)

## [v0.15.9](https://github.com/OpusCapita/slate/compare/v0.15.8...v0.15.9) (Wed, 23 Nov 2016 01:53:15 GMT)
 - 0.15.9 (Ian Storm Taylor <ian@ianstormtaylor.com>, 76b6c73)
 - Merge pull request #447 from ianstormtaylor/refactor-transforms
    
    Refactor transforms (5530b54 5b81f0b, 0b35a8b)
 - remove normalizeParentsByKey (Ian Storm Taylor <ian@ianstormtaylor.com>, 5b81f0b)
 - refactor normalize transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 3cacea1)
 - refactor splitInline (Ian Storm Taylor <ian@ianstormtaylor.com>, a155708)
 - refactor splitBlock (Ian Storm Taylor <ian@ianstormtaylor.com>, 490498f)
 - refactor selection snapshotting (Ian Storm Taylor <ian@ianstormtaylor.com>, fe836b1)
 - refactor wrapText transform (Ian Storm Taylor <ian@ianstormtaylor.com>, 6893884)
 - refactor inserting text removing selection marks (Ian Storm Taylor <ian@ianstormtaylor.com>, a6844a4)
 - refactor insert text and selection mark updating (Ian Storm Taylor <ian@ianstormtaylor.com>, da4c1ff)
 - refactor transform, simplify selection updating logic (Ian Storm Taylor <ian@ianstormtaylor.com>, f393973)
 - refactor add/remove mark transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, d32904c)
 - update transforms docblock (Ian Storm Taylor <ian@ianstormtaylor.com>, fda14bf)
 - remove return value from transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 0212085)
 - refactor transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 007cdf9)
 - refactor core schema (Ian Storm Taylor <ian@ianstormtaylor.com>, 5530b54)
 - refactor core schema (Ian Storm Taylor <ian@ianstormtaylor.com>, c631841)
 - fix core schema to not leave selection unset (Ian Storm Taylor <ian@ianstormtaylor.com>, b3fe0eb)
 - refactor core schema to remove last for void nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 6346ef3)
 - refactor delete at current range (Ian Storm Taylor <ian@ianstormtaylor.com>, da85c5a)

## [v0.15.8](https://github.com/OpusCapita/slate/compare/v0.15.7...v0.15.8) (Tue, 22 Nov 2016 02:34:47 GMT)
 - 0.15.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, b1296c1)
 - fix inserting fragments at starting edge of blocks, closes #425 (Ian Storm Taylor <ian@ianstormtaylor.com>, 14cdb77)
 - fix joinNode deep operation logic, closes #441 (Ian Storm Taylor <ian@ianstormtaylor.com>, adfc365)

## [v0.15.7](https://github.com/OpusCapita/slate/compare/v0.15.6...v0.15.7) (Mon, 21 Nov 2016 22:46:16 GMT)
 - 0.15.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, 729ce2e)
 - fix isInContentEditable logic to match children (Ian Storm Taylor <ian@ianstormtaylor.com>, ee7656f)
 - fix undoing removing text with marks, closes #350 (Ian Storm Taylor <ian@ianstormtaylor.com>, 7cd64de)

## [v0.15.6](https://github.com/OpusCapita/slate/compare/v0.15.5...v0.15.6) (Mon, 21 Nov 2016 22:10:02 GMT)
 - 0.15.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, f4d6efd)
 - Merge pull request #443 from tyler-johnson/nested-editable
    
    add support for nested content-editables (2ff8008 d70324a, 6f7bbbf)
 - Merge pull request #444 from ianstormtaylor/fix-paste-rich-text
    
    add logic to handle rich text pastes (1c1954a 59a69bb, 2ff8008)
 - add rich text checking for plain text too (Ian Storm Taylor <ian@ianstormtaylor.com>, 59a69bb)
 - rename isNonEditable to isInContentEditable (Tyler Johnson <tyler@beneaththeink.com>, d70324a)
 - add logic to handle rich text pastes (Ian Storm Taylor <ian@ianstormtaylor.com>, 0b5ba16)
 - improved isNonEditable for nested content-editables (Tyler Johnson <tyler@beneaththeink.com>, 56e2870)

## [v0.15.5](https://github.com/OpusCapita/slate/compare/v0.15.4...v0.15.5) (Fri, 18 Nov 2016 22:36:52 GMT)
 - 0.15.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1c1954a)
 - fix setting initial state in <Editor> (Ian Storm Taylor <ian@ianstormtaylor.com>, d1beb80)
 - fix to properly update cached state in <Editor>, closes #401 (Ian Storm Taylor <ian@ianstormtaylor.com>, 59fc2ff)
 - Merge pull request #438 from ianstormtaylor/remove-immutable-is
    
    remove Immutable.is check in node shouldComponentUpdate (d4ca1bc 4c10e3b, 25f09ec)
 - update comment for clarity (Ian Storm Taylor <ian@ianstormtaylor.com>, 4c10e3b)
 - remove Immutable.is check in node shouldComponentUpdate (Ian Storm Taylor <ian@ianstormtaylor.com>, 43d6a88)

## [v0.15.4](https://github.com/OpusCapita/slate/compare/v0.15.3...v0.15.4) (Fri, 18 Nov 2016 21:36:56 GMT)
 - 0.15.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, d4ca1bc)
 - remove isRendering flag lock, closes #383 (Ian Storm Taylor <ian@ianstormtaylor.com>, d281140)

## [v0.15.3](https://github.com/OpusCapita/slate/compare/v0.15.2...v0.15.3) (Fri, 18 Nov 2016 20:45:04 GMT)
 - 0.15.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, e9c3856)
 - fix warnings on copy fragment, closes #434 (Ian Storm Taylor <ian@ianstormtaylor.com>, ada5a6f)
 - fix inserting text in new blank paragraph, closes #437 (Ian Storm Taylor <ian@ianstormtaylor.com>, 73c007d)
 - remove old uid dependency (Ian Storm Taylor <ian@ianstormtaylor.com>, c641bbf)
 - add resources to docs (Ian Storm Taylor <ian@ianstormtaylor.com>, cf00107)
 - update warning text to be more helpful (Ian Storm Taylor <ian@ianstormtaylor.com>, 0f9cc69)
 - Merge pull request #436 from arekkas/case-432
    
    Added failing test case for inlines causing selection issue #432 (fd2900a 3c6819f, e189add)
 - fix logic for empty blocks (Ian Storm Taylor <ian@ianstormtaylor.com>, 3c6819f)
 - simplify before-inline split-block test (Ian Storm Taylor <ian@ianstormtaylor.com>, 7567be2)
 - make identical references warning text more useful (Ian Storm Taylor <ian@ianstormtaylor.com>, fd2900a)
 - added failing test case for inlines causing selection issue #432 (aeneasr <aeneas.rekkas@serlo.org>, 68d26cd)
 - add logo sketch file (Ian Storm Taylor <ian@ianstormtaylor.com>, a4cbced)
 - cleanup gitignore (Ian Storm Taylor <ian@ianstormtaylor.com>, f138d66)
 - update walkthroughs to remove function creation from render, closes #394 (Ian Storm Taylor <ian@ianstormtaylor.com>, 6591f24)
 - fix linting (Ian Storm Taylor <ian@ianstormtaylor.com>, 6f67ac7)
 - fix missing warning import (Ian Storm Taylor <ian@ianstormtaylor.com>, 6a7ba13)
 - clean up transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 1a4ee5e)
 - refactor schema transform logic (Ian Storm Taylor <ian@ianstormtaylor.com>, 286e362)
 - fix style, cleanup normalization code (Ian Storm Taylor <ian@ianstormtaylor.com>, b9d0f1d)
 - fix style, rename warning to warn (Ian Storm Taylor <ian@ianstormtaylor.com>, 4036753)

## [v0.15.2](https://github.com/OpusCapita/slate/compare/v0.15.1...v0.15.2) (Thu, 17 Nov 2016 21:17:41 GMT)
 - 0.15.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 53751ca)
 - fix trailing newline collapsing logic, closes #430 (Ian Storm Taylor <ian@ianstormtaylor.com>, a2be745)
 - update history to add note about node accessors (Ian Storm Taylor <ian@ianstormtaylor.com>, 85c6282)

## [v0.15.1](https://github.com/OpusCapita/slate/compare/v0.15.0...v0.15.1) (Thu, 17 Nov 2016 20:36:57 GMT)
 - 0.15.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, e0cd01a)
 - fix deprecate node access without key (Ian Storm Taylor <ian@ianstormtaylor.com>, 508d2b1)
 - add test for multiple matching rules (Ian Storm Taylor <ian@ianstormtaylor.com>, 590b024)
 - Break after applying first matching rule in HTML Serializer
    
    Fixes #404 (Kevin Lee <kevin.lee@openersolutions.com>, fccf724)
 - Merge pull request #413 from AlbertHilb/isContentEditable
    
    Use `isContentEditable` HTML element property to check if an element is editable (87cc6d1 beacdb0, ee624b0)
 - Use `isContentEditable` HTML element property to check if an element
    is editable. (Raffaele De Feo <alberthilbert@gmail.com>, beacdb0)

## [v0.15.0](https://github.com/OpusCapita/slate/compare/v0.14.19...v0.15.0) (Thu, 17 Nov 2016 19:55:28 GMT)
 - 0.15.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 87cc6d1)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (838e03f 4fc9d8e, ff371ca)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 838e03f)
 - Merge pull request #429 from aehlke/upgrade-debug
    
    Upgrade debug package (292dc15 bad8b05, 4fc9d8e)
 - Upgrade debug package
    
    Fixes an issue where debug may clear localStorage.debug on start, making it impossible to use. (Alex Ehlke <alex.ehlke@gmail.com>, bad8b05)
 - change to use lodash.uniqueId, add keygen override, add preserveKeys option to Raw serializer (Ian Storm Taylor <ian@ianstormtaylor.com>, 292dc15)
 - revert uid generation, but increase randomness (Ian Storm Taylor <ian@ianstormtaylor.com>, cdd1b29)
 - Merge branch 'master' into schema-normalize (fbf014c a6ec788, ade3c32)
 - Add another test for undo (Soreine <soreine.plume@gmail.com>, fbf014c)
 - Memoize schema validation (Soreine <soreine.plume@gmail.com>, e868d44)
 - Remove previous document comparison logic (Soreine <soreine.plume@gmail.com>, 56c2df0)
 - Make the successive normalization benchmark bigger and deeper (Soreine <soreine.plume@gmail.com>, db7ae6a)
 - Increase the size of the benchmarked document (Soreine <soreine.plume@gmail.com>, c122ec7)
 - Add benchmark for successive normalization (Soreine <soreine.plume@gmail.com>, 6981442)
 - Use incrementing number to generate keys (Soreine <soreine.plume@gmail.com>, c598c22)
 - Use es6-map as native Map polyfill (Soreine <soreine.plume@gmail.com>, b0c72c7)
 - Move IS_DEV to constants (Soreine <soreine.plume@gmail.com>, 62a3b46)
 - Rename void text rule (Soreine <soreine.plume@gmail.com>, b336166)
 - Add note about why the normalization rule match the parent (Soreine <soreine.plume@gmail.com>, 0901f36)
 - Rename `Schema.isNormalization` to `Schema.hasValidators` (Soreine <soreine.plume@gmail.com>, 1abdc25)
 - Remove return and assign at the same time (Soreine <soreine.plume@gmail.com>, 95107a7)
 - Remove weird if/then/else (Soreine <soreine.plume@gmail.com>, 4a16a9b)
 - Remove needless `transform = transform.method()` (Soreine <soreine.plume@gmail.com>, 944adc2)
 - Rename private functions and move them at end (Soreine <soreine.plume@gmail.com>, d57f51e)
 - Use getFirstText when fit (Soreine <soreine.plume@gmail.com>, 02d1531)
 - Enforce 2-spaces indentation (Soreine <soreine.plume@gmail.com>, a319499)
 - Use getFirstText in getLeafText (Samy Pessé <samypesse@gmail.com>, 094cdf8)
 - Remove test file (Samy Pessé <samypesse@gmail.com>, 1cc9b73)
 - Style pass on ternary indentation (Soreine <soreine.plume@gmail.com>, 6342c59)
 - Style pass on docstrings (Soreine <soreine.plume@gmail.com>, 201123a)
 - more readable code (Soreine <soreine.plume@gmail.com>, ddf7303)
 - Expose Range when requiring slate (Samy Pessé <samypesse@gmail.com>, 9609865)
 - Use key instead of node arguments in some places (Soreine <soreine.plume@gmail.com>, 8ed065e)
 - Fix writing in marks at beginning of text (Soreine <soreine.plume@gmail.com>, 1ec6eba)
 - Test undo setSelection (Soreine <soreine.plume@gmail.com>, 9cc1140)
 - Test undo for insertNode, moveNode, removeNode (Soreine <soreine.plume@gmail.com>, c8b61ba)
 - Fix undoing setMark (Soreine <soreine.plume@gmail.com>, 78a9eb2)
 - Test undo setMark (Soreine <soreine.plume@gmail.com>, 0cb7ee7)
 - Test undo add/remove mark (Soreine <soreine.plume@gmail.com>, c7294be)
 - Add `deep` option to `joinNode` to allow correctly undoing `splitNode` (Soreine <soreine.plume@gmail.com>, 6bfaf08)
 - Test splitNode undo (Soreine <soreine.plume@gmail.com>, 3b5cc17)
 - Add Node.splitNodeAfter, to allow for exact undo of `joinNode` (Soreine <soreine.plume@gmail.com>, 583b560)
 - Fix splitNode offset when undoing joinNode (Soreine <soreine.plume@gmail.com>, 6b38caf)
 - Add method createFromRanges to Text (Samy Pessé <samypesse@gmail.com>, 4d33991)
 - Add marks option to Text.createFromString (Soreine <soreine.plume@gmail.com>, 49f6331)
 - Improve performance for Selection.hasEdgeIn methods (Soreine <soreine.plume@gmail.com>, e28b76b)
 - Remove memoization on Selection
    
    All Selection methods use almost directly some Node methods which are
    already memoized. This removes the needless overhead of memoization for
    Selection, which changes often (Soreine <soreine.plume@gmail.com>, 44180c0)
 - Greatly improve performance of normalizeChildrenWith (Soreine <soreine.plume@gmail.com>, 83fa16d)
 - Add benchmark for Node.getTexts (Soreine <soreine.plume@gmail.com>, b54ddf1)
 - Optimize Node.getTexts to work on arrays (Soreine <soreine.plume@gmail.com>, 95cfc2f)
 - Cleaner default benchmark teardown (Soreine <soreine.plume@gmail.com>, 4792a5e)
 - Fix forEachDescendant early exit (Soreine <soreine.plume@gmail.com>, c644e8d)
 - Fix syntax (Soreine <soreine.plume@gmail.com>, 1112066)
 - Merge pull request #5 from GitbookIO/memoization-global-disabler
    
    Global memoization control, faster benchmark script (d58d7a0 f51189c, c94923d)
 - Fix teardown (Soreine <soreine.plume@gmail.com>, f51189c)
 - Do not use window for globals. Expose clear/disable functions in utils/memoize (Soreine <soreine.plume@gmail.com>, 1424103)
 - Add teardown for benchmarks, and adapt memoize-utils benchmark (Soreine <soreine.plume@gmail.com>, bada4fa)
 - Remove ludicrous amount of setup work that was needed to prevent memoization (Soreine <soreine.plume@gmail.com>, e505b7a)
 - Add global variable to disable memoization at any time (Soreine <soreine.plume@gmail.com>, 3d8000a)
 - More efficient update of Selection.isBackward (Soreine <soreine.plume@gmail.com>, d58d7a0)
 - Add failing test for undo of joinNode (Samy Pessé <samypesse@gmail.com>, 550a17c)
 - Mark ES6 Map as global (Samy Pessé <samypesse@gmail.com>, fed0a6d)
 - Merge pull request #3 from GitbookIO/schema-normalize-optims-node
    
    Quick improvements for filterDescendants (ce44724 af911fd, 4084cdf)
 - Use Node.forEachDescendant in Node.findDescendantDeep (Samy Pessé <samypesse@gmail.com>, af911fd)
 - Memoize getText on nodes (Samy Pessé <samypesse@gmail.com>, 738383c)
 - Rollback `getTexts` to use a recursive method (Samy Pessé <samypesse@gmail.com>, bf66749)
 - Allow Node.forEachDescendant to exit early (Samy Pessé <samypesse@gmail.com>, 6635221)
 - Use Node.forEachDescendant in Node.getKeys (Samy Pessé <samypesse@gmail.com>, 6f90515)
 - Add method forEachDescendant and use it for filterDescendants and getTexts (Samy Pessé <samypesse@gmail.com>, 1e7ff03)
 - Implement memoize using native Maps
    
    It should offer better performances, by avoiding comparing values using Immutable.is, and removing the small immutable object creation overhead. (Soreine <soreine.plume@gmail.com>, ce44724)
 - Always return early when schema has no decorators in getDescendantDecorators (Samy Pessé <samypesse@gmail.com>, 4cc4535)
 - Improve rendering performance when schema has no decorators (Samy Pessé <samypesse@gmail.com>, d6beed6)
 - Normalize the whole document in benchmarks (Samy Pessé <samypesse@gmail.com>, a3b7b07)
 - Add example for a large document (Samy Pessé <samypesse@gmail.com>, 8bc8e45)
 - Remove lint from `npm run perf` (Soreine <soreine.plume@gmail.com>, 580cb24)
 - Fix error in insertFragmentAtRange (Samy Pessé <samypesse@gmail.com>, ca14f24)
 - Merge pull request #2 from GitbookIO/schema-normalize-memoize-keys
    
    Prevent memoize cache miss by passing "node.key" instead of "node" (6030ba4 5627447, 57a62d1)
 - Change export of "is-dev" to be a constant to improve code compilation (Samy Pesse <samypesse@gmail.com>, 6030ba4)
 - Add notice of deprecation (Samy Pesse <samypesse@gmail.com>, 5627447)
 - Replace all calls to memoized functions using nodes instead of keys (Samy Pesse <samypesse@gmail.com>, 25959c1)
 - Add warning when passing an node to a method accepting a key (Samy Pesse <samypesse@gmail.com>, 94d1a54)
 - Add source maps when running tests (Samy Pesse <samypesse@gmail.com>, 4ffee3d)
 - Improve performances of "getPreviousSibling" and "getNextSibling" with memoization (Samy Pesse <samypesse@gmail.com>, ca67684)
 - Accept Node as argument type for normalizeNodeByKey (Samy Pessé <samypesse@gmail.com>, 91f481b)
 - Don't memoize some low level method (Samy Pessé <samypesse@gmail.com>, 20720a4)
 - Improve performances of normalizeChildrenWith by exiting if list are equals (Samy Pessé <samypesse@gmail.com>, b7ad0ba)
 - Revert "Remove extra LEAF in memoize"
    
    It was breaking for variable argument length methods
    This reverts commit 85ebf7fffa649cbd0d985f8c1eceab0d3b2f0342. (Soreine <soreine.plume@gmail.com>, 7738532)
 - Use optional argument in memoize-util benchmark (Soreine <soreine.plume@gmail.com>, a446035)
 - Remove extra LEAF in memoize (Soreine <soreine.plume@gmail.com>, 85ebf7f)
 - Fix for memoize of recursive functions (Soreine <soreine.plume@gmail.com>, 9e830b3)
 - Don't calcul range decorations in shouldComponentUpdate when schema has no decorations (Samy Pessé <samypesse@gmail.com>, a74fbd1)
 - Add memoize-util benchmark (Soreine <soreine.plume@gmail.com>, 0dc3c4e)
 - Improve unicity of uid used to generate keys (Samy Pessé <samypesse@gmail.com>, 13d7cb0)
 - Add method to return all keys in a node (Samy Pessé <samypesse@gmail.com>, a9807c9)
 - Rewrite getFirstText to not use findDescendant (Soreine <soreine.plume@gmail.com>, ee29523)
 - Rewrite getDescendant to be recursively memoized (Soreine <soreine.plume@gmail.com>, cb333a4)
 - Fix lint errors (Samy Pessé <samypesse@gmail.com>, afc413f)
 - Merge branch 'schema-normalize-memoization' into schema-normalize (42b5e89 17fa721, bc3fe73)
 - Revert "Memoize Schema.__validate"
    
    It's useless because we already compare with previous node in normalize
    
    This reverts commit 6f49c3fcbc6155c81909bc3783273c54987de665. (Soreine <soreine.plume@gmail.com>, 17fa721)
 - Memoize Schema.__validate (Soreine <soreine.plume@gmail.com>, 6f49c3f)
 - Use different build for test/lint/benchmarks (Samy Pessé <samypesse@gmail.com>, 42b5e89)
 - Lint after running tests and benchmarks (Samy Pessé <samypesse@gmail.com>, 37d99e0)
 - Remove old validate methods (Soreine <soreine.plume@gmail.com>, 321a71e)
 - Unmemoize filterDescendant (Soreine <soreine.plume@gmail.com>, f9eda89)
 - Don't normalize the selection twice when moving the cursor (Samy Pessé <samypesse@gmail.com>, e9f05bc)
 - Unmemoize getFurthest and make it use getAncestors (Soreine <soreine.plume@gmail.com>, c50b124)
 - Unmemoize getClosest (Soreine <soreine.plume@gmail.com>, 966e2c4)
 - Memoize getDescendantAtPath (Soreine <soreine.plume@gmail.com>, 5c6e4b9)
 - Only lookup entry once on memoize cache hit (Soreine <soreine.plume@gmail.com>, 136867d)
 - Unmemoize findDescendant (Soreine <soreine.plume@gmail.com>, fea1e69)
 - Small optimization for normalize
    
    Avoid calling refreshNode needlessly (Soreine <soreine.plume@gmail.com>, 22dd861)
 - Fix error :bomb: in shouldComponentUpdate (Samy Pessé <samypesse@gmail.com>, 247e546)
 - Add unit test for undo of setNodeByKey (Samy Pessé <samypesse@gmail.com>, af6b0e0)
 - Don't normalize with schema when moving selection (Samy Pessé <samypesse@gmail.com>, 925189e)
 - Small optimization for deleteBackward/deleteForward (Soreine <soreine.plume@gmail.com>, 74695d8)
 - Add node compare to improve normalize calls (Samy Pessé <samypesse@gmail.com>, 2aeaae4)
 - Fix indent in src/utils/warning.js (Samy Pessé <samypesse@gmail.com>, d048d7b)
 - Use Immutable.is only in development for node comparaison (Samy Pessé <samypesse@gmail.com>, 74523df)
 - Preserve node reference when splitting (Samy Pessé <samypesse@gmail.com>, d6e7fb6)
 - Fix insert-text benchmark (Soreine <soreine.plume@gmail.com>, 6d88672)
 - Merge branch 'more-benchmarks' into schema-normalize (2f3dda3 1fde66b, 2a6fc88)
 - Adapt benchmarks (Soreine <soreine.plume@gmail.com>, 2f3dda3)
 - Fix _normalizeNodeWith (Soreine <soreine.plume@gmail.com>, 164ecc6)
 - Recursive safety fixed, and throw error instead (Soreine <soreine.plume@gmail.com>, ddb8522)
 - Add maximum number of recursivity for normalization (Soreine <soreine.plume@gmail.com>, 4fa097a)
 - Add newline for better readability in console (Soreine <soreine.plume@gmail.com>, eb9b97d)
 - Immutable check warning: Log concerned node (Soreine <soreine.plume@gmail.com>, 8e963c7)
 - Document wrapBlockByKey (Soreine <soreine.plume@gmail.com>, 4374eb9)
 - Export wrapBlockByKey and add tests (Soreine <soreine.plume@gmail.com>, 6a77aa1)
 - Add transform `wrapBlockByKey`, to wrap any node
    
    This can be used to simply wrap a Text node. This is not possible with
    the current implementation of `wrapBlockAtRange`, which wraps the
    closest parent block of the text node. (Soreine <soreine.plume@gmail.com>, 6e07990)
 - Update condition for shouldComponentUpdate and immutable.is (Samy Pessé <samypesse@gmail.com>, 081ade2)
 - Merge branch 'master' into schema-normalize (6a5a7f3 d4eb53f, 19f56c8)
 - Add warning log when references are different in shouldComponentUpdate(Fix #373) (Samy Pessé <samypesse@gmail.com>, 6a5a7f3)
 - Merge pull request #1 from GitbookIO/schema-normalize-selection-ops
    
    Update selection in low-level operations (6d2b70c 379640d, e5abd9e)
 - Simplify deleteForward and deleteBackward (Samy Pessé <samypesse@gmail.com>, 379640d)
 - Add tests for splitNode operation (Soreine <soreine.plume@gmail.com>, 40456a0)
 - Update selection on splitNode (Soreine <soreine.plume@gmail.com>, 559c8ec)
 - Add test for selection inside a removeNodeByKey (Samy Pessé <samypesse@gmail.com>, 440aebb)
 - Remove double space in warning message (Samy Pessé <samypesse@gmail.com>, f84f9fd)
 - Add basic tests for removeNodeByKey (Samy Pessé <samypesse@gmail.com>, e86269a)
 - Merge remote-tracking branch 'origin/schema-normalize-selection-ops' into schema-normalize-selection-ops (41df908 62b8ed2, 668bd0d)
 - Move selection in moveNode operation (Samy Pessé <samypesse@gmail.com>, 41df908)
 - setNode cannot be used to update key and nodes (Soreine <soreine.plume@gmail.com>, 62b8ed2)
 - Deprecating using setNode to update `nodes` (Soreine <soreine.plume@gmail.com>, 97aa3ec)
 - Merge remote-tracking branch 'origin/schema-normalize-selection-ops' into schema-normalize-selection-ops (29afc57 b3e1b3a, 6c43cd5)
 - Add more tests for removeTextByKey (Samy Pessé <samypesse@gmail.com>, 29afc57)
 - Adapt existing tests (Soreine <soreine.plume@gmail.com>, b3e1b3a)
 - Remove console.log (Soreine <soreine.plume@gmail.com>, a50d381)
 - Add test to `joinNodeByKey` (Soreine <soreine.plume@gmail.com>, 947513f)
 - Update selection in `joinNode` operation (Soreine <soreine.plume@gmail.com>, 7e5f0b4)
 - Be inclusive for selection in insertText (Samy Pessé <samypesse@gmail.com>, 99e9a77)
 - Use moveEnd/Start in removeText (Samy Pessé <samypesse@gmail.com>, 9f5807e)
 - Merge branch 'schema-normalize-selection-ops' of https://github.com/GitbookIO/slate into schema-normalize-selection-ops (5958376 644b4b3, 0e1602c)
 - Adapt selection in removeText operation (Samy Pessé <samypesse@gmail.com>, 5958376)
 - Rename `extend...Offset` to `move...Offset` (Soreine <soreine.plume@gmail.com>, 644b4b3)
 - Complete tests for selection and insertTextByKey (Samy Pessé <samypesse@gmail.com>, e08ef88)
 - Add unit test for selection in insertText (Samy Pessé <samypesse@gmail.com>, 53d3555)
 - Add test for selection after the insertion (Samy Pessé <samypesse@gmail.com>, 8bb5bc1)
 - Add test for inserting text before selection (Samy Pessé <samypesse@gmail.com>, 20fc819)
 - Add unit test for testing insertTextByKey with marks (Samy Pessé <samypesse@gmail.com>, 9ae17d2)
 - Add more basic test for text insertion (Samy Pessé <samypesse@gmail.com>, 7c046a7)
 - Add basic test for insertTextByKey (Samy Pessé <samypesse@gmail.com>, 8703c53)
 - Add test.js for insertTExtByKey (Samy Pessé <samypesse@gmail.com>, 8c9cea2)
 - Update selection in insertText operation (Samy Pessé <samypesse@gmail.com>, 36d6d8e)
 - Fix merge in "docs/reference/models/transform.md" (Samy Pesse <samypesse@gmail.com>, 6d2b70c)
 - Adapt tests for unwrapInline (Samy Pesse <samypesse@gmail.com>, a3905a8)
 - Add options with normalize to unwrapBlockByKey and unwrapInlineByKey (Samy Pesse <samypesse@gmail.com>, e873de5)
 - Merge remote-tracking branch 'slate/master' into schema-normalize (b2b4a4d f380943, 4c9e138)
 - Fix rule INLINE_VOID_TEXTS_AROUND
    
    Added an additional test. Was working previously because the
    normalization was called several times recursively. (Soreine <soreine.plume@gmail.com>, b2b4a4d)
 - No lint in npm run test. Lint is done on Travis (Soreine <soreine.plume@gmail.com>, b769321)
 - Fix #397: resolve to leaf text in selection methods (Samy Pesse <samypesse@gmail.com>, 5477754)
 - Merge branch 'schema-normalize' of https://github.com/GitbookIO/slate into schema-normalize (c59ae7a ce0a557, 0e32043)
 - Adapt transform deleteAtRange (Samy Pessé <samypesse@gmail.com>, c59ae7a)
 - Merge branch 'pr393' into schema-normalize (0bd52d3 5eda68e, 11698bd)
 - Remove a most of unused vars (Soreine <soreine.plume@gmail.com>, ce0a557)
 - Update eslint and add sensible rules (including important React rules) (Soreine <soreine.plume@gmail.com>, e81708e)
 - Don't normalize on insertText if selection is not expanded (Soreine <soreine.plume@gmail.com>, 0bd52d3)
 - Optimize transforms by-key to lookup parent only if normalize (Soreine <soreine.plume@gmail.com>, dc8a588)
 - Increase benchmark min samples (Soreine <soreine.plume@gmail.com>, 1fde66b)
 - Prettier JSON output (Soreine <soreine.plume@gmail.com>, c4a9bad)
 - Add benchmark for text insertion (Soreine <soreine.plume@gmail.com>, 400d49c)
 - Merge branch 'schema-normalize-transforms' into schema-normalize (4b3a513 c2c1fc9, efaa5de)
 - Merge branch 'master' into schema-normalize (b1cfc8b f1a5d6f, 4b3a513)
 - Remove console logs in normalize transforms (Samy Pessé <samypesse@gmail.com>, c2c1fc9)
 - Don't normalize when schema has no normalization rules (Samy Pessé <samypesse@gmail.com>, 218bb0c)
 - Merge branch 'schema-normalize-transforms' into schema-normalize (25909b7 b09e326, b1cfc8b)
 - Normalize selection after all transforms (Samy Pesse <samypesse@gmail.com>, b09e326)
 - Add logging/timing for normalize calls (Samy Pesse <samypesse@gmail.com>, 9562845)
 - Fix normalize calls after moveNodeByKey (Samy Pesse <samypesse@gmail.com>, d6e57d2)
 - Add another tests for removeTextByKey with inline (Samy Pesse <samypesse@gmail.com>, 684d51e)
 - Add transform normalizeParentsByKey (Samy Pesse <samypesse@gmail.com>, 5ded81e)
 - Fix transform moveNodeByKey when container is the parent (Samy Pesse <samypesse@gmail.com>, 07de7bf)
 - Fix transform "wrapTextAtRange" throwing JS error (Samy Pesse <samypesse@gmail.com>, ddf2221)
 - Remove useless code (Samy Pesse <samypesse@gmail.com>, c8f69a4)
 - Merge branch 'schema-normalize-transforms' of https://github.com/GitbookIO/slate into schema-normalize-transforms (cdc2d6d b64681a, ee62f3c)
 - Add option normalize on AtRange transforms (Samy Pessé <samypesse@gmail.com>, cdc2d6d)
 - Fix rule INLINE_NO_EMPTY to act on parent block (Soreine <soreine.plume@gmail.com>, b64681a)
 - Remove unreachable code (Soreine <soreine.plume@gmail.com>, 25909b7)
 - Use ByKey instead of NodeOperation in wrapBlockAtRange (Samy Pessé <samypesse@gmail.com>, b122a2a)
 - Add normalize nodes to transforms bykey (Samy Pesse <samypesse@gmail.com>, c7f0c65)
 - Don't normalize when applying transforms (Samy Pesse <samypesse@gmail.com>, 1377e28)
 - Fix inline void inside an inline node (Samy Pesse <samypesse@gmail.com>, 4f1fc84)
 - Add failing test for schema rule (Samy Pesse <samypesse@gmail.com>, 4d0f067)
 - Fix stupid error in recursive normalize calls (Samy Pesse <samypesse@gmail.com>, 1689e64)
 - Don't call onBeforeChange when emitting new state (Samy Pesse <samypesse@gmail.com>, d285087)
 - Don't normalize document when selection is changing (Samy Pesse <samypesse@gmail.com>, 112b7c8)
 - Use normalizNodeByKey instead of normalizeDocument when possible (Samy Pesse <samypesse@gmail.com>, f31ac63)
 - Add more unit tests for normalize of "text around isVoid" (Samy Pesse <samypesse@gmail.com>, 7ed21fd)
 - Refactor tests for schema (Samy Pesse <samypesse@gmail.com>, 7d1279f)
 - Normalize children before normalizing a node itself (Samy Pesse <samypesse@gmail.com>, f73f63e)
 - Adapt test for unwrapInline across blocks (Samy Pesse <samypesse@gmail.com>, 798a0a9)
 - Adapt tests for setBlock/setInline with isVoid (Samy Pesse <samypesse@gmail.com>, 0682f59)
 - Enforce selection to be correct after final normalization (Samy Pesse <samypesse@gmail.com>, 3c7914b)
 - Add utils/warning.js (Samy Pesse <samypesse@gmail.com>, 1dbc906)
 - Remove no longer existant normalize operation (Samy Pesse <samypesse@gmail.com>, 8ed3f12)
 - Use node level normalization in transform "removeTextByKey" (Samy Pesse <samypesse@gmail.com>, a0a57f3)
 - Normalize selection after normalizing document (Samy Pesse <samypesse@gmail.com>, 8346bfc)
 - Fix normalization to prevent extra empty text nodes (Samy Pesse <samypesse@gmail.com>, a67f612)
 - Add rule to remove empty extra text nodes (Samy Pesse <samypesse@gmail.com>, d9669f7)
 - Add rules to prevent empty inline nodes (Samy Pesse <samypesse@gmail.com>, 8402df1)
 - Add schema rule to ensure that inline nodes have a space as content (Samy Pesse <samypesse@gmail.com>, 4c5ce86)
 - Remove transform "unwrapInlineByKey" done by another PR (Samy Pesse <samypesse@gmail.com>, 0f80230)
 - Improve normalize and validation to be recursive (Samy Pesse <samypesse@gmail.com>, a51061f)
 - Move normalize logic to src/transforms/normalize.js (Samy Pesse <samypesse@gmail.com>, d2d7122)
 - Fix rule NO_ADJACENT_TEXT_RULE (Samy Pesse <samypesse@gmail.com>, 808ae3c)
 - Remove normalization from transform calls (Samy Pesse <samypesse@gmail.com>, 0246c30)
 - Fix normalization to join adjacent text nodes (Samy Pesse <samypesse@gmail.com>, a49f8e1)
 - Merge PR #354 (e591efa 81bb5ea, d4dfdac)
 - Fix normalize to join text nodes (Samy Pesse <samypesse@gmail.com>, e591efa)
 - fix deleteing across inlines for remove-normalize (Tyler Johnson <tyler@beneaththeink.com>, 5eda68e)
 - Add transform.normalizeWith (Samy Pesse <samypesse@gmail.com>, bf8504b)
 - Change signature of Node.normalize to be recursive (Samy Pesse <samypesse@gmail.com>, 8f6a534)
 - Add rules to prevent adjacent text and min one text (Samy Pesse <samypesse@gmail.com>, 8164bb8)
 - Refactor to move all normalization rules in "plugins/schema.js" (Samy Pesse <samypesse@gmail.com>, 6f0a31c)
 - Merge branch 'pr392' into schema-normalize (d5357ca 8150df2, 7091c94)
 - Merge branch 'master' into fix-normalize-with-schema (4242392 b7eb15d, 8150df2)
 - updates (Ian Storm Taylor <ian@ianstormtaylor.com>, 4242392)
 - Merge remote-tracking branch 'origin/master' (f716a9f fc318ec, d5357ca)
 - Merge remote-tracking branch 'ianstormtaylor/master' (b7eb15d 582603a, f716a9f)
 - Add transform .unwrapInlineByKey with test and documentation (Samy Pesse <samypesse@gmail.com>, fc318ec)
 - Merge branch 'master' into remove-normalize (8213bb0 b7eb15d, 81bb5ea)
 - remove normalizeDocument transform (Ian Storm Taylor <ian@ianstormtaylor.com>, 8213bb0)
 - handle joining text nodes with insertFragment (Ian Storm Taylor <ian@ianstormtaylor.com>, 1443968)
 - handle splitting for fragments (Ian Storm Taylor <ian@ianstormtaylor.com>, 8cf0a05)
 - handle lots of splitting cases (Ian Storm Taylor <ian@ianstormtaylor.com>, fa5d59c)
 - remove debugger call (Ian Storm Taylor <ian@ianstormtaylor.com>, dfe5244)
 - handle joining and inserting text nodes for moveNodeByKey (Ian Storm Taylor <ian@ianstormtaylor.com>, 70ee777)
 - handle text cases for setNodeByKey (Ian Storm Taylor <ian@ianstormtaylor.com>, 5d27344)
 - handle joining text nodes when removing inlines between them (Ian Storm Taylor <ian@ianstormtaylor.com>, db3f00d)
 - handle removing text nodes when removing all characters (Ian Storm Taylor <ian@ianstormtaylor.com>, e86add8)
 - handle regenerating keys on insert (Ian Storm Taylor <ian@ianstormtaylor.com>, 105fba0)
 - Merge branch 'master' into remove-normalize (eea034a 3061b6e, 7d9620d)
 - remove extra normalize method (Ian Storm Taylor <ian@ianstormtaylor.com>, eea034a)
 - handle surrounding inline void nodes on insert (Ian Storm Taylor <ian@ianstormtaylor.com>, 9df223b)
 - update schema (Ian Storm Taylor <ian@ianstormtaylor.com>, bd26153)
 - add insert tests, and set inline void tests, and start normalize fix (Ian Storm Taylor <ian@ianstormtaylor.com>, 2ed1efb)

## [v0.14.19](https://github.com/OpusCapita/slate/compare/v0.14.17...v0.14.19) (Thu, 17 Nov 2016 02:59:48 GMT)
 - 0.14.19 (Ian Storm Taylor <ian@ianstormtaylor.com>, a6ec788)
 - god damnit npm (Ian Storm Taylor <ian@ianstormtaylor.com>, 39bd280)

## [v0.14.17](https://github.com/OpusCapita/slate/compare/v0.14.16...v0.14.17) (Thu, 17 Nov 2016 02:54:37 GMT)
 - 0.14.17 (Ian Storm Taylor <ian@ianstormtaylor.com>, 77470b8)
 - pin react dev dependencies to version 15.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 93d0152)
 - Merge branch 'close-297' (2f74e20 f7428cc, 9eb80ff)
 - fix style, refactor noop (Ian Storm Taylor <ian@ianstormtaylor.com>, f7428cc)
 - add focus-blur example (Ian Storm Taylor <ian@ianstormtaylor.com>, 3aff3cb)
 - move blur check to content component - closes #297 (Aeneas Rekkas (arekkas) <aeneas@ory.am>, d9bb0dd)
 - Merge pull request #424 from websymphony/patch-1
    
    Fixed minor typo. (738660f a5ecd84, 2f74e20)
 - Fixed minor typo.
    
    Updated contain -> content. (Amit Gaur <websymphony@users.noreply.github.com>, a5ecd84)
 - Merge pull request #421 from arekkas/patch-1
    
    Do not process onInput events when selection is lost (80cdbdb b201c6d, 738660f)
 - fix contributing docs test commands, closes #422 (Ian Storm Taylor <ian@ianstormtaylor.com>, 80cdbdb)
 - Fix broken links in the docs (#416) (d4eb53f 5c80df1, e030dea)
 - resolve leaf component issues with focus and blur transformations - closes #297 (Aeneas Rekkas (arekkas) <aeneas@ory.am>, ff25061)
 - Do not process onInput events when selection is lost
    
    Resolves an issue where `this.getPoint(anchorNode, anchorOffset)` throws an error if a key event is triggered although not in focus (Aeneas <arekkas@users.noreply.github.com>, b201c6d)
 - Fix broken links in the docs (Dieter Komendera <dieter@komendera.com>, 5c80df1)

## [v0.14.16](https://github.com/OpusCapita/slate/compare/v0.14.15...v0.14.16) (Wed, 26 Oct 2016 20:02:01 GMT)
 - 0.14.16 (Ian Storm Taylor <ian@ianstormtaylor.com>, d4eb53f)
 - fix for deleting across an inline (#384)
    
    * failing test for deleting across an inline
    
    * fix deleting across inlines (#384)
    
    * Add jsdom devDepencency
    
    Required as peer dependency by mocha-jsdom (Tyler Johnson <tyler@tylerjohnson.me>, db95f4b)
 - Node methods optimizations (#364)
    
    * Node.getParent exits earlier
    
    * Add Node.getAncestors method
    
    * Remove numerous getParent in Node.getClosest
    
    * Remove use of assertDescendant in getPath
    
    Still throws when not finding the descendant though
    
    * Remove assertDescendant from Node.updateDescendant
    
    * Remove assertDescendant from Node.removeDescendant
    
    * Fix Node.findDescendant, which always returned first level descendants
    
    * Add Node.findDescendantDeep
    
    * Memoize Node.getAncestors
    
    * Implement and use Node.get{First|Last}Text
    
    * Add jsdom devDepencency
    
    Required as peer dependency by mocha-jsdom (Nicolas Gaborit <soreine.plume@gmail.com>, 8851855)
 - Html serializer: optionally return React elements (#408)
    
    * Html serializer optionally returns React elements
    
    * update heredoc to indicate optional return value of array
    
    * update documentation for html serializer to include React return option
    
    * move returnElements argument to render:false (jasonphillips <jasonphillips@users.noreply.github.com>, dca60c4)
 - Fix inserting fragment at the end of current text node (#405)
    
    * fix insertFragment
    
    * insert multi-block fragment at the end of current text node test case (Nikita Zyulyaev <zyulyaev@users.noreply.github.com>, 270c2ab)
 - Add transform "unwrapBlockByKey" and "unwrapInlineByKey" (#390)
    
    * Add transform .unwrapInlineByKey with test and documentation
    
    * Add transform .unwrapBlockByKey with test and documentation
    
    * add failing test for unwrap limited to a range
    
    * Improve creation of selection in unwrap[Inline|Block]ByKey
    
    * Adapt unwrapInlineAtRange to take range in consideration
    
    * Add test to unwrapInline only one in the document (Samy Pessé <samypesse@gmail.com>, f380943)
 - Add benchmarks (#368)
    
    * Add script for benchmark
    
    * Add error handling
    
    * Rename folder to perf/benchmarks
    
    * Add README
    
    * Avoid memoization between benchmark runs
    
    * Handle multiple benchmark. Add setup to benchmarks
    
    * Run benchmarks through Travis
    
    * Add command line options for JSON output
    
    * Add export to JSON, and comparison with reference
    
    * Improve serialize and fix results display
    
    * Add perf/ to .npmignore
    
    * Print error message
    
    * Create normal example for normalize
    
    * Add normalize-document wide and deep
    
    * Add split-block normal, deep and wide
    
    * Add delete-backward benchmarks
    
    * Fix too much newlines
    
    * Use microtime for better results maybe?
    
    * Print number of runs
    
    * Add minSamples options for better accuracy
    
    * Use babel-node to launch benchmarks
    
    * Use jsdom-global instead of mocha-jsdom (deprecated)
    
    * Add rendering benchmark example
    
    * Fix jsdom usage.
    
    * Use JSX because we can
    
    * Only use on('cycle') that is called even on error
    
    * Example of successive rendering benchmark
    
    * Rename README, and explain how to add a benchmark
    
    * Add C++11 to Travis to install microtime
    
    * Update Readme.md > Understanding the results
    
    * Try to fix Travis build with microtime
    
    * Travis: use before_install
    
    Instead of overwriting install
    
    * Forgot to remove mocha-jsdom import
    
    Thanks node_modules...
    
    * Add jsdom as devDependency
    
    (required as peer dependency by jsdom-global)
    
    * Add --only option to run only a specific benchmark
    
    * Print name onStart rather than at end (Nicolas Gaborit <soreine.plume@gmail.com>, f1a5d6f)
 - Fix #385: Re-render when selection state changed for a node (#387)
    
    * Re-render when selection state changed for a node
    
    * Change condition to be an OR (focus or selection changed) (Samy Pessé <samypesse@gmail.com>, 582603a)
 - fix #342, Uncaught Error: Invalid `key` argument when `removeNodeByKey` (#365)
    
    * fix #342, Uncaught Error: Invalid `key` argument when `removeNodeByKey`
    
    * return List() and use selection.isUnset instead
    
    * fix default value when this.selection.isUnset (LiJung Chi <chilijung@gmail.com>, b7eb15d)

## [v0.14.15](https://github.com/OpusCapita/slate/compare/v0.14.14...v0.14.15) (Tue, 04 Oct 2016 19:28:50 GMT)
 - 0.14.15 (Ian Storm Taylor <ian@ianstormtaylor.com>, 3061b6e)
 - handling ctrl + k hotkey on mac (#359)
    
    * handling ctrl + k hotkey on mac
    
    * fixed trailing spaces (eden lane <edencore@gmail.com>, 59c0438)
 - Remove old `snapshot` parameter for Transform.apply (#361) (Nicolas Gaborit <soreine.plume@gmail.com>, f87e4dc)

## [v0.14.14](https://github.com/OpusCapita/slate/compare/v0.14.13...v0.14.14) (Tue, 27 Sep 2016 04:52:47 GMT)
 - 0.14.14 (Ian Storm Taylor <ian@ianstormtaylor.com>, dd6d13e)
 - tweak inline void component rendering, fix rendering tests (Ian Storm Taylor <ian@ianstormtaylor.com>, a9f2872)
 - add postpublish script, closes #355 (Ian Storm Taylor <ian@ianstormtaylor.com>, 686cd95)
 - fix block void node handling, closes #358 (Ian Storm Taylor <ian@ianstormtaylor.com>, 071d729)

## [v0.14.13](https://github.com/OpusCapita/slate/compare/v0.14.12...v0.14.13) (Fri, 23 Sep 2016 16:48:58 GMT)
 - 0.14.13 (Ian Storm Taylor <ian@ianstormtaylor.com>, e63a6b3)
 - Fix #234: fix typing text near inline void nodes (#339)
    
    * Add base tests for isVoid with around text node
    
    * Ensure that void nodes are surrounded by text nodes in Node.normalize
    
    * Only wrap inline void nodes with text
    
    * Fix indentation
    
    * Add emojis example
    
    * Adapt unit test "transforms/fixtures/at-current-range/set-inline/with-is-void"
    
    * Adapt unit test "transforms/fixtures/at-current-range/insert-inline/with-inline"
    
    * Adapt unit test "transforms/fixtures/at-current-range/insert-inline/block-start"
    
    * add passing parent to leaf nodes, for rendering breaks
    
    * add zero-width spaces in empty text nodes, to allow selections
    
    * add zero-width space handling to copy/cut
    
    * fix delete handling around inline void nodes
    
    * fix tests for inline void nodes
    
    * fix style
    
    * fix void cursor handling across browsers
    
    * fix void rendering tests (Samy Pessé <samypesse@gmail.com>, d1c3700)

## [v0.14.12](https://github.com/OpusCapita/slate/compare/v0.14.11...v0.14.12) (Thu, 22 Sep 2016 23:13:45 GMT)
 - 0.14.12 (Ian Storm Taylor <ian@ianstormtaylor.com>, f7e132e)
 - update gh-pages script (Ian Storm Taylor <ian@ianstormtaylor.com>, cd82234)
 - fix deleting across nested blocks, closes #341 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1aba4b9)

## [v0.14.11](https://github.com/OpusCapita/slate/compare/v0.14.10...v0.14.11) (Thu, 22 Sep 2016 22:45:02 GMT)
 - 0.14.11 (Ian Storm Taylor <ian@ianstormtaylor.com>, 785bd3e)
 - remove debuggers (Ian Storm Taylor <ian@ianstormtaylor.com>, c81c1f9)
 - fix for splitting blocks inside inline nodes, and undoing inline wrapping
    
    fixes #346
    fixes #348 (Ian Storm Taylor <ian@ianstormtaylor.com>, a1647b5)
 - Prevent backspace to move selection into table-cell (#345) (Suwijak Chaipipat <ppnk2537@gmail.com>, 8300fad)

## [v0.14.10](https://github.com/OpusCapita/slate/compare/v0.14.9...v0.14.10) (Wed, 21 Sep 2016 18:46:15 GMT)
 - 0.14.10 (Ian Storm Taylor <ian@ianstormtaylor.com>, 447a6aa)
 - Focus and blur should not clear marks on selection (#338)
    
    * Do not clear mark on focus/blur
    
    * Add tests (Nicolas Gaborit <soreine.plume@gmail.com>, bcb2fc3)
 - improvements to wrapBlockAtRange() (#343)
    
    * add failing test for 340
    
    * fix wrapBlockAtRange to handle multiple deep children (#340)
    
    * failing test for wrapblock changes
    
    * wrapBlockAtRange using top-most parent logic
    
    * Revert "wrapBlockAtRange using top-most parent logic"
    
    This reverts commit 4f056285f78e0ed2fc6ed34586f204c601fe8d29. (Tyler Johnson <tyler@tylerjohnson.me>, 27168a3)

## [v0.14.9](https://github.com/OpusCapita/slate/compare/v0.14.8...v0.14.9) (Tue, 20 Sep 2016 18:36:53 GMT)
 - 0.14.9 (Ian Storm Taylor <ian@ianstormtaylor.com>, e486e87)
 - Implement "splitBlockAtRange" as a node method (#336) (Samy Pessé <samypesse@gmail.com>, 2fa9edc)

## [v0.14.8](https://github.com/OpusCapita/slate/compare/v0.14.7...v0.14.8) (Thu, 15 Sep 2016 21:54:06 GMT)
 - 0.14.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5d24e30)
 - fix deleting backward/forward multiple characters, fixes #326 (Ian Storm Taylor <ian@ianstormtaylor.com>, f27ccd5)
 - add note about transforms being mutable to history, fixes #323 (Ian Storm Taylor <ian@ianstormtaylor.com>, 3951f89)
 - fix history saving logic for fresh states, fixes #325 (Ian Storm Taylor <ian@ianstormtaylor.com>, 16ae079)

## [v0.14.7](https://github.com/OpusCapita/slate/compare/v0.14.6...v0.14.7) (Thu, 15 Sep 2016 21:02:31 GMT)
 - 0.14.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, c04d054)
 - Remove dist files (#324)
    
    * Unignore dist
    
    * Remove dist
    
    * Ignore dist
    
    * Create dist folder on build (Benjamin Kniffler <bkniffler@me.com>, f20abd9)
 - change toSet to toOrderedSet (#322) (Somasundaram Ayyappan <somasundaram321@gmail.com>, 08b733a)

## [v0.14.6](https://github.com/OpusCapita/slate/compare/v0.14.5...v0.14.6) (Thu, 15 Sep 2016 00:05:44 GMT)
 - 0.14.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, a6ef4b8)
 - add dist back to gitignore (Ian Storm Taylor <ian@ianstormtaylor.com>, a876d71)
 - Merge branch 'master' of https://github.com/bkniffler/slate into bkniffler-master (0a0171e a73ba5c, 57f75ed)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (60329c3 79eafe2, a73ba5c)
 - Include dist files (Benjamin Kniffler <bkniffler@me.com>, 60329c3)
 - fix build:min/max to target dist folder (Benjamin Kniffler <bkniffler@me.com>, 644bd79)
 - Small fixes (Benjamin Kniffler <bkniffler@me.com>, c22777c)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (6865435 88f6ee5, a9a9dfd)
 - Small fix (Benjamin Kniffler <bkniffler@me.com>, 6865435)
 - lib tasks -> build tasks (Benjamin Kniffler <bkniffler@me.com>, dde1c92)
 - Update gitignore, npmignore, readme (Benjamin Kniffler <bkniffler@me.com>, 178983b)
 - Migrate lib to src and dist to lib. (Benjamin Kniffler <bkniffler@me.com>, 2cf84d8)

## [v0.14.5](https://github.com/OpusCapita/slate/compare/v0.14.4...v0.14.5) (Wed, 14 Sep 2016 23:49:25 GMT)
 - 0.14.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 0a0171e)
 - fix history to only merge contiguous inserts/removals, fixes #312 (Ian Storm Taylor <ian@ianstormtaylor.com>, b6566b9)

## [v0.14.4](https://github.com/OpusCapita/slate/compare/v0.14.3...v0.14.4) (Wed, 14 Sep 2016 22:09:59 GMT)
 - 0.14.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 79eafe2)
 - remove debugger (Ian Storm Taylor <ian@ianstormtaylor.com>, 14f939d)
 - fix setMarkByKey by adding tests, closes #319 (Ian Storm Taylor <ian@ianstormtaylor.com>, 7756f76)
 - Unset selection before remove node (#316) (Suwijak Chaipipat <ppnk2537@gmail.com>, b7f317a)
 - fix typo in transform docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 88f6ee5)
 - remove old, undocumented node-level mutating methods (Ian Storm Taylor <ian@ianstormtaylor.com>, 5edbe3d)
 - update docs for new node-level transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 3ef82a3)
 - Fix insert fragment multiple nested (#309)
    
    * Add fixture for insertFragmentAtRange with multiple blocks in nested blocks
    
    * Small fix for the fixture's `expected` output
    
    * Rebase on master (0.14.x)
    
    Moved tests to new appropriate location
    
    * Output now expects that fragment are merged to adjacent blocks
    
    * fix insert fragment for multiple children (Ian Storm Taylor <ian@ianstormtaylor.com>, 7b55316)

## [v0.14.3](https://github.com/OpusCapita/slate/compare/v0.14.2...v0.14.3) (Tue, 13 Sep 2016 18:12:54 GMT)
 - 0.14.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, bcd85ff)
 - fix delete-at-range across depths, closes #306 (Ian Storm Taylor <ian@ianstormtaylor.com>, fbe3980)

## [v0.14.2](https://github.com/OpusCapita/slate/compare/v0.14.1...v0.14.2) (Sun, 11 Sep 2016 02:30:49 GMT)
 - 0.14.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 800ffe3)
 - fix <Node> shouldComponentUpdate for blurring (Ian Storm Taylor <ian@ianstormtaylor.com>, b8992c1)

## [v0.14.1](https://github.com/OpusCapita/slate/compare/v0.14.0...v0.14.1) (Sun, 11 Sep 2016 01:33:38 GMT)
 - 0.14.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, f51ac69)
 - fix re-render logic for leaf nodes on blur/focus (Ian Storm Taylor <ian@ianstormtaylor.com>, 46d5d9a)
 - fix embed example to not clobber edits, closes #301 (Ian Storm Taylor <ian@ianstormtaylor.com>, cc11861)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 4e61070)

## [v0.14.0](https://github.com/OpusCapita/slate/compare/v0.13.9...v0.14.0) (Sun, 11 Sep 2016 00:40:24 GMT)
 - 0.14.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, bb93142)
 - remove debugger (Ian Storm Taylor <ian@ianstormtaylor.com>, 8fc3631)
 - update source readmes and history (Ian Storm Taylor <ian@ianstormtaylor.com>, caa0dcb)
 - Merge branch 'add-operations' (cc45135 628165e, fab78c1)
 - add release:next npm script (Ian Storm Taylor <ian@ianstormtaylor.com>, cc45135)
 - merge master changes (521f0d9 2700fb5, 628165e)
 - fix selection setting for history (Ian Storm Taylor <ian@ianstormtaylor.com>, 521f0d9)
 - fix to normalize selection (Ian Storm Taylor <ian@ianstormtaylor.com>, 52c6bb9)
 - update paths in selection operations (Ian Storm Taylor <ian@ianstormtaylor.com>, 983d4d3)
 - fix selection transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 68e8be2)
 - rename history transforms to on-history (Ian Storm Taylor <ian@ianstormtaylor.com>, 9d2a3b9)
 - refactor history into transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, a6b248f)
 - lots of work on refactoring for history (Ian Storm Taylor <ian@ianstormtaylor.com>, c35630d)
 - fix logic to determine isNative inside inline nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 7e333a0)
 - fix selection marks (Ian Storm Taylor <ian@ianstormtaylor.com>, 5b1793b)
 - add more selection tests (Ian Storm Taylor <ian@ianstormtaylor.com>, b0cf3d7)
 - refactor transform tests, add selection transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 1661706)
 - refactor operations (Ian Storm Taylor <ian@ianstormtaylor.com>, b9e083d)
 - finish refactoring selection transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 52820af)
 - refactor at-current-range transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 99faf31)
 - move cursor marks to the selection object (Ian Storm Taylor <ian@ianstormtaylor.com>, bde43c5)
 - work on refactoring selection transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 44008d3)
 - fix normalization for inserting inlines and blocks (Ian Storm Taylor <ian@ianstormtaylor.com>, 24f3686)
 - refactor wrap inline transform (Ian Storm Taylor <ian@ianstormtaylor.com>, 417e148)
 - more refactoring transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 84ba785)
 - refactor transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 4e24f26)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, 8434850)
 - refactor more transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, cb204ae)
 - refactor more transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 3ad0353)
 - refactor more transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 1d4c6db)
 - normalize more transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 229cfd3)
 - refactor more transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 54a4648)
 - update setBlockAtRange() transform to use primitives (Ian Storm Taylor <ian@ianstormtaylor.com>, 650f467)
 - update transforms to add operations to transform (Ian Storm Taylor <ian@ianstormtaylor.com>, 5687573)
 - refactor for operations (Ian Storm Taylor <ian@ianstormtaylor.com>, 6af9466)
 - refactor transforms to take transform (Ian Storm Taylor <ian@ianstormtaylor.com>, 9ae245d)
 - make transforms mutable (Ian Storm Taylor <ian@ianstormtaylor.com>, 18d5676)
 - refactor transforms to apply operations immediately (Ian Storm Taylor <ian@ianstormtaylor.com>, c297972)
 - remove options for now (Ian Storm Taylor <ian@ianstormtaylor.com>, 4162bb7)
 - refactor normalizing function (Ian Storm Taylor <ian@ianstormtaylor.com>, ff1f255)
 - add selection transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, fb29bdb)
 - refactor transforms to be modularized (Ian Storm Taylor <ian@ianstormtaylor.com>, 183abf8)

## [v0.13.9](https://github.com/OpusCapita/slate/compare/v0.13.8...v0.13.9) (Mon, 05 Sep 2016 23:10:02 GMT)
 - 0.13.9 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2700fb5)
 - Fix bug with non-immediate updating of readOnly state (#292)
    
    * Fix bug with non-immediate updating of readOnly state
    
    * Added comment for readOnly checking (eden lane <edencore@gmail.com>, d16e082)

## [v0.13.8](https://github.com/OpusCapita/slate/compare/v0.13.7...v0.13.8) (Mon, 05 Sep 2016 04:21:48 GMT)
 - 0.13.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, 91cc23b)
 - Add failing test showing splitBlock with isVoid bug (#276)
    
    * Add failing test showing splitBlock with isVoid bug
    
    Not sure what I actually expected calling `splitBlock()` on void block, but I
    would expect `splitBlock()` to respect a given block type's isVoid property.
    This failing test demonstrates that `splitBlock()` always creates a the new
    block with `isVoid: false`.
    
    * Fix isVoid not being copied when using splitBlock()
    
    The bug was actually inside `splitBlockAtRange`, as that's what actual drives
    `splitBlock()` (I assume the bug was therefore present in both methods). The
    fix is to simply copy across the `isVoid` value from the block being copied. (Andrew Cobby <cobbweb@users.noreply.github.com>, d6901aa)
 - fixed a few typos (#293) (Matthew Kosloski <matthewkosloski@me.com>, 3c46d05)
 - fixed a typo where the method for focus was blur() (#294) (Matthew Kosloski <matthewkosloski@me.com>, 523b8a7)

## [v0.13.7](https://github.com/OpusCapita/slate/compare/v0.13.6...v0.13.7) (Sun, 04 Sep 2016 00:55:06 GMT)
 - 0.13.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, 66ffc73)
 - fix tests to ignore .DS_Store (Ian Storm Taylor <ian@ianstormtaylor.com>, da274c8)
 - Fix broken link (#285) (Jonas Keinholz <jonas@keinholz.com>, b227c04)
 - Update package.json (#290)
    
    Update `cheerio` dependency. Fixes webpack builds. (Matt Reyer <winduptoy@users.noreply.github.com>, 2b01945)
 - Fixes a small error in a code example in HTML walkthrough. (#280) (Nick Passarella <nickpassarella@gmail.com>, 43d5735)
 - Replace npmcdn.com with unpkg.com (#284) (npmcdn-to-unpkg-bot <npmcdn-to-unpkg-bot@users.noreply.github.com>, 0893418)
 - Fix broken link to Block in docs (#278) (Andrew Cobby <cobbweb@users.noreply.github.com>, 98d663b)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 133e504)
 - add mobiledoc kit comparison to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, a739b01)
 - update readmegs (Ian Storm Taylor <ian@ianstormtaylor.com>, a4ec0f2)
 - update readme with new docs links (Ian Storm Taylor <ian@ianstormtaylor.com>, 49cbb92)
 - update gitbook sidebar (Ian Storm Taylor <ian@ianstormtaylor.com>, b4bae8a)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 964f1a3)
 - update gitbook sidebar (Ian Storm Taylor <ian@ianstormtaylor.com>, a7b60e4)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 9d293f5)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, a90d522)
 - fix gitbook (Ian Storm Taylor <ian@ianstormtaylor.com>, 010e938)
 - update gitbook (Ian Storm Taylor <ian@ianstormtaylor.com>, e71c782)
 - remove docs files for renaming (Ian Storm Taylor <ian@ianstormtaylor.com>, eb98342)
 - Use GitBook for documentation (#263)
    
    * Use gitbook for documentation
    
    * Add section about contributing in readme of docs (Samy Pessé <samypesse@gmail.com>, 83fe23d)
 - Fixed typo (#256) (Anton Kulakov <kulakowka@gmail.com>, 92e97a2)
 - update keydown handler signature (#254)
    
    * update keydown handler signature
    
    * Update applying-custom-formatting.md
    
    * Update defining-custom-block-nodes.md
    
    * Update saving-to-a-database.md
    
    * Update using-plugins.md (Ian Storm Taylor <ian@ianstormtaylor.com>, cb0b9b9)
 - Fix Documentation Links (#253) (Max Stockner <mail@bluemaex.de>, 6f5cdf4)
 - Fixed typo (#252) (Anton Kulakov <kulakowka@gmail.com>, 597fbde)

## [v0.13.6](https://github.com/OpusCapita/slate/compare/v0.13.5...v0.13.6) (Wed, 17 Aug 2016 17:15:53 GMT)
 - 0.13.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, 08b3dbf)
 - terse text can contain marks (#248) (Cássio Souza <cassiozen@gmail.com>, 1585a64)
 - fix typo in transfer (#247) (R41nGoloss <raingoloss@gmail.com>, af29cf6)

## [v0.13.5](https://github.com/OpusCapita/slate/compare/v0.13.4...v0.13.5) (Mon, 15 Aug 2016 23:24:13 GMT)
 - 0.13.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 0413d93)
 - fix delete when end block has inline nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 31924c5)

## [v0.13.4](https://github.com/OpusCapita/slate/compare/v0.13.3...v0.13.4) (Mon, 15 Aug 2016 22:08:09 GMT)
 - 0.13.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 01a00cb)

## [v0.13.3](https://github.com/OpusCapita/slate/compare/v0.13.2...v0.13.3) (Mon, 15 Aug 2016 22:01:55 GMT)
 - 0.13.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 0606cd2)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 0755e6b)
 - fix conflict (914eb27 c0e9504, 898fda1)
 - fix shouldComponentUpdate logic for code highlighing (Ian Storm Taylor <ian@ianstormtaylor.com>, c0e9504)
 - speed up schema matching (Ian Storm Taylor <ian@ianstormtaylor.com>, a045d47)
 - fix release script, update code highlighting example (Ian Storm Taylor <ian@ianstormtaylor.com>, d49b792)
 - 0.12.10 (Ian Storm Taylor <ian@ianstormtaylor.com>, 914eb27)
 - latest version (#242) (Vladimir Leletko <vladimir.leletko@gmail.com>, 2e2e8b6)
 - update npm clean script (Ian Storm Taylor <ian@ianstormtaylor.com>, cc443f0)
 - 0.12.9 (Ian Storm Taylor <ian@ianstormtaylor.com>, eed4f04)
 - change react-frame-aware-selection-plugin to 0.0.3, with safari fix. (#239)
    
    * change react-frame-aware-selection-plugin to 0.0.3, with safari fix.
    
    * latest version (Vladimir Leletko <vladimir.leletko@gmail.com>, c8028e0)

## [v0.13.2](https://github.com/OpusCapita/slate/compare/v0.13.1...v0.13.2) (Mon, 15 Aug 2016 01:52:52 GMT)
 - 0.13.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 3e4fdcb)

## [v0.13.1](https://github.com/OpusCapita/slate/compare/v0.13.0...v0.13.1) (Mon, 15 Aug 2016 01:46:58 GMT)
 - 0.13.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 9ef0d81)

## [v0.13.0](https://github.com/OpusCapita/slate/compare/v0.12.10...v0.13.0) (Mon, 15 Aug 2016 01:42:55 GMT)
 - 0.13.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 59c143f)
 - add publish script (Ian Storm Taylor <ian@ianstormtaylor.com>, f0ffd0b)
 - update editor reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 54a6cda)
 - update walkthroughs and history (Ian Storm Taylor <ian@ianstormtaylor.com>, e3e9afb)
 - update more docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 973c6ce)
 - simplify schema rules, update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 5091587)
 - start adding docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 06af3de)
 - fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, ccac610)
 - add rendering of decorators from schema (Ian Storm Taylor <ian@ianstormtaylor.com>, dbcb9e5)
 - cleanup, update code highlighting example (Ian Storm Taylor <ian@ianstormtaylor.com>, cb1d641)
 - refactor mark component normalization (Ian Storm Taylor <ian@ianstormtaylor.com>, 4f83f54)
 - add rendering of marks from schema (Ian Storm Taylor <ian@ianstormtaylor.com>, 722bf0c)
 - add rendering of components from schema (Ian Storm Taylor <ian@ianstormtaylor.com>, eeb97c0)
 - more fixes, before adding components (Ian Storm Taylor <ian@ianstormtaylor.com>, 1008a2f)
 - working on moving components into the schema (Ian Storm Taylor <ian@ianstormtaylor.com>, 8692d1a)
 - got first stab at schema working with tests (Ian Storm Taylor <ian@ianstormtaylor.com>, f4b584a)
 - first stab at adding a schema to core (Ian Storm Taylor <ian@ianstormtaylor.com>, 8b5305f)

## [v0.12.10](https://github.com/OpusCapita/slate/compare/v0.12.9...v0.12.10) (Sat, 13 Aug 2016 23:20:29 GMT)
 - 0.12.10 (Ian Storm Taylor <ian@ianstormtaylor.com>, 914eb27)
 - latest version (#242) (Vladimir Leletko <vladimir.leletko@gmail.com>, 2e2e8b6)
 - update npm clean script (Ian Storm Taylor <ian@ianstormtaylor.com>, cc443f0)

## [v0.12.9](https://github.com/OpusCapita/slate/compare/v0.12.8...v0.12.9) (Fri, 12 Aug 2016 18:35:56 GMT)
 - 0.12.9 (Ian Storm Taylor <ian@ianstormtaylor.com>, eed4f04)
 - change react-frame-aware-selection-plugin to 0.0.3, with safari fix. (#239)
    
    * change react-frame-aware-selection-plugin to 0.0.3, with safari fix.
    
    * latest version (Vladimir Leletko <vladimir.leletko@gmail.com>, c8028e0)

## [v0.12.8](https://github.com/OpusCapita/slate/compare/v0.12.7...v0.12.8) (Fri, 12 Aug 2016 01:57:26 GMT)
 - 0.12.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, 4ec2e24)
 - add isModAlt (Ian Storm Taylor <ian@ianstormtaylor.com>, 944bbc8)

## [v0.12.7](https://github.com/OpusCapita/slate/compare/v0.12.6...v0.12.7) (Thu, 11 Aug 2016 21:43:57 GMT)
 - 0.12.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, 40af164)
 - fix insertFragment for nested blocks (Ian Storm Taylor <ian@ianstormtaylor.com>, 7ee58a5)

## [v0.12.6](https://github.com/OpusCapita/slate/compare/v0.12.5...v0.12.6) (Thu, 11 Aug 2016 19:58:30 GMT)
 - 0.12.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, 16348ab)
 - fix html serializer called with invalid arguments (Ian Storm Taylor <ian@ianstormtaylor.com>, 17bfdee)

## [v0.12.5](https://github.com/OpusCapita/slate/compare/v0.12.4...v0.12.5) (Thu, 11 Aug 2016 19:30:58 GMT)
 - 0.12.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 35cee2e)
 - fix html serializer for cases without children (Ian Storm Taylor <ian@ianstormtaylor.com>, 6ab2d96)

## [v0.12.4](https://github.com/OpusCapita/slate/compare/v0.12.3...v0.12.4) (Wed, 10 Aug 2016 22:00:52 GMT)
 - 0.12.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 76211eb)
 - fix cursor mark preservation logic (Ian Storm Taylor <ian@ianstormtaylor.com>, 018390c)

## [v0.12.3](https://github.com/OpusCapita/slate/compare/v0.12.2...v0.12.3) (Wed, 10 Aug 2016 16:06:02 GMT)
 - 0.12.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 14c0a01)
 - change react-frame-aware-selection-plugin to 0.0.2, with safari fix. (#236) (Vladimir Leletko <vladimir.leletko@gmail.com>, 69fe954)

## [v0.12.2](https://github.com/OpusCapita/slate/compare/v0.12.1...v0.12.2) (Tue, 09 Aug 2016 23:19:41 GMT)
 - 0.12.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 74f9768)
 - fix text nodes to rerender with changes decorations (Ian Storm Taylor <ian@ianstormtaylor.com>, 0886242)

## [v0.12.1](https://github.com/OpusCapita/slate/compare/v0.12.0...v0.12.1) (Tue, 09 Aug 2016 19:49:39 GMT)
 - 0.12.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 0fbf840)
 - fix data transfer with empty html strings (Ian Storm Taylor <ian@ianstormtaylor.com>, 5d89fab)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, c4d0560)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 5ca219f)

## [v0.12.0](https://github.com/OpusCapita/slate/compare/v0.11.5...v0.12.0) (Tue, 09 Aug 2016 19:27:44 GMT)
 - 0.12.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1f091b5)
 - add full support for file data transfers (Ian Storm Taylor <ian@ianstormtaylor.com>, 454bc80)

## [v0.11.5](https://github.com/OpusCapita/slate/compare/v0.11.4...v0.11.5) (Tue, 09 Aug 2016 16:40:36 GMT)
 - 0.11.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, c485dfc)
 - add wrapTextAtRange tests, cleanup wrapText style and backwards handling (Ian Storm Taylor <ian@ianstormtaylor.com>, 90d4ece)
 - WIP: Add transform wrapText (#227)
    
    * Add basic implementation of wrapText
    
    * Default suffix for wrapText to prefix
    
    * Add more tests for afterText
    
    * Add tests "whole-block" and "empty-block" for wrapText
    
    * Add tests for across-blocks and across-inlines
    
    * Preserve selection on wrapText
    
    * Remove comment about cursor position
    
    * Document transformation "wratTextAtRange" (Samy Pessé <samypesse@gmail.com>, 17f703c)
 - Change concat into insertChildrenAfter and insertChildrenBefore (#232)
    
    * Change concat into insertChildrenAfter and insertChildrenBefore
    
    * Update input and out yaml of insert block at range block-end
    
    * Update input and out yaml of insert block at range block-start (Suwijak Chaipipat <ppnk2537@gmail.com>, 10cfb6e)
 - Fix examples watch command (#233) (Suwijak Chaipipat <ppnk2537@gmail.com>, a10f0a7)
 - update contributing jsfiddle (Ian Storm Taylor <ian@ianstormtaylor.com>, 2ea7f38)

## [v0.11.4](https://github.com/OpusCapita/slate/compare/v0.11.3...v0.11.4) (Mon, 08 Aug 2016 00:47:17 GMT)
 - 0.11.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, f6b7ed1)
 - fix standalone slate.js (Ian Storm Taylor <ian@ianstormtaylor.com>, 236ac3a)
 - add bundled guide to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, cd9c745)

## [v0.11.3](https://github.com/OpusCapita/slate/compare/v0.11.2...v0.11.3) (Mon, 08 Aug 2016 00:35:12 GMT)
 - 0.11.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 4fcf46f)
 - fix bundled file, add bundled installation guide (Ian Storm Taylor <ian@ianstormtaylor.com>, 030beab)
 - add fbjs as a dev dependency, clsoes #231 (Ian Storm Taylor <ian@ianstormtaylor.com>, ba14708)
 - fix documentation references for "fragments", closes #228 (Ian Storm Taylor <ian@ianstormtaylor.com>, f17629a)
 - Fix typo in serialize methods (#230) (Gonçalo Margalho <gsky89@gmail.com>, 3128c26)
 - fix iframes example line breaks (Ian Storm Taylor <ian@ianstormtaylor.com>, 5a6d3c4)

## [v0.11.2](https://github.com/OpusCapita/slate/compare/v0.11.1...v0.11.2) (Fri, 05 Aug 2016 19:43:50 GMT)
 - 0.11.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, bd10da5)
 - update iframe rendering logic, refactor iframes example (Ian Storm Taylor <ian@ianstormtaylor.com>, 55ab4aa)
 - Merge branch 'add/render-to-iframe' of https://github.com/vleletko/slate into add-iframe (079694e 9cb361d, 30453d6)
 - Lint errors fixes. (Vladimir <vladimir.leletko@gmail.com>, 9cb361d)
 - Example how to render slate to IFrame (Vladimir <vladimir.leletko@gmail.com>, 95eb2c0)
 - Core component will deduce the context from the dispatched event.target element (Vladimir <vladimir.leletko@gmail.com>, 186f1a7)
 - Added example skeleton. IFrame component + basic usage (Vladimir <vladimir.leletko@gmail.com>, 5fa616a)

## [v0.11.1](https://github.com/OpusCapita/slate/compare/v0.11.0...v0.11.1) (Fri, 05 Aug 2016 17:40:20 GMT)
 - 0.11.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 079694e)
 - fix <Void> to always get latest state onClick, closes #223 (Ian Storm Taylor <ian@ianstormtaylor.com>, 3dc930a)
 - fix insertText to do nothing in void nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 772aadb)
 - fix for insertBlockAtRange in empty blocks, closes #224 (Ian Storm Taylor <ian@ianstormtaylor.com>, 90abc99)

## [v0.11.0](https://github.com/OpusCapita/slate/compare/v0.10.12...v0.11.0) (Thu, 04 Aug 2016 21:16:01 GMT)
 - 0.11.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 045fe02)
 - update void rendering tests (Ian Storm Taylor <ian@ianstormtaylor.com>, c5f689e)
 - loosen default shouldComponentUpdate for nodes, and make Void implicit (Ian Storm Taylor <ian@ianstormtaylor.com>, 9a70188)

## [v0.10.12](https://github.com/OpusCapita/slate/compare/v0.10.11...v0.10.12) (Thu, 04 Aug 2016 20:22:00 GMT)
 - 0.10.12 (Ian Storm Taylor <ian@ianstormtaylor.com>, 18acc63)
 - refactor onBeforeChange (Ian Storm Taylor <ian@ianstormtaylor.com>, 917906e)
 - Add handler "onBeforeChange" (#219)
    
    * Add handler "onReceiveState"
    
    * Change onReceiveChange to onBeforeChange and call it before onChange as well
    
    * Dont'call props.onBeforeChange since it's added to CorePlugin
    
    * Update documentation for onBeforeChange (Samy Pessé <samypesse@gmail.com>, f25c5d9)

## [v0.10.11](https://github.com/OpusCapita/slate/compare/v0.10.10...v0.10.11) (Thu, 04 Aug 2016 20:00:11 GMT)
 - 0.10.11 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2d63957)
 - update the scroll position on content changes (Ian Storm Taylor <ian@ianstormtaylor.com>, e6bac81)

## [v0.10.10](https://github.com/OpusCapita/slate/compare/v0.10.9...v0.10.10) (Thu, 04 Aug 2016 18:24:13 GMT)
 - 0.10.10 (Ian Storm Taylor <ian@ianstormtaylor.com>, 3823c44)
 - Drop deprecated `escape` and `unescape` (#217) (Djamil Legato <djamil+github@djamil.it>, 5a92083)

## [v0.10.9](https://github.com/OpusCapita/slate/compare/v0.10.8...v0.10.9) (Tue, 02 Aug 2016 17:37:31 GMT)
 - 0.10.9 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5825db3)
 - fix link example (Ian Storm Taylor <ian@ianstormtaylor.com>, 0eea98d)
 - fix leaf to re-render when DOM is mismatched (Ian Storm Taylor <ian@ianstormtaylor.com>, 197515e)

## [v0.10.8](https://github.com/OpusCapita/slate/compare/v0.10.7...v0.10.8) (Tue, 02 Aug 2016 02:27:11 GMT)
 - 0.10.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, 7128085)
 - fix selection handling for insertFragment and wrapInline (Ian Storm Taylor <ian@ianstormtaylor.com>, 9521b1a)

## [v0.10.7](https://github.com/OpusCapita/slate/compare/v0.10.6...v0.10.7) (Tue, 02 Aug 2016 01:55:28 GMT)
 - 0.10.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2ab07f4)
 - add insertInline with tests (Ian Storm Taylor <ian@ianstormtaylor.com>, c4e1e47)
 - fix void leaf selection handling (Ian Storm Taylor <ian@ianstormtaylor.com>, 789c4b3)

## [v0.10.6](https://github.com/OpusCapita/slate/compare/v0.10.5...v0.10.6) (Tue, 02 Aug 2016 01:12:04 GMT)
 - 0.10.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1780bb0)
 - fix onBeforeInput decorations logic, fix initial onSelect logic (Ian Storm Taylor <ian@ianstormtaylor.com>, 4e6ca39)

## [v0.10.5](https://github.com/OpusCapita/slate/compare/v0.10.4...v0.10.5) (Mon, 01 Aug 2016 22:22:08 GMT)
 - 0.10.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 13e7b96)
 - fix to only double new lines on last leaf (Ian Storm Taylor <ian@ianstormtaylor.com>, 39aaa91)

## [v0.10.4](https://github.com/OpusCapita/slate/compare/v0.10.3...v0.10.4) (Mon, 01 Aug 2016 20:50:32 GMT)
 - 0.10.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5e34e2f)
 - remove extra style prop from editor example (Ian Storm Taylor <ian@ianstormtaylor.com>, 5e9f19d)
 - add debug points, remove unused deps, fix composition (Ian Storm Taylor <ian@ianstormtaylor.com>, 560b28c)

## [v0.10.3](https://github.com/OpusCapita/slate/compare/v0.10.2...v0.10.3) (Mon, 01 Aug 2016 19:47:35 GMT)
 - 0.10.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 53de6bb)
 - remove console log (Ian Storm Taylor <ian@ianstormtaylor.com>, 27df42b)
 - fix isNative incorrectly being checked (Ian Storm Taylor <ian@ianstormtaylor.com>, 40598d7)

## [v0.10.2](https://github.com/OpusCapita/slate/compare/v0.10.1...v0.10.2) (Mon, 01 Aug 2016 19:33:04 GMT)
 - 0.10.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 145b039)
 - fix shouldComponentUpdate check on content (Ian Storm Taylor <ian@ianstormtaylor.com>, 5593d50)
 - README.md: Fixed typo (#212)
    
    Replaced 'direclty' with 'directly' (Marcelo Jorge Vieira <metal@alucinados.com>, d7f65d5)

## [v0.10.1](https://github.com/OpusCapita/slate/compare/v0.10.0...v0.10.1) (Fri, 29 Jul 2016 19:57:21 GMT)
 - 0.10.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, cf8eebe)
 - update lint script (Ian Storm Taylor <ian@ianstormtaylor.com>, 9c420b2)
 - add prod and dev examples (Ian Storm Taylor <ian@ianstormtaylor.com>, 99d1c28)
 - change placeholder to only render when visible (Ian Storm Taylor <ian@ianstormtaylor.com>, ecc9202)

## [v0.10.0](https://github.com/OpusCapita/slate/compare/v0.9.2...v0.10.0) (Fri, 29 Jul 2016 19:11:02 GMT)
 - 0.10.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 6775657)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, e536884)
 - refactor rtl support, add rtl example (Ian Storm Taylor <ian@ianstormtaylor.com>, 17d676b)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (38ee32b 845e284, e8e4971)
 - Add RTL support (#204)
    
    * Add property textAlignment for the whole editor
    
    * textAlignment should be set on Content
    
    * Add basic for directionMap in State
    
    * Add RTL to example
    
    * Use setDocument for updating direction map when inserting blocks
    
    * Remove debug log
    
    * Only add 'dir' to node when is not default value
    
    * Prevent tests from failing because of .DS_Store on OSX
    
    * Add tests for rtl rendering
    
    * Fix rendering tests
    
    * Fix test for rendering "text-direction"
    
    * Remove textAlignment prop on editor
    
    * Don't use a directionMap but directly a "textDir" on nodes
    
    * Remove .setDocument from State (Samy Pessé <samypesse@gmail.com>, 845e284)
 - update renderMark reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 38ee32b)
 - fix add support for rendering components as marks (Ian Storm Taylor <ian@ianstormtaylor.com>, fb97c50)
 - Add ability for `renderMark` to return a React component (#202)
    
    * Switch rendering of leaf to use mark as component
    
    * Backward compatibility with renderMark
    
    Don’t fail on null marks
    
    * Adapt tests for new rendering of marks
    
    * Fix selection with new rendered marks
    
    * Adapt rendering test for custom-mark-multiple
    
    Don’t add span when renderMark return undefined (Samy Pessé <samypesse@gmail.com>, 4d58c00)
 - update bundling (Ian Storm Taylor <ian@ianstormtaylor.com>, 788627d)
 - run dist and lint when test is run (Ian Storm Taylor <ian@ianstormtaylor.com>, 25d78aa)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 4b712f1)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 9f9682e)

## [v0.9.2](https://github.com/OpusCapita/slate/compare/v0.9.1...v0.9.2) (Fri, 29 Jul 2016 15:58:10 GMT)
 - 0.9.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5355aea)
 - fix coding style (Ian Storm Taylor <ian@ianstormtaylor.com>, e45e06d)
 - do not throw too early while looking for a rule with which to serialize (#205) (Robin Berjon <robin@berjon.com>, 9ab6267)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, d2647cd)
 - update editor reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 34256e9)

## [v0.9.1](https://github.com/OpusCapita/slate/compare/v0.9.0...v0.9.1) (Fri, 29 Jul 2016 00:20:29 GMT)
 - 0.9.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 79e5e11)
 - fix deleteAtRange to split only to common ancestor (Ian Storm Taylor <ian@ianstormtaylor.com>, dfcd791)
 - update slate plugins in dev deps (Ian Storm Taylor <ian@ianstormtaylor.com>, 52c29d8)

## [v0.9.0](https://github.com/OpusCapita/slate/compare/v0.8.3...v0.9.0) (Thu, 28 Jul 2016 23:40:26 GMT)
 - 0.9.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5d60950)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 8bf0697)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, de9a32b)
 - update state wrap method arguments (Ian Storm Taylor <ian@ianstormtaylor.com>, 6c61e27)
 - change wrapping transform arguments for consistency (Ian Storm Taylor <ian@ianstormtaylor.com>, a892c6b)

## [v0.8.3](https://github.com/OpusCapita/slate/compare/v0.8.2...v0.8.3) (Thu, 28 Jul 2016 23:06:31 GMT)
 - 0.8.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, c74b527)
 - remove need for selection to be natively rendered (Ian Storm Taylor <ian@ianstormtaylor.com>, acccb8f)

## [v0.8.2](https://github.com/OpusCapita/slate/compare/v0.8.1...v0.8.2) (Thu, 28 Jul 2016 22:45:09 GMT)
 - 0.8.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 74cd4a9)
 - fix custom void block rendering test (Ian Storm Taylor <ian@ianstormtaylor.com>, 4a519db)
 - add embeds example, fix to not let events propagate out of voids (Ian Storm Taylor <ian@ianstormtaylor.com>, c248b3d)
 - update contributing docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 39ee56c)
 - update contributing docs (Ian Storm Taylor <ian@ianstormtaylor.com>, e7dcdca)
 - update contributing docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 8327b43)

## [v0.8.1](https://github.com/OpusCapita/slate/compare/v0.8.0...v0.8.1) (Thu, 28 Jul 2016 19:34:40 GMT)
 - 0.8.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, c8d941b)
 - fix selection setting in wrapInline transform (Ian Storm Taylor <ian@ianstormtaylor.com>, 5f73c63)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (4543319 84829f5, d80bda5)
 - add tests for calling wrapInline twice (#197) (Tyler Johnson <tyler@tylerjohnson.me>, 84829f5)
 - refactor normalization of arguments with better error handling (Ian Storm Taylor <ian@ianstormtaylor.com>, 4543319)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (c1f4bce 21a002a, 386b671)
 - Only create data once in setBlockAtRange and prevent its deletion (#196) (Samy Pessé <samypesse@gmail.com>, 21a002a)
 - change hasUndo and hasRedo to hasUndos and hasRedos (Ian Storm Taylor <ian@ianstormtaylor.com>, c1f4bce)
 - Add properties hasUndo and hasRedo to State (#193)
    
    * Add properties hasUndo and hasRedo to State
    
    * Fix description fo hadRedo (Samy Pessé <samypesse@gmail.com>, b2c1b84)
 - fix isBackward in onSelect event selection (#195) (Tyler Johnson <tyler@tylerjohnson.me>, dca2efc)
 - Fix signature of Selection.has{Edge}In in documentation (#190) (Samy Pessé <samypesse@gmail.com>, e669053)
 - undo and redo transform does not return Transform (#189) (Samy Pessé <samypesse@gmail.com>, d7a839e)
 - update onKeyDown reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 9bab3b0)

## [v0.8.0](https://github.com/OpusCapita/slate/compare/v0.7.8...v0.8.0) (Thu, 28 Jul 2016 05:47:26 GMT)
 - 0.8.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, d42c463)
 - add event handlers to reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 5e6f5b9)
 - fix selection settings in links example (Ian Storm Taylor <ian@ianstormtaylor.com>, 1a6c3c1)
 - fix deleting sibling inline node (Ian Storm Taylor <ian@ianstormtaylor.com>, 1c86b2f)
 - fix deleting sibling text node (Ian Storm Taylor <ian@ianstormtaylor.com>, fc8fb18)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 32a5cac)
 - add missing prop types to content (Ian Storm Taylor <ian@ianstormtaylor.com>, 9bc410c)
 - add fragment handling to core onPaste (Ian Storm Taylor <ian@ianstormtaylor.com>, c85671a)
 - refactor onKeyDown to use data object (Ian Storm Taylor <ian@ianstormtaylor.com>, d20b851)
 - move onCopy and onCut logic to core plugin, refactor onDrop (Ian Storm Taylor <ian@ianstormtaylor.com>, fba3fe7)
 - change onBeforeInput to take data property (Ian Storm Taylor <ian@ianstormtaylor.com>, 6503ee2)
 - refactor to move onBlur to core plugin (Ian Storm Taylor <ian@ianstormtaylor.com>, ca9aaa9)
 - refactor core plugin for readability (Ian Storm Taylor <ian@ianstormtaylor.com>, ee2192a)
 - fix void node cursor navigation in firefox (Ian Storm Taylor <ian@ianstormtaylor.com>, b9ae5d2)
 - change void nodes to have a single space, prevent text-less inlines (Ian Storm Taylor <ian@ianstormtaylor.com>, 42cbcb7)

## [v0.7.8](https://github.com/OpusCapita/slate/compare/v0.7.7...v0.7.8) (Wed, 27 Jul 2016 18:40:22 GMT)
 - 0.7.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, 807d9f9)
 - fix character insertion when first in node, closes #182 (Ian Storm Taylor <ian@ianstormtaylor.com>, eebb0bd)

## [v0.7.7](https://github.com/OpusCapita/slate/compare/v0.7.6...v0.7.7) (Wed, 27 Jul 2016 00:03:32 GMT)
 - 0.7.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5313b3b)
 - fix to greatly improve performance, and void selections in void nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 3448dac)

## [v0.7.6](https://github.com/OpusCapita/slate/compare/v0.7.5...v0.7.6) (Tue, 26 Jul 2016 19:18:10 GMT)
 - 0.7.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, 665c50e)
 - add plugins example, fix soft break handling (Ian Storm Taylor <ian@ianstormtaylor.com>, b506098)
 - fix to remove extra empty text nodes, closes #171 (Ian Storm Taylor <ian@ianstormtaylor.com>, 8916ee0)

## [v0.7.5](https://github.com/OpusCapita/slate/compare/v0.7.4...v0.7.5) (Tue, 26 Jul 2016 18:34:14 GMT)
 - 0.7.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, ed8a7ce)
 - fix content shouldComponentUpdate logic (Ian Storm Taylor <ian@ianstormtaylor.com>, 20ba3f6)

## [v0.7.4](https://github.com/OpusCapita/slate/compare/v0.7.3...v0.7.4) (Tue, 26 Jul 2016 18:21:50 GMT)
 - 0.7.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 6a2e586)
 - update rendering tests for position relative (Ian Storm Taylor <ian@ianstormtaylor.com>, 37251f8)
 - update placeholder positioning and offset key resolving (Ian Storm Taylor <ian@ianstormtaylor.com>, 8393a8b)

## [v0.7.3](https://github.com/OpusCapita/slate/compare/v0.7.2...v0.7.3) (Tue, 26 Jul 2016 01:45:41 GMT)
 - 0.7.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, c7fb54f)
 - fix undo rendering and leaf rendering logic (Ian Storm Taylor <ian@ianstormtaylor.com>, cdebdb1)

## [v0.7.2](https://github.com/OpusCapita/slate/compare/v0.7.1...v0.7.2) (Tue, 26 Jul 2016 00:06:57 GMT)
 - 0.7.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 6637a8a)
 - cleanup editor and content props (Ian Storm Taylor <ian@ianstormtaylor.com>, e088366)
 - moved onSelect event handling to core plugin (#175) (Tyler Johnson <tyler@tylerjohnson.me>, ca837e2)

## [v0.7.1](https://github.com/OpusCapita/slate/compare/v0.6.7...v0.7.1) (Mon, 25 Jul 2016 23:51:16 GMT)
 - 0.7.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, fd3fd9a)
 - remove unnecessary dep (Ian Storm Taylor <ian@ianstormtaylor.com>, ef88a4f)
 - add node component, cleanup draggable/void interactions (Ian Storm Taylor <ian@ianstormtaylor.com>, 569e940)
 - remove rule from eslint (Ian Storm Taylor <ian@ianstormtaylor.com>, b5bbac0)
 - remove unnecessary method from base 64 serializer (Ian Storm Taylor <ian@ianstormtaylor.com>, c3cc301)
 - update examples for terse raw (Ian Storm Taylor <ian@ianstormtaylor.com>, d78ddea)
 - refactor raw serializer to not be terse by default (Ian Storm Taylor <ian@ianstormtaylor.com>, 98c78e4)
 - more work on draggable nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 81c9562)
 - add draggable nodes, first steps (Ian Storm Taylor <ian@ianstormtaylor.com>, 3bd000d)
 - remove non-transform transforming methods from reference (Ian Storm Taylor <ian@ianstormtaylor.com>, c7fac34)

## [v0.6.7](https://github.com/OpusCapita/slate/compare/v0.6.6...v0.6.7) (Mon, 25 Jul 2016 01:01:33 GMT)
 - 0.6.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, d90c982)
 - fixes for style and consistency (Ian Storm Taylor <ian@ianstormtaylor.com>, 466f377)
 - add setNodeByKey transform (#157)
    
    * modifyNode transform
    
    * create DOCUMENT_NODE_TRANSFORMS and use assertDescendant to get the node directly
    
    * rename to setNodeByKey (Mathieu Dutour <mat.dutour@gmail.com>, 8407023)
 - Fix error in Hello World of installation guide (#170) (adamlong5 <adamblong1103@gmail.com>, 5869169)
 - Update state.md (#164)
    
    {edge}Offset is Number (joehua87 <joehua87@users.noreply.github.com>, 12f4a8e)
 - typeof key is string (not Key) (#165) (joehua87 <joehua87@users.noreply.github.com>, 1f0532d)
 - add always ending in paragraph to image example (Ian Storm Taylor <ian@ianstormtaylor.com>, e807992)

## [v0.6.6](https://github.com/OpusCapita/slate/compare/v0.6.5...v0.6.6) (Sat, 23 Jul 2016 04:18:34 GMT)
 - 0.6.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, 63867e0)
 - add ability to drag/drop across slate instances (Ian Storm Taylor <ian@ianstormtaylor.com>, b65e218)

## [v0.6.5](https://github.com/OpusCapita/slate/compare/v0.6.4...v0.6.5) (Sat, 23 Jul 2016 03:23:59 GMT)
 - 0.6.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 3098c35)
 - add tests for insertText with marks (Ian Storm Taylor <ian@ianstormtaylor.com>, f8f0194)
 - add support for spellcheck (Ian Storm Taylor <ian@ianstormtaylor.com>, 2a58f71)
 - add onDrop to docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 20874fa)

## [v0.6.4](https://github.com/OpusCapita/slate/compare/v0.6.3...v0.6.4) (Sat, 23 Jul 2016 00:05:51 GMT)
 - 0.6.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 33b4e75)
 - fix to prevent being able to drag text into a void (Ian Storm Taylor <ian@ianstormtaylor.com>, 42f4aa6)

## [v0.6.3](https://github.com/OpusCapita/slate/compare/v0.6.2...v0.6.3) (Sat, 23 Jul 2016 00:01:41 GMT)
 - 0.6.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 8543a63)
 - refactor core onPaste handler (Ian Storm Taylor <ian@ianstormtaylor.com>, 2df1fe7)
 - add drag and drop support (Ian Storm Taylor <ian@ianstormtaylor.com>, ebb1625)
 - refactor for coding style (Ian Storm Taylor <ian@ianstormtaylor.com>, 384af9e)
 - fix performance issue in Leaf (#158) (Mathieu Dutour <mat.dutour@gmail.com>, f19f39a)

## [v0.6.2](https://github.com/OpusCapita/slate/compare/v0.6.1...v0.6.2) (Fri, 22 Jul 2016 21:14:12 GMT)
 - 0.6.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, fe89247)
 - fix base64 encoding to handle non utf8 characters (Ian Storm Taylor <ian@ianstormtaylor.com>, 9fc49f9)

## [v0.6.1](https://github.com/OpusCapita/slate/compare/v0.5.6...v0.6.1) (Fri, 22 Jul 2016 20:57:53 GMT)
 - 0.6.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 2471f7f)
 - fix styles for void, fix tests for void rendering (Ian Storm Taylor <ian@ianstormtaylor.com>, 1784f25)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 5212a47)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, b8696a8)
 - remove selection state handling from image block in examples (Ian Storm Taylor <ian@ianstormtaylor.com>, 31782cb)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 58de623)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, f7ac35d)
 - change void blocks to not be added automatically, and to handle focus (Ian Storm Taylor <ian@ianstormtaylor.com>, 03393da)
 - fix core onBeforeInput logic to re-render only when necessary (Ian Storm Taylor <ian@ianstormtaylor.com>, b2f7349)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 5eda330)
 - fix to remove need for core plugin to define a default renderMark (Ian Storm Taylor <ian@ianstormtaylor.com>, 52e6de4)
 - fix to not re-render when new selection is inside text nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 3c2b1b7)
 - fix to account for renderDecorations being undefined (Ian Storm Taylor <ian@ianstormtaylor.com>, e8fdacd)
 - refactor text model to memoize decorations (Ian Storm Taylor <ian@ianstormtaylor.com>, 3bc0664)
 - add data-key attribute to Text component (Ian Storm Taylor <ian@ianstormtaylor.com>, 06c7e88)
 - move groupByMarks util into Text model as methods (Ian Storm Taylor <ian@ianstormtaylor.com>, 950617c)
 - fix to use index instead of start and end in offset keys (Ian Storm Taylor <ian@ianstormtaylor.com>, ac59e94)
 - update history formatting (Ian Storm Taylor <ian@ianstormtaylor.com>, f1124b3)
 - update installing slate guide to omit ranges (Ian Storm Taylor <ian@ianstormtaylor.com>, d4433b8)
 - change a few examples to omit ranges for cleanliness (Ian Storm Taylor <ian@ianstormtaylor.com>, 6993b0c)
 - fix typo in selection reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 53c57c4)

## [v0.5.6](https://github.com/OpusCapita/slate/compare/v0.5.5...v0.5.6) (Thu, 21 Jul 2016 23:39:11 GMT)
 - 0.5.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, c605f08)
 - add ability to omit ranges in raw json, closes #152 (Ian Storm Taylor <ian@ianstormtaylor.com>, 57b5c9a)
 - add insertText transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 0dc348d)
 - add wrapInline transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, eb95b79)
 - add wrapBlock transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 1bf729d)
 - add unwrapInline transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, dd189f7)
 - add unwrapBlock transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 49c5754)
 - add splitBlock and splitInline transforms tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 986e49a)
 - add setBlock and setInline transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 3782913)
 - add slate to package.json keywords (Ian Storm Taylor <ian@ianstormtaylor.com>, a66aa1e)
 - fix readme badge spacing (Ian Storm Taylor <ian@ianstormtaylor.com>, 4ada084)
 - add license badge to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, f6ac692)
 - add deleteForward and deleteBackward transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, f5ca91d)
 - add insertFragment transform tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 7615ce8)
 - fix prepublish hook (Ian Storm Taylor <ian@ianstormtaylor.com>, 45d671d)
 - ocd package.json (Ian Storm Taylor <ian@ianstormtaylor.com>, a3b1dac)
 - add delete() tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 33b1b13)
 - add toggleMarkAtRange remove tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 00261ed)
 - add removeMark tests, update toggleMark tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 4d69df2)
 - add selection assertions to addMark tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 4197921)
 - update formatting guide with toggleMark (Ian Storm Taylor <ian@ianstormtaylor.com>, 054aaf4)

## [v0.5.5](https://github.com/OpusCapita/slate/compare/v0.5.4...v0.5.5) (Thu, 21 Jul 2016 19:01:05 GMT)
 - 0.5.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, c69314d)
 - add more mark tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 035ae44)
 - add toggleMark and toggleMarkAtRange transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 0ebe5b4)

## [v0.5.4](https://github.com/OpusCapita/slate/compare/v0.5.3...v0.5.4) (Thu, 21 Jul 2016 17:55:18 GMT)
 - 0.5.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, a0b45f8)
 - fix for firefox erroring on copy/cut, closes #142 (Ian Storm Taylor <ian@ianstormtaylor.com>, cac82ac)

## [v0.5.3](https://github.com/OpusCapita/slate/compare/v0.5.2...v0.5.3) (Thu, 21 Jul 2016 17:29:20 GMT)
 - 0.5.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 8402966)
 - fix to not update placeholder before one exists (Ian Storm Taylor <ian@ianstormtaylor.com>, 3145a6b)

## [v0.5.2](https://github.com/OpusCapita/slate/compare/v0.5.1...v0.5.2) (Thu, 21 Jul 2016 17:16:18 GMT)
 - 0.5.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, 40bfc80)
 - fix placeholder to reposition on window resize, closes #132 (Ian Storm Taylor <ian@ianstormtaylor.com>, a33a4ac)
 - add helpful error to findDOMNode util, closes #147 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1a3ef38)

## [v0.5.1](https://github.com/OpusCapita/slate/compare/v0.5.0...v0.5.1) (Thu, 21 Jul 2016 16:36:43 GMT)
 - 0.5.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 30a2abb)
 - fix early ending of composition mode (Ian Storm Taylor <ian@ianstormtaylor.com>, 99146bc)
 - switch from makefile to npm scripts, closes #144 (Ian Storm Taylor <ian@ianstormtaylor.com>, 38eccfb)
 - add memoization and performance improvements to selections (Ian Storm Taylor <ian@ianstormtaylor.com>, 99bb4a3)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 9674f2f)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 65c319e)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, a0d5f32)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 4f95bc4)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, b82e9d1)
 - update history formatting (Ian Storm Taylor <ian@ianstormtaylor.com>, a913793)

## [v0.5.0](https://github.com/OpusCapita/slate/compare/v0.4.1...v0.5.0) (Thu, 21 Jul 2016 04:41:43 GMT)
 - 0.5.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 0379e25)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 9b58b82)
 - add memoization and clean up node methods (#141)
    
    * cleanup node methods
    
    * add first stab at memoization of node methods
    
    * rename getTextNodes() to getTexts() for consistency (Ian Storm Taylor <ian@ianstormtaylor.com>, f1b961f)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 544061a)

## [v0.4.1](https://github.com/OpusCapita/slate/compare/v0.4.0...v0.4.1) (Wed, 20 Jul 2016 22:22:15 GMT)
 - 0.4.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, df5c2f7)
 - fix <Content> to have looser shouldComponentUpdate (Ian Storm Taylor <ian@ianstormtaylor.com>, fc950b7)

## [v0.4.0](https://github.com/OpusCapita/slate/compare/v0.3.1...v0.4.0) (Wed, 20 Jul 2016 22:14:39 GMT)
 - 0.4.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 772f377)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, bbc868e)
 - add the ability to render based on multiple marks (#138)
    
    closes #33 (Ian Storm Taylor <ian@ianstormtaylor.com>, d0c8ce0)
 - fix rich text example (Ian Storm Taylor <ian@ianstormtaylor.com>, 8654dfc)
 - update state.moveTo() reference (Ian Storm Taylor <ian@ianstormtaylor.com>, bd200cf)

## [v0.3.1](https://github.com/OpusCapita/slate/compare/v0.3.0...v0.3.1) (Wed, 20 Jul 2016 21:48:25 GMT)
 - 0.3.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 7225a40)
 - fix webkit modify styles for read-only mode, closes #137 (Ian Storm Taylor <ian@ianstormtaylor.com>, a0cd536)
 - add prebundled notice to the installing guide (Ian Storm Taylor <ian@ianstormtaylor.com>, 00ee5c3)

## [v0.3.0](https://github.com/OpusCapita/slate/compare/v0.2.8...v0.3.0) (Wed, 20 Jul 2016 21:40:39 GMT)
 - 0.3.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1527c44)
 - update gitignore (Ian Storm Taylor <ian@ianstormtaylor.com>, 174944a)
 - remove dist/slate.js (Ian Storm Taylor <ian@ianstormtaylor.com>, bf00bfd)
 - change unwrapBlock to operate only on the siblings in a range (Ian Storm Taylor <ian@ianstormtaylor.com>, 9499b91)
 - add description to package.json (Ian Storm Taylor <ian@ianstormtaylor.com>, 46480d6)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 649e1c4)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 15f8a13)
 - add scribe and medium editor to readme comparison (Ian Storm Taylor <ian@ianstormtaylor.com>, d596424)
 - update saving html guide (Ian Storm Taylor <ian@ianstormtaylor.com>, f50c37f)
 - add saving and loading html content guide to docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 3b49833)
 - add disc make target for checking build size (Ian Storm Taylor <ian@ianstormtaylor.com>, a46dd61)

## [v0.2.8](https://github.com/OpusCapita/slate/compare/v0.2.7...v0.2.8) (Wed, 20 Jul 2016 16:49:31 GMT)
 - 0.2.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, ac53f8e)
 - add bundled distribution (Ian Storm Taylor <ian@ianstormtaylor.com>, 0c0eac9)
 - add serialization to html serializer (Ian Storm Taylor <ian@ianstormtaylor.com>, a9272f7)

## [v0.2.7](https://github.com/OpusCapita/slate/compare/v0.2.6...v0.2.7) (Tue, 19 Jul 2016 18:34:20 GMT)
 - 0.2.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, 69e7d0a)
 - fix arrow key breaking bug (Ian Storm Taylor <ian@ianstormtaylor.com>, 1e433b3)

## [v0.2.6](https://github.com/OpusCapita/slate/compare/v0.2.5...v0.2.6) (Tue, 19 Jul 2016 18:29:27 GMT)
 - 0.2.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5c5c92b)
 - fix to hide the formatting menu in ios (Ian Storm Taylor <ian@ianstormtaylor.com>, 0a4bb43)
 - remove is-image-url dev dep since it isnt backwards compatible (Ian Storm Taylor <ian@ianstormtaylor.com>, ed6000b)

## [v0.2.5](https://github.com/OpusCapita/slate/compare/v0.2.4...v0.2.5) (Tue, 19 Jul 2016 18:10:58 GMT)
 - 0.2.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1117c19)
 - fix arrow keys during composing, fix composing in empty blocks (Ian Storm Taylor <ian@ianstormtaylor.com>, 7ad1053)

## [v0.2.4](https://github.com/OpusCapita/slate/compare/v0.2.3...v0.2.4) (Tue, 19 Jul 2016 17:15:21 GMT)
 - 0.2.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 6596c7d)
 - fix arrow keys during composition (Ian Storm Taylor <ian@ianstormtaylor.com>, 11dd176)

## [v0.2.3](https://github.com/OpusCapita/slate/compare/v0.2.2...v0.2.3) (Tue, 19 Jul 2016 16:38:51 GMT)
 - 0.2.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, 482e005)
 - fix backwards selection logic, closes #125 (Ian Storm Taylor <ian@ianstormtaylor.com>, f7905d7)

## [v0.2.2](https://github.com/OpusCapita/slate/compare/v0.2.1...v0.2.2) (Tue, 19 Jul 2016 01:39:25 GMT)
 - 0.2.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, c8aaa2d)
 - add basic composition support (Ian Storm Taylor <ian@ianstormtaylor.com>, f2841a6)

## [v0.2.1](https://github.com/OpusCapita/slate/compare/v0.2.0...v0.2.1) (Mon, 18 Jul 2016 23:58:47 GMT)
 - 0.2.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 9203340)
 - update transform reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 1d47e07)
 - fix to not create snapshot history for selection changes, closes #94 (Ian Storm Taylor <ian@ianstormtaylor.com>, a50ec42)
 - fix "secret" behavior of image example (Ian Storm Taylor <ian@ianstormtaylor.com>, 826956c)
 - add decorator rendering test (Ian Storm Taylor <ian@ianstormtaylor.com>, 54587c3)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (94cf552 a9314f5, a3fedff)
 - add default should component update (#124)
    
    * add development performance testing examples
    
    * refactor node map methods to be optimized
    
    * fix updateDescendants return value
    
    * remove console logs
    
    * remove extra console log (Ian Storm Taylor <ian@ianstormtaylor.com>, a9314f5)
 - add development performance testing examples (Ian Storm Taylor <ian@ianstormtaylor.com>, 94cf552)
 - Fixing broken links in reference of docs (#121)
    
    Looks like there was a refactor at some point where this went from a flat directory to split into categories, and some of the links never got changed. Just fixing those up. (Jesse Patel <jessep@gmail.com>, 4492be6)
 - update saving to a database guide (Ian Storm Taylor <ian@ianstormtaylor.com>, dcbca78)
 - add onDocumentChange and onSelectionChange properties to editor (Ian Storm Taylor <ian@ianstormtaylor.com>, c41046a)
 - add paste linkifying to link example (Ian Storm Taylor <ian@ianstormtaylor.com>, c717f84)
 - update saving to a database guide (Ian Storm Taylor <ian@ianstormtaylor.com>, 730b731)
 - add saving to a database guide (Ian Storm Taylor <ian@ianstormtaylor.com>, 9e3d628)
 - add travis ci badge to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 2f3e625)
 - remove phantom from dev deps (Ian Storm Taylor <ian@ianstormtaylor.com>, 1e29078)
 - comment out html serialize tests (Ian Storm Taylor <ian@ianstormtaylor.com>, d3bca03)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 2f0f802)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, 2434193)
 - update history (Ian Storm Taylor <ian@ianstormtaylor.com>, ac25d81)

## [v0.2.0](https://github.com/OpusCapita/slate/compare/v0.1.16...v0.2.0) (Mon, 18 Jul 2016 19:09:24 GMT)
 - 0.2.0 (Ian Storm Taylor <ian@ianstormtaylor.com>, 671987a)
 - add 0.2.0 to history (Ian Storm Taylor <ian@ianstormtaylor.com>, 9b9410d)
 - rename mark tests (Ian Storm Taylor <ian@ianstormtaylor.com>, f25e671)
 - Rename mark/unmark transforms to addMark/removeMark (#113)
    
    * Rename mark/unmark transforms to addMark/removeMark
    
    * delete gitkeep (Somasundaram Ayyappan <somasundaram321@gmail.com>, 0289edf)
 - skip html serializer tests for now (Ian Storm Taylor <ian@ianstormtaylor.com>, 3dbc29d)
 - Tiny typo fix (#115) (Max Gfeller <max.gfeller@gmail.com>, 615d4d0)
 - Fix broken link to `Mark` reference (#116) (Max Gfeller <max.gfeller@gmail.com>, fdf7e29)

## [v0.1.16](https://github.com/OpusCapita/slate/compare/v0.1.15...v0.1.16) (Sun, 17 Jul 2016 23:52:18 GMT)
 - 0.1.16 (Ian Storm Taylor <ian@ianstormtaylor.com>, d58b5f3)
 - remove the concept of "unset" selections, normalizing instead, closes #36 (Ian Storm Taylor <ian@ianstormtaylor.com>, e633526)
 - fix read-only example readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 7930df4)

## [v0.1.15](https://github.com/OpusCapita/slate/compare/v0.1.14...v0.1.15) (Sun, 17 Jul 2016 23:23:04 GMT)
 - 0.1.15 (Ian Storm Taylor <ian@ianstormtaylor.com>, 11d3426)
 - fix to not re-resolve plugins on every update, closes #112 (Ian Storm Taylor <ian@ianstormtaylor.com>, 062b4a6)

## [v0.1.14](https://github.com/OpusCapita/slate/compare/v0.1.13...v0.1.14) (Sun, 17 Jul 2016 23:03:48 GMT)
 - 0.1.14 (Ian Storm Taylor <ian@ianstormtaylor.com>, cab2b60)
 - fix html serializer tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 0b001cd)
 - add read-only mode, closes #108 #106 (Ian Storm Taylor <ian@ianstormtaylor.com>, c489eee)
 - remove array.includes for compatibility, closes #110 (Ian Storm Taylor <ian@ianstormtaylor.com>, 6140386)
 - swap html serializer to take rules in options dictionary (Ian Storm Taylor <ian@ianstormtaylor.com>, ca1dfd9)
 - update serializers docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 2ee317c)
 - add serializer docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 93e2487)
 - fix install slate example (Ian Storm Taylor <ian@ianstormtaylor.com>, 04dee73)
 - Fix "initialState" declaration in "Installing Slate" doc (#105)
    
    I tried to use the example however I received errors saying that `map` could not be executed over `undefined`.
    
    It looks like the deserialiser was trying to map over the `nodes` prop of an object, but the example passes in an array of objects.  I removed the wrapping array and all was well again. (Sean Matheson <sean@ctrlplusb.com>, 699da23)
 - Doc fixes (#102)
    
    * replace block api refs with inline
    
    * fix inline link refs in static method sections
    
    * link fixes in few more files (Somasundaram Ayyappan <somasundaram321@gmail.com>, b5880e6)
 - add faq to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 70111be)
 - add faq to concepts list (Ian Storm Taylor <ian@ianstormtaylor.com>, 348c3de)
 - add faq (Ian Storm Taylor <ian@ianstormtaylor.com>, 2322328)
 - fix rich-text example lists (Ian Storm Taylor <ian@ianstormtaylor.com>, c0c1133)
 - Typos (#95) (Julian Krispel-Samsel <julian@goodafternoon.co>, 9c020d9)
 - add icon image, add gh-pages cname (Ian Storm Taylor <ian@ianstormtaylor.com>, 5aee46f)

## [v0.1.13](https://github.com/OpusCapita/slate/compare/v0.1.12...v0.1.13) (Fri, 15 Jul 2016 19:51:22 GMT)
 - 0.1.13 (Ian Storm Taylor <ian@ianstormtaylor.com>, fd05b01)
 - fix a few void block transform and rendering bugs (Ian Storm Taylor <ian@ianstormtaylor.com>, d995b1a)
 - emphasize contributing in readme! (Ian Storm Taylor <ian@ianstormtaylor.com>, a482354)
 - update examples html title (Ian Storm Taylor <ian@ianstormtaylor.com>, 50062f7)
 - update travis ci config (Ian Storm Taylor <ian@ianstormtaylor.com>, 09c9812)
 - simplify tag line (Ian Storm Taylor <ian@ianstormtaylor.com>, 1f81bae)
 - update demo site url (Ian Storm Taylor <ian@ianstormtaylor.com>, e98240d)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (8875c31 a42996f, 3425b6f)
 - add gh-pages make command, added live demo (Ian Storm Taylor <ian@ianstormtaylor.com>, 8875c31)
 - Fixed typos (#90) (Andrew Murray <radarhere@gmail.com>, a42996f)
 - add html serializer tests (Ian Storm Taylor <ian@ianstormtaylor.com>, f1a6066)
 - add plain text serializer tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 6e6fc11)
 - change downloads badge to link to npm (Ian Storm Taylor <ian@ianstormtaylor.com>, 6a8c349)
 - add preview image to examples readme (Ian Storm Taylor <ian@ianstormtaylor.com>, ea4c91d)
 - add preview image (Ian Storm Taylor <ian@ianstormtaylor.com>, 4e2c908)
 - add more example readmes (Ian Storm Taylor <ian@ianstormtaylor.com>, d8783d6)
 - move images, add examples images, add to .npmignore (Ian Storm Taylor <ian@ianstormtaylor.com>, 440496a)
 - add raw serializer tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 4f06f32)
 - add more rendering tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 68e87eb)

## [v0.1.12](https://github.com/OpusCapita/slate/compare/v0.1.11...v0.1.12) (Thu, 14 Jul 2016 21:35:49 GMT)
 - 0.1.12 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5bc1594)
 - add ability to turn off collapsed cursor marks, closes #88 (Ian Storm Taylor <ian@ianstormtaylor.com>, 7e5642d)
 - remove unused dep (Ian Storm Taylor <ian@ianstormtaylor.com>, 6fc55c9)

## [v0.1.11](https://github.com/OpusCapita/slate/compare/v0.1.10...v0.1.11) (Thu, 14 Jul 2016 20:43:36 GMT)
 - 0.1.11 (Ian Storm Taylor <ian@ianstormtaylor.com>, 06cd024)
 - fix delete forward/backward to be unicode aware, closes #87 (Ian Storm Taylor <ian@ianstormtaylor.com>, bf1ea4f)

## [v0.1.10](https://github.com/OpusCapita/slate/compare/v0.1.9...v0.1.10) (Thu, 14 Jul 2016 20:21:58 GMT)
 - 0.1.10 (Ian Storm Taylor <ian@ianstormtaylor.com>, 54fe325)
 - adds ability to delete in word or line increments, fixes #80 (Ian Storm Taylor <ian@ianstormtaylor.com>, d324165)
 - typo (Ian Storm Taylor <ian@ianstormtaylor.com>, 21cde81)

## [v0.1.9](https://github.com/OpusCapita/slate/compare/v0.1.8...v0.1.9) (Thu, 14 Jul 2016 16:24:46 GMT)
 - 0.1.9 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1f76b33)
 - add support for collapsed cursor marks, fixes #82 (Ian Storm Taylor <ian@ianstormtaylor.com>, 87ea088)
 - Merge branch 'master' of github.com:ianstormtaylor/slate (2419dcc 1319640, e12e275)
 - update examples and test contributing instructions (Ian Storm Taylor <ian@ianstormtaylor.com>, 2419dcc)
 - add link (#84) (Nik Graf <nik@nikgraf.com>, 1319640)
 - Fix typo in Installing Slate doc (#79) (Mark Bao <mark@markbao.com>, d643a7e)
 - update npm downloads badge (Ian Storm Taylor <ian@ianstormtaylor.com>, 0b372dc)

## [v0.1.8](https://github.com/OpusCapita/slate/compare/v0.1.7...v0.1.8) (Thu, 14 Jul 2016 01:56:14 GMT)
 - 0.1.8 (Ian Storm Taylor <ian@ianstormtaylor.com>, 1891c0e)
 - fix wrapInline selecting, add rendering tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 2aa8239)
 - Merge pull request #77 from jaredpalmer/master
    
    remove dangling comma in rich-text example state.json (351c057 877e2c1, 36ddc0f)
 - remove dangling comma that invalidated json
    
    removes a dangling comma in rich-text example's state.json. (Jared Palmer <jaredloganpalmer@gmail.com>, 877e2c1)
 - update docsg (Ian Storm Taylor <ian@ianstormtaylor.com>, 351c057)
 - add downloads badge (Ian Storm Taylor <ian@ianstormtaylor.com>, 6fe8002)
 - add slack button to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, a3b5c2b)
 - update document model concept docs (Ian Storm Taylor <ian@ianstormtaylor.com>, b190266)
 - update leaf text nodes concept (Ian Storm Taylor <ian@ianstormtaylor.com>, 1415b54)
 - clean up examples (Ian Storm Taylor <ian@ianstormtaylor.com>, ab12518)
 - move license to separate file (Ian Storm Taylor <ian@ianstormtaylor.com>, 9793b11)
 - simplify plaintext example (Ian Storm Taylor <ian@ianstormtaylor.com>, d0ed722)

## [v0.1.7](https://github.com/OpusCapita/slate/compare/v0.1.6...v0.1.7) (Wed, 13 Jul 2016 22:15:11 GMT)
 - 0.1.7 (Ian Storm Taylor <ian@ianstormtaylor.com>, 5ab6fdb)
 - cleanup the rich text example (Ian Storm Taylor <ian@ianstormtaylor.com>, c218c17)
 - update makefile (Ian Storm Taylor <ian@ianstormtaylor.com>, 433c501)
 - cleanup plain text example (Ian Storm Taylor <ian@ianstormtaylor.com>, d8e2f37)
 - add plain text serializer (Ian Storm Taylor <ian@ianstormtaylor.com>, 3d33ab3)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, bf6ead0)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 164673c)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 19c3a1c)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 415075d)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, ffffc20)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 4711507)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, d9eb6a3)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, f741a47)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 9e174fc)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 3bdf153)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, d6e966e)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, d9c57af)

## [v0.1.6](https://github.com/OpusCapita/slate/compare/v0.1.5...v0.1.6) (Wed, 13 Jul 2016 16:44:52 GMT)
 - 0.1.6 (Ian Storm Taylor <ian@ianstormtaylor.com>, 35bbcdf)
 - fix react-portal dep (Ian Storm Taylor <ian@ianstormtaylor.com>, e56a8e9)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 368f92d)
 - add keyword (Ian Storm Taylor <ian@ianstormtaylor.com>, 2630835)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, a536ba3)
 - fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, 66a1c93)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 924fd04)
 - udpate readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 7c9f067)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 677ac96)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 98b217f)
 - add contributing (Ian Storm Taylor <ian@ianstormtaylor.com>, 30203ab)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 312bd4c)
 - refactor docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 0b8498e)
 - fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, 510eb63)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, c1db967)
 - more docs (Ian Storm Taylor <ian@ianstormtaylor.com>, f960bf5)
 - add more reference docs (Ian Storm Taylor <ian@ianstormtaylor.com>, f8946fb)
 - add document, inline and node reference (Ian Storm Taylor <ian@ianstormtaylor.com>, cf72a88)
 - add block reference (Ian Storm Taylor <ian@ianstormtaylor.com>, f067ffe)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 665b0e0)
 - add plugins and serializers to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 75a9bf1)
 - move plugins list to wiki (Ian Storm Taylor <ian@ianstormtaylor.com>, 286a206)
 - update plugins list (Ian Storm Taylor <ian@ianstormtaylor.com>, 0509946)
 - update plugins list (Ian Storm Taylor <ian@ianstormtaylor.com>, 6173926)
 - update plugins list (Ian Storm Taylor <ian@ianstormtaylor.com>, dc42911)
 - add plugins list to docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 78a3c02)

## [v0.1.5](https://github.com/OpusCapita/slate/compare/v0.1.4...v0.1.5) (Tue, 12 Jul 2016 19:27:02 GMT)
 - 0.1.5 (Ian Storm Taylor <ian@ianstormtaylor.com>, 34f7b5b)
 - add moveToOffsets transform, fixes #70 (Ian Storm Taylor <ian@ianstormtaylor.com>, fae913b)
 - fix state.moveTo transform (Ian Storm Taylor <ian@ianstormtaylor.com>, 7aa475d)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 48be173)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 32e1f21)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, e951955)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, ceadbd1)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, bcda03c)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 916ba5a)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, c423311)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, c7ff5f3)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, b84eaca)
 - update plugins reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 075fa5f)
 - update plugins reference (Ian Storm Taylor <ian@ianstormtaylor.com>, bc73b5c)
 - update plugins reference (Ian Storm Taylor <ian@ianstormtaylor.com>, e85f8e9)
 - update plugins reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 0d603c3)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 40a3c90)
 - update reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 1e4f1e4)
 - update plugins reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 713a7ab)
 - update plugins reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 8bb7bd3)
 - update plugins reference (Ian Storm Taylor <ian@ianstormtaylor.com>, b4c31ac)
 - update plugins reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 8c9bbc5)
 - update plugins docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 3801f95)
 - add plugin gocs (Ian Storm Taylor <ian@ianstormtaylor.com>, 82110c9)

## [v0.1.4](https://github.com/OpusCapita/slate/compare/v0.1.3...v0.1.4) (Tue, 12 Jul 2016 02:44:35 GMT)
 - 0.1.4 (Ian Storm Taylor <ian@ianstormtaylor.com>, 3ae0561)
 - fix placeholder positioning (Ian Storm Taylor <ian@ianstormtaylor.com>, 2f22fb3)

## [v0.1.3](https://github.com/OpusCapita/slate/compare/v0.1.2...v0.1.3) (Tue, 12 Jul 2016 02:32:02 GMT)
 - fix typo (Ian Storm Taylor <ian@ianstormtaylor.com>, aec4d29)
 - fix editor reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 7939d6d)
 - add editor className and style properties (Ian Storm Taylor <ian@ianstormtaylor.com>, 56cc610)
 - 0.1.3 (Ian Storm Taylor <ian@ianstormtaylor.com>, cc18b6a)
 - add editor placeholder styles properties (Ian Storm Taylor <ian@ianstormtaylor.com>, 1d075c7)

## [v0.1.2](https://github.com/OpusCapita/slate/compare/v0.1.1...v0.1.2) (Tue, 12 Jul 2016 02:06:43 GMT)
 - 0.1.2 (Ian Storm Taylor <ian@ianstormtaylor.com>, a0d3ce0)
 - add lib to .npmignore, fixes #69 (Ian Storm Taylor <ian@ianstormtaylor.com>, 4652aff)
 - placeholder fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, 1dd2ff6)
 - add placeholder property to editor reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 4b30cde)

## [v0.1.1](https://github.com/OpusCapita/slate/compare/undefined...v0.1.1) (Tue, 12 Jul 2016 01:55:45 GMT)
 - 0.1.1 (Ian Storm Taylor <ian@ianstormtaylor.com>, 22c78dc)
 - add placeholder reference to readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 7a84e47)
 - update editor reference (Ian Storm Taylor <ian@ianstormtaylor.com>, b613481)
 - add placeholder reference (Ian Storm Taylor <ian@ianstormtaylor.com>, 68e1bd8)
 - add attributes props in examples (Ian Storm Taylor <ian@ianstormtaylor.com>, 2f4c872)
 - add placeholder (Ian Storm Taylor <ian@ianstormtaylor.com>, 3d191db)
 - add blur/focus, add dist (Ian Storm Taylor <ian@ianstormtaylor.com>, 806ffc3)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 114d712)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, a605696)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, b2c6b87)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 5189521)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 8734149)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, e218de1)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 8d21485)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 6e5221d)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 413617c)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, dd67c64)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, f915e26)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, db9eef7)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 907a9fc)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, eb64dc8)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 36dbc29)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, a0b8f40)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 4782a97)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, cfb0273)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 5314f20)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, f17a2c0)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, b6f7f70)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, b127f64)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, df8e536)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 2ed3c7a)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 1a7e217)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 005b835)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 081bfa7)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 4c43591)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 8e009b6)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, a7dd173)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, b2a94d7)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, e4578d3)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 7d68cfb)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 3c6f79e)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, b60ec6e)
 - update docs, few fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, 7200819)
 - update guides (Ian Storm Taylor <ian@ianstormtaylor.com>, 9ee0b4a)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 8c07941)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 3cf1452)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, b0b3c3f)
 - add more docs (Ian Storm Taylor <ian@ianstormtaylor.com>, a4a386a)
 - add more docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 4cafb94)
 - update docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 495b93b)
 - add more docs (Ian Storm Taylor <ian@ianstormtaylor.com>, 25d2260)
 - fix firefox support (Ian Storm Taylor <ian@ianstormtaylor.com>, 9b3bcd8)
 - add linting to examples (Ian Storm Taylor <ian@ianstormtaylor.com>, db1151b)
 - add linting (Ian Storm Taylor <ian@ianstormtaylor.com>, 226b659)
 - update readme and package.json (Ian Storm Taylor <ian@ianstormtaylor.com>, b61f416)
 - add docs, update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, cf929f0)
 - remove strikethrough from readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 64cd2b6)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 4fc0a9e)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 115f091)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 767d078)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, a1d4f12)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 981aa1e)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 915c6fc)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, e0c9911)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 264d2cb)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 3f47807)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, f3b25e2)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 3069792)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 7e5448d)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, dce3cd4)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, e6885e3)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 3937e7d)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 978a393)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, d6001b3)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, d00cace)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 51302c3)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 108e74b)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 05c6305)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 101f8b4)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 092c986)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, f17e861)
 - update readmes (Ian Storm Taylor <ian@ianstormtaylor.com>, 8679445)
 - update utils readme (Ian Storm Taylor <ian@ianstormtaylor.com>, ef207a3)
 - add more readmes (Ian Storm Taylor <ian@ianstormtaylor.com>, 047488d)
 - add plugins and serializers readmes (Ian Storm Taylor <ian@ianstormtaylor.com>, 69f990c)
 - update components readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 6a25bee)
 - update components readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 702ac29)
 - add models readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 72cc443)
 - update components readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 28e6753)
 - update components readme (Ian Storm Taylor <ian@ianstormtaylor.com>, bee2a6d)
 - update components readme (Ian Storm Taylor <ian@ianstormtaylor.com>, eeb571c)
 - update components readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 6db926a)
 - update components readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 2e96c1b)
 - update components readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 249f043)
 - add components readme (Ian Storm Taylor <ian@ianstormtaylor.com>, b192d54)
 - update readme, fix tables example (Ian Storm Taylor <ian@ianstormtaylor.com>, dae23d5)
 - improve example tab bar styles (Ian Storm Taylor <ian@ianstormtaylor.com>, 7dc00a7)
 - fix renderers in core plugin (Ian Storm Taylor <ian@ianstormtaylor.com>, 14e02b1)
 - cleanup renderers in examples, fixes #43 (Ian Storm Taylor <ian@ianstormtaylor.com>, de4afd3)
 - remove default export, fixes #42 (Ian Storm Taylor <ian@ianstormtaylor.com>, e9ed40d)
 - add code highlighting example, still slow (Ian Storm Taylor <ian@ianstormtaylor.com>, 48573e5)
 - fix void selection behavior (Ian Storm Taylor <ian@ianstormtaylor.com>, aa8e295)
 - fix double selecting (Ian Storm Taylor <ian@ianstormtaylor.com>, 1c89860)
 - fix deleting for void nodes; (Ian Storm Taylor <ian@ianstormtaylor.com>, a8f26df)
 - fix arrow key behavior on void nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, c98845e)
 - add isVoid property to nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, 1069fee)
 - got void components working (Ian Storm Taylor <ian@ianstormtaylor.com>, aba40a2)
 - fix fragment pasting, remove <b> and <i> from paste html marks (Ian Storm Taylor <ian@ianstormtaylor.com>, 27e7171)
 - add paste html example with first stab at html serializer (Ian Storm Taylor <ian@ianstormtaylor.com>, 2f24374)
 - add start of image example (Ian Storm Taylor <ian@ianstormtaylor.com>, 78a902d)
 - add on blur logic to content component (Ian Storm Taylor <ian@ianstormtaylor.com>, d5f0a55)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 753b3f8)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 96775f5)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 4483c80)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 65585ef)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 8345caa)
 - add hovering menu example (Ian Storm Taylor <ian@ianstormtaylor.com>, 85361bf)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, e6a94cb)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 8e73fe8)
 - update banner (Ian Storm Taylor <ian@ianstormtaylor.com>, 8c27c61)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, a9247a0)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, eabfe97)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 0d9ec3b)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 853d0cd)
 - update banner (Ian Storm Taylor <ian@ianstormtaylor.com>, 8a51b7d)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, e07e395)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, c197934)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, a9065e3)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 24f0044)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, cde8354)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 524f73c)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, fe4a61b)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 36ee9ec)
 - add docs (Ian Storm Taylor <ian@ianstormtaylor.com>, e8781aa)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, adbb1d0)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 55ad14d)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, a82ba32)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 26c4b84)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 026d098)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, b2f4750)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, d2d8468)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 8664dad)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 8981b43)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, fcbdf27)
 - update logo and banner (Ian Storm Taylor <ian@ianstormtaylor.com>, 38d765c)
 - update banner (Ian Storm Taylor <ian@ianstormtaylor.com>, 319bd2f)
 - update banner (Ian Storm Taylor <ian@ianstormtaylor.com>, 54c2f2d)
 - add images, update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, ae38f6e)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 1d3e384)
 - update readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 6510b7c)
 - add readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 3065d60)
 - add readme (Ian Storm Taylor <ian@ianstormtaylor.com>, e004abb)
 - fix on before input (Ian Storm Taylor <ian@ianstormtaylor.com>, 8213573)
 - handle copy pasting from other editor instances (Ian Storm Taylor <ian@ianstormtaylor.com>, f34e4b4)
 - fix prevent default on key down (Ian Storm Taylor <ian@ianstormtaylor.com>, 0c22e61)
 - add more tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 5d21a31)
 - fix insert fragment logic; (Ian Storm Taylor <ian@ianstormtaylor.com>, cb2dda5)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, 9fd4e0a)
 - fix fragment pasting (Ian Storm Taylor <ian@ianstormtaylor.com>, f6c1e8d)
 - got pasting fragments working (Ian Storm Taylor <ian@ianstormtaylor.com>, 0caa49f)
 - got insert fragment working (Ian Storm Taylor <ian@ianstormtaylor.com>, d9a3365)
 - finish draft of insert fragment (Ian Storm Taylor <ian@ianstormtaylor.com>, 0af3dbc)
 - add insert fragment, remove normalize ranges (Ian Storm Taylor <ian@ianstormtaylor.com>, ef21157)
 - fix basic copy pate (Ian Storm Taylor <ian@ianstormtaylor.com>, ce1adf1)
 - fix block splitting logic (Ian Storm Taylor <ian@ianstormtaylor.com>, cd21f2e)
 - separate source maps into another file (Ian Storm Taylor <ian@ianstormtaylor.com>, 3bf4c8b)
 - initial plain text paste support (Ian Storm Taylor <ian@ianstormtaylor.com>, 9e4f452)
 - move before input handling to core plugin (Ian Storm Taylor <ian@ianstormtaylor.com>, a0f5369)
 - refactor examples (Ian Storm Taylor <ian@ianstormtaylor.com>, 2743c37)
 - fix examples (Ian Storm Taylor <ian@ianstormtaylor.com>, 69d2a55)
 - update link example (Ian Storm Taylor <ian@ianstormtaylor.com>, 9d62948)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, 122f571)
 - bleh, revert some stuff (Ian Storm Taylor <ian@ianstormtaylor.com>, a4c8e8f)
 - bleh, revert some stuff (Ian Storm Taylor <ian@ianstormtaylor.com>, 2b32e02)
 - holy shit delete range rabbit hole (Ian Storm Taylor <ian@ianstormtaylor.com>, e0e909f)
 - ocd (Ian Storm Taylor <ian@ianstormtaylor.com>, a69bf07)
 - cleanup; (Ian Storm Taylor <ian@ianstormtaylor.com>, e5ab110)
 - add getHighestChild (Ian Storm Taylor <ian@ianstormtaylor.com>, 0041074)
 - adding selections to transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 1c45670)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, c639db2)
 - restructure test dir (Ian Storm Taylor <ian@ianstormtaylor.com>, 64e8372)
 - change from ordered map to list for nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, d637d9e)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, a3c4c04)
 - make create methods more helpful (Ian Storm Taylor <ian@ianstormtaylor.com>, b3b1622)
 - make create methods more helpful (Ian Storm Taylor <ian@ianstormtaylor.com>, 06d4216)
 - add inline wrapping and unwrapping with tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 9c60d75)
 - add split inline with tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 1c68ab5)
 - more cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, 24dd5ba)
 - more cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, 08b77d4)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, d6a225d)
 - add data model (Ian Storm Taylor <ian@ianstormtaylor.com>, e953852)
 - broke lots of stuff, but added tests (Ian Storm Taylor <ian@ianstormtaylor.com>, 74cab69)
 - add table example (Ian Storm Taylor <ian@ianstormtaylor.com>, b42fd18)
 - add unwrap transform (Ian Storm Taylor <ian@ianstormtaylor.com>, 158f390)
 - add wrap transform (Ian Storm Taylor <ian@ianstormtaylor.com>, fccf762)
 - fix bugs in rich text example (Ian Storm Taylor <ian@ianstormtaylor.com>, 38b85fe)
 - distinguish between block and inline nodes (Ian Storm Taylor <ian@ianstormtaylor.com>, c3257a3)
 - refactor examples, normalize selections (Ian Storm Taylor <ian@ianstormtaylor.com>, dbdf376)
 - move plaintext serializer out of core (Ian Storm Taylor <ian@ianstormtaylor.com>, d742d10)
 - fix auto-markdown example (Ian Storm Taylor <ian@ianstormtaylor.com>, 7fa7887)
 - more stuff, started adding auto-markdown example (Ian Storm Taylor <ian@ianstormtaylor.com>, eae70f0)
 - add set type, bug fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, 8bf081d)
 - allow mark to be set/unset with type only (Ian Storm Taylor <ian@ianstormtaylor.com>, 201609a)
 - bug fixing (Ian Storm Taylor <ian@ianstormtaylor.com>, 420d38e)
 - fixing lots of marks logic (Ian Storm Taylor <ian@ianstormtaylor.com>, 6bcac30)
 - move document transforms to node interface (Ian Storm Taylor <ian@ianstormtaylor.com>, c0802c5)
 - convert node to element, and add node interface (Ian Storm Taylor <ian@ianstormtaylor.com>, 2a13c05)
 - more work on richtext (Ian Storm Taylor <ian@ianstormtaylor.com>, e293c97)
 - added start of richtext example, refactor range grouping logic (Ian Storm Taylor <ian@ianstormtaylor.com>, 7435c40)
 - change isnative flag name (Ian Storm Taylor <ian@ianstormtaylor.com>, d9b4e58)
 - added no rerendering for character insertion (Ian Storm Taylor <ian@ianstormtaylor.com>, ba483d6)
 - got undo working properly for different transforms! (Ian Storm Taylor <ian@ianstormtaylor.com>, 8f64e89)
 - add transforms, document, and normalizing (Ian Storm Taylor <ian@ianstormtaylor.com>, 3bc080d)
 - add dist to gitignore (Ian Storm Taylor <ian@ianstormtaylor.com>, 9fb8e67)
 - add default example css (Ian Storm Taylor <ian@ianstormtaylor.com>, 9727a8d)
 - add plaintext example (Ian Storm Taylor <ian@ianstormtaylor.com>, 1413d57)
 - remove old readme (Ian Storm Taylor <ian@ianstormtaylor.com>, 0caee5b)
 - fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, e38ddf4)
 - more refactoring (Ian Storm Taylor <ian@ianstormtaylor.com>, e85ada4)
 - wow big refactor, added raw serializer (Ian Storm Taylor <ian@ianstormtaylor.com>, 2d46528)
 - added undo/redo support (Ian Storm Taylor <ian@ianstormtaylor.com>, 8b9f5f0)
 - remove unused method (Ian Storm Taylor <ian@ianstormtaylor.com>, e907979)
 - big refactor and cleanup of transforms (Ian Storm Taylor <ian@ianstormtaylor.com>, 94fbe87)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, 63449e9)
 - got insertion working! (Ian Storm Taylor <ian@ianstormtaylor.com>, 88c58de)
 - more fixes (Ian Storm Taylor <ian@ianstormtaylor.com>, e7d94c3)
 - fixing things (Ian Storm Taylor <ian@ianstormtaylor.com>, cf9eacc)
 - lots of progress and cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, 8ecf90b)
 - handle split (Ian Storm Taylor <ian@ianstormtaylor.com>, e0ca803)
 - cleanup (Ian Storm Taylor <ian@ianstormtaylor.com>, ec7da72)
 - fix selecting behavior, got delete and backspace working (Ian Storm Taylor <ian@ianstormtaylor.com>, de6aeb9)
 - add build.js to gitignore (Ian Storm Taylor <ian@ianstormtaylor.com>, 8636242)
 - remove build (Ian Storm Taylor <ian@ianstormtaylor.com>, c7f6067)
 - cleanup, set keys automatically (Ian Storm Taylor <ian@ianstormtaylor.com>, 0995c9c)
 - swap to isFocused for consistency (Ian Storm Taylor <ian@ianstormtaylor.com>, 769f597)
 - remove unnecessary models (Ian Storm Taylor <ian@ianstormtaylor.com>, 5672770)
 - got backwards selections working! (Ian Storm Taylor <ian@ianstormtaylor.com>, 1788139)
 - got basic selection working (Ian Storm Taylor <ian@ianstormtaylor.com>, 64574c4)
 - first commit (Ian Storm Taylor <ian@ianstormtaylor.com>, 567884c)

