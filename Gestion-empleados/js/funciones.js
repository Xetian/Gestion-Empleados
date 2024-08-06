
//obj empleado
function Empleado(nombre, salario, departamento) {
    this.nombre = nombre;
    this.salario = salario;
    this.departamento = departamento;

    this.calcularAumento = function(porcentaje) {
        this.salario += this.salario * (porcentaje / 100);
    };

    this.cambiarDepartamento = function(nuevoDepartamento) {
        this.departamento = nuevoDepartamento;
    };

    this.obtenerDetalles = function() {
        return `Nombre: ${this.nombre}, Salario: ${this.salario}, Departamento: ${this.departamento}`;
    };
}

 // Función para limpiar los campos del formulario
 function limpiarFormulario() {
    $('#formIngreso')[0].reset();
    $('#nombre, #salario, #departamento').removeClass('is-invalid');
}

// Función para agregar empleado a la tabla
function agregarEmpleadoTabla(empleado) {
    $('#tabla tbody').append(`
        <tr>
            <td>${empleado.nombre}</td>
            <td>${empleado.salario}</td>
            <td>${empleado.departamento}</td>
        </tr>
    `);
}