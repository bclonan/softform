"""Build the agent-readable inventory from the checked-in prop references and stories."""
from pathlib import Path
import json
import re

root = Path(__file__).resolve().parent.parent

# Each line names the decision this component helps with. Keep these entries
# specific so an agent can choose a component without reading its source first.
guidance = {
 'SfAccordion': ('Disclosure', 'Use for a short list of questions or sections that readers can expand independently.', 'Do not hide required form fields or essential safety text.'),
 'SfAdaptedCards': ('Data', 'Use when notification cards arrive from REST, GraphQL, legacy records, or a custom provider.', 'Do not pass provider payloads directly to presentation cards.'),
 'SfAlert': ('Feedback', 'Use for a persistent message that needs attention in the current context.', 'Use SfToast for a brief confirmation that can disappear.'),
 'SfAvatar': ('Identity', 'Use an initial or icon to identify a person or source in a compact space.', 'Do not use an unlabeled avatar as the only name for a person.'),
 'SfBadge': ('Status', 'Use for a short status, count, or category beside other content.', 'Do not use a badge as a button or for long sentences.'),
 'SfBarChart': ('Data', 'Use to compare a small sequence of values, such as activity by day.', 'Use a table when precise values matter more than the shape of the data.'),
 'SfBottomNav': ('Navigation', 'Use for a small set of primary destinations in a narrow layout.', 'Do not use for a long list of routes.'),
 'SfBreadcrumbs': ('Navigation', 'Use to show a location within a hierarchy and allow movement to ancestors.', 'Do not use for steps in a linear form.'),
 'SfButton': ('Action', 'Use for a discrete action such as save, create, or submit.', 'Use a native link for navigation.'),
 'SfButtonGroup': ('Action', 'Use when one compact toolbar controls a related set of choices.', 'Use SfRadioGroup when the choices need visible descriptions.'),
 'SfCalendar': ('Date', 'Use for choosing one date while browsing adjacent months.', 'Use a native date input when a compact form field is more useful.'),
 'SfCheckbox': ('Input', 'Use for one independent yes or no option.', 'Use SfRadioGroup for mutually exclusive choices.'),
 'SfClock': ('Data', 'Use when the user needs the current local time in a dashboard.', 'Do not use it as a countdown or server-time claim.'),
 'SfDial': ('Input', 'Use for a tactile percentage control when an approximate value is acceptable.', 'Use SfInput or SfStepper for a precise number.'),
 'SfDivider': ('Layout', 'Use to separate nearby groups or label an alternative path.', 'Do not use repeated dividers to replace spacing and headings.'),
 'SfDonutChart': ('Data', 'Use to show one part of a whole with a short label.', 'Use a table or bar chart for multiple exact comparisons.'),
 'SfDrawer': ('Overlay', 'Use for settings or supporting details that should slide in beside the task.', 'Use SfModal for a short decision that needs centered attention.'),
 'SfDropdown': ('Action', 'Use for a short list of secondary actions attached to a trigger.', 'Do not use as a form select.'),
 'SfElement': ('Semantic', 'Use to choose any valid native HTML root while preserving attributes and slots.', 'Use a specialized control when native interaction is needed.'),
 'SfEmptyState': ('Feedback', 'Use when a collection has no items and the next action is clear.', 'Do not show it while content is still loading.'),
 'SfFab': ('Action', 'Use for the main creation action when the layout can give it clear space.', 'Do not add several floating primary actions to one view.'),
 'SfFileUpload': ('Input', 'Use for local file selection with drag and drop feedback.', 'Do not imply that selection uploads or stores a file.'),
 'SfIcon': ('Graphic', 'Use for a decorative symbol next to text or inside a labeled control.', 'Do not use a bare icon as the only accessible action label.'),
 'SfIconButton': ('Action', 'Use for a compact action whose accessible label can be concise.', 'Use SfButton when the action text should remain visible.'),
 'SfInput': ('Input', 'Use for a labeled single-line value with hint or error feedback.', 'Use SfTextarea for longer writing.'),
 'SfListCard': ('Data', 'Use for a short actionable list with an icon and small detail per row.', 'Use SfTable for sortable multi-column records.'),
 'SfMediaPlayer': ('Media', 'Use for local or supplied audio with play, mute, and seek controls.', 'Do not assume that a source can autoplay.'),
 'SfMetricPanel': ('Data', 'Use to combine a total, two related counts, and recent activity.', 'Use SfStatCard for one isolated metric.'),
 'SfMixer': ('Input', 'Use to adjust several related audio levels together.', 'Use SfSlider for one value.'),
 'SfModal': ('Overlay', 'Use for a focused decision or short form that needs modal focus handling.', 'Do not place a long browsing flow inside a modal.'),
 'SfNavList': ('Navigation', 'Use for a small vertical group of destinations or sections.', 'Do not use for arbitrary action buttons.'),
 'SfNotification': ('Data', 'Use to show one message, call, or status update with sender and action.', 'Use SfAdaptedCards to normalize a collection from a provider.'),
 'SfPagination': ('Navigation', 'Use to move through known pages of a collection.', 'Do not use when total pages are unknown.'),
 'SfProfileCard': ('Identity', 'Use to summarize one person, role, and availability.', 'Do not use for a full editable profile form.'),
 'SfProgress': ('Feedback', 'Use when task completion can be expressed as a percentage.', 'Use SfSpinner when progress cannot be measured.'),
 'SfRadioGroup': ('Input', 'Use for one choice among a labeled set of options.', 'Use SfSelect if the list is long and space is limited.'),
 'SfRating': ('Input', 'Use for a small ordered rating that supports keyboard selection.', 'Do not use for a precise numeric measurement.'),
 'SfSegmented': ('Input', 'Use for a few short view or filter modes with one active choice.', 'Use SfTabs when each choice owns a content panel.'),
 'SfSelect': ('Input', 'Use a native picker for a compact list of options.', 'Use SfRadioGroup when every option should stay visible.'),
 'SfSkeleton': ('Feedback', 'Use to reserve the shape of content during a pending load.', 'Do not use it after an empty response is known.'),
 'SfSlider': ('Input', 'Use for an adjustable bounded number with a visible value.', 'Use SfStepper or SfInput when exact entry is central.'),
 'SfSpinner': ('Feedback', 'Use for an indeterminate wait inside or near an action.', 'Use SfProgress when completion can be measured.'),
 'SfStatCard': ('Data', 'Use for one important metric with context and a short change label.', 'Use SfMetricPanel when two counts and a trend belong together.'),
 'SfStepper': ('Input', 'Use to adjust a small integer quantity within known limits.', 'Use SfSlider for a broad approximate range.'),
 'SfSurface': ('Layout', 'Use as a card, section, article, or inset well with Softform material.', 'Do not use it to replace a meaningful document heading.'),
 'SfSwitch': ('Input', 'Use for an immediate on or off setting.', 'Use SfCheckbox when the option is part of a later form submission.'),
 'SfTable': ('Data', 'Use for multi-column records that need sorting and a caption.', 'Use SfListCard for a short single-line list.'),
 'SfTabs': ('Navigation', 'Use when one of several labeled panels is visible at a time.', 'Use SfSegmented for a short filter that does not own a panel.'),
 'SfTextarea': ('Input', 'Use for multi-line writing with a character limit.', 'Use SfInput for one-line values.'),
 'SfTimeline': ('Data', 'Use for events whose order and time are meaningful.', 'Use SfListCard when the entries are actions without chronology.'),
 'SfToast': ('Feedback', 'Use for brief confirmation of a completed local action.', 'Use SfAlert for persistent errors or guidance.'),
 'SfTooltip': ('Feedback', 'Use to explain a compact control on hover or focus.', 'Do not hide essential instructions in a tooltip.'),
 'SfWorkflow': ('Data', 'Use to show a short sequence of connected stages and the active stage.', 'Do not use it for a large editable flowchart.'),
}

