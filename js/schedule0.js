document.addEventListener('DOMContentLoaded', function () {
  const expandableRows = document.querySelectorAll('.schedule-row-expandable');

  expandableRows.forEach(function (row) {
    // Inject chevron icon into Session cell
    const icon = document.createElement('span');
    icon.className = 'schedule-expand-icon';
    icon.textContent = ' ▼';
    row.cells[1].appendChild(icon);

    // Build and insert detail row
    const detailRow = document.createElement('tr');
    detailRow.className = 'schedule-detail-row';
    const detailCell = document.createElement('td');
    detailCell.colSpan = 3;

    const { qr, link, code, note } = row.dataset;
    let html = '<div class="schedule-detail-content">';
    if (qr) {
      html += `<img class="schedule-qr-code" src="${qr}" alt="QR code for Q&amp;A">`;
    }
    html += '<div class="schedule-detail-info">';
    if (link) {
      html += `<p><strong>Q&amp;A Link:</strong> <a href="${link}" target="_blank">${link}</a></p>`;
    }
    if (code) {
      html += `<p><strong>Access Code:</strong> ${code}</p>`;
    }
    if (note) {
      html += `<p>${note}</p>`;
    }
    html += '</div></div>';

    detailCell.innerHTML = html;
    detailRow.appendChild(detailCell);
    row.parentNode.insertBefore(detailRow, row.nextSibling);

    // Click handler — accordion: close others, toggle this one
    row.addEventListener('click', function () {
      const isOpen = detailRow.classList.contains('open');
      document.querySelectorAll('.schedule-detail-row.open').forEach(function (dr) {
        dr.classList.remove('open');
      });
      document.querySelectorAll('.schedule-row-expandable.expanded').forEach(function (er) {
        er.classList.remove('expanded');
      });
      if (!isOpen) {
        detailRow.classList.add('open');
        row.classList.add('expanded');
      }
    });
  });
});
