import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termini e Condizioni | Velgance Agency',
  description: 'Termini e condizioni per l’uso dei servizi di Velgance Agency.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>Termini e Condizioni</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              Accedendo e utilizzando i servizi di Velgance Agency, accetti e ti impegni a rispettare i termini e le condizioni del presente accordo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-700 mb-4">
              Velgance è un’agenzia di moda che connette modelli e modelle con brand, fotografi e aziende. Facilitiamo collaborazioni e offriamo servizi di talent management per il settore moda, commerciale ed eventi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Subscription and Payment</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Eventuali costi e compensi sono concordati caso per caso</li>
              <li>I pagamenti avvengono tramite fornitori terzi sicuri</li>
              <li>Le condizioni economiche sono specificate nei contratti di collaborazione</li>
              <li>Rimborsi e cancellazioni seguono i termini concordati tra le parti</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fornire informazioni accurate nelle candidature o richieste</li>
              <li>Garantire la liceità dei contenuti inviati</li>
              <li>Rispettare gli impegni presi in caso di booking confermato</li>
              <li>Rispettare le leggi e normative applicabili</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimers</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>La disponibilità dei talenti dipende dalla programmazione e dalla conferma dei booking</li>
              <li>Non garantiamo la conclusione di specifiche collaborazioni</li>
              <li>Gli accordi finali sono definiti tra clienti e talenti</li>
              <li>Non siamo responsabili di controversie tra clienti e talenti</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Velgance non sarà responsabile per danni indiretti, incidentali, speciali, consequenziali o punitivi, incluso a titolo esemplificativo perdite di profitti, dati, uso o avviamento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4">
              Ciascuna parte può risolvere l’accordo in qualsiasi momento. In caso di cessazione, l’accesso ai servizi verrà interrotto secondo i termini concordati.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Gli utenti saranno informati delle modifiche rilevanti.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms and Conditions, please contact us at:
              <br />
              Email: info@velgance.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
