const optimize = orig => function(...args) {
	if (typeof args[0].className === 'string' && (args[0].className.indexOf('activity') !== -1))
	  return setTimeout(() => orig.apply(this, args), 100);
  
	return orig.apply(this, args);
  };

let remove, removeChild, append, appendChild;

export function onLoad() {
	remove = Element.prototype.remove;
	removeChild = Element.prototype.removeChild;
	append = Element.prototype.append;
	appendChild = Element.prototype.appendChild;

	Element.prototype.remove = optimize(Element.prototype.remove);
	Element.prototype.removeChild = optimize(Element.prototype.removeChild);
	Element.prototype.append = optimize(Element.prototype.append);
	Element.prototype.appendChild = optimize(Element.prototype.appendChild);
}

export function onUnload() {
	Element.prototype.remove = remove;
	Element.prototype.removeChild = removeChild;
	Element.prototype.append = append;
	Element.prototype.appendChild = appendChild;
}
