"""Keep page descriptions and social cards aligned across the static examples."""

from html import escape
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parent.parent
ORIGIN = "https://softform-34r5.netlify.app"
PAGES = {
    "index.html": "Explore 53 responsive Softform components with motion, data views, and working dashboard examples for Vue, React, and plain JavaScript.",
    "docs.html": "Browse all 53 Softform components with live demos, props, event references, usage guidance, and motion controls.",
    "examples/inbox.html": "Explore a working inbox built with Softform navigation, cards, search, and feedback components.",
    "examples/settings.html": "Tune motion and interaction settings in a responsive Softform settings page.",
    "examples/analytics.html": "See animated Softform charts and responsive table and card views with programmable data loading delays.",
    "examples/planner.html": "Try a Softform planner with calendar selection, validation, a review dialog, and a local booking list.",
    "examples/react.html": "Use Softform custom elements through typed React adapters in a working dashboard with forms, charts, and tables.",
    "examples/elements.html": "Use Softform custom elements in plain HTML with no application framework.",
    "examples/elements-gallery.html": "Try all 53 Softform custom elements in one searchable gallery with live controls and component links.",
}


for relative_path, description in PAGES.items():
    path = ROOT / relative_path
    html = path.read_text(encoding="utf-8")
    html = re.sub(r"\n?\s*<!-- Softform metadata -->.*?<!-- /Softform metadata -->", "", html, flags=re.S)
    match = re.search(r"<title>(.*?)</title>", html, flags=re.S | re.I)
    if not match:
        raise ValueError(f"Missing title in {relative_path}")
    title = re.sub(r"\s+", " ", match.group(1)).strip()
    url = ORIGIN + ("/" if relative_path == "index.html" else "/" + relative_path)
    image = ORIGIN + "/og-softform.png"
    tags = [
        '<!-- Softform metadata -->',
        f'<meta name="description" content="{escape(description, quote=True)}">',
        '<meta name="theme-color" content="#dce2e4">',
        '<meta name="robots" content="index, follow">',
        f'<link rel="canonical" href="{url}">',
        '<link rel="icon" type="image/svg+xml" href="/favicon.svg">',
        '<meta property="og:type" content="website">',
        '<meta property="og:site_name" content="Softform">',
        '<meta property="og:locale" content="en_US">',
        f'<meta property="og:title" content="{escape(title, quote=True)}">',
        f'<meta property="og:description" content="{escape(description, quote=True)}">',
        f'<meta property="og:url" content="{url}">',
        f'<meta property="og:image" content="{image}">',
        '<meta property="og:image:type" content="image/png">',
        '<meta property="og:image:width" content="1200">',
        '<meta property="og:image:height" content="630">',
        '<meta property="og:image:alt" content="Softform component library with chart and navigation examples">',
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta name="twitter:title" content="{escape(title, quote=True)}">',
        f'<meta name="twitter:description" content="{escape(description, quote=True)}">',
        f'<meta name="twitter:image" content="{image}">',
        '<!-- /Softform metadata -->',
    ]
    html = html[: match.end()] + "\n" + "\n".join(tags) + html[match.end() :]
    path.write_text(html, encoding="utf-8")

print(f"Updated metadata on {len(PAGES)} pages")
