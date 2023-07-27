import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [login, setLogin] = useState("bsshul@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signIn(login, password);
      navigate("/");
      setLoading(false);
    } catch (e) {
      setError("Невірний логін або пароль");
      setLoading(false);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-xs mx-auto flex flex-col items-center">
      <h2 className="mt-6">ВХІД</h2>

      <form onSubmit={handleSubmit} className="w-full mt-6 flex flex-col">
        <div className="flex w-full">
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="p-4 rounded-r-md w-full outline-none"
            type="email"
            placeholder="Логін"
            required
          />
        </div>

        <div className="flex w-full mt-3">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-r-md w-full outline-none"
            type="password"
            placeholder="Пароль"
            required
          />
        </div>

        <button className="p-4">Увійти</button>
        <p className="mt-6 text-my-red text-center">{error}</p>
      </form>

      {loading && <div>Загрузка</div>}
    </div>
  );
}
