import metadata from "./metadata.json";

/** The hardcoded non-zero number of columns. */
export const COLS = 3;

/** The hardcoded gap between columns, as per Tailwind. */
export const COL_GAP = 4;

/** The hardcoded gap between rows, as per Tailwind. */
export const ROW_GAP = 4;

/** Defines the structure of the metadata listing. */
export interface Metadata {
  // The sorted page index.
  pages: Partial<Record<string, readonly string[]>>;
  // The unsorted image index.
  images: Partial<
    Record<
      string,
      // Images are keyed by title, for now.
      // This may change in the future.
      {
        path: string;
        width: number;
        height: number;
      }
    >
  >;
}

/**
 * Loads images from the image metadata index and sort by fit.
 * Writes back to the DOM at the specified element ID.
 *
 * @param id   the element ID to write to.
 * @param page the metadata page key.
 *
 * If the metadata is corrupted or the element isn't found,
 * no changes will be written.
 */
export function load(id: string, page: string) {
  // Retrieve and validate the root element from the DOM before progressing.
  const root = document.getElementById(id);
  if (root === null) {
    return;
  }

  // Retrieve and validate the page index information.
  const pageIndex = (metadata as Metadata).pages[page];
  if (pageIndex === undefined) {
    return;
  }

  // Create write buffer for image columns to be submitted after loading.
  const columns = Array.from({ length: COLS }, () => {
    const column = document.createElement("div");
    column.className = "flex flex-col items-center justify-start gap-4";
    return column;
  });

  // Create parallel running column metadata array.
  const columnsMeta = Array.from({ length: COLS }, (_, num) => ({
    num,
    count: 0,
    height: 0,
  }));

  // Add and sort images by fit from the image index.
  for (const [_index, title] of pageIndex.entries()) {
    // Retrieve and validate each image from the page index.
    const imageMeta = (metadata as Metadata).images[title];
    if (imageMeta === undefined) {
      return;
    }

    // Fetch the column with the smallest relative height.
    const column = columnsMeta.reduce((prev, next) =>
      next.height < prev.height ? next : prev,
    );

    // Create and update the image element with all necessary attributes.
    const imageElement = document.createElement("img");

    imageElement.src = `./src/${imageMeta.path}`;
    imageElement.width = imageMeta.width;
    imageElement.height = imageMeta.height;

    // For non top-level images, implement lazy loading for network.
    if (column.count >= 2) {
      imageElement.loading = "lazy";
    }

    // Update the columns and the column metadata per iteration.
    columns[column.num].appendChild(imageElement);

    columnsMeta[column.num].count += 1;
    columnsMeta[column.num].height += imageMeta.height / imageMeta.width;
  }

  // Submit written columns to the DOM within the root.
  root.replaceChildren(...columns);
}
