"""Create the 1200 x 630 social card used by the example site."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "public" / "og-softform.png"
OUTPUT.parent.mkdir(exist_ok=True)

image = Image.new("RGB", (1200, 630), "#dce2e4")
draw = ImageDraw.Draw(image)


def font(size, bold=False):
    name = "segoeuib.ttf" if bold else "segoeui.ttf"
    path = Path("C:/Windows/Fonts") / name
    return ImageFont.truetype(str(path), size) if path.exists() else ImageFont.load_default()


draw.rounded_rectangle((42, 40, 1158, 590), radius=36, fill="#f4f6f6", outline="#aebbc0", width=2)
draw.rounded_rectangle((73, 71, 155, 153), radius=23, fill="#ffe247")
draw.arc((93, 91, 135, 133), 200, 520, fill="#202f37", width=8)
draw.text((178, 80), "softform", font=font(46, True), fill="#1d2d35")
draw.text((76, 192), "Components with", font=font(68, True), fill="#1d2d35")
draw.text((76, 272), "a little life.", font=font(68, True), fill="#1d2d35")
draw.text((78, 382), "53 responsive components. Vue, React and Web Components.", font=font(27), fill="#51646c")

draw.rounded_rectangle((78, 480, 351, 538), radius=16, fill="#233943")
draw.text((107, 494), "Explore the library", font=font(22, True), fill="#ffffff")

# A small chart and navigation panel echo the component examples.
draw.rounded_rectangle((865, 176, 1101, 420), radius=25, fill="#e7edee", outline="#b7c4c8", width=2)
draw.text((892, 198), "ACTIVITY", font=font(15, True), fill="#53676e")
for index, height in enumerate((67, 112, 87, 144, 103)):
    x = 890 + index * 39
    draw.rounded_rectangle((x, 366 - height, x + 26, 366), radius=10, fill="#28434d" if index < 4 else "#ffe247")
draw.rounded_rectangle((821, 438, 1110, 510), radius=23, fill="#d4e0e3", outline="#aebdc1", width=2)
draw.rounded_rectangle((841, 453, 949, 494), radius=13, fill="#ffe247")
draw.text((867, 462), "Home", font=font(18, True), fill="#243741")
draw.text((980, 462), "Inbox", font=font(18), fill="#47616b")

image.save(OUTPUT, optimize=True)
print(OUTPUT)
