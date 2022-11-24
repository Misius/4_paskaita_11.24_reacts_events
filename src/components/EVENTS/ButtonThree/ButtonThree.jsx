export default function ButtonOne() {
    

return <button onClick={(e)=> {
    const btn = e.target;
    btn.style.display = 'none';
}}>Click to dissapear</button>
}