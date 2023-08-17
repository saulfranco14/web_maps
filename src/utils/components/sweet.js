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
