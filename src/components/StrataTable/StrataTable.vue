<template>
  <div>
    <div
      role="region"
      aria-labelledby="HeadersCol"
      tabindex="0"
      class="rowheaders"
      v-for="i in 5"
      :key="`table-${i}`"
    >
      <table>
        <caption id="HeadersCol">
          Books with a Fixed Row Header Column
        </caption>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Year</th>
            <th>ISBN-13</th>
            <th>ISBN-10</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Miguel De Cervantes</th>
            <td>The Ingenious Gentleman Don Quixote of La Mancha</td>
            <td>1605</td>
            <td>9783125798502</td>
            <td>3125798507</td>
          </tr>
          <tr>
            <th scope="row">Gabrielle-Suzanne Barbot de Villeneuve</th>
            <td>La Belle et la Bête</td>
            <td>1740</td>
            <td>9781910880067</td>
            <td>191088006X</td>
          </tr>
          <tr>
            <th scope="row">Sir Isaac Newton</th>
            <td>
              The Method of Fluxions and Infinite Series: With Its Application
              to the Geometry of Curve-lines
            </td>
            <td>1763</td>
            <td>9781330454862</td>
            <td>1330454863</td>
          </tr>
          <tr>
            <th scope="row">Mary Shelley</th>
            <td>Frankenstein; or, The Modern Prometheus</td>
            <td>1818</td>
            <td>9781530278442</td>
            <td>1530278449</td>
          </tr>
          <tr>
            <th scope="row">Herman Melville</th>
            <td>Moby-Dick; or, The Whale</td>
            <td>1851</td>
            <td>9781530697908</td>
            <td>1530697905</td>
          </tr>
          <tr>
            <th scope="row">Emma Dorothy Eliza Nevitte Southworth</th>
            <td>The Hidden Hand</td>
            <td>1888</td>
            <td>9780813512969</td>
            <td>0813512964</td>
          </tr>
          <tr>
            <th scope="row">F. Scott Fitzgerald</th>
            <td>The Great Gatsby</td>
            <td>1925</td>
            <td>9780743273565</td>
            <td>0743273567</td>
          </tr>
          <tr>
            <th scope="row">George Orwell</th>
            <td>Nineteen Eighty-Four</td>
            <td>1948</td>
            <td>9780451524935</td>
            <td>0451524934</td>
          </tr>
          <tr>
            <th scope="row">Nnedi Okorafor</th>
            <td>Who Fears Death</td>
            <td>2010</td>
            <td>9780756406691</td>
            <td>0756406692</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableWithFixedColumn",
  data: () => ({
    items: []
  }),
  computed: {
    cols() {
      const cols = [];
      for (let i = 1; i <= 20; i++) {
        cols.push({
          text: `Column ${i}`,
          value: `column-${i}`,
          width: 100
        });
      }
      return cols;
    }
  }
};
</script>
<style>
table {
  margin: 1em 0;
  border-collapse: collapse;
  border: 0.1em solid #d6d6d6;
}

caption {
  text-align: left;
  font-style: italic;
  padding: 0.25em 0.5em 0.5em 0.5em;
}

th,
td {
  padding: 0.25em 0.5em 0.25em 1em;
  vertical-align: text-top;
  text-align: left;
  text-indent: -0.5em;
}

th {
  vertical-align: bottom;
  background-color: #666;
  color: #fff;
}

tr:nth-child(even) th[scope="row"] {
  background-color: #f2f2f2;
}

tr:nth-child(odd) th[scope="row"] {
  background-color: #fff;
}

tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

td:nth-of-type(2) {
  font-style: italic;
}

th:nth-of-type(3),
td:nth-of-type(3) {
  text-align: right;
}

/* Fixed Headers */

th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}

th[scope="row"] {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: 1;
}

th[scope="row"] {
  vertical-align: top;
  color: inherit;
  background-color: inherit;
  background: linear-gradient(
    90deg,
    transparent 0%,
    transparent calc(100% - 0.05em),
    #d6d6d6 calc(100% - 0.05em),
    #d6d6d6 100%
  );
}

/* th:not([scope="row"]):nth-child(1) { */
th:not([scope="row"]):first-child {
  left: 0;
  z-index: 3;
  background: linear-gradient(
    90deg,
    #666 0%,
    #666 calc(100% - 0.05em),
    #ccc calc(100% - 0.05em),
    #ccc 100%
  );
}

/* Scrolling wrapper */

div[tabindex="0"][aria-labelledby][role="region"] {
  overflow: auto;
}

div[tabindex="0"][aria-labelledby][role="region"]:focus {
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  outline: 0.1em solid rgba(0, 0, 0, 0.1);
}

div[tabindex="0"][aria-labelledby][role="region"] table {
  margin: 0;
}

div[tabindex="0"][aria-labelledby][role="region"].rowheaders {
  background: linear-gradient(to right, transparent 30%, rgba(255, 255, 255, 0)),
    linear-gradient(to right, rgba(255, 255, 255, 0), white 70%) 0 100%,
    radial-gradient(
      farthest-side at 0% 50%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
        farthest-side at 100% 50%,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background-repeat: no-repeat;
  background-color: #fff;
  background-size: 4em 100%, 4em 100%, 1.4em 100%, 1.4em 100%;
  background-position: 0 0, 100%, 0 0, 100%;
  background-attachment: local, local, scroll, scroll;
}

div[tabindex="0"][aria-labelledby][role="region"].colheaders {
  background: linear-gradient(white 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
        farthest-side at 50% 100%,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background-repeat: no-repeat;
  background-color: #fff;
  background-size: 100% 4em, 100% 4em, 100% 1.4em, 100% 1.4em;
  background-attachment: local, local, scroll, scroll;
}

/* Strictly for making the scrolling happen. */

th[scope="row"] {
  min-width: 40vw;
}

@media all and (min-width: 30em) {
  th[scope="row"] {
    min-width: 20em;
  }
}

th[scope="row"] + td {
  min-width: 24em;
}

div[tabindex="0"][aria-labelledby][role="region"]:nth-child(3) {
  max-height: 18em;
}

div[tabindex="0"][aria-labelledby][role="region"]:nth-child(7) {
  max-height: 15em;
  margin: 0 1em;
}
</style>
