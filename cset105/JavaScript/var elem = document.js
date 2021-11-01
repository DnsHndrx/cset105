var elem = document.getElementsByTagName('body')[0];
var target = elem.innerHTML;
elem.innerHTML = target.replace(/(<div)/igm, '<p').replace(/<\/div>/igm, '</p>');