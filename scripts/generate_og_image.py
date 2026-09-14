"""Generate the English Bootcamp Open Graph / WhatsApp share image."""
from __future__ import annotations

import math
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT_PNG = ROOT / "assets" / "og-image.png"
OUT_JPG = ROOT / "assets" / "og-image.jpg"
FONT_DIR = Path.home() / ".cache" / "english-bootcamp-fonts"

NAVY = (7, 18, 40, 255)
SURFACE = (16, 31, 59, 255)
BLUE = (20, 81, 235, 255)
ICON_BLUE = (37, 99, 244, 255)
ELECTRIC = (52, 118, 255, 255)
ICE = (188, 236, 255, 255)
WHITE = (255, 255, 255, 255)
MUTED = (158, 175, 203, 255)
BUBBLE = (194, 237, 255, 255)

W, H = 1200, 630
SCALE = 2
SW, SH = W * SCALE, H * SCALE

FONT_URLS = {
    500: "https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F.ttf",
    700: "https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F.ttf",
    800: "https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_F.ttf",
}


def download_fonts() -> None:
    FONT_DIR.mkdir(parents=True, exist_ok=True)
    for weight, url in FONT_URLS.items():
        dest = FONT_DIR / f"Manrope-{weight}.ttf"
        if dest.exists() and dest.stat().st_size > 1000:
            continue
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as response:
            dest.write_bytes(response.read())


def font(weight: int, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / f"Manrope-{weight}.ttf"), size * SCALE)


def rounded_rect(draw: ImageDraw.ImageDraw, box, radius: int, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def draw_icon(size: int) -> Image.Image:
    """Rasterize brand-mark.svg at `size` px using the original 40x40 geometry."""
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    s = size / 40
    radius = int(12 * s)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=ICON_BLUE)

    stroke = max(2, round(2.3 * s))

    def p(x: float, y: float) -> tuple[float, float]:
        return x * s, y * s

    cx, cy, r = 20 * s, 20 * s, 10 * s
    bbox = [cx - r, cy - r, cx + r, cy + r]

    def angle(x: float, y: float) -> float:
        return math.degrees(math.atan2(y - cy, x - cx)) % 360

    start = p(30, 20)
    mid = p(15.4, 28.9)
    tail = p(10, 30)
    join = p(11.1, 24.6)
    end = p(20, 10)

    draw.arc(bbox, start=angle(*start), end=angle(*mid), fill=BUBBLE, width=stroke)
    draw.line([mid, tail, join], fill=BUBBLE, width=stroke, joint="curve")
    draw.arc(bbox, start=angle(*join), end=angle(*end), fill=BUBBLE, width=stroke)
    for point in (start, mid, tail, join, end):
        x, y = point
        draw.ellipse((x - stroke / 2, y - stroke / 2, x + stroke / 2, y + stroke / 2), fill=BUBBLE)

    arrow = [p(18, 22), p(29, 11)]
    corner = [p(21, 11), p(29, 11), p(29, 19)]
    draw.line(arrow, fill=WHITE, width=stroke)
    draw.line(corner, fill=WHITE, width=stroke, joint="curve")
    for point in (*arrow, corner[0], corner[2]):
        x, y = point
        draw.ellipse((x - stroke / 2, y - stroke / 2, x + stroke / 2, y + stroke / 2), fill=WHITE)

    return canvas


def radial_glow(base: Image.Image, cx: float, cy: float, radius: int, color: tuple[int, int, int], alpha: int) -> None:
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for i in range(12, 0, -1):
        r = int(radius * i / 12)
        a = int(alpha * (i / 12) ** 2)
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(*color, a))
    overlay = overlay.filter(ImageFilter.GaussianBlur(80 * SCALE / 2))
    base.alpha_composite(overlay)


