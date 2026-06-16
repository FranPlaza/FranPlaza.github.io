(function () {
  function normalizeText(value) {
    return (value || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function cellValue(row, index) {
    const cell = row.cells[index];
    return cell ? cell.textContent.trim() : "";
  }

  function compareValues(a, b, direction) {
    const numericA = Number(a.replace(/[^\d.-]/g, ""));
    const numericB = Number(b.replace(/[^\d.-]/g, ""));
    const bothNumeric = a && b && !Number.isNaN(numericA) && !Number.isNaN(numericB);
    const result = bothNumeric
      ? numericA - numericB
      : a.localeCompare(b, "es", { sensitivity: "base", numeric: true });
    return direction === "ascending" ? result : -result;
  }

  function enhanceTable(container) {
    const table = container.querySelector("table");
    const search = document.getElementById("theses-search");
    const count = document.getElementById("theses-count");
    if (!table || !search) return;

    const tbody = table.tBodies[0];
    const headers = Array.from(table.tHead ? table.tHead.rows[0].cells : table.rows[0].cells);
    let rows = Array.from(tbody.rows);
    let activeSort = { index: 0, direction: "descending" };

    function updateCount() {
      const visible = rows.filter((row) => !row.hidden).length;
      count.textContent = `${visible} de ${rows.length} tesis`;
    }

    function filterRows() {
      const query = normalizeText(search.value);
      rows.forEach((row) => {
        row.hidden = query && !normalizeText(row.textContent).includes(query);
      });
      updateCount();
    }

    function sortRows(index) {
      const current = activeSort.index === index ? activeSort.direction : "descending";
      const direction = current === "ascending" ? "descending" : "ascending";
      activeSort = { index, direction };

      headers.forEach((header) => header.removeAttribute("aria-sort"));
      headers[index].setAttribute("aria-sort", direction);

      rows = rows.sort((rowA, rowB) =>
        compareValues(cellValue(rowA, index), cellValue(rowB, index), direction)
      );
      rows.forEach((row) => tbody.appendChild(row));
      filterRows();
    }

    headers.forEach((header, index) => {
      header.tabIndex = 0;
      header.setAttribute("role", "button");
      header.addEventListener("click", () => sortRows(index));
      header.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          sortRows(index);
        }
      });
    });

    search.addEventListener("input", filterRows);
    sortRows(0);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".interactive-table").forEach(enhanceTable);
  });
})();
