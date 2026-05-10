import Image from "next/image";
import Link from "next/link";
import {
  Ruler,
  HardHat,
  PencilRuler,
  Hammer,
  Wrench,
  ClipboardList,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle2,
  ArrowRight,
  Languages,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const PHONE = "+32486591615";
const PHONE_DISPLAY = "0486 59 16 15";
const WHATSAPP = "32486591615";
const EMAIL = "tblindu8271@gmail.com";

const services = [
  {
    icon: PencilRuler,
    title: "Plans 2D & dessins techniques",
    desc: "Plans d'architecture (parter, étages, coupes, fondations) sur AutoCAD et Revit. Pour particuliers, petits projets, ou support d'entrepreneurs.",
  },
  {
    icon: Ruler,
    title: "Métrés & relevés",
    desc: "Prise de mesures sur site, métrés précis pour devis, schémas de cotation, mise au propre de croquis manuscrits.",
  },
  {
    icon: HardHat,
    title: "Aide chantier",
    desc: "Manutention, démolition légère, préparation de zones, nettoyage de chantier. Sérieux, ponctuel, équipé.",
  },
  {
    icon: Hammer,
    title: "Petits travaux & rénovation",
    desc: "Aide à la rénovation: peinture, pose de plinthes, petits travaux de maçonnerie, pose carrelage. Avec encadrement de mon père.",
  },
  {
    icon: ClipboardList,
    title: "Caiet de sarcini / cahier des charges",
    desc: "Mise en forme de descriptifs techniques, listes de matériaux, fiches de spécifications pour vos projets de construction.",
  },
  {
    icon: Wrench,
    title: "Coordination FR / NL / RO",
    desc: "Pont linguistique sur chantier multi-équipes. Communication client français-néerlandais-roumain-anglais.",
  },
];

const projects = [
  { code: "A101", title: "Plan rez-de-chaussée (Parter)", file: "plan-A101-1.png" },
  { code: "A102", title: "Plan étage 1", file: "plan-A102-1.png" },
  { code: "A107", title: "Coupe A-A", file: "plan-A107-1.png" },
  { code: "A109", title: "Plan de fondations", file: "plan-A109-1.png" },
  { code: "A103", title: "Plan niveau 3", file: "plan-A103-1.png" },
  { code: "A105", title: "Élévation", file: "plan-A105-1.png" },
];

const qualities = ["Sérieux", "Minutieux", "Motivé", "Travailleur", "Ponctuel", "Discret"];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Realisations />
        <About />
        <Disponibilites />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ---------- HEADER ---------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            T
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">Timotei Blindu</div>
            <div className="text-xs text-muted-foreground">Dessinateur · Aide construction</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition">Services</a>
          <a href="#realisations" className="text-muted-foreground hover:text-foreground transition">Réalisations</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition">À propos</a>
          <a href="#dispo" className="text-muted-foreground hover:text-foreground transition">Disponibilités</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</a>
        </nav>
        <Button asChild size="sm" className="hidden sm:inline-flex">
          <a href="#contact">
            Demander un devis
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--accent),_transparent_60%)] opacity-70" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,var(--background))]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <Badge variant="secondary" className="mb-5 gap-1.5 px-3 py-1 text-xs font-medium">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Disponible · Bruxelles & périphérie
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Plans, métrés et <span className="text-primary">coup&nbsp;de&nbsp;main</span> sur vos chantiers à Bruxelles.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Étudiant dessinateur en construction (Lycée la Retraite). Sérieux, ponctuel, conscient du
            travail à fournir. Tarifs étudiants, qualité pro.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener">
                <MessageCircle className="h-4 w-4" />
                WhatsApp direct
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={`tel:${PHONE}`}>
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Devis gratuit</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Réponse sous 24h</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> FR · NL · RO · EN</div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-border bg-card p-2 shadow-xl shadow-primary/5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
              <Image
                src="/portfolio/plan-A101-1.png"
                alt="Exemple de plan d'architecture rez-de-chaussée"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center justify-between px-3 pb-1 pt-3 text-xs">
              <span className="font-medium">Projet Franciuc · Maison unifamiliale</span>
              <span className="font-mono text-muted-foreground">A101 · Parter</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden md:block">
            <Card className="w-48 shadow-lg">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="text-xs leading-tight">
                  <div className="font-semibold">5e Technique</div>
                  <div className="text-muted-foreground">Dessinateur Construction</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  return (
    <section id="services" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Ce que je peux faire pour vous"
          desc="Du plan technique au coup de main sur chantier — un seul interlocuteur, fiable et flexible."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group relative overflow-hidden transition hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-4 text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- REALISATIONS ---------- */
function Realisations() {
  return (
    <section id="realisations" className="border-b border-border/60 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Réalisations"
          title="Plans techniques — Projet Franciuc"
          desc="Maison unifamiliale, plans complets sur Revit / AutoCAD: implantation, niveaux, coupes, fondations."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.code} className="group overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={`/portfolio/${p.file}`}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-border/60 px-4 py-3">
                <span className="text-sm font-medium">{p.title}</span>
                <span className="font-mono text-xs text-muted-foreground">{p.code}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          Note : ces plans ont été produits dans le cadre d&apos;un projet d&apos;études en
          collaboration. Ils illustrent le niveau de détail et les outils utilisés (Revit, AutoCAD).
        </p>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <SectionHeading
            eyebrow="À propos"
            title="Timotei Blindu"
            desc="17 ans, étudiant en 5ème technique Dessinateur en Construction au Lycée la Retraite, Bruxelles. Bilingue français-roumain, fonctionnel anglais, néerlandais scolaire."
            align="left"
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Stat label="Formation" value="Dessinateur Construction" />
            <Stat label="Expérience terrain" value="Avec mon père" />
            <Stat label="Outils" value="Revit · AutoCAD" />
            <Stat label="Zone" value="Bruxelles + périphérie" />
          </div>
        </div>
        <div className="space-y-5 rounded-xl border border-border bg-card p-6 sm:p-8">
          <p className="text-base leading-relaxed">
            Je suis <strong>déterminé, sérieux, ponctuel et conscient du travail qui m&apos;attend</strong>. Je suis
            capable de répondre aux attentes des clients et d&apos;accomplir les tâches qui me sont
            confiées.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Depuis quelques années, j&apos;aide mon père dans son travail. Cette expérience m&apos;a appris à
            être rigoureux, à respecter certaines règles, et à m&apos;adapter. Même si ce n&apos;est pas un
            emploi formel, cela m&apos;a donné un bon aperçu du monde du travail.
          </p>
          <Separator />
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Qualités</div>
            <div className="flex flex-wrap gap-2">
              {qualities.map((q) => (
                <Badge key={q} variant="secondary" className="rounded-full px-3 py-1">{q}</Badge>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <Languages className="h-3.5 w-3.5" /> Langues
            </div>
            <ul className="grid grid-cols-2 gap-y-1 text-sm">
              <li><strong>Français</strong> · maternelle</li>
              <li><strong>Roumain</strong> · maternelle</li>
              <li><strong>Anglais</strong> · fonctionnel</li>
              <li><strong>Néerlandais</strong> · scolaire</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DISPO ---------- */
function Disponibilites() {
  return (
    <section id="dispo" className="border-b border-border/60 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Disponibilités"
          title="Quand je peux travailler"
          desc="En tant qu'étudiant, mon planning est centré autour des cours. Voici quand je suis dispo."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <DispoCard icon={Clock} label="Vacances scolaires" value="Toute la journée" />
          <DispoCard icon={Clock} label="Jours fériés" value="Toute la journée" />
          <DispoCard icon={Clock} label="Mercredis" value="À partir de 14h30" />
          <DispoCard icon={Clock} label="Samedis" value="Toute la journée" />
        </div>
        <Card className="mt-6">
          <CardContent className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-medium">En semaine</div>
              <div className="text-sm text-muted-foreground">Horaires variables — selon planning scolaire. Contactez-moi.</div>
            </div>
            <Button asChild variant="outline" size="sm" className="gap-2 self-start sm:self-auto">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener">
                <MessageCircle className="h-4 w-4" />
                Vérifier ma dispo
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function DispoCard({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <Card>
      <CardContent className="flex items-start gap-3 p-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div className="leading-tight">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-1 text-sm font-semibold">{value}</div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const mailtoAction = `mailto:${EMAIL}?subject=${encodeURIComponent("Demande de devis — site web")}`;

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1fr] md:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre projet"
            desc="WhatsApp ou téléphone pour les urgences. Email ou formulaire pour un devis détaillé."
            align="left"
          />
          <div className="mt-8 space-y-3">
            <ContactRow icon={Phone} label="Téléphone" value={PHONE_DISPLAY} href={`tel:${PHONE}`} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Réponse rapide" href={`https://wa.me/${WHATSAPP}`} external />
            <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow icon={MapPin} label="Adresse" value="Rue Jean Noté 56, Anderlecht" />
          </div>
          <div className="mt-8 rounded-lg border border-border bg-muted/40 p-4 text-xs text-muted-foreground">
            Je suis étudiant — pas (encore) une entreprise enregistrée. Pour les missions formelles
            qui demandent une facture TVA, on en parle ensemble.
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Demande de devis</CardTitle>
            <p className="text-sm text-muted-foreground">Décrivez votre projet — je reviens vers vous sous 24h.</p>
          </CardHeader>
          <CardContent>
            <form action={mailtoAction} method="post" encType="text/plain" className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" name="Nom" required placeholder="Jean Dupont" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="Email" type="email" required placeholder="vous@email.be" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tel">Téléphone</Label>
                  <Input id="tel" name="Telephone" type="tel" placeholder="04xx xx xx xx" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Type de projet</Label>
                <Input id="subject" name="Projet" placeholder="Plans, rénovation, aide chantier…" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" name="Message" rows={5} required placeholder="Décrivez ce dont vous avez besoin, le délai, l'adresse du chantier…" />
              </div>
              <Button type="submit" size="lg" className="mt-2">
                Envoyer la demande
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground">
                Le formulaire ouvre votre client mail. Préférez-vous WhatsApp&nbsp;?{" "}
                <a className="font-medium text-primary underline-offset-4 hover:underline" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener">Cliquez ici</a>.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }: { icon: typeof Phone; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <Card className={href ? "transition hover:border-primary/50 hover:shadow-sm" : ""}>
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 leading-tight">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-0.5 text-sm font-medium">{value}</div>
        </div>
        {href && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
      </CardContent>
    </Card>
  );
  return href ? (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-primary-foreground text-xs font-bold">T</div>
          <span>© {new Date().getFullYear()} Timotei Blindu — Bruxelles</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={`tel:${PHONE}`} className="hover:text-foreground transition">{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground transition">Email</a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="hover:text-foreground transition">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- HELPERS ---------- */
function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
