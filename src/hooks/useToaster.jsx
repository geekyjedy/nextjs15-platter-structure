import toast from 'react-hot-toast';

const useToaster = () => {
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  return { notifySuccess, notifyError };
};

export default useToaster;