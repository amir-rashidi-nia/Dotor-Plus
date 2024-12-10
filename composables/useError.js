import { useToast } from "vue-toastification";

export const useErorr = (error) => {
  const toast = useToast();

  if (error?.data?.message) {
    toast.error(error.data.message);
  } else if (error?.message) {
    toast.error(error.message);
  } else {
    toast.error("خطایی غیرمنتظره رخ داد.");
  }
};
