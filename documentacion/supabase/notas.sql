-- Ejecutar una vez en el editor SQL del proyecto de Supabase del equipo.
-- Los datos personales quedan fuera del acceso anónimo.
create table if not exists public.metafora_notes (
  user_id uuid primary key references auth.users(id) on delete cascade,
  notes jsonb not null check (jsonb_typeof(notes) = 'object'),
  updated_at timestamptz not null default now()
);
alter table public.metafora_notes enable row level security;
revoke all on table public.metafora_notes from anon;
revoke all on table public.metafora_notes from authenticated;
grant select, insert, update, delete on table public.metafora_notes to authenticated;
drop policy if exists "Leer notas propias" on public.metafora_notes;
create policy "Leer notas propias" on public.metafora_notes for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Crear notas propias" on public.metafora_notes;
create policy "Crear notas propias" on public.metafora_notes for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "Actualizar notas propias" on public.metafora_notes;
create policy "Actualizar notas propias" on public.metafora_notes for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Borrar notas propias" on public.metafora_notes;
create policy "Borrar notas propias" on public.metafora_notes for delete to authenticated using ((select auth.uid()) = user_id);
