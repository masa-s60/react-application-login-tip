import { useAuthContext } from "../../../Context/auth-context";

const Tip = () => {
  const context = useAuthContext();

  return(
    <div>
      <p style={{fontWeight: 'bold', fontSize: '1.5vw'}}>残高：{context?.user?.Tip}</p>
    </div>
  )
}

export default Tip;