export default function Button() {

    return <button onClick={(e)=> {
        const btnThatWasClicked = e.target;
        btnThatWasClicked.style.backgroundColor = 'red';
        console.log(btnThatWasClicked);
    }}>Click me</button>


    // EXAMPLE HOW TO CALL FUNCTION WITHOUT ARGUMENTS IN EVENT
    // function showAlert(Name) {
    //     alert('clicked' + Name);
    // }
    // return <button onMouseEnter={() => {showAlert()}}>Click me</button>

    // EXAMPLE HOW TO CALL FUNCTION WITH ARGUMENTS IN EVENT
    // function showAlert(Name) {
    //     alert('clicked' + Name);
    // }
    // return <button onMouseEnter={() => {showAlert()}}>Click me</button>


    
}

