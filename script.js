
const fileInput = document.getElementById('fileInput');
const useSample = document.getElementById('useSample');
const resultsSection = document.getElementById('resultsSection');
const tableWrap = document.getElementById('tableWrap');
const downloadBtn = document.getElementById('downloadBtn');
const samplePath = 'sample_input.csv';
let currentData = [];

fileInput.addEventListener('change', (e) => {
  const f = e.target.files[0];
  if (f) {
    Papa.parse(f, {
      header: true,
      skipEmptyLines: true,
      complete: (res) => handleData(res.data)
    });
  }
});

useSample.addEventListener('click', () => {
  Papa.parse(samplePath, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: (res) => handleData(res.data)
  });
});

downloadBtn.addEventListener('click', () => {
  if (!currentData.length) return alert('No data to download');
  const csv = Papa.unparse(currentData);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'predictions.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

function handleData(rows) {
  rows = rows.map(r => {
    const obj = {};
    for (const k in r) {
      const cleanKey = k.trim().toLowerCase().replace(/\s+/g,'_');
      obj[cleanKey] = r[k];
    }
    return obj;
  });

  currentData = rows.map(r => ({...r}));

  for (const row of currentData) {
    const support_calls = Number(row.support_calls || 0);
    const payment_delay = Number(row.payment_delay || 0);
    const usage_frequency = (row.usage_frequency || '').toLowerCase();
    let pred = 'No';
    if (support_calls > 5 || payment_delay > 7 || usage_frequency === 'low') pred = 'Yes';
    row.predicted_churn = pred;
  }

  renderTable(currentData);
  renderChart(currentData);
  resultsSection.classList.remove('hidden');
}

function renderTable(data) {
  const cols = Object.keys(data[0] || {});
  let html = '<table><thead><tr>' + cols.map(c=>`<th>${c}</th>`).join('') + '</tr></thead><tbody>';
  for (const r of data.slice(0,200)) {
    html += '<tr>' + cols.map(c => `<td>${escapeHtml(r[c]===undefined?'':String(r[c]))}</td>`).join('') + '</tr>';
  }
  html += '</tbody></table>';
  tableWrap.innerHTML = html;
}

function escapeHtml(s){ return s.replace(/[&<>"']/g, (m)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m]); }

function renderChart(data) {
  const counts = data.reduce((acc, r) => { acc[r.predicted_churn] = (acc[r.predicted_churn]||0)+1; return acc; }, {});
  const labels = Object.keys(counts);
  const values = labels.map(l => counts[l]);
  if (window._churnChart) window._churnChart.destroy();
  const ctx = document.getElementById('churnChart').getContext('2d');
  window._churnChart = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data: values, borderWidth: 0 }]},
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  document.getElementById('legend').innerHTML = labels.map((l,i)=>`<div>${l}: <strong>${values[i]||0}</strong></div>`).join('');
}
