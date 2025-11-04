
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ClientTable } from './components/ClientTable';
import { ClientDetailView } from './components/ClientDetailView';
import { MaestrosTable } from './components/MaestrosTable';
import { MaestroDetailView } from './components/MaestroDetailView';
import { RegisterClientForm } from './components/RegisterClientForm';
import { RegisterMaestroForm } from './components/RegisterMaestroForm';
import { RegistrationSuccess } from './components/RegistrationSuccess';
import { SelectClientForMaestro } from './components/SelectClientForMaestro';
import { UpdateForm } from './components/UpdateForm';
import { ContactsModal } from './components/ContactsModal';
import { DireccionesModal } from './components/DireccionesModal';
import { CanjeoView } from './components/CanjeoView';
import { ReportsView } from './components/ReportsView';
import { ReportDetailView } from './components/ReportDetailView';
import { UserIcon, WrenchIcon, SearchIcon, ReportsIcon, AddIcon, ArrowLeftIcon } from './components/icons';
import type { Client, Maestro, Report } from './types';

type Module = 'clientes' | 'maestros';
type View = 'list' | 'register' | 'success' | 'selectClientForMaestro' | 'registerMaestro' | 'clientDetail' | 'maestroDetail' | 'update' | 'canje' | 'reports' | 'reportDetail';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<Module>('clientes');
  const [view, setView] = useState<View>('list');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedMaestro, setSelectedMaestro] = useState<Maestro | null>(null);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isDireccionesModalOpen, setIsDireccionesModalOpen] = useState(false);

  const handleModuleChange = (module: Module) => {
    setActiveModule(module);
    setView('list');
    setSelectedClient(null);
    setSelectedMaestro(null);
    setSelectedReport(null);
  };
  
  const handleSelectClientForMaestro = (client: Client) => {
    setSelectedClient(client);
    setView('registerMaestro');
  };

  const handleViewClientDetail = (client: Client) => {
    setSelectedClient(client);
    setView('clientDetail');
  };
  
  const handleViewMaestroDetail = (maestro: Maestro) => {
    setSelectedMaestro(maestro);
    setView('maestroDetail');
  };

  const handleViewReportDetail = (report: Report) => {
    setSelectedReport(report);
    setView('reportDetail');
  };

  const renderContent = () => {
    switch (view) {
      case 'register':
        if (activeModule === 'clientes') {
          return <RegisterClientForm onCancel={() => setView('list')} onSuccess={() => setView('success')} />;
        }
        return null;
      case 'registerMaestro':
        if (activeModule === 'maestros' && selectedClient) {
          return <RegisterMaestroForm client={selectedClient} onCancel={() => setView('list')} onSuccess={() => setView('success')} />;
        }
        return null;
      case 'success':
        const message = activeModule === 'clientes' ? 'CLIENTE REGISTRADO' : 'MAESTRO REGISTRADO';
        return <RegistrationSuccess message={message} onBackToList={() => setView('list')} />;
      case 'selectClientForMaestro':
        if (activeModule === 'maestros') {
          return <SelectClientForMaestro onCancel={() => setView('list')} onSelect={handleSelectClientForMaestro} />;
        }
        return null;
      case 'clientDetail':
        if (activeModule === 'clientes' && selectedClient) {
          return <ClientDetailView client={selectedClient} onUpdate={() => setView('update')} />;
        }
        return null;
      case 'maestroDetail':
        if (activeModule === 'maestros' && selectedMaestro) {
          return <MaestroDetailView maestro={selectedMaestro} onUpdate={() => setView('update')} onCanjear={() => setView('canje')} />;
        }
        return null;
      case 'canje':
        if (activeModule === 'maestros' && selectedMaestro) {
            return <CanjeoView maestro={selectedMaestro} onBack={() => setView('maestroDetail')} />;
        }
        return null;
      case 'update':
        if (activeModule === 'clientes' && selectedClient) {
          return <UpdateForm 
                    client={selectedClient} 
                    onCancel={() => setView('clientDetail')} 
                    onOpenContacts={() => setIsContactsModalOpen(true)}
                    onOpenDirecciones={() => setIsDireccionesModalOpen(true)}
                 />;
        }
        if (activeModule === 'maestros' && selectedMaestro) {
            return <UpdateForm 
                    maestro={selectedMaestro} 
                    onCancel={() => setView('maestroDetail')} 
                    onOpenContacts={() => setIsContactsModalOpen(true)}
                    onOpenDirecciones={() => setIsDireccionesModalOpen(true)}
                   />;
        }
        return null;
       case 'reports':
        return <ReportsView onReportSelect={handleViewReportDetail} />;
       case 'reportDetail':
        if (selectedReport) {
          return <ReportDetailView report={selectedReport} onBack={() => { setView('reports'); setSelectedReport(null); }} />;
        }
        return null;
      case 'list':
      default:
        return (
          <>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  className="border-2 border-gray-300 bg-white h-10 px-5 pr-12 rounded-lg text-sm focus:outline-none focus:border-blue-500 w-80"
                  placeholder="Buscar..."
                />
                <button type="button" onClick={() => {}} className="absolute right-0 top-0 mt-2 mr-2 p-1 bg-blue-600 rounded-md hover:bg-blue-700">
                  <SearchIcon className="text-white h-4 w-4" />
                </button>
              </div>
              <div className="ml-auto flex gap-4">
                <button 
                  onClick={() => setView('reports')} 
                  className="flex items-center gap-2 bg-slate-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-slate-800 transition-all">
                  Reportes
                  <ReportsIcon className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => {
                    if (activeModule === 'clientes') {
                      setView('register');
                    } else if (activeModule === 'maestros') {
                      setView('selectClientForMaestro');
                    }
                  }} 
                  className="flex items-center gap-2 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                  {activeModule === 'clientes' ? 'Registrar Cliente' : 'Registrar Maestro'}
                  <AddIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-grow -mt-2">
              {activeModule === 'clientes' ? <ClientTable onClientSelect={handleViewClientDetail} /> : <MaestrosTable onMaestroSelect={handleViewMaestroDetail} />}
            </div>
          </>
        );
    }
  };
  
  const getHeaderTitle = () => {
    if (view === 'reports' || view === 'reportDetail') {
        return 'Reportes';
    }
    if (view === 'clientDetail' && selectedClient) {
      return `Clientes > ${selectedClient.nombre}, ${selectedClient.apellidos}`;
    }
    if (view === 'maestroDetail' && selectedMaestro) {
        return `Maestros > ${selectedMaestro.nombre}, ${selectedMaestro.apellidos}`;
    }
     if (view === 'canje') {
        return 'Maestros';
    }
    return activeModule === 'clientes' ? 'Clientes' : 'Maestros';
  };
  
  const isDetailView = view === 'clientDetail' || view === 'maestroDetail';

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar onNavigate={() => handleModuleChange('clientes')} />
      <main className="flex-1 p-8 flex flex-col gap-6 overflow-y-auto">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {isDetailView ? (
                <button 
                    onClick={() => { setView('list'); setSelectedClient(null); setSelectedMaestro(null); }}
                    className="flex items-center gap-2 text-gray-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-all"
                >
                    <ArrowLeftIcon className="w-6 h-6 mr-2" />
                    {activeModule === 'clientes' ? 'Volver a la lista de Clientes' : 'Volver a la lista de Maestros'}
                </button>
            ) : (
                <div className="bg-sky-200 p-2 rounded-lg flex items-center gap-2">
                    <button onClick={() => handleModuleChange('clientes')} className="p-1 rounded-md hover:bg-sky-300 transition-colors">
                    <UserIcon className="w-8 h-8 text-blue-600" />
                    </button>
                    <button onClick={() => handleModuleChange('maestros')} className="p-1 rounded-md hover:bg-sky-300 transition-colors">
                    <WrenchIcon className="w-8 h-8 text-blue-600" />
                    </button>
                </div>
            )}
            
            <h1 className="text-4xl font-bold text-gray-800">
              {getHeaderTitle()}
            </h1>
          </div>
        </header>

        {renderContent()}
      </main>
      <ContactsModal isOpen={isContactsModalOpen} onClose={() => setIsContactsModalOpen(false)} />
      <DireccionesModal isOpen={isDireccionesModalOpen} onClose={() => setIsDireccionesModalOpen(false)} />
    </div>
  );
};

export default App;