def tag_for(name):
    return re.sub(r'([a-z0-9])([A-Z])', r'\1-\2', name.replace('Sf', 'sf-', 1)).lower()

def motion_for(name, category):
    overrides = {
      'SfSlider':'The track and value respond while dragging.',
      'SfInput':'Focus, hint, error, and filled state change without moving the caret.',
      'SfTextarea':'Focus and character-count feedback change while typing.',
      'SfCalendar':'Month grids crossfade and slide; selection changes color.',
      'SfModal':'The dialog and backdrop enter and leave with reduced-motion support.',
      'SfDrawer':'The panel slides in and out with reduced-motion support.',
      'SfTabs':'The active tab and panel change with a short transition.',
      'SfBottomNav':'The selected icon fills from the previous destination; motion, delay, duration, and easing are configurable.',
      'SfButtonGroup':'The pressed option fills from the previous choice; motion, delay, duration, and easing are configurable.',
      'SfNavList':'The selected row fills from the previous destination; motion, delay, duration, and easing are configurable.',
      'SfPagination':'The current page fills from the previous page; motion, delay, duration, and easing are configurable.',
      'SfSegmented':'The checked segment fills from the previous option; motion, delay, duration, and easing are configurable.',
      'SfBarChart':'Bars and numeric labels rise after motionDelay, with stagger between columns and motionDuration controlling the move.',
      'SfDonutChart':'The ring and center number count toward a new percentage after motionDelay.',
      'SfStatCard':'Numeric values count toward the supplied value after motionDelay; strings use a short text transition.',
      'SfMetricPanel':'Counters and the embedded bar chart use motionDelay, motionDuration, and stagger.',
      'SfProgress':'The native progress value and label count toward the supplied percentage after motionDelay.',
      'SfTable':'Search, sorting, paging, and table or card views respond to the supplied rows.',
      'SfSkeleton':'A low-contrast shimmer indicates pending content.',
      'SfSpinner':'A small rotation indicates indeterminate progress.',
    }
    if name in overrides: return overrides[name]
    return {
      'Action':'Hover, focus, press, and disabled states respond immediately.',
      'Input':'Selection and focus states use short transitions.',
      'Navigation':'The active destination or panel changes with a short transition.',
      'Feedback':'Visibility and status changes use short transitions.',
      'Overlay':'The overlay enters and leaves with reduced-motion support.',
      'Data':'Value or highlight changes use short transitions.',
      'Date':'Selection changes with a short transition.',
      'Media':'Playback controls respond to press and state changes.',
      'Graphic':'Color and scale follow the surrounding control.',
      'Identity':'Appearance follows surrounding state changes.',
      'Status':'Tone and emphasis changes use short transitions.',
      'Layout':'Elevation and tone changes use short transitions.',
      'Disclosure':'Open state changes with a short transition.',
      'Semantic':'Motion comes from the native element or its children.',
    }[category]

