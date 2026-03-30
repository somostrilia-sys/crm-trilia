import Link from 'next/link'

export default function EventosEducacionaisPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Eventos Educacionais</h1>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Título</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Tipo</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Data</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Vagas</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Inscritos</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                    Nenhum evento encontrado
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
