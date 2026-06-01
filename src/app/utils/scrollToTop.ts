/** Remonte la fenêtre et le conteneur principal (fiabilité mobile / iOS). */
export function scrollToTop() {
  const run = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const main = document.getElementById('main-content');
    if (main) {
      main.scrollTop = 0;
    }
  };

  run();
  requestAnimationFrame(run);
  window.setTimeout(run, 0);
  window.setTimeout(run, 120);
}
