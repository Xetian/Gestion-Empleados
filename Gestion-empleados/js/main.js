$(document).ready(function() {
    let empleado;

   

    $('#formIngreso').on('submit', function(e) {
        e.preventDefault();

        // Validaciones
        let valid = true;

        // Nombre
        let nombre = $('#nombre').val().trim();
        if (nombre === '') {
            $('#nombre').addClass('is-invalid');
            valid = false;
        } else {
            $('#nombre').removeClass('is-invalid');
        }

        // Salario
        let salario = parseFloat($('#salario').val().trim());
        if (isNaN(salario) || salario <= 0) {
            $('#salario').addClass('is-invalid');
            valid = false;
        } else {
            $('#salario').removeClass('is-invalid');
        }

        // Departamento
        let departamento = $('#departamento').val().trim();
        if (departamento === '') {
            $('#departamento').addClass('is-invalid');
            valid = false;
        } else {
            $('#departamento').removeClass('is-invalid');
        }

        if (!valid) return;

        // Crear objeto Empleado
        empleado = new Empleado(nombre, salario, departamento);

        // Mostrar detalles del empleado
        $('#detalleNombre').text(empleado.nombre);
        $('#detalleSalario').text(empleado.salario);
        $('#detalleDepartamento').text(empleado.departamento);
        $('#vistaIngreso').removeClass('d-none');


        // Agregar empleado a la tabla
        agregarEmpleadoTabla(empleado);

        // Limpiar formulario
        limpiarFormulario();
    });

    // Aumentar salario
    $('#aumentoSal').on('click', function() {
        let porcentajeAumento = prompt('Ingresa el porcentaje de aumento:');
        porcentajeAumento = parseFloat(porcentajeAumento);

        if (!isNaN(porcentajeAumento) && porcentajeAumento > 0) {
            empleado.calcularAumento(porcentajeAumento);
            $('#detalleSalario').text(empleado.salario);
            // Actualizar la tabla con el nuevo salario
            $('#tabla tbody tr:last-child td:nth-child(2)').text(empleado.salario);
        } else {
            alert('Por favor ingresa un porcentaje válido.');
        }
    });

    // Cambiar departamento
    $('#nuevoDep').on('click', function() {
        let nuevoDepartamento = prompt('Ingresa el nuevo departamento:');
        if (nuevoDepartamento && nuevoDepartamento.trim() !== '') {
            empleado.cambiarDepartamento(nuevoDepartamento);
            $('#detalleDepartamento').text(empleado.departamento);
            // Actualizar la tabla con el nuevo departamento
            $('#tabla tbody tr:last-child td:nth-child(3)').text(empleado.departamento);
        }
    });
});
