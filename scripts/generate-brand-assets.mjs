import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const colors = {
  ink: "#121a2a",
  foreground: "#182033",
  surface: "#fffef9",
  sun: "#ffd166",
  pink: "#e85f8d",
  blue: "#e6f5ff",
};

const displayFont =
  "'Avenir Next', Avenir, 'Helvetica Neue', Aptos, Arial, sans-serif";
const bodyFont =
  "'Nunito Sans', Nunito, 'Helvetica Neue', Arial, sans-serif";

const svg = (width, height, content) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${content}
</svg>`;

const gridDefs = `
<defs>
  <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
    <path d="M24 0H0V24" fill="none" stroke="${colors.surface}" stroke-opacity=".065" stroke-width="1"/>
  </pattern>
</defs>`;

const brandMark = ({
  x = 0,
  y = 0,
  size = 160,
} = {}) => {
  const shadowOffset = size * 0.16;
  const pad = size * 0.16;
  const block = size * 0.68;

  return `
  <g>
    <rect x="${x + pad + shadowOffset}" y="${y + pad + shadowOffset}" width="${block}" height="${block}" fill="${colors.pink}" />
    <rect x="${x + pad}" y="${y + pad}" width="${block}" height="${block}" fill="${colors.sun}" />
  </g>`;
};

const renderPng = async (path, width, height, content) => {
  await sharp(Buffer.from(svg(width, height, content))).png().toFile(path);
};

const createIco = (pngBuffers) => {
  const headerSize = 6;
  const directorySize = 16 * pngBuffers.length;
  let imageOffset = headerSize + directorySize;
  const ico = Buffer.alloc(
    imageOffset + pngBuffers.reduce((total, image) => total + image.length, 0),
  );

  ico.writeUInt16LE(0, 0);
  ico.writeUInt16LE(1, 2);
  ico.writeUInt16LE(pngBuffers.length, 4);

  pngBuffers.forEach((image, index) => {
    const entryOffset = headerSize + index * 16;
    const size = [16, 32, 48][index];
    ico.writeUInt8(size, entryOffset);
    ico.writeUInt8(size, entryOffset + 1);
    ico.writeUInt8(0, entryOffset + 2);
    ico.writeUInt8(0, entryOffset + 3);
    ico.writeUInt16LE(1, entryOffset + 4);
    ico.writeUInt16LE(32, entryOffset + 6);
    ico.writeUInt32LE(image.length, entryOffset + 8);
    ico.writeUInt32LE(imageOffset, entryOffset + 12);
    image.copy(ico, imageOffset);
    imageOffset += image.length;
  });

  return ico;
};

const logoSvg = svg(
  1456,
  310,
  `
  ${brandMark({ x: 24, y: 37, size: 236 })}
  <text x="320" y="211" font-family="${displayFont}" font-size="166" font-weight="900" fill="${colors.surface}" letter-spacing="0">elisebuilds</text>
`,
);

const iconTransparent = svg(
  1024,
  1024,
  brandMark({ x: 30, y: 30, size: 832 }),
);

const iconDark = svg(
  1024,
  1024,
  `
  ${gridDefs}
  <rect width="1024" height="1024" fill="${colors.ink}" />
  <rect width="1024" height="1024" fill="url(#grid)" />
  ${brandMark({ x: 53, y: 53, size: 792 })}
`,
);

const linkedInBanner = svg(
  1584,
  396,
  `
  ${gridDefs}
  <rect width="1584" height="396" fill="${colors.ink}" />
  <rect width="1584" height="396" fill="url(#grid)" />
  <path d="M-80 345H1680" stroke="${colors.surface}" stroke-opacity=".08" stroke-width="1" />
  <path d="M-80 67H1680" stroke="${colors.surface}" stroke-opacity=".08" stroke-width="1" />
  ${brandMark({ x: 414, y: 82, size: 170 })}
  <text x="622" y="208" font-family="${displayFont}" font-size="112" font-weight="900" fill="${colors.surface}" letter-spacing="0">elisebuilds</text>
  <text x="626" y="281" font-family="${bodyFont}" font-size="28" font-weight="800" fill="${colors.surface}" opacity=".78" letter-spacing="9">WEBSITES . APPS . AUTOMATIONS</text>
`,
);

await writeFile("public/elisebuilds.svg", logoSvg);
await writeFile("public/elisebuilds-icon.svg", iconTransparent);
await writeFile("public/linkedin-banner.svg", linkedInBanner);

await renderPng("public/elisebuilds.png", 1456, 310, logoSvg);
await renderPng("public/elisebuilds-icon-transparent.png", 1024, 1024, iconTransparent);
await renderPng("public/elisebuilds-icon.png", 1024, 1024, iconTransparent);
await renderPng("public/elisebuilds-icon-dark.png", 1024, 1024, iconDark);
await renderPng("public/linkedin-banner.png", 1584, 396, linkedInBanner);
await sharp(Buffer.from(iconDark)).resize(512, 512).png().toFile("app/icon.png");

const faviconPngs = await Promise.all(
  [16, 32, 48].map((size) =>
    sharp(Buffer.from(iconTransparent)).resize(size, size).png().toBuffer(),
  ),
);

await writeFile("app/favicon.ico", createIco(faviconPngs));
