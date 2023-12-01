const getTable = async() => {
    //Esto detectará la URL en el que estamos parados, va a partir en dos en referencia al = y accedemos a la posición 0
    //Es decir si ?t=users, el split hará un [?t,users] y al acceder a la posición 1 dará como resultado users
    let url = window.location.search.split('=')[1];
    const data = await fetch(`./data/${url}.json`)
    const elements = await data.json();
    let tableDiv = document.querySelector("#tableDiv");

    //Como en nuestros json no tenemos un numero de columnas iguales, tuve que partirlo en varias partes
    //Esto iniciará haciendo un thead
    let dataTable = `
    <table id="dataTable" class="text-white bg-white">
        <h1>Tabla de usuarios</h1>
        <thead>
    `
    //El objetivo de esto es que se ciclen en los atributos de cada json porque repito en nuestros json no tenemos un número igual de columnas
    dataTable +=`
    <tr >
    ${Object.keys(elements[0]).map(key => `<th scope="col">${key.toUpperCase()}</th>`).join('')}
    </tr>
    `
    //Aquí pongo el thead de cierre y pongo las celdas de cada atributo
    dataTable += `
    </thead>
    <tbody>
    ${elements.map( row => `
        <tr>
            ${Object.keys(row).map( cell => `<td>${row[cell]}</td>`).join('')}
        </tr>
    `).join('')}
    </tbody>
    </table>
    `

    tableDiv.innerHTML = dataTable;

    let tableData = new DataTable('#dataTable',{
    });

}

getTable();