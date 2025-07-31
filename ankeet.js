    const select = document.getElementById('teema');
  select.addEventListener('change', function () {
    this.querySelector('option[disabled]').style.display = 'none';
  });