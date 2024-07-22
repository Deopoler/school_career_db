<script>
  import { ActiveTable } from "active-table";

  const data = [
    ["Planet", "Diameter", "Mass"],
    ["Earth", 12756, 5.97],
    ["Mars", 6792, 0.642],
  ];
  const frameComponentsStyles = {
    styles: { default: { backgroundColor: "#f6f6f6" } },
    inheritHeaderColors: false,
  };
</script>

<main>
  <h1>Active Table</h1>

  <active-table
    {data}
    {frameComponentsStyles}
    files={{ buttons: [{ import: true }, { export: true }], dragAndDrop: true }}
    headerStyles={{ default: { backgroundColor: "#d6d6d630" } }}
  />
</main>
