export default function Corr(num){
    let x = num + "";
    x = x.split(".");
    let y = x[1].substring(0, 9);
    let b = x[0] + "." + +y++;
    return b;
}