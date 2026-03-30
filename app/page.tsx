import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">CRM Trilia Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Total Leads</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Convertidos esta Semana</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Eventos Ativos</h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Meta do Mês</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">0%</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/leads" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Ver Leads
          </Link>
          <Link href="/pipeline" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Pipeline Kanban
          </Link>
          <Link href="/eventos-educacionais" className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
            Eventos Educacionais
          </Link>
        </div>
      </div>
    </div>
  )
}
