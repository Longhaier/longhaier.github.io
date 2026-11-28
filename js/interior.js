(function () {
  'use strict';
  // Search uses text-only matching; no injected HTML or external dependency.
  var search = document.querySelector('[data-filter-input]');
  if (search) {
    var groups = Array.prototype.slice.call(document.querySelectorAll('[data-filter-group]'));
    var status = document.querySelector('[data-filter-status]');
    var empty = document.querySelector('[data-filter-empty]');
    var total = document.querySelectorAll('[data-filter-item]').length;

    function updateFilter() {
      var term = search.value.trim().toLocaleLowerCase();
      var visible = 0;
      groups.forEach(function (group) {
        var groupName = (group.getAttribute('data-filter-group-name') || '').toLocaleLowerCase();
        var matchGroup = term && groupName.indexOf(term) !== -1;
        var items = group.querySelectorAll('[data-filter-item]');
        var matches = 0;
        Array.prototype.forEach.call(items, function (item) {
          var candidate = (item.getAttribute('data-search') || '').toLocaleLowerCase();
          var match = !term || matchGroup || candidate.indexOf(term) !== -1;
          item.hidden = !match;
          if (match) matches += 1;
        });
        group.hidden = matches === 0;
        visible += matches;
      });
      if (status) {
        var message = status.getAttribute(term ? 'data-matches' : 'data-all');
        status.textContent = message.replace('{count}', term ? visible : total);
      }
      if (empty) empty.hidden = !term || visible > 0;
    }
    search.addEventListener('input', updateFilter);
    updateFilter();
  }

  // Build a TOC from actual heading elements, rather than copying a markdown-generated
  // TOC HTML tree or relying on old global scroll/resize handlers.
  var article = document.querySelector('[data-toc-source]');
  var list = document.querySelector('[data-toc-list]');
  var panel = document.querySelector('[data-toc-panel]');
  if (article && list && panel) {
    var headings = Array.prototype.slice.call(article.querySelectorAll('h2, h3'));
    var anchorIndex = 0;
    headings.forEach(function (heading) {
      if (!heading.textContent.trim()) return;
      if (!heading.id) {
        anchorIndex += 1;
        heading.id = 'article-heading-' + anchorIndex;
      }
      var link = document.createElement('a');
      link.href = '#' + encodeURIComponent(heading.id);
      link.textContent = heading.textContent.trim();
      if (heading.tagName === 'H3') link.className = 'interior-side-nav__child';
      list.appendChild(link);
    });
    panel.hidden = !list.children.length;
  }
}());
