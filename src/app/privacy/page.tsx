import { PageShell, PageSection } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title={<>Privacy <span className="text-gradient">Policy</span></>}
      intro="How ISD Info Solutions collects, uses, and protects your information."
    >
      <PageSection>
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-8 md:p-10 space-y-6 w-full max-w-full overflow-hidden">
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground">1. Information We Collect</h2>
                <p className="mt-2">
                  When you visit our website, submit a project brief, or request a consultation, we may collect your name, business email, phone number, company name, and details regarding your project requirements.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-bold text-foreground">2. How We Use Information</h2>
                <p className="mt-2">
                  We use the information we collect solely to communicate with you about your inquiry, provide technical consultations, deliver requested services, and enhance your digital experience on our platform. We never sell your personal or corporate data to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-bold text-foreground">3. Data Security & Storage</h2>
                <p className="mt-2">
                  We implement robust technical and operational security controls to safeguard your data against unauthorized access, disclosure, alteration, or destruction.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-bold text-foreground">4. Contact Information</h2>
                <p className="mt-2">
                  If you have any questions about this Privacy Policy, please contact our compliance team at <a href="mailto:sudhanvaev@isdinfosolutions.com" className="text-[var(--accent)] font-semibold hover:underline">sudhanvaev@isdinfosolutions.com</a> or call <a href="tel:+916361120944" className="text-[var(--accent)] font-semibold hover:underline">+91 63611 20944</a>.
                </p>
              </section>
            </div>
          </Reveal>
        </div>
      </PageSection>
    </PageShell>
  );
}
