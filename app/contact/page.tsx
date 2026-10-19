import Link from "next/link";
import PageBanner from "../../components/layout/PageBanner";
import ContactForm from "../../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <PageBanner title="Contact" image="/images/bandeaux/contact.jpg" position="center 30%" />


      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-container">

          <div className="section-label">05 — CONTACT</div>

          <div className="contact-hero-grid">

            <div>
              <h1>
                Parlons de ce que
                <br />
                nous pouvons
                <br />
                <span>construire ensemble.</span>
              </h1>
            </div>

            <div className="contact-intro">
              <p>
                Vous avez une idée, un projet, un besoin technologique
                ou simplement envie d’échanger avec nous ?
              </p>

              <p>
                Écrivez-nous. Chaque collaboration commence par une
                conversation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-main-section">
        <div className="contact-container">

          <div className="contact-grid">

            {/* INFORMATIONS */}
            <div className="contact-information">

              <div className="section-label">
                PARLONS-NOUS
              </div>

              <h2>
                Une idée mérite
                <br />
                d’être <span>partagée.</span>
              </h2>

              <p className="contact-description">
                Que vous soyez entrepreneur, organisation, entreprise,
                institution ou simplement porteur d’une idée, nous sommes
                ouverts aux échanges et aux collaborations.
              </p>

              <div className="contact-details">

                <div className="contact-detail">
                  <span>Email</span>
                  <a href="mailto:contact@wallu.group">
                    contact@wallu.group
                  </a>
                </div>

                <div className="contact-detail">
                  <span>Téléphone</span>
                  <p>
                    <a href="tel:+221778503529">+221 77 850 35 29</a>
                    {" · "}
                    <a href="tel:+221781303605">+221 78 130 36 05</a>
                  </p>
                </div>

                <div className="contact-detail">
                  <span>Localisation</span>
                  <p>Forge ESP, École Supérieure Polytechnique — Dakar, Sénégal</p>
                </div>

                <div className="contact-detail">
                  <span>Disponibilité</span>
                  <p>
                    Projets · Partenariats · Collaborations
                  </p>
                </div>

              </div>

            </div>

            {/* FORM */}
            <div className="contact-form-wrapper">

              <ContactForm />

            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-bottom-section">
        <div className="contact-container">

          <div className="contact-bottom">

            <div className="section-label">
              WALLU GROUP
            </div>

            <h2>
              Les grandes idées
              <br />
              commencent souvent
              <br />
              par une <span>conversation.</span>
            </h2>

            <Link href="/projects" className="text-link">
              Découvrir nos projets <span>→</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}