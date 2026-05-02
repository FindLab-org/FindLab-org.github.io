hexo.extend.tag.register('youtube', function (args) {
  const id = args[0];
  if (!id) return '';

  return `<div class="video-container"><iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe></div>`;
});