def pill(draw: ImageDraw.ImageDraw, xy, text: str, typeface: ImageFont.FreeTypeFont, pad_x=28, pad_y=16):
    x, y = xy
    left, top, right, bottom = draw.textbbox((0, 0), text, font=typeface)
    w, h = right - left, bottom - top
    box = (x, y, x + w + pad_x * 2, y + h + pad_y * 2)
    rounded_rect(draw, box, radius=int((h + pad_y * 2) / 2), fill=(20, 59, 120, 160), outline=(110, 176, 255, 90), width=2 * SCALE)
    draw.text((x + pad_x - left, y + pad_y - top), text, font=typeface, fill=ICE)
    return box[2] - box[0]


def main() -> None:
    download_fonts()
    img = Image.new("RGBA", (SW, SH), NAVY)
    draw = ImageDraw.Draw(img)

    radial_glow(img, SW * 0.82, SH * 0.42, int(520 * SCALE), (13, 61, 151), 140)
    radial_glow(img, SW * 0.18, SH * 0.85, int(280 * SCALE), (20, 81, 235), 70)

    cx, cy = int(SW * 0.78), int(SH * 0.48)
    for radius, color, width, dash in (
        (int(430 * SCALE / 2), (56, 103, 181, 55), 2 * SCALE, False),
        (int(330 * SCALE / 2), (91, 154, 255, 48), 2 * SCALE, True),
        (int(230 * SCALE / 2), (106, 197, 255, 40), 3 * SCALE, False),
    ):
        bbox = (cx - radius, cy - radius, cx + radius, cy + radius)
        if dash:
            for start in range(0, 360, 16):
                draw.arc(bbox, start=start, end=start + 8, fill=color, width=width)
        else:
            draw.arc(bbox, start=210, end=40, fill=color, width=width)

    icon_size = 148 * SCALE
    icon = draw_icon(icon_size)
    icon_x, icon_y = 88 * SCALE, 92 * SCALE
    shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle(
        (icon_x + 8, icon_y + 14, icon_x + icon_size + 8, icon_y + icon_size + 14),
        radius=int(12 * icon_size / 40),
        fill=(0, 0, 0, 90),
    )
    img.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(18)))
    img.alpha_composite(icon, (icon_x, icon_y))
    draw = ImageDraw.Draw(img)

    f_eyebrow = font(800, 18)
    f_title = font(800, 64)
    f_sub = font(500, 28)
    f_pill = font(700, 22)
    f_small = font(700, 18)

    brand_x = icon_x + icon_size + 32 * SCALE
    brand_y = icon_y + 18 * SCALE
    draw.text((brand_x, brand_y), "ENGLISH BOOTCAMP", font=f_eyebrow, fill=(169, 207, 255, 255))
    draw.text((brand_x, brand_y + 34 * SCALE), "English", font=f_title, fill=WHITE)
    draw.text((brand_x, brand_y + 98 * SCALE), "Bootcamp", font=f_title, fill=ICE)

    y = 330 * SCALE
    draw.text((88 * SCALE, y), "Seu próximo nível fala inglês.", font=f_sub, fill=MUTED)
    y += 64 * SCALE
    gap = 16 * SCALE
    w1 = pill(draw, (88 * SCALE, y), "4 módulos", f_pill)
    pill(draw, (88 * SCALE + w1 + gap, y), "23 aulas", f_pill)

    draw.rectangle((88 * SCALE, 548 * SCALE, 360 * SCALE, 548 * SCALE + 3 * SCALE), fill=ELECTRIC)
    draw.text((88 * SCALE, 564 * SCALE), "Comece com uma aula grátis  ·  ingles12dias.com", font=f_small, fill=(195, 220, 255, 255))

    final = img.resize((W, H), Image.Resampling.LANCZOS).convert("RGB")
    OUT_PNG.parent.mkdir(parents=True, exist_ok=True)
    final.save(OUT_PNG, "PNG", optimize=True)
    final.save(OUT_JPG, "JPEG", quality=90, optimize=True, progressive=True)
    print(f"Wrote {OUT_PNG} ({OUT_PNG.stat().st_size} bytes)")
    print(f"Wrote {OUT_JPG} ({OUT_JPG.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
