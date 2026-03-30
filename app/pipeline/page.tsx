export default function PipelinePage() {
  const columns = [
    { id: 'novo', title: 'Novo Lead', color: 'bg-blue-100 border-blue-300' },
    { id: 'qualificado', title: 'Qualificado', color: 'bg-yellow-100 border-yellow-300' },
    { id: 'proposta', title: 'Proposta Enviada', color: 'bg-orange-100 border-orange-300' },
    { id: 'negociando', title: 'Negociando', color: 'bg-purple-100 border-purple-300' },
    { id: 'fechado', title: 'Fechado', color: 'bg-green-100 border-green-300' },
    { id: 'perdido', title: 'Perdido', color: 'bg-red-100 border-red-300' },
  ]
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-full mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Pipeline Kanban</h1>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((col) => (
            <div key={col.id} className={`flex-shrink-0 w-64 rounded-lg border-2 ${col.color} p-4`}>
              <h3 className="font-semibold text-gray-800 mb-3">{col.title}</h3>
              <div className="text-center text-gray-500 text-sm py-8">
                Nenhum lead
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
