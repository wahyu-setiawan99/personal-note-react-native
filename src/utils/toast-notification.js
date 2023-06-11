import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastSuccess = (textSuccess) => {
  toast.success(textSuccess, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

export default toastSuccess;
