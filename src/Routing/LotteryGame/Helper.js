export default function Helper(n) {
    let genlist = new Array(n);
    for (let i = 0; i < n; i++) {
        genlist[i] = Math.floor(Math.random() * 10);
    }
    return genlist;
}
