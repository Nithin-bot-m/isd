import { PageShell, PageSection } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title={<>Terms of <span className="text-gradient">Service</span></>}
      intro="Terms and conditions governing the use of ISD Info Solutions services and platforms."
    >
      <PageSection>
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-6">
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground">1. Agreement to Terms</h2>
                <p className="mt-2">
                  By accessing or using the ISD Info Solutions website, platforms, or services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-bold text-foreground">2. Professional Services & Deliverables</h2>
                <p className="mt-2">
                  All consulting, digital marketing, AI platform engineering, and Salesforce DevOps services are delivered pursuant to formal Master Services Agreements (MSAs) and Statements of Work (SOWs) executed between ISD Info Solutions and our clients.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-bold text-foreground">3. Intellectual Property</h2>
                <p className="mt-2">
                  All intellectual property, proprietary software, frameworks, and brand assets displayed on this website remain the exclusive property of ISD Info Solutions or their respective licensors.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-bold text-foreground">4. Governing Law</h2>
                <p className="mt-2">
                  These terms are governed by and construed in accordance with applicable laws without regard to conflict of law principles.
                </p>
              </section>
            </div>
          </Reveal>
        </div>
      </PageSection>
    </PageShell>
  );
}
