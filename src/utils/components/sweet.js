import Swal from 'sweetalert2';
export const  SweetAlertBasic = (icon, title, text) => {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,
    })
}

export const  SweetAlertFooter = (icon, title, text, footer) => {
    return Swal.fire({
        icon,
        title,
        text,
        footer,
    })
}

export const SweetAlerConfirm = () => {
    return Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará el usuario de forma permanente.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
    });
  };