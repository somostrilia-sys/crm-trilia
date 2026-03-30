'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LeadsPage() {
  const [status, setStatus] = useState('')
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <Link href="/leads/novo" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Novo Lead
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b flex gap-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            >
              <option value="">Todos os Status</option>
              <option value="novo">Novo</option>
              <option value="qualificado">Qualificado</option>
              <option value="proposta">Proposta</option>
              <option value="negociando">Negociando</option>
              <option value="fechado">Fechado</option>
              <option value="perdido">Perdido</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Nome</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Email</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Curso</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">SDR</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Origem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                    Nenhum lead encontrado
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
