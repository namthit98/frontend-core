import { toast } from "react-toastify"

export const handleRequestErrorResponse = error => {
  toast.error(error.response)
  console.error(error)
}
