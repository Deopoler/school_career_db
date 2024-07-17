<script>
  let rows = [];
  let columns = 26;

  function addRow() {
    rows = [...rows, { id: rows.length + 1, cells: Array(columns).fill("") }];
  }

  let scrollContainer;

  function handleScroll() {
    if (
      scrollContainer.scrollHeight - scrollContainer.scrollTop >
      scrollContainer.clientHeight - 50
    ) {
      addRow();
    }
  }

  for (let i = 0; i < 50; i++) addRow();
</script>

<div id="wrapper">
  <div class="container">
    <h1>Web Spreadsheet</h1>
    <div id="spreadsheet" bind:this={scrollContainer} on:scroll={handleScroll}>
      <table>
        <tr>
          <th></th>
          {#each Array(columns) as _, i}
            <th>{"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i]}</th>
          {/each}
        </tr>
        {#each rows as row, i}
          <tr>
            <th>{row.id}</th>
            {#each row.cells as cell, j}
              <td contenteditable="true">{cell}</td>
            {/each}
          </tr>
        {/each}
      </table>
    </div>
  </div>
</div>
