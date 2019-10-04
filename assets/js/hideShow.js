function Show(id) {
        document.getElementById(id).style.display = "block";
}
function Hide(id) {
        document.getElementById(id).style.display = "none";
}
getvar = window.$_GET = location.search.substr(1).split("&").reduce((o,i)=>(u=decodeURIComponent,[k,v]=i.split("="),o[u(k)]=v&&u(v),o),{});

if (getvar["sort"]) {
	document.getElementById("next").href += "?sort="+getvar['sort']+"&direction="+getvar['direction']
	document.getElementById("prev").href += "?sort="+getvar['sort']+"&direction="+getvar['direction']
}

if (getvar["search"]) {
	document.getElementById("next").href += "?search="+getvar['search']
	document.getElementById("prev").href += "?search="+getvar['search']
}
