export default function ButtonOne() {
    return <button onClick={(e)=> {
        const btnThatWasClicked = e.target;
        btnThatWasClicked.style.backgroundColor = 'red';
        btnThatWasClicked.style.color = 'blue';
    }}>Change color</button>
}