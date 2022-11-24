export default function GreetingForm() {
    return <form onSubmit={(e) => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        return <h4>'Hello' ,{name}, {surname}</h4>
        // console.log('Hello' ,name, surname);

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
            <input type="submit" />
        </div>
    </form>
}