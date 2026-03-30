CREATE TABLE IF NOT EXISTS trilia_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  telefone TEXT,
  email TEXT,
  curso_interesse TEXT,
  sdr_nome TEXT,
  sdr_id UUID,
  status TEXT DEFAULT 'novo',
  origem TEXT,
  valor_proposta DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS trilia_eventos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  tipo TEXT,
  data_inicio DATE,
  data_fim DATE,
  vagas INTEGER,
  valor DECIMAL(10,2),
  status TEXT DEFAULT 'ativo',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS trilia_inscricoes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES trilia_leads(id),
  evento_id UUID REFERENCES trilia_eventos(id),
  status TEXT DEFAULT 'confirmado',
  pago BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
