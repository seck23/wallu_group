import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contact-page">

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
                ou simplement envie d'échanger avec nous ?
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
                d'être <span>partagée.</span>
              </h2>

              <p className="contact-description">
                Que vous soyez entrepreneur, organisation, entreprise,
                institution ou simplement porteur d'une idée, nous sommes
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
                  <span>Localisation</span>
                  <p>Dakar, Sénégal</p>
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

              <form className="contact-form">

                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="name">
                      Nom
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                    />
                  </div>

                </div>

                <div className="contact-field">
                  <label htmlFor="subject">
                    Sujet
                  </label>

                  <select id="subject" name="subject">
                    <option value="">
                      Choisir un sujet
                    </option>

                    <option value="project">
                      Un projet
                    </option>

                    <option value="partnership">
                      Un partenariat
                    </option>

                    <option value="collaboration">
                      Une collaboration
                    </option>

                    <option value="other">
                      Autre
                    </option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="button button-primary contact-submit"
                >
                  Envoyer le message →
                </button>

              </form>

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