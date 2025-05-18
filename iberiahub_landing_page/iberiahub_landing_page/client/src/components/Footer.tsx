import { FaTwitter, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#151515] py-12 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="font-rajdhani font-bold text-2xl tracking-wider mb-4">
              <span className="text-[#FF2D55] [text-shadow:_0_0_10px_#FF2D55]">IBERIA</span>
              <span className="text-[#FFCC00] [text-shadow:_0_0_10px_#FFCC00]">HUB</span>
            </div>
            
            <p className="mb-6 opacity-80 max-w-md">
              Unindo as comunidades de esports de Portugal 🇵🇹 e Espanha 🇪🇸 numa só plataforma. Um ecossistema ibérico onde jogadores, equipas, streamers e casters crescem juntos.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:text-[#FF2D55] transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:text-[#FFCC00] transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:text-[#FF2D55] transition-colors duration-300">
                <FaTiktok />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:text-[#FFCC00] transition-colors duration-300">
                <FaDiscord />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-rajdhani font-semibold text-xl mb-4 text-[#FFCC00]">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FFCC00] transition-colors duration-300">Início</a></li>
              <li><a href="#about" className="hover:text-[#FFCC00] transition-colors duration-300">Missão</a></li>
              <li><a href="#hubs" className="hover:text-[#FFCC00] transition-colors duration-300">Hubs</a></li>
              <li><a href="#" className="hover:text-[#FFCC00] transition-colors duration-300">Parcerias</a></li>
              <li><a href="#contact" className="hover:text-[#FFCC00] transition-colors duration-300">Contato</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-rajdhani font-semibold text-xl mb-4 text-[#FF2D55]">Jogos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FF2D55] transition-colors duration-300">CS2</a></li>
              <li><a href="#" className="hover:text-[#FF2D55] transition-colors duration-300">Valorant</a></li>
              <li><a href="#" className="hover:text-[#FF2D55] transition-colors duration-300">League of Legends</a></li>
              <li><a href="#" className="hover:text-[#FF2D55] transition-colors duration-300">Rocket League</a></li>
              <li><a href="#" className="hover:text-[#FF2D55] transition-colors duration-300">Fortnite</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2D2D2D] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IberiaHub. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6 text-sm opacity-70">
            <a href="#" className="hover:text-[#FFCC00] transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="hover:text-[#FFCC00] transition-colors duration-300">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
