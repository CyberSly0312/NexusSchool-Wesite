import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { establishmentSizes } from '../data/content'

const initialForm = {
  name: '',
  establishment: '',
  email: '',
  phone: '',
  country: '',
  size: '',
  message: '',
}

// Point d'intégration futur : remplacer handleSubmit par un appel à une API,
// un service comme Formspree/Resend, ou un backend Nexus School.
async function submitDemoRequest(payload) {
  return new Promise((resolve) => setTimeout(() => resolve({ ok: true, payload }), 900))
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    await submitDemoRequest(form)
    setStatus('success')
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-paper-dim">
      <div className="container-nexus grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Demandez votre démonstration."
            body="Un membre de l'équipe Nexus School vous recontacte pour organiser une présentation adaptée à votre établissement."
          />
        </div>

        <Reveal>
          <div className="rounded-xl2 bg-white border border-ink/8 p-6 md:p-10 shadow-card">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-10">
                <CheckCircle2 size={40} className="text-teal mb-4" strokeWidth={1.6} />
                <h3 className="font-display font-semibold text-xl text-ink mb-2">Demande envoyée</h3>
                <p className="text-ink-muted text-[14.5px] max-w-sm">
                  Merci — nous revenons vers vous très prochainement pour organiser
                  votre démonstration.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <Field label="Nom complet" required>
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    className="input-field"
                    placeholder="Awa Traoré"
                  />
                </Field>
                <Field label="Établissement" required>
                  <input
                    required
                    value={form.establishment}
                    onChange={update('establishment')}
                    className="input-field"
                    placeholder="Groupe Scolaire Excellence"
                  />
                </Field>
                <Field label="Email professionnel" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    className="input-field"
                    placeholder="vous@etablissement.com"
                  />
                </Field>
                <Field label="Téléphone">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    className="input-field"
                    placeholder="+225 07 00 00 00 00"
                  />
                </Field>
                <Field label="Pays" required>
                  <input
                    required
                    value={form.country}
                    onChange={update('country')}
                    className="input-field"
                    placeholder="Côte d'Ivoire"
                  />
                </Field>
                <Field label="Taille de l'établissement">
                  <select value={form.size} onChange={update('size')} className="input-field">
                    <option value="">Sélectionner…</option>
                    {establishmentSizes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message" full>
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Parlez-nous de votre établissement et de vos besoins…"
                  />
                </Field>

                <div className="sm:col-span-2 mt-2">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    {status === 'loading' ? 'Envoi en cours…' : 'Demander ma démonstration'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, children, required, full }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? 'sm:col-span-2' : ''}`}>
      <span className="text-[13px] font-medium text-ink-soft">
        {label} {required && <span className="text-clay">*</span>}
      </span>
      {children}
    </label>
  )
}