catalog = {}
for name in sorted(guidance):
    category, when, avoid = guidance[name]
    md = (root / 'docs/components' / f'{name}.md').read_text(encoding='utf8')
    story = (root / 'stories' / f'{name}.stories.js').read_text(encoding='utf8')
    description = md.splitlines()[2]
    example = re.search(r'```vue\n(.*?)\n```', md, re.S).group(1)
    props = [dict(name=m.group(1), type=m.group(2), default=m.group(3)) for m in re.finditer(r'^\| `([^`]+)` \| ([^|]+) \| `([^`]+)` \|$', md, re.M)]
    event_text = md.split('## Events\n\n',1)[1].split('\n',1)[0]
    events = re.findall(r'`([^`]+)`',event_text)
    args = json.loads(re.search(r'\n  args: (\{.*?\}),\n',story,re.S).group(1))
    slot = re.search(r'template: `<'+name+r'[^>]*>(.*?)</'+name+r'>`',story,re.S)
    catalog[name] = {
      'name':name, 'tag':tag_for(name), 'category':category,
      'purpose':description, 'whenToUse':when, 'avoidWhen':avoid,
      'props':props, 'events':events, 'exampleVue':example,
      'importVue':f"import {{ {name} }} from '@bclonan/softform';",
      'importElement':f"import {{ register{name} }} from '@bclonan/softform/elements/{name}';",
      'motion':motion_for(name,category),
      'demo':{'props':args,'slot':slot.group(1) if slot else ''},
    }

source_names = {path.stem for path in (root / 'src/components').glob('Sf*.vue')}
if set(catalog) != source_names:
    raise SystemExit(f'Dictionary mismatch. Missing: {source_names-set(catalog)}; extra: {set(catalog)-source_names}')
(root / 'src/component-dictionary.json').write_text(json.dumps(catalog,indent=2,ensure_ascii=False)+'\n',encoding='utf8')
print('Wrote dictionary for',len(catalog),'components')
