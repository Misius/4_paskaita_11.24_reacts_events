export default function Form() {
    return <form onSubmit={(e) => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        const age = e.target.age.value;
        console.log(name, surname, age);

    }}
        onReset={() => {
            console.log('Form reseted');
        }}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
        </div>
        <div>
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" />
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
        </div>
        <div>
            <input type="submit" />
            <input type="reset" />
        </div>
    </form>
}