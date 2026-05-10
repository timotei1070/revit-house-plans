import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, MapPin, Ruler, Layers, Building2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BASE_PATH = process.env.NODE_ENV === "production" ? "/revit-house-plans" : "";
const asset = (p: string) => `${BASE_PATH}${p}`;

export const metadata: Metadata = {
  title: "Projet Franciuc — Maison unifamiliale Bosanci · Timotei Blindu",
  description:
    "Plans complets sur Revit & AutoCAD : implantation, niveaux, coupes, élévations, fondations. Maison unifamiliale à Bosanci (Roumanie).",
};

const plans = [
  { code: "A101", title: "Niveau 1 — Parter (RDC)", file: "plan-A101-1.png", desc: "Plan d'étage rez-de-chaussée : entrée, living, hall, garage, terrasse." },
  { code: "A102", title: "Niveau 2 — Étage 1", file: "plan-A102-1.png", desc: "Hall de nuit, suite parentale, dressing, baie/SDD, toiture plate." },
  { code: "A103", title: "Niveau 3", file: "plan-A103-1.png", desc: "Plan supérieur — élément d'extension." },
  { code: "A104", title: "Façade Est", file: "plan-A104-1.png", desc: "Élévation Est avec finition cărămidă de fațadă." },
  { code: "A105", title: "Façade Nord", file: "plan-A105-1.png", desc: "Élévation Nord, jgheaburi pour ploaie." },
  { code: "A106", title: "Façade Ouest", file: "plan-A106-1.png", desc: "Élévation Ouest." },
  { code: "A107", title: "Coupe A-A", file: "plan-A107-1.png", desc: "Coupe verticale : niveaux, isolation, dalle, fondation à -100." },
  { code: "A108", title: "Coupe B-B", file: "plan-A108-1.png", desc: "Coupe transversale détaillant l'extension de toiture." },
  { code: "A109", title: "Plan de fondations (Fundația)", file: "plan-A109-1.png", desc: "Implantation des semelles béton armé." },
];

const specs = [
  { icon: MapPin, label: "Localisation", value: "Bosanci, Roumanie" },
  { icon: Building2, label: "Type", value: "Maison unifamiliale" },
  { icon: Layers, label: "Niveaux", value: "RDC + Étage + extension" },
  { icon: Ruler, label: "Outils", value: "Revit · AutoCAD" },
];

const materials = [
  "Cărămidă de fațadă : 9 cm",
  "Cavité d'air : 2 cm",
  "Isolation PUR : 12 cm",
  "Maçonnerie portante (Zidărie) : 16 cm",
  "Finition gips intérieure",
  "Acoperiș plat — étanchéité roofing + barrière vapeur",
  "Dalle béton 30 cm sur fondation -100 cm",
];

export default function ProjetFranciucPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">T</div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Timotei Blindu</div>
              <div className="text-xs text-muted-foreground">Dessinateur · Aide construction</div>
            </div>
          </Link>
          <Button asChild variant="ghost" size="sm" className="gap-1.5">
            <Link href="/projets/">
              <ArrowLeft className="h-4 w-4" /> Tous les projets
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/60 bg-gradient-to-b from-accent/40 to-background">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <Badge variant="secondary" className="mb-4 gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Projet d&apos;études · collaboration
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Projet Franciuc
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">
              Maison unifamiliale — Bosanci, Roumanie
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Jeu de plans complet pour la construction d&apos;une maison unifamiliale : implantation,
              niveaux, coupes, élévations et plan de fondations. Produit dans le cadre d&apos;un
              projet d&apos;études en collaboration sur Revit et AutoCAD.
            </p>

            {/* Specs */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {specs.map((s) => (
                <Card key={s.label}>
                  <CardContent className="flex items-start gap-3 p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
                      <div className="mt-1 text-sm font-semibold">{s.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="border-b border-border/60 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_2fr]">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Spécifications</div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Composition du mur extérieur</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Détails extraits des annotations Revit. Toutes les dimensions structurales doivent
                être validées par le bureau de stabilité.
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <ul className="grid gap-2.5">
                  {materials.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm">
                      <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Galerie</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tous les plans</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              9 planches au format A1 — 1 : 100. Cliquez pour ouvrir en pleine taille.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {plans.map((p) => (
                <a
                  key={p.code}
                  href={asset(`/portfolio/${p.file}`)}
                  target="_blank"
                  rel="noopener"
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={asset(`/portfolio/${p.file}`)}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 border-t border-border/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{p.title}</span>
                      <span className="font-mono text-xs text-muted-foreground">{p.code}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer + CTA */}
        <section className="border-t border-border/60 bg-muted/40 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight">Un projet similaire ?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Plans 2D, métrés, mise au propre de croquis ou aide à l&apos;établissement de cahiers
              de charges — discutons de votre projet à Bruxelles.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/#contact">Demander un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projets/">
                  <ArrowLeft className="mr-1.5 h-4 w-4" />
                  Tous les projets
                </Link>
              </Button>
            </div>
            <Separator className="my-10" />
            <p className="text-xs text-muted-foreground">
              Note : ce projet a été produit dans le cadre d&apos;un travail d&apos;études en
              collaboration. Les annotations sur les plans portent les noms des intervenants
              originaux. Présenté ici comme illustration des outils et du niveau de détail
              maîtrisés.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-muted/40 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Timotei Blindu — Bruxelles
        </div>
      </footer>
    </>
  );
}
