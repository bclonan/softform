# Design and style guidelines

Softform uses pale ceramic surfaces, graphite text, and a small yellow accent. The accent marks a selected state or primary action. It should not fill every card.

See the [live workspace](https://softform-34r5.netlify.app/), [component docs](https://softform-34r5.netlify.app/docs.html), and [Storybook](https://softform-34r5.netlify.app/storybook/) to inspect these rules in working pages.

## Color and material

The CSS variables in `src/styles.css` control the system. `--sf-bg` is the page canvas, `--sf-surface` is the card, `--sf-ink` is primary text, `--sf-muted` is secondary text, and `--sf-accent` is the highlight. Raised and low surfaces have restrained shadows. Inset surfaces mark controls and wells. Use a dark surface for a deliberate focal point, not as a default page treatment.

The focus outline uses `--sf-focus`. Keep it visible. Do not rely on yellow alone to express state. Selected controls also use a checked, pressed, or current attribute.

## Type and spacing

Use the system sans stack for interface text and the monospace stack for tiny labels, metadata, and numbers that benefit from alignment. Section titles are short, with regular or medium weight. Keep body copy plain. A page uses a spacious outer margin, but controls within a card should stay close enough to read as a group.

Use 8 to 12 px between related controls, 18 to 24 px between card groups, and 32 px or more between page sections. Cards normally use the 22 px radius. Small controls use 9 to 14 px. These are guidelines, not rigid layout props.

## Interaction and accessibility

Every icon-only button needs a label. Associate fields with visible labels, and write errors beside the field. Use native elements for forms and navigation. A modal uses a native `dialog`; a table keeps a caption and column headers. All interactive states must work with a keyboard. Respect reduced motion, especially on loading placeholders.

Keep control motion under 350 ms. Data charts can use a longer 650 to 900 ms transition so a new value can be read as it arrives. Slider values and text counts change with the input. Calendar navigation moves the month grid, while selection changes its filled date. Dialogs open and close with a short fade and movement. Charts move to new values. `prefers-reduced-motion: reduce` removes decorative movement, including dialog and value transitions. Do not use continuous motion on static cards.

For data components, `loading` must follow real host state. `motionDelay` and `motionDuration` use milliseconds. Bars also accept `stagger`, which offsets each column. Set `animateOnMount` to `false` for a static initial render. The host controls when data becomes available; the component only animates the supplied value. The [Studio pulse example](/examples/analytics.html) uses sliders to change the timing and a replay button to show partial loading states.

Selection fills start only after a navigation or mode change. Use `motionDelay` and `motionDuration` to tune that response, `motionEasing` for its curve, and `motion=false` when an immediate change is clearer. The selected item still uses `aria-current`, `aria-selected`, or a checked radio input. The first paint has no fill animation. Reduced-motion preference overrides the timing.

Common hover, focus, and press feedback reads `--sf-interaction-duration` and `--sf-interaction-delay` from CSS. Set those tokens on a page or a component root to tune ordinary feedback. Selection and chart components use their explicit timing props instead.

Use the table view for comparing columns. Use card view when records have long text or the available width is narrow. Search and paging must use the same data in either view. A loading state should say what is pending; an empty state should say that the result is empty. A horizontal bar chart gives longer labels more room. Keep the chart's accessible text description even when the visual layout changes.

Feedback belongs beside the action. Put field errors below the field and connect them with `aria-describedby`. Use a persistent alert for a problem the user must resolve. Use a toast for a brief success message. A pending state must end when work finishes. A file picker reports the selected filename; it does not claim that the file was uploaded.

Components must fit a narrow parent, not just a narrow viewport. Set `min-width: 0` on grid children, wrap labels and card metadata, and let wide tables scroll in their own container. Dialogs stay within the viewport. The documentation demos use a container query stage so they can be checked at different widths.

Choose semantic roots with `as` and keep the hierarchy valid. A card that contains a standalone report can be an `article`. A card with a heading in a dashboard can be a `section`. A metric without a section heading can stay a `div`. The component adds styling; the product decides the document outline.

## Extension rules

Add a component in its own `src/components/SfName.vue` file and export it from `src/index.js`. Keep visual components independent of backend response shapes. If a new source has a different payload, add an adapter and normalize it to the existing model. Add a prop reference and a Storybook story when you add a component. Run the element and dictionary generators so its HTML tag and agent guidance stay in the full inventory. Import shared CSS variables instead of hard-coding a second palette.
