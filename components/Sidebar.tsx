import React from 'react';
import {
  UserIcon,
  ClientsIcon,
  TransportIcon,
  InventoryIcon,
  SupplyIcon,
  SalesIcon,
  LogoutIcon
} from './icons';

const navLinks = [
  { name: 'Clientes', icon: ClientsIcon, active: true },
  { name: 'Transporte', icon: TransportIcon, active: false },
  { name: 'Inventario', icon: InventoryIcon, active: false },
  { name: 'Abastecimiento', icon: SupplyIcon, active: false },
  { name: 'Ventas', icon: SalesIcon, active: false },
];

interface SidebarProps {
    onNavigate: (module: 'clientes') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  return (
    <aside className="w-72 bg-emerald-500 flex flex-col p-4 text-white shadow-lg shrink-0">
      <div className="flex items-center gap-4 p-4 mb-6 border-b border-white/20">
        <div className="bg-white/20 p-2 rounded-full">
          <UserIcon className="w-12 h-12 text-white" />
        </div>
        <div>
          <p className="font-bold text-xl">Pablo, Torres</p>
          <p className="text-sm opacity-80">Operador de CRM</p>
        </div>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-3">
          {navLinks.map(({ name, icon: Icon, active }) => (
            <li key={name}>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                if (name === 'Clientes') {
                  onNavigate('clientes');
                }
              }} className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-lg font-semibold ${
                active 
                  ? 'bg-sky-200 text-sky-800 shadow-inner' 
                  : 'hover:bg-emerald-600 opacity-75 hover:opacity-100'
              }`}>
                <Icon className="w-8 h-8" />
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button onClick={() => {}} className="flex items-center justify-center gap-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-all text-lg shadow-md">
        <LogoutIcon className="w-7 h-7" />
        <span>Cerrar Sesion</span>
      </button>
    </aside>
  );
};