import { useAuthContext } from "../../../Context/auth-context";

const ModalMyTip = () => {
  const context = useAuthContext();

  return(
    <div>
      <p className="mb-3">あなたの残高：{context?.user?.Tip}</p>
    </div>
  )
}

export default ModalMyTip;