import LoginForm from "@/components/LoginForm" //esse @ se chama alias para poder fazer esse abreviação de caminhos
import imageBg from "../../../public/login-bg-tck415z8.jpg"
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${imageBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <div className="absolute inset-0 bg-[#111418] opacity-90 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full px-4">
        <LoginForm />
      </div>
    </div>
  )
}