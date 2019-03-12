let loaderElm = null;
let isLoading = false;
export const Loader = {
  start: function () {
    if (isLoading) return;
    isLoading = true;
    const d = document;
    const e = d.createElement('div');
    e.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
    loaderElm = e.firstChild;
    d.body.appendChild(loaderElm);
  },
  done: function () {
    if (!isLoading) return;
    isLoading = false;
    if (loaderElm) loaderElm.parentElement.removeChild(loaderElm);
  }
};